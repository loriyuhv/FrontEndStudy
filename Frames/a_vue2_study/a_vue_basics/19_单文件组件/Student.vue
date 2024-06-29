<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生地址：{{ age }}</h2>
    <button @click="showName">学生姓名</button>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等等）
  // export const student { // 导出方式一：命名导出 写法一（分别暴露） import {???} from ???
  export default { // 导出方式二：默认导出 写法二 import ??? from ???
    name: 'Student',
    data(){
      return {
        studentName: 'Jerry',
        age: 18,
      }
    },
    methods: {
      showName() {
        alert(this.studentName)
      }
    }
  }
  // export {school} // 导出方式一：命名导出 写法二 （统一暴露）
  // export default school // 导出方式二：默认导出 写法一
</script>