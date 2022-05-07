import {API} from '../../backend'

export const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const signup = (user) => {
    return fetch(`${API}user/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}

export const signin = (user) => {
    const formData = new FormData();

    for(var key in user) {
        formData.append(key, user[key]);
    }

    return fetch(`${API}user/login/`, {
        method: 'POST',
        body: formData,
    })
    .then((response) => {return response.json()})
    .catch((error) => console.error(error))
}

export const authenticate = (data, next) => {
    if(typeof window.localStorage !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () => {
    if(typeof window.localStorage !== 'undefined'){
        if(localStorage.getItem('jwt')){
            return JSON.parse(localStorage.getItem('jwt'))
        }else{
            return false
        }
    }
    return false
}

export const signout = (next) => {
    const user_id = isAuthenticated() && isAuthenticated().user.id

    if(typeof window.localStorage !== 'undefined'){
        localStorage.removeItem('jwt')
        localStorage.removeItem('cart')

        return fetch(`${API}user/logout/${user_id}/`, {
            method: 'GET',
        })
        .then((response) => {
            console.log('logout successfully')
            next()
        })
        .catch((error) => console.error(error))
    }
}