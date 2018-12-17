import getters from './../../../src/store/getters'

describe('Getter for singlerisk properties of singleriskinstance', () => {
  const singleriskinstance = {
    allrisks: []
  }
  const singlerisktoexpect = require('./../jsondata/singleriskinstancetoexpect.json')
  singleriskinstance.allrisks.push(singlerisktoexpect)
  const state = { singleriskinstance }
  it('Check Getter for allrisks properties of singleriskinstance', () => {
    expect(getters.singlerisk(state)).toEqual(singlerisktoexpect)
  })
})
