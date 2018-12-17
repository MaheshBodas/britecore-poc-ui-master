import mockAxios from 'axios'
import store from './../../../src/store/index'
import getters from './../../../src/store/getters'
import singleriskinstance from './../../../src/store/modules/singleriskinstance'

describe('action getRisk', () => {
  const allrisksPromiseData = require('./../jsondata/allrisks.json')
  it('calls action getRisk and mutate state Risk', async() => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(allrisksPromiseData)
    )
    const commit = jest.fn()
    // work
    await singleriskinstance.actions.getRisk({ commit })
    // assertions / expects
    expect(commit).toHaveBeenCalledTimes(1)
    expect(commit).toHaveBeenCalledWith('SET_SINGLERISK', allrisksPromiseData[0])
  })
})
