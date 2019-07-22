<template>
  <div class="main">
    <Header title="我的喵喵" />
    <div id="content">
      <Login />
    </div>
    <tabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import tabBar from "@/components/tabBar";
import Login from "@/components/Login";

export default {
  name: "Mine",
  components: {
    Header,
    tabBar,
    Login
  }
};
</script>

<style>
</style>
