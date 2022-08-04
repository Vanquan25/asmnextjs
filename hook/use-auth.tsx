import useSWR, { useSWRConfig } from "swr";
import { signin, signup } from "../api/auth";

export const useAuth = (options?: any) => {
    const { data, error, mutate } = useSWR("/users", { ...options });

    // register

    const register = async (user: any) => {
        const account = await signup(user);
        mutate([...data, account]);
    };

    const profile = (id: any) => {
        mutate(`/users/${id}`);
    };
    // login
    const login = async (user: any) => {
        const account = await signin(user);
        mutate([...data, account]);
    };


    const profiles = (url: any) => {
        mutate(url)
    }

    // logout

    return {
        data,
        error,
        signup,
        signin,
        profiles,
        profile,
    };
};