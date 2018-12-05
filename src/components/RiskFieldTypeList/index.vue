/* https://jsfiddle.net/bgzhw68m/405/ */
<template> 
  <el-select v-model="selectedType.risk_type_field_enum" size="mini" @change="selectChanged" clearable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.text"
      :value="item.value">
    </el-option>
  </el-select>  
</template> 

<script>
  export default {
    name: 'risk-field-type-list',
    props: {
      preSelect: String,
      selectedType: Object
    },
    data: function() {
      return {
        // value: '',
        options: [
          { text: 'currency', value: 'currency' },
          { text: 'date', value: 'date' },
          { text: 'float', value: 'float' },
          { text: 'integer', value: 'integer' },
          { text: 'text', value: 'text' }
        ]
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
        this.selectedType.risk_type_field_enum = 'text'
      },
      selectChanged: function(value) {
      // alert('selectChanged')
      // alert(value)
      // this.$emit('change', value)
      }
    }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.0/theme-chalk/index.css")
</style>
