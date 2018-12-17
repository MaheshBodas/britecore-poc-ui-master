import getters from './../../../src/store/getters'

describe('Getter for risktypekeyoptions properties of risktypekeys', () => {
  const risktypekeys = {
    risktypekeyoptions: []
  }
  const risktypeKeysData = require('./../jsondata/risktypekeys.json')
  risktypekeys.risktypekeyoptions = risktypeKeysData
  const state = { risktypekeys }
  it('Checks Getter for risktypekeyoptions properties of risktypekeys', () => {
    expect(getters.risktypekeyoptions(state)).toEqual(risktypeKeysData)
  })
})
