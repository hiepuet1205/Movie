import { API } from "../../backend";

export const getMovies = () => {
    return fetch(`${API}movie/`, { 
        method: "GET" 
    })
    .then ((response) => {
        return response.json();
    })
    .catch((err) => console.log(err));                        
};

export const getCategorys = () => {
    return fetch(`${API}category/`, { 
        method: "GET" 
    })
    .then ((response) => {
        return response.json();
    })
    .catch((err) => console.log(err)); 
}

export const getPersons = () => {
    return fetch(`${API}person/`, { 
        method: "GET" 
    })
    .then ((response) => {
        return response.json();
    })
    .catch((err) => console.log(err)); 
}