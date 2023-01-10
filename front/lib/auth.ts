import { JsonWebKeyInput } from 'crypto';
import Cookies from 'js-cookie' 

type token = {
    user: {
        username: string
        id: number
        email: string
        blocked: boolean
        confirmed: boolean

    }
    jwt: string

}
export const setToken = (token: token)   =>{
    if(typeof window === "undefined"){
        return;
    }
    Cookies.set('username', token?.user?.username)
    Cookies.set('id', token?.user?.id.toString())
    Cookies.set('jwt', token?.jwt)
    if(Cookies.get('username')){
        window.location.reload()
    }
} 

export const unsetToken = () => {
    if(typeof window === "undefined"){
        return;
    }
    Cookies.remove('username')
    Cookies.remove('id')
    Cookies.remove('jwt')
    if(Cookies.get('username')){
        window.location.reload()
    }
} 