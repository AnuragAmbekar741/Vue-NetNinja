import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     points: 0
//   },
//   mutations: {
//     updatePoints(state, payload) {
//       state.points = state.points + payload
//     }
//   }
// })

const store = createStore({
  state:{
    user:null
  },
  mutations:{
    setUser(state, payload){
      state.user = payload 
      console.log('user state changed', state.user)
    }
  },
  actions:{
    signUp(context,{email,password}){
      console.log('signup action')

      //async code
      setTimeout(()=>{
        context.commit('setUser',{email,password})
      },2000)

    }
  }
})

// export the store
export default store