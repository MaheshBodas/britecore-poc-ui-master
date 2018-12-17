import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from './../../../src/store/index'
import allriskinstances from './../../../src/store/modules/allriskinstances'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('mutations SET_ALLRISKS and SET_ALLCOLUMNS', () => {
  const state = {
    allrisks: [],
    allcolumns: []
  }
  const allrisksData = require('./../jsondata/allrisks.json')
  const columnsData = ['model', 'doors', 'amount']

  it('adds a All Risks to the state', () => {
    allriskinstances.mutations.SET_ALLRISKS(state, allrisksData)    
    expect(state.allrisks).toEqual(allrisksData)
  })

  it('adds a Risk Grid columns to the state', () => {
    allriskinstances.mutations.SET_ALLCOLUMNS(state, columnsData)
    expect(state.allcolumns).toEqual(columnsData)
  })
})

