<template>
  <v-app>

    <v-content>
      <v-navigation-drawer app></v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-title>Tim Ferriss Podcast Book Database</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>About</v-btn>
          <v-btn flat>Contact</v-btn>
          <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-toolbar-items>

      </v-toolbar>
      <v-container>

        <router-view/>
        <v-footer app>
          <v-spacer></v-spacer>
          <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @require './stylus/main'
  img 
    margin 25px 0 40px 40%
    width 20%

</style>
