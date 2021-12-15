import type { RequestHandler } from '@sveltejs/kit';
import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient()

export const get: RequestHandler = async () => {
  return {
    status: 200,
    body: await prisma.todo.findMany()
  }
}

export const post: RequestHandler<unknown, FormData> = async (request) => {
  const text = request.body.get('text')

  const todo = await prisma.todo.create({
    data: {
      text,
      done: false,
    }
  })

  return {
    status: 201,
    body: todo
  }
}
