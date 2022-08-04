import instance from "./instance";

export const signup = (user: any) => {
    return instance.post("/users",user);
}
export const signin = (user: any) => {
    return instance.get("/users",user);
}