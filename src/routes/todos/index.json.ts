import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  return {
    status: 200,
    body: []
  }
}

export const post: RequestHandler<unknown, FormData> = async (request) => {
  const text = request.body.get('text')

  return {
    status: 201,
    body: {
      id: 1,
      text,
    }
  }
}
