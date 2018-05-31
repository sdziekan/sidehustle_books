<template>
  <v-app>
    <v-app>
      <v-navigation-drawer v-model="drawer1" app>
        <v-card>
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
        </v-card>
      </v-navigation-drawer>
      <v-toolbar app fixed dark>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon @click.stop="drawer1 = !drawer1"></v-toolbar-side-icon>
      </v-toolbar>
      <v-content>
        <v-container fluid justify-center align-center>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app inset fixed> 2018</v-footer>

    </v-app>
    <!-- <v-content>
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
                                                                                                  <v-navigation-drawer v-model="drawer2" right app>

                                                                                                    <v-list>

                                                                                                      <v-list-group prepend-icon="account_circle" value="true">
                                                                                                        <v-list-tile slot="activator">
                                                                                                          <v-list-tile-title>Users</v-list-tile-title>
                                                                                                        </v-list-tile>
                                                                                                        <v-list-group sub-group no-action value="true">
                                                                                                          <v-list-tile slot="activator">
                                                                                                            <v-list-tile-title>Admin</v-list-tile-title>
                                                                                                          </v-list-tile>
                                                                                                          <v-list-tile v-for="(admin, i) in admins" :key="i" @click="">
                                                                                                            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                                                                                                            <v-list-tile-action>
                                                                                                              <v-icon v-text="admin[1]"></v-icon>
                                                                                                            </v-list-tile-action>
                                                                                                          </v-list-tile>
                                                                                                        </v-list-group>
                                                                                                        <v-list-group sub-group no-action>
                                                                                                          <v-list-tile slot="activator">
                                                                                                            <v-list-tile-title>Actions</v-list-tile-title>
                                                                                                          </v-list-tile>
                                                                                                          <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="">
                                                                                                            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                                                                                                            <v-list-tile-action>
                                                                                                              <v-icon v-text="crud[1]"></v-icon>
                                                                                                            </v-list-tile-action>
                                                                                                          </v-list-tile>
                                                                                                        </v-list-group>
                                                                                                      </v-list-group>
                                                                                                    </v-list>

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
                                                                                                  </v-navigation-drawer>
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
                                                                                                </v-content> -->

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
      { header: 'About', message: 'This is a personal project of Salvatore Dziekan' },
      { header: 'Contact', message: 'sdziekan@gmail.com' }
    ]
  })

}
</script>

<style lang="stylus">
  @require './stylus/main'
</style>
