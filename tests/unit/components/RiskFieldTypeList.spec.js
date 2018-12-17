import Vuex from 'vuex'
import ElementUI from 'element-ui'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RiskFieldTypeList from '@/components/RiskFieldTypeList'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

const actions = {
}

const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  actions
})

describe('RiskFieldTypeList.vue', () => {
  const wrapper = shallowMount(RiskFieldTypeList, {
    // Be aware that props is overridden using `propsData`
    store, localVue,
    propsData: {
      selectedType: {
        risk_type_field_enum: ''
      }
    }
  })

  it('renders options correctly', () => {
    // console.log(wrapper.vm.options)
    // console.log(wrapper.html())
    // expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.vm.options.length).toEqual(5)
    expect(wrapper.vm.options[0].text).toEqual('currency')
    expect(wrapper.vm.options[0].value).toEqual('currency')
    expect(wrapper.vm.options[1].text).toEqual('date')
    expect(wrapper.vm.options[1].value).toEqual('date')
    expect(wrapper.vm.options[2].text).toEqual('float')
    expect(wrapper.vm.options[2].value).toEqual('float')
    expect(wrapper.vm.options[3].text).toEqual('integer')
    expect(wrapper.vm.options[3].value).toEqual('integer')
    expect(wrapper.vm.options[4].text).toEqual('text')
    expect(wrapper.vm.options[4].value).toEqual('text')
  })
  it('has received ["text"] as the risk_type_field_enum property', () => {
    expect(wrapper.vm.selectedType).toEqual({
      risk_type_field_enum: 'text'
    })
  })
})
