<template>  
  <el-carousel :interval="7000" type="card" height="60px" arrow="hover" trigger="click">
    <el-carousel-item v-for="item in helpTextArray" :key="item.id">      
        <div class="slider__contents">     
        {{ item.id }}) {{ item.text}}
        </div>
    </el-carousel-item>
  </el-carousel>      
</template>
<script>
  
export default {
    name: 'rotating-display',
    props: {
      helpTextArray: Array
    }
}
</script>
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,500);
  @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
  *, *:before, *:after {
   box-sizing: border-box;
 }

html, body {
  height: 100%;
}

body {
  color: #444;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}


.slider__nav:checked:nth-of-type(1) ~ .slider__inner {
  left: 0%;
}
.slider__nav:checked:nth-of-type(2) ~ .slider__inner {
  left: -100%;
}
.slider__nav:checked:nth-of-type(3) ~ .slider__inner {
  left: -200%;
}
.slider__nav:checked:nth-of-type(4) ~ .slider__inner {
  left: -300%;
}
.slider__inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
  -webkit-transition: left 0.4s;
  transition: left 0.4s;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row nowrap;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
}
.slider__contents {
  color: whitesmoke;
  height: 100%;
  padding: 2rem;
  text-align: center;
  vertical-align: middle;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-flex-flow: column nowrap;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.slider__image {
  font-size: 2.7rem;
      color: #2196F3;
}
.slider__caption {
  font-weight: 500;
  margin: 2rem 0 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}
.slider__txt {
  color: wheat;
  margin-bottom: 3rem;
  max-width: 300px;
}

@-webkit-keyframes check {
  50% {
    outline-color: #333;
    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
  }
  100% {
    outline-color: #333;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  }
}

@keyframes check {
  50% {
    outline-color: #333;
    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
  }
  100% {
    outline-color: #333;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  }
}
    
  .el-aside {
    color: #333;
  }
  .el-carousel__item h3 {
    color: #868e96;
    font-size: 15px;
    opacity: 0.75;
    line-height: 20px;
    margin: 0;    
  }
  .el-carousel__item:nth-child(2n) {
    background-color: goldenrod;color:gray;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: goldenrod;color: gray;
  }
  @import url("https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.0/theme-chalk/index.css")
</style>