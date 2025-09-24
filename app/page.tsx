import Link from "next/link";
import LoginPage from "./login/page";
export default function Home() {
  return (
    // This is most basic login page without any third party libraries
    <div>
      <h1>Go to login</h1>
      <LoginPage />
      <Link href="/login">Login Now</Link>
    </div>
  );
}
