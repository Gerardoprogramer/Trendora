import { Api } from "@/api/Api"
import type { AuthResponse } from "../interfaces/auth.response"

export const Register = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {

    try {

        const { data } = await Api.post<AuthResponse>('/auth/register',
            {
                email,
                password,
                fullName
            })
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
