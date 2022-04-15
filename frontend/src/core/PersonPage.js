import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPersons } from './helper/coreApiCalls';

import Base from './Base';
import Person from './components/Person/Person';
import LoadingSpinner from './components/Loading/LoadingSpinner'

const PersonPage = () => {
    const params = useParams();

    const [person, setPerson] = useState()
    const person_id = params.id

    const loadedPerson = () => {
        let p

        if(typeof window.localStorage !== 'undefined'){
            p = JSON.parse(localStorage.getItem('persons/' + person_id))
            setPerson(p)
        }

        if(!p){
            getPersons()
            .then(data => {
                if(data.error){
                    console.error(data.error)
                }else{
                    p = data.find(person => person.id === person_id)
                    setPerson(p)
                    if(typeof window.localStorage !== 'undefined'){
                        for(var key in data){
                            localStorage.setItem('persons/' + data[key].id, JSON.stringify(data[key]))
                        }
                    }
                }
            })
        }
    }

    useEffect(() => {
        loadedPerson()
    }, [params])

    return (
        <Base>
            {person ? <Person person={person}/> : <LoadingSpinner/>}
        </Base>
    )
}

export default PersonPage