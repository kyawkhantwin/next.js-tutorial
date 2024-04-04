export const authConfig = {
 pages: {
    signIn: "/login",
  },
  
      providers: [],
  callbacks: {
    async jwt({token,user}){
        if(user){
            token.id = user.id
            token.isAdmin = user.isAdmin
        }
        return token;
    },
    async session({session,token}){
      if(token){
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }
        return session
    },
    authorized({ auth, request }) {
        const user =  auth?.user
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
        const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register");

        //only admin can reach the admin dashboard 
        if(!user?.isAdmin && isOnAdminPanel){
            return false
        }

        //only auth users can reach the blog page

        if(!user && isOnBlogPage){
            return false
        }

        //only unauth users can reach the Login page
        if(user && isOnLoginPage ) {
            return Response.redirect(new URL('/', request.nextUrl))
        }

        if(user && isOnRegisterPage ) {
            return Response.redirect(new URL('/', request.nextUrl))
        }

      
        return true
        
    },
  },
};
