import apiRequest from ".";

export const RegisterUser = async (payload) => {
    return await apiRequest({
        method: "POST",
        endPoint: "http://localhost:3001/register",
        payload,
    });
};

export const LoginUser = async (payload) => {
    return await apiRequest({
        method: "POST",
        endPoint: "http://localhost:3001/login",
        payload,
    });
};


export const getCurrentUser = async () => {
    return await apiRequest({
        method: "GET",
        endPoint: "http://localhost:3001/current-user",
        
    });
}