import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

export async function POST(request: NextApiRequest) {
  const { getToken } = auth();
  const token = await getToken({ template: "regular-jwt" });

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const requestOptions: CustomRequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
    body: request.body,
    duplex: "half",
  };

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_NEST_API_URL}/post/create`,
    requestOptions
  );

  return result;
}
