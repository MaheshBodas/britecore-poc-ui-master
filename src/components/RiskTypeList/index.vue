/* https://jsfiddle.net/bgzhw68m/405/ */
<template> 
  <el-select v-model="selectedType.risktype" size="mini" @change="selectChanged" clearable placeholder="Select RiskType">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.text"
      :value="item.value">
    </el-option>
  </el-select>  
</template> 

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'risk-type-list',
  props: {
    preSelect: String,
    selectedType: Object
  },
  computed: {
    ...mapGetters([
      'apiresult',
      'apiexception',
      'risktypekeyoptions'
    ])
  },
  data: function() {
    return {
      // value: '',
      options: []
    }
  },
  /*
  watch: {
    preSelect: function(val) {
      // alert('In watch')
      this.value = this.preSelect
      this.selectedType.risk_type_field_enum = this.preSelect
    }
  },
  */
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // this.value = this.preSelect
      // this.selectedType.risk_type_field_enum = this.preSelect
      this.selectedType.risktype = ''
      // var risktypekeyoptions = []
      this.$store.dispatch('getRiskTypeKeys').then(() => {
        if (this.apiresult === true) {
          var i
          // write response
          // console.log('getRiskTypeKeys in RiskTypeList')
          // console.log(this.risktypekeyoptions)
          for (i = 0; i < this.risktypekeyoptions.length; i++) {
            this.options.push({ text: this.risktypekeyoptions[i].risk_type_name, value: this.risktypekeyoptions[i].id })
          }
        }
      }).catch(() => {
        this.$notify({
          title: 'Error',
          message: this.apiexception,
          type: 'error',
          duration: 2000
        })
      })
      // TBD
    },
    selectChanged: function(value) {
      // alert('Emitting change event')
      // alert(value)
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.0/theme-chalk/index.css")
</style>
