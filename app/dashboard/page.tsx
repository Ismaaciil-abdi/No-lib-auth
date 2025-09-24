import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token || token.value !== "valid-token") {
    redirect("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <form action="/api/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
