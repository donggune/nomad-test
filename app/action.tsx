"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const password = formData.get("password");
  if (password !== "12345") {
    return {
      errors: ["Wrong password"],
    };
  } else {
    return {
      success: true,
    };
  }
};
