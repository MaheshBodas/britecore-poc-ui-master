import Vuex from 'vuex'
import ElementUI from 'element-ui'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RiskInput from '@/components/RiskInput'
import RiskInstanceList from '@/components/RiskInstanceList'
import ViewRiskCtrl from '@/components/ViewRiskCtrl'
import { RiskCtrlConst } from '@/components/ViewRiskCtrl/classes'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

// Get Single Risk data
const singleriskdata = require('./../jsondata/singleriskinstancetoexpect.json')
// const allrisksData = require('./../jsondata/allrisks.json')
const actions = {
  getRisk: jest.fn(($store) => { singleriskdata })
}
const store = new Vuex.Store({
  state: {
    apiresult: true,
    apiexception: '',
    singlerisk: singleriskdata
  },
  getters: {
    apiresult: (state) => state.apiresult,
    apiexception: (state) => state.apiexception,
    singlerisk: (state) => state.singlerisk
  },
  actions
})

describe('ViewRiskCtrl.vue', () => {
  const wrapper = shallowMount(ViewRiskCtrl, {
    // Be aware that props is overridden using `propsData`
    store, localVue
  })
  it('Does not render RiskInput on inital load when selectRiskInstance option not selected', () => {
    // assert rest of data values are as expected
    expect(wrapper.vm.itemsPerRow).toEqual(2)
    expect(wrapper.vm.listLoading).toEqual(false)
    expect(wrapper.vm.readonly).toEqual(true)
    expect(wrapper.vm.carouselhelptext).toEqual(RiskCtrlConst.CarouselHelpText)
    expect(wrapper.vm.selectRiskInstance).toEqual({
      riskinstance: ''
    })
    expect(wrapper.find(RiskInput).exists()).toBe(false)
    expect(wrapper.find(RiskInstanceList).exists()).toBe(true)
    // console.log(wrapper.html())
    // expect(wrapper.element).toMatchSnapshot()
  })

  it('Does render RiskInput(s) when selectRiskInstance option is selected', () => {
    const wrapper = shallowMount(ViewRiskCtrl, {
      // Be aware that props is overridden using `propsData`
      store, localVue
    })
    // Set up for test
    wrapper.vm.selectRiskInstance = { riskinstance: 'HillView' }
    // Run the test by emitting change event on RiskInstanceList
    wrapper.find(RiskInstanceList).vm.$emit('change', 2)
    // wrapper.vm.selectRiskInstanceChanged()
    // Verify expected results
    wrapper.vm.$nextTick(function() {
      const oWrapperArry = wrapper.findAll(RiskInput)
      expect(oWrapperArry.length).toBe(4)
      expect(wrapper.vm.rowCount).toBe(2)
      const arrRiskInputRow1 = wrapper.vm.itemsInRow(1)
      expect(arrRiskInputRow1.length).toBe(2)
      const arrRiskInputRow2 = wrapper.vm.itemsInRow(2)
      expect(arrRiskInputRow2.length).toBe(2)
      expect(wrapper.vm.listLoading).toEqual(false)
      expect(wrapper.vm.readonly).toEqual(true)
      expect(wrapper.vm.carouselhelptext).toEqual(RiskCtrlConst.CarouselHelpText)
      expect(wrapper.vm.itemsPerRow).toEqual(2)      
    })
  })
})
