import axios from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie('auth_session')
export const api = axios.create({
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})
