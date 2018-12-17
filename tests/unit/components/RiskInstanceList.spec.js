import Vuex from 'vuex'
import ElementUI from 'element-ui'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RiskInstanceList from '@/components/RiskInstanceList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

const riskKeysData = require('./../jsondata/riskkeys.json')
const actions = {
  getRiskKeys: jest.fn(($store) => { riskKeysData })
}

const store = new Vuex.Store({
  state: {
    apiresult: true,
    apiexception: '',
    riskkeyoptions: riskKeysData
  },
  getters: {
    apiresult: (state) => state.apiresult,
    apiexception: (state) => state.apiexception,
    riskkeyoptions: (state) => state.riskkeyoptions
  },
  actions
})

describe('RiskInstanceList.vue', () => {
  const wrapper = shallowMount(RiskInstanceList, {
    // Be aware that props is overridden using `propsData`
    store, localVue,
    propsData: {
      selectedType: {
        riskinstance: ''
      }
    }
  })

  it('renders riskkeyoptions when passed', () => {
    // console.log(wrapper.vm.options)
    // console.log(wrapper.html())
    // expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.vm.options.length).toEqual(2)
    expect(wrapper.vm.options[0].text).toEqual('Toyota 1')
    expect(wrapper.vm.options[0].value).toEqual(1)
    expect(wrapper.vm.options[1].text).toEqual('HillView')
    expect(wrapper.vm.options[1].value).toEqual(2)
  })
  it('has received [""] as the riskinstance property', () => {
    expect(wrapper.vm.selectedType).toEqual({
      riskinstance: ''
    })
  })
})
