import api, {endpoints} from './index';

export async function registerUser(data) {
    const {post} = await api();
    return post(endpoints.register, {
        name: data.name,
        password: data.password,
    })
}

export async function login(data) {
    const {post} = await api();
    return post(endpoints.login, {
        name: data.name,
        password: data.password,
    })
}
