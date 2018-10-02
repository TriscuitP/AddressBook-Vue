<template>
  <div>
    <v-layout row>
      <v-flex v-for="(c, idx) in contacts" :key="idx" xs4>
        <v-card class="formation">
          <v-img :src="c.image" height="300px">
            <v-layout column fill-height>
              <v-card-title>
                <v-btn dark icon>
                  <v-icon>chevron_left</v-icon>
                </v-btn>

                <v-spacer></v-spacer>
                <!-- Maybe do a popup to make edit -->
                <!-- Can also put delete button in edit card -->
                <v-btn dark icon class="mr-3" v-on:click="editContact()">
                  <v-icon>edit</v-icon>
                </v-btn>
                 <v-btn dark icon v-on:click="deleteContact(c.id)">
                  <v-icon>delete</v-icon>
                </v-btn>

                <v-btn dark icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-card-title>

              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">{{c.firstName}} {{c.lastName}}</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">phone</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{c.phone}}</v-list-tile-title>
                <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>chat</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{c.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{c.address}}</v-list-tile-title>
                <v-list-tile-sub-title>{{c.city}}, {{c.state}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">cake</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{c.birthdate}}</v-list-tile-title>
                <v-list-tile-sub-title>Birthdate</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// https://vuetifyjs.com/en/components/lists
import { db } from '../main'

export default {
  name: 'ContactList',
  props: {
    contacts: [],
  },
  data() {
    return {

    }
  },
  methods: {
    editContact() {

    },
    deleteContact(id) {

      db.collection('contacts').doc(id).delete()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formation {
    padding: 10px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
