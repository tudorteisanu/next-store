import { PrismaClient } from "@prisma/client"

let prisma

class Database {
  prisma: PrismaClient | null= null;

  constructor() {
    if (!this.prisma) {
      this.prisma = new PrismaClient()
    }
  }

  getInstance() {
    return this.prisma
  }
}

export default new Database().getInstance()
