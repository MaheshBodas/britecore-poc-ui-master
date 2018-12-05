import auth from '@/api/auth'
const risktypekeys = {
  state: {
    apiresult: '',
    apiexception: '',
    risktypekeyoptions: []
  },
  mutations: {
    SET_RISKTYPEKEYOPTIONS: (state, risktypekeyoptions) => {
      state.risktypekeyoptions = risktypekeyoptions
    }
  },
  actions: {
  // log in
    getRiskTypeKeys({ commit }) {
      return new Promise((resolve, reject) => {
        auth.getRiskTypeKeys().then(response => {
          const data = response
          console.log('getRiskTypeKeys Response Data')
          console.log(data)
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
