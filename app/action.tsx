"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/@zod\.com$/, "이메일은 @zod.com으로 끝나야 합니다."),

  name: z.string().min(5, "Name은 5글자 이상이어야 합니다."),
  password: z
    .string()
    .min(10, "비번은 10글자 이상이어야 합니다.")
    .regex(/\d/, "비번에는 적어도 하나의 숫자가 포함되어야 합니다."),
});
export const handleForm = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
};
