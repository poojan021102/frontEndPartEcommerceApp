import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id:"",
    username:"",
    email:"",
    firstName:"",
    gender:"",
    image:"",
    lastName:"",
    token:"",
    cart: [],
    wishlist: [],
  },
  reducers: {
    checkIfUserAlreadyExists:(state)=>{
        let a = localStorage.getItem('user');
        if(a){
            a = JSON.parse(a);
            state.id = a.id;
            state.username = a.username;
            state.email = a.email;
            state.firstName = a.firstName;
            state.gender = a.gender;
            state.image = a.image;
            state.lastName = a.lastName;
            state.token = a.token;
        }
        else{
            state = {
              id:"",
              username:"",
              email:"",
              firstName:"",
              gender:"",
              image:"",
              lastName:"",
              token:""
            };
        }
    },
    loginUser:(state,val)=>{
        state.id = val.payload.id;
        state.username = val.payload.username;
        state.email = val.payload.email;
        state.firstName = val.payload.firstName;
        state.gender = val.payload.gender;
        state.image = val.payload.image;
        state.lastName = val.payload.lastName;
        state.token = val.payload.token;
        localStorage.setItem('user',JSON.stringify(state));
    },
    logoutUser:(state)=>{
        state.id="",
        state.username="",
        state.email="",
        state.firstName="",
        state.gender="",
        state.image="",
        state.lastName="",
        state.token=""
        localStorage.setItem("user",JSON.stringify(state));
    },
    addProductToCart:(state,val)=>{
        var i,fg=0;
        for (i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === val.payload.id) {
                state.cart[i].qty+=val.payload.qty;
                fg=1;
                break;
            }
        }
        if(fg==0) state.cart.push(val.payload);
    },
    changeQtyInCart:(state,obj)=>{
      state.cart[obj.payload.index].qty=Number(obj.payload.quantity);
    },
    removeFromCart:(state,obj)=>{
      state.cart.splice(obj.payload.index,obj.payload.num);
    },
    addProductToWishlist:(state,obj)=>{
      state.wishlist.push(obj.payload);
    },
    removeFromWishlist:(state,obj)=>{
      console.log(obj);
      state.wishlist = state.wishlist.filter((item)=> {return item.id !== obj.payload.id});
    },
  },
})

// Action creators are generated for each case reducer function
export const { checkIfUserAlreadyExists,loginUser,logoutUser,addProductToCart,changeQtyInCart,removeFromCart,addProductToWishlist,removeFromWishlist } = userSlice.actions

export default userSlice.reducer