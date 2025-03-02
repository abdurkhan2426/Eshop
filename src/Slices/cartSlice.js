import { createSlice, nanoid } from '@reduxjs/toolkit'

const getInitialCart = () => {
    const localCartList = window.localStorage.getItem('cartList');
    if(localCartList){
        return JSON.parse(localCartList)
    }
    window.localStorage.setItem('cartList', JSON.stringify([]))
    return [];
}

const getInitialTotalPrice = () => {
    var localTotalPrice = window.localStorage.getItem('totalPrice');
    if(localTotalPrice){
        return localTotalPrice
    }
    window.localStorage.setItem('totalPrice', 0)
    return 0;
}

const initialValue = {
    cartList: getInitialCart(),
    totalPrice: getInitialTotalPrice(),
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialValue,
    reducers: (create) => ({
        addToCart: create.preparedReducer(
            (title, price, images, quantity, size, color) => {
                const id = nanoid();
                const productQuantityPrice = quantity * price
                return { payload: { id, title, price, images, quantity, productQuantityPrice, size , color}}
            },
            (state, action) => {
                state.cartList.push(action.payload);
                console.log("dalta")

                const cartList = window.localStorage.getItem('cartList');
                var totalPrice = window.localStorage.getItem('totalPrice');
                if(cartList) {
                    const cartListArr = JSON.parse(cartList);
                    cartListArr.push({
                        ...action.payload
                    });
                    totalPrice = 0
                    cartListArr.forEach((product) => {
                        totalPrice += product.productQuantityPrice
                    })
                    window.localStorage.setItem('cartList', JSON.stringify(cartListArr));
                    window.localStorage.setItem('totalPrice', totalPrice);
                } else {
                    window.localStorage.setItem(
                        'cartList',
                        JSON.stringify([{
                            ...action.payload
                        }])
                    )
                    window.localStorage.setItem('totalPrice', action.payload.productQuantityPrice);
                    state.totalPrice = action.payload.productQuantityPrice

                }


            }
        ),
        updateQuantity: create.preparedReducer(
            (id, itemQuantity) => {
                return { payload: { id, itemQuantity }}
            },
            (state, action) => {
                const cartList = window.localStorage.getItem('cartList')
                var totalPrice = window.localStorage.getItem('totalPrice')
                if(cartList){
                    const cartListArr = JSON.parse(cartList)
                    cartListArr.forEach((product) => {
                        if(product.id === action.payload.id) {
                            product.quantity = action.payload.itemQuantity
                            product.productQuantityPrice = product.quantity * product.price
                        }
                    })
                    totalPrice = 0
                    cartListArr.forEach((product) => {
                        totalPrice += product.productQuantityPrice
                    })
                    window.localStorage.setItem('cartList', JSON.stringify(cartListArr))
                    window.localStorage.setItem('totalPrice', totalPrice)
                    state.cartList = [...cartListArr]
                    state.totalPrice = totalPrice
                }

            }
        ),
        removeProduct: create.preparedReducer(
            (id) => {
                return { payload: { id }}
            },
            (state, action) => {
                const cartList = window.localStorage.getItem('cartList')
                var totalPrice = window.localStorage.getItem('totalPrice')
                if(cartList){
                    const cartListArr = JSON.parse(cartList)
                    cartListArr.forEach((product, index) => {
                        if(product.id === action.payload.id) {
                            cartListArr.splice(index, 1);

                        }
                    })
                    totalPrice = 0
                    cartListArr.forEach((product) => {
                        totalPrice += product.productQuantityPrice
                    })
                    window.localStorage.setItem('cartList', JSON.stringify(cartListArr))
                    window.localStorage.setItem('totalPrice', totalPrice)
                    state.cartList = cartListArr
                    state.totalPrice = totalPrice
                }
            }
        )
    })


})

export const { addToCart, updateQuantity, removeProduct } = cartSlice.actions

export default cartSlice.reducer