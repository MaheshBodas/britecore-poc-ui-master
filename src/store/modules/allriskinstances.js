import auth from '@/api/auth'
const allriskinstances = {
  state: {
    allrisks: [],
    allcolumns: []
  },
  mutations: {
    SET_ALLRISKS: (state, allrisks) => {
      // for (var value of allrisks) {
      //   state.allrisks.push(value)
      // }
      state.allrisks.length = 0
      state.allrisks.push(...allrisks)
    },
    SET_ALLCOLUMNS: (state, allcolumns) => {
      state.allcolumns.length = 0
      state.allcolumns.push(...allcolumns)
    }
  },
  actions: {
    getRisks({ commit }, risk_type_id) {
      return new Promise((resolve, reject) => {
        auth.getRisks(risk_type_id).then(response => {
          const riskinstances = response
          const columnNames = []
          // console.log('getRisks Response Data')
          // console.log(riskinstances)
          if (riskinstances) {
            // console.log('riskinstances')
            // console.log(riskinstances.length)
            var i
            if (riskinstances && riskinstances.length > 0) {
              var riskinstance = riskinstances[0]
              if (riskinstance.risk_riskfields && riskinstance.risk_riskfields.length > 0) {
                var riskfields = riskinstance.risk_riskfields
                for (i = 0; i < riskfields.length; i++) {
                  var risk_type_field_name = riskfields[i].risk_type_field_name
                  columnNames.push(risk_type_field_name)
                }
              }
            }
            // console.log('columnNames')
            // console.log(columnNames)
          }
          commit('SET_ALLRISKS', riskinstances)
          commit('SET_ALLCOLUMNS', columnNames)
          resolve()
        }).catch(error => {
          console.log('Error in getRisks')
          reject(error)
        })
      })
    },
    resetRisks({ commit }, risk_id) {
      return new Promise((resolve) => {
        commit('SET_ALLRISKS', [])
        commit('SET_ALLCOLUMNS', [])
        resolve()
      })
    }
  }
}
export default allriskinstances
