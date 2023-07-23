import { IUserRepository } from "../repositories/userRepository";

export class UserService {
    constructor(readonly repository: IUserRepository){}

    async getUserData(userId: UserId) {
        try {
            const response = this.repository.getUserData(userId);

            if('error' in response) {
                return {error: 'Такого пользователя не существует'};
            }

            return response;
        } catch (error) {
            return {error: 'Такого пользователя не существует'};
        }
    }
}