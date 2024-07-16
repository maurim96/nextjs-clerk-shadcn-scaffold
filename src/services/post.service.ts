import { POST_CONFIG } from "@/lib/utils";
import PostInfoSchema from "@/types/post";

const create = async (data: PostInfoSchema) => {
  const response = await fetch("/api/post", {
    ...POST_CONFIG,
    body: JSON.stringify(data),
  });

  return response.json();
};

const postService = {
  create,
};

export default postService;
