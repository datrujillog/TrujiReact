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
}

module.exports = UserSevices;