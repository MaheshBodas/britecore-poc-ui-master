import auth from '@/api/auth'
const riskkeys = {
  state: {
    apiresult: '',
    apiexception: '',
    riskkeyoptions: []
  },
  mutations: {
    SET_RISKKEYOPTIONS: (state, riskkeyoptions) => {
      state.riskkeyoptions = riskkeyoptions
    }
  },
  actions: {
  // log in
    getRiskKeys({ commit }) {
      return new Promise((resolve, reject) => {
        auth.getRiskKeys().then(response => {
          const data = response
          console.log('getRiskKeys Response Data')
          console.log(data)
          commit('SET_RISKKEYOPTIONS', data)
          resolve()
        }).catch(error => {
          console.log('Error in getRiskKeys')
          reject(error)
        })
      })
    }
  }
}
export default riskkeys
