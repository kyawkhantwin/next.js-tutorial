import { deleteUser } from "@/lib/action";
import { getUser, getUsers } from "@/lib/controller";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1>Usser</h1>
      <div className="space-y-5">
        {users.map((user) => {
          return (
            <div className="flex justify-between items-center" key={user.id}>
              <div className="flex space-x-5 items-center">
                <Image
                  width={50}
                  height={50}
                  src={user?.img || "/noAvatar.png"}
                ></Image>
                <div>
                  <p>UserName : {user.username}</p>
                  <p>Email : {user.email}</p>
                </div>
              </div>
              <form action={deleteUser}>
                <input type="hidden" value={user.id} name="id" />
                <button className="bg-red-500 px-2 py-3 rounded-md">
                  Delete
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminUsers;
