<template>
  <v-app>
    <v-app>
      <v-navigation-drawer v-model="drawer1" app>
        <v-list>
          <v-expansion-panel app>
            <v-expansion-panel-content v-for="(item,i) in menu" :key="i">
              <div slot="header"> {{ item.header }}</div>
              <v-card>
                <v-card-text v-text="item.message"></v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed dark color="blue">
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon @click.stop="drawer1 = !drawer1"></v-toolbar-side-icon>
      </v-toolbar>
      <v-content>
        <v-container fluid justify-center align-center>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app inset fixed dark color="blue">
        <div class="pa-3">2018</div>
      </v-footer>

    </v-app>

  </v-app>
</template>

<script>
export default {
  name: 'app',

  data: () => ({
    drawer1: null,
    drawer2: null
    ,
    props: {
      source: String
    },
    menu: [
      { header: 'About', message: 'As an amateur developer, Tim Ferriss fan and book lover, I built this site to create a comprehensive database of book recommendations from the Tim Ferriss Show podcast. I am in no way affiliated with Tim Ferriss or the Tim Ferriss Show.' },
      { header: 'Contact', message: 'Please let me know what you think at sdziekan@gmail.com or @samsthesis on Twitter.' },
      { header: 'Disclaimer', message: 'I have placed Amazon Affiliate links on this site to help offset the cost of building and maintaining it. ' }
    ]
  })

}
</script>

<style lang="stylus">
  @require './stylus/main'
</style>
