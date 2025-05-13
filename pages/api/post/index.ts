import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const session = await getSession({ req });

  if (!session || !session.user?.email) {
    return res.status(401).json({ message: "Unauthorized: No active session or email." });
  }

  const { title, content } = req.body;

  try {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content || "", 
        author: {
          connect: { email: session.user.email },
        },
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ message: "Internal server error while creating post." });
  }
}
