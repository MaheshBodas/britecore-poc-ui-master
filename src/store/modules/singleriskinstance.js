import auth from '@/api/auth'
import { RiskFieldInstance } from '@/utils/riskfieldinstance'
import { Risk } from '@/utils/risk'

const singleriskinstance = {
  state: {
    apiresult: '',
    apiexception: '',
    allrisks: []
    // singlerisk: null
  },
  mutations: {
    SET_SINGLERISK: (state, singlerisk) => {
      // state.singlerisk = singlerisk
      state.allrisks.length = 0
      state.allrisks.push(singlerisk)
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
          var riskobj = null
          if (riskinstance && riskinstance.risk_riskfields) {
            // console.log('riskinstance.risk_riskfields')
            // console.log(riskinstance.risk_riskfields.length)
            var i
            // this.resetRiskFormData()
            riskobj = new Risk()
            riskobj.id = riskinstance.id
            riskobj.risktype = riskinstance.risktype
            riskobj.risk_type_name = riskinstance.risk_type_name
            riskobj.risk_name = riskinstance.risk_name
            riskobj.risk_description = riskinstance.risk_description
            // Populate RiskFields collection from data received from server
            var riskfields = riskinstance.risk_riskfields
            // this.riskobj = new Risk(id, risktype, risk_type_name, risk_name, risk_description, riskfields)
            for (i = 0; i < riskfields.length; i++) {
              // var rfid = riskfields[i].id
              var risktypefield = riskfields[i].risktypefield
              // var risk = riskfields[i].risk
              var risk_type_field_name = riskfields[i].risk_type_field_name
              var risk_type_field_enum = riskfields[i].risk_type_field_enum
              var risk_field_value = riskfields[i].risk_field_value
              if (risk_type_field_enum === 'currency') {
                risk_field_value = parseFloat(riskfields[i].risk_field_value)
              }
              var riskFieldInstance = new RiskFieldInstance(riskobj.risktype, risktypefield, risk_type_field_name, risk_type_field_enum, '', risk_field_value)
              // console.log(riskInstance)
              riskobj.riskfields.push(riskFieldInstance)
            }
          }
          // console.log('SET_SINGLERISK riskobj')
          // console.log(JSON.stringify(riskobj))
          commit('SET_SINGLERISK', riskobj)
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
