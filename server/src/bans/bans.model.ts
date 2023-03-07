import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface BansCreationAttrs {
    banTime: string;
    status: string;
    reason: string;
    bannedBy: string;
    userId: number;
}

@Table({tableName: 'bans'})
export class Bans extends Model<Bans, BansCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '10:00', description: "Ban length"})
    @Column({type: DataType.TIME})
    banTime: string;

    @ApiProperty({example: '03.03.2023', description: "Ban expires date"})
    @Column({type: DataType.DATE})
    expiresIn: string;

    @ApiProperty({example: 'BANNED', description: "Ban Status"})
    @Column({type: DataType.STRING})
    status: string;

    @ApiProperty({example: 'Cheating', description: "Ban Reason"})
    @Column({type: DataType.STRING, allowNull: false})
    reason: string;

    @ApiProperty({example: 'User123', description: "Banned by user"})
    @Column({type: DataType.STRING, allowNull: false})
    bannedBy: string;

    @ApiProperty({example: '1', description: "User Id"})
    @ForeignKey(() => User)
    userId: number;
}