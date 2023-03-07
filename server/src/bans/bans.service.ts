import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bans } from './bans.model';

@Injectable()
export class BansService {
    constructor(@InjectModel(Bans) private banRepository: typeof Bans) {}

    async ban(dto: {userId: number, banTime: string, reason: string, bannedBy: string}) {
        const ban = await this.banRepository.create({userId: dto.userId, banTime: dto.banTime, reason: dto.reason, bannedBy: dto.bannedBy, status: "BANNED"})
        return ban
    }

    async getAllBans(userId: number) {
        const bans = await this.banRepository.findAndCountAll({where: {userId}})
        return bans
    }
}
