
export const initialState = {
    products:[],
    trending:[],
    cart:[],
    wishlist:[],
    orderhistory:[],
    addresses:[{id:1,name: "John Doe",address: "45A, Krishna Nagar, Mumbai, Maharashtra, India",
    pincode: "400001",mobile: "5551234789",chosenAddress:false},{id:2,name: "Emily Johnson",address: "Plot No. 123, Shanti Vihar, Delhi, India",pincode: "410001",mobile: "6198765432",chosenAddress:false}]
}

export const ProductReducer = (state, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return { ...state,products:action.payload,trending:action.payload.filter(({rating})=>rating === 5)}
      case 'ADD_TO_CART' :
        return {...state,cart:state.cart.some((item)=> item.product._id === action.payload._id)?[...state.cart]:[...state.cart,{product:action.payload,quantity:1}]}
      case 'REMOVE_FROM_CART' :
        return {...state,cart:state.cart.filter((item)=> item.product._id !== action.payload.product._id)}
      case 'UPDATE_TO_WISHLIST' :
        return {...state,wishlist:state.wishlist.some((item)=> item._id === action.payload._id)?state.wishlist.filter((item)=> item._id !== action.payload._id):[...state.wishlist,action.payload]}
      case 'INC_QTY_OF_CART' :
        return {...state,cart:state.cart.map((item)=> item.product._id === action.payload.product._id?{...item,quantity:item.quantity+1}:{...item})}
      case 'DEC_QTY_FROM_CART' :
        return {...state,cart:state.cart.some((item)=> item._id === action.payload._id && item.quantity===1)?state.cart.filter((item)=> item.product._id !== action.payload.product._id):state.cart.map((item)=> item.product._id === action.payload.product._id?{...item,quantity:item.quantity-1}:{...item})}
      case 'CHOSEN_ADDRESS' :
        return {...state,addresses:state.addresses.map((item)=>item.id === action.payload?{...item,chosenAddress:true}:{...item,chosenAddress : false})}
      case 'MOVE_TO_WISHLIST' :
          return {...state,wishlist:state.wishlist.some((item)=> item._id === action.payload.product._id)?[...state.wishlist]:[...state.wishlist,action.payload.product],cart:state.cart.filter((item)=> item.product._id !== action.payload.product._id)}
      case 'MOVE_TO_CART' :
          return {...state,wishlist:state.wishlist.filter((item)=> item._id !== action.payload._id),cart:state.cart.some((item)=> item.product._id === action.payload._id)?state.cart.map((item)=> item.product._id === action.payload._id?{...item,quantity:item.quantity+1}:{...item}):[...state.cart,{product:action.payload,quantity:1}]}
      case 'PLACED_ORDER' :
        return {...state,orderhistory:[...state.cart],cart:[]}
      case 'ADD_ADDRESS' :
        return {...state,addresses:[...state.addresses,{...action.payload,chosenAddress:false}]}
      case 'REMOVE_ADDRESS' :
        return {...state,addresses:state.addresses.filter(({id})=>id !== action.payload)}
      case 'EDIT_ADDRESS' :
        return {...state,addresses:state.addresses.map((add)=>add.id === action.payload.id?add = action.payload:add)}
      default:
        return state
    }
  }