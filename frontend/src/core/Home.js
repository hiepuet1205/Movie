import { useState, useEffect } from "react"
import { getProducts } from './helper/coreApiCalls'
import { signout } from '../auth/helper/index'
import { useNavigate } from "react-router-dom"
import Card from './Card'

const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const loadProducts = () => {
        getProducts()
        .then(data => {
            console.log(data)
            if(data.error){
                setError(data.error)
                console.error(error)
            }else{
                setProducts(data)
            }
        })
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const signoutHandler = () => {
        signout(() => {
            navigate('/login')
        })
    }

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {products.map(product => 
                    <Card product={product}/>
                )}
                <li>
                    <button onClick={signoutHandler}>Sign out</button>
                </li>
            </ul>
        </div>
    )
}

export default Home