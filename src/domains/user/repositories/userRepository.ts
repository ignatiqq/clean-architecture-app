import { User } from "../models/user";

export interface IUserRepository {
    getUserData(id: UserId): Promise<User | {error: string}>;
}