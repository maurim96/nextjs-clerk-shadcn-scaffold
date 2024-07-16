"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PostInfoSchema from "@/types/post";
import postService from "@/services/post.service";

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();

  const form = useForm<PostInfoSchema>({
    resolver: zodResolver(PostInfoSchema),
    mode: "onChange",
    delayError: 1000,
    defaultValues: {
      title: "",
      content: "",
    },
  });

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const onSubmit = async (data: PostInfoSchema) => {
    try {
      console.log(data);
      const result = await postService.create(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">This is a client-side page</h1>
        <p className="mt-4 mb-8">You are logged in as {user?.firstName}</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="This is the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
