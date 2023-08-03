import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Bruno Felix',
    email: 'Bruno@gmail.com',
    password_hash: '123',
  },
})
