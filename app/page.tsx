"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form action={action} className="flex flex-col gap-4">
          <Input type="email" placeholder="Enter your email" name="email" />
          <Input type="text" placeholder="Enter your name" name="name" />
          <Input type="password" placeholder="Enter your password" name="password" errors={state?.errors ?? []} />
          <Button text="Login" />
        </form>
        {state?.success ? <div className="bg-green-500 rounded-lg p-2 mt-2 font-blod text-black">Success</div> : null}
      </div>
    </main>
  );
}
