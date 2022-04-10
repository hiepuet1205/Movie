export const getCartFromLocalStorage = () => {
    if(typeof window.localStorage !== 'undefined'){
        if(localStorage.getItem('cart')){
            return JSON.parse(localStorage.getItem('cart'))
        }
    }

    return null
}

export const addItemToCart = (item, next) => {
    let cart

    if(typeof window.localStorage !== 'undefined'){
        cart = getCartFromLocalStorage()

        if(cart){
            const existingItem = cart.items.find(i => i.id === item.id);

            if(existingItem) {
                existingItem.quantity++
            }else{
                cart.items.push({
                    ...item,
                    quantity: 1
                })
            }
            cart.totalPrice += item.price
        }else{
            cart = {
                items: [{
                    ...item,
                    quantity: 1
                }],
                totalPrice: item.price,
            }
        }

        replaceCart(cart, () => {})
        next()
    }
}

export const removeItemFromCart = (id, next) => {
    let cart

    if(typeof window.localStorage !== 'undefined'){
        cart = getCartFromLocalStorage()

        if(cart){
            const existingItem = cart.items.find(item => item.id === id);

            if(existingItem) {
                if(existingItem.quantity === 1){
                    cart.items = cart.items.filter(item => item.id !== id);
                }else{
                    existingItem.quantity--
                }
                cart.totalPrice -= existingItem.price
            }

            replaceCart(cart, () => {})
            next()
        }
    }
}

export const replaceCart = (cart, next) => {
    if(typeof window.localStorage !== 'undefined'){
        localStorage.setItem('cart', JSON.stringify(cart))
        next()
    }
}