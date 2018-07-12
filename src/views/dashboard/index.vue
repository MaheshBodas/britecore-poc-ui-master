<template>  
  <div class="app-container calendar-list-container">
  <el-container style="height: 500px;width:100%; border: 1px soclid #eee">    
      <el-header style="height: 90px; border: 1px solid #eee">
        <div class="dashboard-label">Hi, {{name}}</div>
        <div class="dashboard-label">Roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
        <div class="dashboard-label">This site is best viewed with latest Firefox or Chrome with 80% zoom.</div>
      </el-header>       
      <el-main style="height: 350px; border: 1px solid #eee">  
        <rotating-display v-bind:helpTextArray="carouselhelptext"></rotating-display>
      </el-main>
  </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DashboardConst } from './classes'
import RotatingDisplay from '@/components/RotatingDisplay'
export default {
  name: 'dashboard',
  components: {
    RotatingDisplay
  },
  data: function() {
    return {
      carouselhelptext: []
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ]),
    isAdminUser: function() {
      var isAdminUser = false
      console.log('this.roles')
      console.log(this.roles)
      if (this.roles === 'admin') {
        isAdminUser = true
      }
      console.log('isAdminUser')
      console.log(isAdminUser)
      return isAdminUser
    }
  },
  created() {
    // this.fetchData()
    this.populateHelpText()
  },
  methods: {
    populateHelpText() {
      var i
      for (i = 0; i < DashboardConst.CarouselHelpText.length; i++) {
        this.carouselhelptext.push(DashboardConst.CarouselHelpText[i])
      }
    }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped> 
 .dashboard-label{
    font-size: 15px;
    font-weight: bold;
    opacity: 0.75;
    line-height: 20px;
    margin: 0;
    text-align: right;       
    background-color: lightblue;color: blue;
 } 
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
