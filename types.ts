import { Prisma } from '@/lib/generated/prisma'

export type StartupWithAuthor = Prisma.StartupGetPayload<{
    include: { author: true }
}>