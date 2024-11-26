import { User } from '../../core/entities';
import { UserResponse } from '../interfaces';

export class UserMapper {
    static fromUserDBResultToEntity( user: UserResponse ): User {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    }
}
