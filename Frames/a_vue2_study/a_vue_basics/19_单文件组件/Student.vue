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
  export default {
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

  // export default school
</script>