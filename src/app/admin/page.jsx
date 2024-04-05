import AdminPostsForm from "@/components/adminPostsForm/AdminPostsForm";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminUsersForm from "@/components/adminUsersForm/adminUsersForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import { Suspense } from "react";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className="">
      <div className="flex justify-between space-x-10">
        <div className="w-1/2">
          <Suspense fallback={<div>Loading</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="w-1/2">
          <AdminPostsForm userId={session.user.id} />
        </div>
      </div>
      <div className="flex justify-between space-x-10">
        <div className="w-1/2">
          <Suspense fallback={<div>Loading</div>}>
            <AdminUsers />
          </Suspense>
        </div>

        <div className="w-1/2">
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
