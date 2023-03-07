import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Bans } from "src/bans/bans.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Role } from "src/roles/roles.model";

interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Admin', description: "Username"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @ApiProperty({example: 'user@mail.com', description: "Email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '0', description: "Balance"})
    @Column({type: DataType.INTEGER, defaultValue: 0})
    balance: number;

    @ApiProperty({example: '1t7bftadf7bad', description: "Hashed Password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Bans)
    bans: Bans[]
}