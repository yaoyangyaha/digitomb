<script setup lang="ts">

</script>

<template>
  <div class="leaf">
    <div class="left" />
    <div class="move" />
    <div class="right" />
  </div>
  <el-main class="main">

  </el-main>
</template>

<style scoped lang="scss">
.leaf {
  width: 100vw;
  position: absolute;
  >* {
    width: 100%;
    height: 222px;
    position: absolute;
    background-repeat: round;
  }
  .left {
    background-image: url("@/assets/leftleaf.png");
  }
  .right {
    background-image: url("@/assets/rightleaf.png");
  }
  .move {
    background-image: url("@/assets/moveleaf.png");
  }
}
.main {
  height: 2390px;
  background: url("@/assets/background.jpg");
  background-size: 100% auto;
}
</style>
