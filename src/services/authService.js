import api from "../http/api";

export class AuthService {
    static async login(email, password) {
        try {
            const response = await api.post('/login', { email, password });
            localStorage.setItem('token', response.data.accessToken);
            return response.data.userInfo;
        } catch (e) {
            console.log(e);
        }
    }

    static async logout() {
        try {
            await api.delete('/logout')
            localStorage.removeItem('token');
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    static async checkAuth() {
        try {
            const response = await api.get(`/refresh`)
            localStorage.setItem('token', response.data.accessToken);
            return response.data.userInfo;
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}
