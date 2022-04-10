import {API} from '../../backend'
import { isAuthenticated } from '../../auth/helper/index'

export const placeOrder = (order) => {
    let jwt
    const user_id = isAuthenticated() && isAuthenticated().user.id

    if(typeof window.localStorage !== 'undefined'){
        jwt = JSON.parse(localStorage.getItem('jwt'))
    }

    const formData = new FormData()

    for(const key in order){
        formData.append(key, order[key])
    }

    return fetch(`${API}order/add/${user_id}/${jwt.token}`, {
        method: 'POST',
        body: formData
    })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}

export const getOrder = () => {
    let jwt
    const user_id = isAuthenticated() && isAuthenticated().user.id

    if(typeof window.localStorage !== 'undefined'){
        jwt = JSON.parse(localStorage.getItem('jwt'))
    }

    return fetch(`${API}order/get/${user_id}/${jwt.token}`, {
        method: 'GET',
    })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}

export const deleteOrder = (order_id) => {
    let jwt
    const user_id = isAuthenticated() && isAuthenticated().user.id

    if(typeof window.localStorage !== 'undefined'){
        jwt = JSON.parse(localStorage.getItem('jwt'))
    }

    const formData = new FormData()

    formData.append('order_id', order_id)

    return fetch(`${API}order/delete/${user_id}/${jwt.token}`, {
        method: 'POST',
        body: formData
    })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}