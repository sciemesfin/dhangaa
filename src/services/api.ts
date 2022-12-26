import Request from "./request";

const API_ROOT = "http://206.189.125.176/api"

const api = {
    login(user: any, path: any) {
        return Request.post(`${API_ROOT}${path}`, user);
    },
    logout(path: any) {
        return Request.post(`${API_ROOT}${path}/logout-user`);
    },
    create(data: any, path: any) {
        return Request.post(`${API_ROOT}${path}`, data);
    },
    update(data: { id: any; }, path: any) {
        return Request.patch(`${API_ROOT}${path}/${data.id}`, data);
    },
    get(id: any, path: any, filter: any) {
        const q = filter ? `?filter=${JSON.stringify(filter)}` : "";
        return Request.get(`${API_ROOT}${path}/${id}${q}`);
    },
    all(path: any, filter: any, data: any) {
        const q = filter ? `?${filter}` : "";
        const d = { data: data } ? data : {}
        return Request.post(`${API_ROOT}${path}${q}`, d);
    },


    remove(id: any, path: any) {
        return Request.delete(`${API_ROOT}${path}/${id}`);
    },
};
export default api;