import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className={"flex justify-center items-center min-h-[100svh]"}>
      <SignIn />
    </div>
  );
}
