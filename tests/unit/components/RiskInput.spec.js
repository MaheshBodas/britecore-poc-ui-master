import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { RiskFieldInstance } from '@/utils/riskfieldinstance'
import RiskInput from '@/components/RiskInput'
import CurrencyInput from '@/components/CurrencyInput'
import { Input, InputNumber, DatePicker } from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Input)
localVue.use(InputNumber)
localVue.use(DatePicker)

const actions = {
}

const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  actions
})
const oRiskFieldInstance = new RiskFieldInstance()
describe('RiskInput.vue', () => {
  it('renders ElInput when risk_type_field_enum is text', () => {    
    oRiskFieldInstance.risk_type_field_name = 'model'
    oRiskFieldInstance.risk_type_field_enum = 'text'
    oRiskFieldInstance.risk_field_value = 'TYT1000'
    const wrapper = shallowMount(RiskInput, {
      // Be aware that props is overridden using `propsData`
      store, localVue,
      propsData: {
        input_type: oRiskFieldInstance,
        // isReadonly: true
        dataval: {},
        value: {}
      }
    })
    // console.log(wrapper.html())
    // wait a "tick" after state change before asserting DOM updates
    wrapper.vm.$nextTick(function() {
      expect(wrapper.contains(Input)).toBe(true)
      expect(wrapper.contains(InputNumber)).toBe(false)
      expect(wrapper.contains(DatePicker)).toBe(false)
      expect(wrapper.contains(CurrencyInput)).toBe(false)
    })
  })
  it('renders ElInputNumber when risk_type_field_enum is integer', () => {
    // console.log(wrapper.html())
    // wait a "tick" after state change before asserting DOM updates
    oRiskFieldInstance.risk_type_field_name = 'doors'
    oRiskFieldInstance.risk_type_field_enum = 'integer'
    oRiskFieldInstance.risk_field_value = 4
    const wrapper = shallowMount(RiskInput, {
      // Be aware that props is overridden using `propsData`
      store, localVue,
      propsData: {
        input_type: oRiskFieldInstance,
        // isReadonly: true
        dataval: {},
        value: {}
      }
    })
    wrapper.vm.$nextTick(function() {
      expect(wrapper.contains(InputNumber)).toBe(true)
      expect(wrapper.contains(Input)).toBe(false)
      expect(wrapper.contains(DatePicker)).toBe(false)
      expect(wrapper.contains(CurrencyInput)).toBe(false)
    })
  })
  it('renders DatePicker when risk_type_field_enum is date', () => {
    // console.log(wrapper.html())
    // wait a "tick" after state change before asserting DOM updates
    oRiskFieldInstance.risk_type_field_name = 'issuedate'
    oRiskFieldInstance.risk_type_field_enum = 'date'
    oRiskFieldInstance.risk_field_value = '11/01/2004'
    const wrapper = shallowMount(RiskInput, {
      // Be aware that props is overridden using `propsData`
      store, localVue,
      propsData: {
        input_type: oRiskFieldInstance,
        // isReadonly: true
        dataval: {},
        value: {}
      }
    })
    wrapper.vm.$nextTick(function() {
      expect(wrapper.contains(DatePicker)).toBe(true)
      expect(wrapper.contains(Input)).toBe(false)
      expect(wrapper.contains(InputNumber)).toBe(false)
      expect(wrapper.contains(CurrencyInput)).toBe(false)
    })
  })
  it('renders CurrencyInput when risk_type_field_enum is currency', () => {
    // console.log(wrapper.html())
    // wait a "tick" after state change before asserting DOM updates
    oRiskFieldInstance.risk_type_field_name = 'amount'
    oRiskFieldInstance.risk_type_field_enum = 'currency'
    oRiskFieldInstance.risk_field_value = 1000
    const wrapper = shallowMount(RiskInput, {
      // Be aware that props is overridden using `propsData`
      store, localVue,
      propsData: {
        input_type: oRiskFieldInstance,
        dataval: {},
        value: {}
      }
    })
    wrapper.vm.$nextTick(function() {      
      expect(wrapper.contains(CurrencyInput)).toBe(true)
      expect(wrapper.contains(Input)).toBe(false)
      expect(wrapper.contains(DatePicker)).toBe(false)
      expect(wrapper.contains(InputNumber)).toBe(false)
    })
  })
})
