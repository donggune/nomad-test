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
          <Input type="email" placeholder="Enter your email" name="email" errors={state?.errors.email ?? []} />
          <Input type="text" placeholder="Enter your name" name="name" errors={state?.errors.name ?? []} />
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            errors={state?.errors.password ?? []}
          />
          <Button text="Login" />
        </form>
      </div>
    </main>
  );
}
