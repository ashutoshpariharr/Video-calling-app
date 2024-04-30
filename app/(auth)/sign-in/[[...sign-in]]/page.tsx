import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex w-full h-screen justify-center items-center">
      <SignIn path="/sign-in" />;
    </main>
  )
}