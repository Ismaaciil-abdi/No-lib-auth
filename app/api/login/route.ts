import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Hardcoded credentials
  if (username === "admin" && password === "admin123") {
    const response = NextResponse.json({ message: "Login success" });
    response.cookies.set("token", "valid-token", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });
    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
