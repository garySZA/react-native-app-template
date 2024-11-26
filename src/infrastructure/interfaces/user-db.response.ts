export interface GetAllUsersResponse {
    users: UserResponse[];
}

export interface UserResponse {
    id: number;
    name: string;
    email: string;
    age: number;
    createdAt: string;
    updatedAt: string;
}
