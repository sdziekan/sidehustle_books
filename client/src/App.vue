<template>
  <v-app>
    <v-container>
      <img src="./assets/3redbooks-300px.png">
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @require './stylus/main'
</style>
