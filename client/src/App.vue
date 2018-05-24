<template>
  <v-app>

    <v-content>
      <v-navigation-drawer clipped v-model="drawer1" fixed right app>
        <v-list dense>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home1</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact1</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-navigation-drawer v-model="drawer2" right app>
          <v-list dense>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>email</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>sdziekan@gmail.com</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Contact2</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer> -->
      <v-toolbar dark fixed app>
        <v-toolbar-title>Tim Ferriss Podcast Book Database</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat @click.stop="drawer1 = !drawer1">About</v-btn>
          <v-btn flat @click.stop="drawer2 = !drawer2">Contact</v-btn>

        </v-toolbar-items>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
  name: 'app',

  data: () => ({
    drawer1: null,
    drawer2: null
  }),
  props: {
    source: String
  }
}
</script>

<style lang="stylus">
  @require './stylus/main'
  img 
    margin 75px 0 40px 40%
    width 20%

</style>
