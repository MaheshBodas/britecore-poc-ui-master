import auth from '@/api/auth'
import { RiskFieldInstance } from '@/utils/riskfieldinstance'
import { Risk } from '@/utils/risk'

const singleriskinstance = {
  state: {
    allrisks: []
    // singlerisk: null
  },
  mutations: {
    SET_SINGLERISK: (state, riskinstance) => {
      var riskobj = null
      if (riskinstance && riskinstance.risk_riskfields) {
        // console.log('riskinstance.risk_riskfields')
        // console.log(riskinstance.risk_riskfields.length)
        riskobj = new Risk()
        riskobj.id = riskinstance.id
        riskobj.risktype = riskinstance.risktype
        riskobj.risk_type_name = riskinstance.risk_type_name
        riskobj.risk_name = riskinstance.risk_name
        riskobj.risk_description = riskinstance.risk_description
        // Populate RiskFields collection from data received from server
        var riskfields = riskinstance.risk_riskfields
        for (var riskfield of riskfields) {
          var { risktypefield, risk_type_field_name, risk_type_field_enum, risk_field_value } =
                  { risktypefield: riskfield.risktypefield,
                    risk_type_field_name: riskfield.risk_type_field_name,
                    risk_type_field_enum: riskfield.risk_type_field_enum,
                    risk_field_value: riskfield.risk_field_value }
          if (risk_type_field_enum === 'currency') {
            risk_field_value = parseFloat(riskfield.risk_field_value)
          }
          var riskFieldInstance = new RiskFieldInstance(riskobj.risktype,
            risktypefield,
            risk_type_field_name,
            risk_type_field_enum,
            '',
            risk_field_value)
          // console.log(riskInstance)
          riskobj.riskfields.push(riskFieldInstance)
        }
      }
      // console.log('SET_SINGLERISK riskobj')
      // console.log(JSON.stringify(riskobj))
      // Cut and paste
      state.allrisks.length = 0
      state.allrisks.push(riskobj)
    }
  },
  actions: {
  // log in
    getRisk({ commit }, risk_id) {
      return new Promise((resolve, reject) => {
        auth.getRisk(risk_id).then(response => {
          var riskdata = response
          // console.log('getRisk Response Data')
          // console.log(riskdata)
          var riskinstance = riskdata[0]
          commit('SET_SINGLERISK', riskinstance)
          resolve()
        }).catch(error => {
          console.log(error)
          console.log('Error in getRisk')
          reject(error)
        })
      })
    },
    resetRiskObj({ commit }, risk_id) {
      return new Promise((resolve) => {
        var riskobj = new Risk()
        riskobj.risk_name = ''
        riskobj.risk_description = ''
        riskobj.riskfields = []
        commit('SET_SINGLERISK', riskobj)
        resolve()
      })
    }
  }
}
export default singleriskinstance
