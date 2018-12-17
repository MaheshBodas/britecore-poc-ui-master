import auth from '@/api/auth'
const risktypekeys = {
  state: {
    risktypekeyoptions: []
  },
  mutations: {
    SET_RISKTYPEKEYOPTIONS: (state, risktypekeyoptions) => {
      state.risktypekeyoptions.length = 0
      state.risktypekeyoptions.push(...risktypekeyoptions)
    }
  },
  actions: {
  // log in
    getRiskTypeKeys({ commit }) {
      return new Promise((resolve, reject) => {
        auth.getRiskTypeKeys().then(response => {
          const data = response
          // console.log('getRiskTypeKeys Response Data')
          // console.log(data)
          commit('SET_RISKTYPEKEYOPTIONS', data)
          resolve()
        }).catch(error => {
          console.log('Error in getRiskTypeKeys')
          reject(error)
        })
      })
    }
  }
}
export default risktypekeys
