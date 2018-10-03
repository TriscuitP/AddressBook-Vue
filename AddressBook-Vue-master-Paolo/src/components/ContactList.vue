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
                <v-btn dark icon class="mr-3" >
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
          
        <input v-model="data" placeholder="edit contact">
        <v-bind c.phone:="phone">
        </v-bind>
        <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo" @click="editContactPhone(c.firstName, c.lastName, c.birthdate, c.address, c.city, c.state, data, c.mail, c.image, c.id)">phone</v-icon>
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
                <v-icon color="indigo" @click="editContactEmail(c.firstName, c.lastName, c.birthdate, c.address, c.city, c.state, c.phone, data, c.image, c.id)">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{c.email}}</v-list-tile-title>
                <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo" @click="editContactAddress(c.firstName, c.lastName, c.birthdate, data, c.city, c.state, c.phone, c.mail, c.image, c.id)">location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{c.address}}</v-list-tile-title>
                <v-list-tile-sub-title>{{c.city}}, {{c.state}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo" @click="editContactBirthday(c.firstName, c.lastName, data, c.address, c.city, c.state, c.phone, c.mail, c.image, c.id)">cake</v-icon>
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
    editContactPhone(firstName, lastName, birthdate, address, city, state, phone, email, image, id) {
      db.collection('contacts').doc(id).set({phone: phone}, {merge: true})
    },
    editContactEmail(firstName, lastName, birthdate, address, city, state, phone, email, image, id) {
      db.collection('contacts').doc(id).set({email: email}, {merge: true})
    },
    editContactAddress(firstName, lastName, birthdate, address, city, state, phone, email, image, id) {
      db.collection('contacts').doc(id).set({address: address}, {merge: true})
    },
    editContactBirthday(firstName, lastName, birthdate, address, city, state, phone, email, image, id) {
      db.collection('contacts').doc(id).set({birthdate: birthdate}, {merge: true})
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
