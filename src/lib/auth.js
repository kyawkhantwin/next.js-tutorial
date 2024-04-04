import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./connect";
import { User } from "./models";
import bcrypt from "bcrypt";


const login = async (credentials) => {
  const { username, password } = credentials;

  try {
    connectToDb();
    const user = await User.findOne({ username });

    if (!user) {
       throw new Error("User not register")
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
       throw new Error("Wrong password")
    }
    return user;
  } catch (error) {
    throw new Error(error)
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error)
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user,account,profile)
      if (account.provider === "github") {
        connectToDb();
        try {
          const dbUser = await User.findOne({ email: profile.email });

          if (!dbUser) {
            const newUser = new User({
              email: profile.email,
              username: profile.login,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    }
  },
});
