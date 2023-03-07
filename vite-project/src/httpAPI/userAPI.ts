import jwtDecode from "jwt-decode"
import { userDto } from "../types/Dto"
import { $authHost, $host } from "./http"

export const authLogin = async (dto: userDto) => {
    const response = await $host.post('auth/login', dto)
    localStorage.setItem('token', response.data.token)
    return jwtDecode(response.data.token)
}

export const authRegistration = async (dto: userDto) => {
    const response = await $host.post('auth/registration', dto)
    localStorage.setItem('token', response.data.token)
    return jwtDecode(response.data.token)
}

export const changePassword = async (userDto: userDto, newPassword: string) => {    
    const response = $authHost.post('auth/changepassword', {userDto, newPassword})
    console.log(response)
    return response
}