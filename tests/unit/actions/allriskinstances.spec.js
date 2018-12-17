import mockAxios from 'axios'
import store from './../../../src/store/index'
import allriskinstances from './../../../src/store/modules/allriskinstances'

describe('action getRisks', () => {
  const allrisksData = require('./../jsondata/allrisks.json')
  const columnsData = ['model', 'doors', 'amount', 'issuedate']

  it('calls action getRisks and mutate state Risks', async() => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(allrisksData)
    )
    const commit = jest.fn()
    // work
    await allriskinstances.actions.getRisks({ commit }, 'Automobile')
    // assertions / expects
    expect(commit).toHaveBeenCalledTimes(2)
    expect(commit).toHaveBeenCalledWith('SET_ALLRISKS', allrisksData)
    expect(commit).toHaveBeenCalledWith('SET_ALLCOLUMNS', columnsData)
  })
})
