import Vuex from 'vuex'
import ElementUI from 'element-ui'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RiskTypeList from '@/components/RiskTypeList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

const risktypeKeysData = require('./../jsondata/risktypekeys.json')
const actions = {
  getRiskTypeKeys: jest.fn(($store) => { risktypeKeysData })
}

const store = new Vuex.Store({
  state: {
    apiresult: true,
    apiexception: '',
    risktypekeyoptions: risktypeKeysData
  },
  getters: {
    apiresult: (state) => state.apiresult,
    apiexception: (state) => state.apiexception,
    risktypekeyoptions: (state) => state.risktypekeyoptions
  },
  actions
})

describe('RiskTypeList.vue', () => {
  const wrapper = shallowMount(RiskTypeList, {
    // Be aware that props is overridden using `propsData`
    store, localVue,
    propsData: {
      selectedType: {
        risktype: ''
      }
    }    
  })

  it('renders risktypekeyoptions when passed', () => {
    // console.log(wrapper.html())
    // expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.vm.options.length).toEqual(2)
    expect(wrapper.vm.options[0].text).toEqual('Automobile')
    expect(wrapper.vm.options[0].value).toEqual(1)
    expect(wrapper.vm.options[1].text).toEqual('Home')
    expect(wrapper.vm.options[1].value).toEqual(2)
  })
  it('has received [""] as the risktype property', () => {
    expect(wrapper.vm.selectedType).toEqual({
      risktype: ''
    })
  })
})
