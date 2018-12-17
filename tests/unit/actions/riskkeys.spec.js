import store  from './../../../src/store/index'
import riskkeys from './../../../src/store/modules/riskkeys'
import mockAxios from 'axios'

describe('action getRiskKeys', () => {
  const riskKeysData = require('./../jsondata/riskkeys.json')
  it('calls action getRiskKeys and mutate state RiskKeys', async() => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(riskKeysData)
    )
    const commit = jest.fn()
    // work
    await riskkeys.actions.getRiskKeys({ commit })
    // assertions / expects
    expect(commit).toHaveBeenCalledTimes(1)
    expect(commit).toHaveBeenCalledWith('SET_RISKKEYOPTIONS', riskKeysData)
  })
})
