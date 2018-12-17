// import store from './../../../src/store/index'
import getters from './../../../src/store/getters'
// import allriskinstances from './../../../src/store/modules/allriskinstances'

describe('Getters for allrisks and allcolumns properties of allriskinstances', () => {
  const allriskinstances = {
    allrisks: [],
    allcolumns: []
  }

  // set up allriskinstances
  const allrisksData = require('./../jsondata/allrisks.json')
  const columnsData = ['model', 'doors', 'amount']
  allriskinstances.allrisks = allrisksData
  allriskinstances.allcolumns = columnsData
  const state = { allriskinstances }

  it('Checks Getters for allrisks and allcolumns properties of allriskinstances', () => {
    expect(getters.allrisks(state)).toEqual(allrisksData)
    expect(getters.allcolumns(state)).toEqual(columnsData) 
  })
})
