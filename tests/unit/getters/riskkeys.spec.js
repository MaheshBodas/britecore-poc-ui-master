import getters from './../../../src/store/getters'

describe('Getters for riskkeyoptions properties of riskkeys', () => {
  const riskkeys = {
    riskkeyoptions: []
  }
  const riskKeysData = require('./../jsondata/riskkeys.json')
  riskkeys.riskkeyoptions = riskKeysData
  const state = { riskkeys }
  it('Checks Getters for riskkeyoptions properties of riskkeys', () => {
    expect(getters.riskkeyoptions(state)).toEqual(riskKeysData)
  })
})
