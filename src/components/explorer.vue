<template>
  <div>
    <router-link to="/home"><el-button type="info" plain>主页</el-button></router-link>
    <router-link to="/matches"><el-button type="info" plain>比赛</el-button></router-link>
    <router-link to="/result"><el-button type="info" plain>比赛结果</el-button></router-link>
    <router-link to="/rank"><el-button type="info" plain>积分榜</el-button></router-link>
    <router-link to="/teams"><el-button type="info" plain>战队</el-button></router-link>
    <router-view>这里展示路由组件</router-view>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "explorer"
}
</script>

<style scoped>
  div{
    text-align: center;
  }
</style>