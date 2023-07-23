import { dataController } from "../../mocks";
import { IUserRepository } from "./userRepository";

export class UserRepository implements IUserRepository {

    constructor(readonly userRepository: IUserRepository) {}

    async getUserData(userId: UserId) {
        return dataController((db) => {
            const user = db.users.find((user) => user.id === userId);

            if(!user) {
                return {error: 'Такого пользователя не существует'};
            }

            return user;
        })
    }
}