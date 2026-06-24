"use client";

import { authService } from "@/features/auth/services/auth.service";
import type { LoginData } from "@/features/auth/types/auth.types";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

const initialFormData: LoginData = {
  email: "",
  password: "",
};

function getErrorMessage(error: unknown): string {
  if (!(error instanceof FirebaseError)) {
    return "Unable to log in. Please try again.";
  }

  switch (error.code) {
    case "auth/invalid-credential":
      return "The email or password is incorrect.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";
    case "auth/network-request-failed":
      return "A network error occurred. Check your connection and try again.";
    default:
      return "Unable to log in. Please try again.";
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof LoginData, value: string) {
    setFormData((currentData) => ({ ...currentData, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      await authService.login(formData);
      router.replace("/dashboard");
    } catch (error: unknown) {
      console.error("LOGIN ERROR:", error);
      setErrorMessage(getErrorMessage(error));
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-semibold">Login</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1 block">Email</span>
          <input
            autoComplete="email"
            className="w-full rounded border px-3 py-2"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={formData.email}
          />
        </label>

        <label className="block">
          <span className="mb-1 block">Password</span>
          <input
            autoComplete="current-password"
            className="w-full rounded border px-3 py-2"
            name="password"
            onChange={(event) => updateField("password", event.target.value)}
            required
            type="password"
            value={formData.password}
          />
        </label>

        <button
          className="rounded bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {errorMessage ? (
        <p className="mt-4 text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </main>
  );
}
