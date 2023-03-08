/**
 * sign up input data verify
 */
import z from "zod";

type TSignupData = {
  email: string;
  name: string;
  password: string;
  rePwd: string;
};

export const signupSchema = z
  .object({
    email: z.string().email({ message: "invalid email format" }).trim(),
    name: z
      .string()
      .min(5, { message: "name at least 5 characters" })
      .max(25, { message: "name at most 25 characters" })
      .regex(/^[a-zA-Z0-9]+$/, { message: "name made up of alphanumeric" })
      .trim(),
    password: z
      .string()
      .min(6, {
        message: "at least 6 characters",
      })
      .regex(/^(?=.*[A-Z])[a-zA-Z0-9]+$/, {
        message: "at least one uppercase character",
      }),
    rePwd: z.string(),
  })
  .refine((data) => data.password === data.rePwd, {
    message: "password not match",
    path: ['rePwd']
  });

export const verifySignup = async (data: TSignupData) =>
  signupSchema.safeParseAsync(data);
