import { z } from "zod";

const PostInfoSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  content: z.string().min(2, "Content must be at least 10 characters."),
});

type PostInfoSchema = z.infer<typeof PostInfoSchema>;

export default PostInfoSchema;
