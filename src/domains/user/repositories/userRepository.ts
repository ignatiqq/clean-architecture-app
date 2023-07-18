import { User } from "../models/user";

export interface UserRepository {
    getUserData(id: number): User;
}