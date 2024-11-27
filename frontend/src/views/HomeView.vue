<script setup lang="ts">
const url="",name="张三",tribe="x族",province="xx省",city="哥谭市",years="1145.1.14-2077.1.1",video_src="https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4";
</script>

<template>
  <div class="leaf">
    <div class="left" />
    <div class="move" />
    <div class="right" />
  </div>

  <el-main class="main">
    <br/>
    <br/>
    <br/>
    <el-row>
      <el-col :span="14">
        <el-image :src="url" style="height: 300px;width: 200px"></el-image>
      </el-col>
      <el-col :span="10">
        <div class="frontcard">
          <h2>{{ name }}</h2>
          <br/>
          <!--<el-text size="large">{{ tribe }}</el-text>-->
          <p>{{ tribe }}</p>
          <br/>
          <!--<el-text size="large">{{ province }}</el-text>-->
          <p>{{ province }}</p>
          <br/>
<!--          <el-text size="large">{{ city }}</el-text>-->
          <p>{{ city }}</p>
          <br/>
<!--          <el-text size="large">{{ years }}</el-text>-->
          <p>{{ years }}</p>
        </div>
      </el-col>
    </el-row>
    <br/>
    <center><h2>影像生平志向</h2></center>
    <br/>
    <center>
      <video :src="video_src" controls style="width: 90%; height: 200px"></video>
    </center>


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
.frontcard {
  font-size: 16px;
  margin: 2px;
}
</style>
