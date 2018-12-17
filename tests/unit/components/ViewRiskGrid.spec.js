import Vuex from 'vuex'
import ElementUI from 'element-ui'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RiskTypeList from '@/components/RiskTypeList'
import ViewRiskGrid from '@/components/ViewRiskGrid'
import { RiskCtrlConst } from '@/components/ViewRiskGrid/classes'
import { Table } from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Table)
localVue.use(ElementUI)

// Get Single Risk data
const allrisksData = require('./../jsondata/allrisks.json')
const columnsData = ['model', 'doors', 'amount', 'issuedate']
const actions = {
  getRisks: jest.fn(($store) => { allrisksData })
}
const store = new Vuex.Store({
  state: {
    apiresult: true,
    apiexception: '',
    allrisks: allrisksData,
    allcolumns: columnsData
  },
  getters: {
    apiresult: (state) => state.apiresult,
    apiexception: (state) => state.apiexception,
    allrisks: (state) => state.allrisks,
    allcolumns: (state) => state.allcolumns
  },
  actions
})

describe('ViewRiskGrid.vue', () => {
  const wrapper = shallowMount(ViewRiskGrid, {
    // Be aware that props is overridden using `propsData`
    store, localVue
  })
  it('Does not render RiskGrid on inital load when selectRiskInstance option not selected', () => {
    // assert rest of data values are as expected
    expect(wrapper.vm.riskinstances).toEqual(null)
    expect(wrapper.vm.columnNames).toEqual(null)
    expect(wrapper.vm.listLoading).toEqual(false)
    expect(wrapper.vm.carouselhelptext).toEqual(RiskCtrlConst.CarouselHelpText)
    // Make sure Element UI Grid does not get rendered
    expect(wrapper.find(Table).exists()).toBe(false)
    expect(wrapper.vm.selectRiskType).toEqual({
      risktype: ''
    })
    // expect(wrapper.find(RiskInput).exists()).toBe(false)
    expect(wrapper.find(RiskTypeList).exists()).toBe(true)
    // console.log(wrapper.html())
    // expect(wrapper.element).toMatchSnapshot()
  })

  it('Does render RiskInput(s) when selectRiskInstance option is selected', () => {
    const wrapper = shallowMount(ViewRiskGrid, {
      // Be aware that props is overridden using `propsData`
      store, localVue
    })
    // Set up for test
    wrapper.vm.selectRiskType = { risktype: 'Automobile' }
    // Run the test
    wrapper.find(RiskTypeList).vm.$emit('change', 1)
    // wrapper.vm.selectRiskTypeChanged()
    // Verify expected results
    wrapper.vm.$nextTick(function() {
      expect(wrapper.vm.listLoading).toEqual(false)
      expect(wrapper.vm.carouselhelptext).toEqual(RiskCtrlConst.CarouselHelpText)
      // Make sure Element UI Grid does get rendered
      expect(wrapper.find(Table).exists()).toBe(true)
      expect(wrapper.vm.columnNames).toEqual(columnsData)
      // console.log(wrapper.html())
    })
  })
})
