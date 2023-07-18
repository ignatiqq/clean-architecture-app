import { User } from "../models/user";
import { UserRepository } from "../repositories/userRepository";

export class UserService {
    constructor(readonly repository: UserRepository){}

    getUserData(id: number) {
        return this.repository.getUserData(id);
    }

    hasAllergy(user: User, ingridient: string) {
        return user.allergies.includes(ingridient);
    }

    hasPreference(user: User, ingridient: string) {
        return user.preferences.includes(ingridient);
    }
}