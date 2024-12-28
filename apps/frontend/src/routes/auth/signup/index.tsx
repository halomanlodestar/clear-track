/** @format */

import { AnimatedLoadingButton } from "@/components/AnimatedLoadingButton";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { API_URL } from "@/lib/constants";
import { signUpFormSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/hooks/use-auth";
import { AuthError, FetchError } from "@/lib/errors";

export const Route = createFileRoute("/auth/signup/")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { signUp } = useAuth();

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    setLoading(true);
    try {
      const { email, password, name } = values;
      await signUp(name, email, password);
    } catch (error) {
      if (error instanceof AuthError || error instanceof FetchError) {
        toast({
          variant: "destructive",
          title: error.message,
          description: error.description,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="items-start justify-center flex h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full lg:w-1/3 md:w-1/2"
        >
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mail@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormMessage />
          <FormDescription>
            Already have an account?{" "}
            <Link
              className="text-blue-500 font-medium hover:underline"
              to="/auth/signin"
            >
              Sign In
            </Link>
          </FormDescription>
          <AnimatedLoadingButton className="w-full" loading={loading}>
            Sign Up
          </AnimatedLoadingButton>
        </form>
      </Form>
    </div>
  );
}
