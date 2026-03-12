import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4" style={{ backgroundColor: "#f9f7f4" }}>
      <SignUp />
    </div>
  );
}
