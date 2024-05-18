const { PrismaClient } = require('@prisma/client');

class UserSevices {
    constructor() { 
        const prisma = new PrismaClient().user
        this.prisma = prisma;
    }

    async geallUsers() {

        return await this.prisma.findMany();
        
    }

    async postUser(data) {
        return await this.prisma.createMany({
            data:data
        });
    }

    async deleteUser(id) {
        return await this.prisma.delete({
            where: { id: id }
        });
    }
}

module.exports = UserSevices;