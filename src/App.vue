<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
      <router-link to='/' exact>商品</router-link></div>
      <div class="tab-item">
      <router-link to='/ratings'>评价</router-link></div>
      <div class="tab-item">
      <router-link to='/sellers'>商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default{
    data(){
      return {
        seller:{}
      }
    },
    created(){
      this.$http.get('/api/seller').then((response)=>{
        response = response.body
        console.log(response)
        if(response.errno === 0){
          this.seller = response.data;
          console.log(this.seller)
        }
      })
    },
    components:{
      'v-header':header
    }
  }
</script>

<style>
  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .active{
    color: rgb(240,20,20);
  }
  a{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
</style>
<style lang="stylus" rel='stylesheet/stylus'>
@import './common/stylus/index.styl'
  .tab
    border-1px(rgba(7,17,27,0.1))
</style>
