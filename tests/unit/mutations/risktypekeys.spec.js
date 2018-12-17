import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store  from './../../../src/store/index'
import risktypekeys from './../../../src/store/modules/risktypekeys'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('mutation SET_RISKTYPEKEYOPTIONS', () => {
  const state = {
    risktypekeyoptions: []
  }
  const risktypeKeysData = require('./../jsondata/risktypekeys.json')

  it('adds a All Risk Type keys to the state', () => {
    risktypekeys.mutations.SET_RISKTYPEKEYOPTIONS(state, risktypeKeysData)
    expect(state.risktypekeyoptions).toEqual(risktypeKeysData)
  })
})
