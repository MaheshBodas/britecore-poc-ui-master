import store  from './../../../src/store/index'
import { getters } from './../../../src/store/getters'
import risktypekeys from './../../../src/store/modules/risktypekeys'
import mockAxios from 'axios'

describe('action getRiskTypeKeys', () => {
  const risktypeKeysData = require('./../jsondata/risktypekeys.json')

  it('calls action getRiskTypeKeys and mutate state RiskTypeKeys', async() => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(risktypeKeysData)
    )
    const commit = jest.fn()
    // work
    await risktypekeys.actions.getRiskTypeKeys({ commit })
    // assertions / expects
    expect(commit).toHaveBeenCalledTimes(1)
    expect(commit).toHaveBeenCalledWith('SET_RISKTYPEKEYOPTIONS', risktypeKeysData)
  })
})
