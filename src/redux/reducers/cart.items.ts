const cartItems = (state = [], action:any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter((cartItem:any) => cartItem.name !== action.payload.name)
    }
    return state
}
export default cartItems