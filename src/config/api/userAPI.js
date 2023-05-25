import api from "./globalConfig";

const userAPI = {
    loginAPI: (data) => {
        const url = `/auth/login`;

        const body = {
            ...data,
        };
        return api.post(url, body);
    }
}

export default userAPI