<template> <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">学校名称</button>
  </div>
</template>

<script> // 组件交互相关的代码（数据、方法等等）
  export default {
    name: 'School',
    data(){
      return {
        schoolName: '南昌工学院',
        address: '江西省南昌市',
      }
    },
    methods: {
      showName() {
        alert(this.schoolName)
      }
    }
  }
  // export default school
</script>

<style> /* 组件的样式 */
  .demo {
  background-color: orange;
  }
</style>