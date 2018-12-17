import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store  from './../../../src/store/index'
// import getters from './../../../src/store/getters'
import singleriskinstance from './../../../src/store/modules/singleriskinstance'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('mutation SET_SINGLERISK', () => {
  const state = {
    allrisks: []
  }
  const getstate = {
    singleriskinstance
  }
  const allrisksPromiseData = require('./../jsondata/allrisks.json')
  const singlerisktoexpect = require('./../jsondata/singleriskinstancetoexpect.json')
  const automobileRiskData = allrisksPromiseData[0]
  getstate.singleriskinstance = state
  it('adds a Single Risks to the state', () => {
    singleriskinstance.mutations.SET_SINGLERISK(state, automobileRiskData)
    // console.log('Assert singleriskinstance.mutations')
    // console.log(getstate.singleriskinstance.allrisks[0])
    expect(state.allrisks[0]).toEqual(singlerisktoexpect)
  })
})
