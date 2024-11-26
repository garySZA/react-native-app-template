import { HttpAdapter } from '../../../config/adapters/http';
import { GetAllUsersResponse } from '../../../infrastructure/interfaces';
import { UserMapper } from '../../../infrastructure/mappers';
import type { User } from '../../entities';

export const allUsersUseCase = async ( fetcher: HttpAdapter ): Promise<User[]> => {
    try {

        const allUsers = await fetcher.get<GetAllUsersResponse>('users');

        return allUsers.users.map( UserMapper.fromUserDBResultToEntity );

    } catch (error) {
        throw new Error('Error fetching users');
    }
};
