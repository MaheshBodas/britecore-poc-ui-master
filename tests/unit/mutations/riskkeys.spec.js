import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store  from './../../../src/store/index'
import riskkeys from './../../../src/store/modules/riskkeys'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('mutation SET_RISKKEYOPTIONS', () => {
  const state = {
    riskkeyoptions: []
  }
  const riskKeysData = require('./../jsondata/riskkeys.json')

  it('adds a All Risk Keys to the state', () => {
    riskkeys.mutations.SET_RISKKEYOPTIONS(state, riskKeysData)
    expect(state.riskkeyoptions).toEqual(riskKeysData)
  })
})
