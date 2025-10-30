import { Api } from "@/api/Api"
import type { AuthResponse } from "../interfaces/auth.response"

export const Login = async (email: string, password: string): Promise<AuthResponse> => {

    try {

        const { data } = await Api.post<AuthResponse>('/auth/login',
            {
                email,
                password
            })
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}
