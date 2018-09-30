<template>
  <div>
    <div class="text-xs-center">
      <v-toolbar color="rgb(250, 49, 65)" dark>
        <v-menu open-on-hover bottom offset-y>
          <!-- <v-btn slot="activator" color="rgb(250, 49, 65)" dark>Menu</v-btn> -->
          <v-icon slot="activator" color="primary" dark>list</v-icon>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title>Edit Profile</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>Subscription</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logout">
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-toolbar-title>AdBook</v-toolbar-title>
      </v-toolbar>
    </div>
    <div class="formation">
      <CreateContact></CreateContact>
    </div>
    <h2>Search</h2>
    <form>
      <input name="query" v-model="searchQuery">
    </form>
    <div>
      <ContactList :contacts="contacts"></ContactList>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../main'
import CreateContact from './CreateContact'
import ContactList from './ContactList'

export default {
  name: 'Home',
  components: {
    CreateContact,
    ContactList
  },
  data () {
    return {
      msg: 'Welcome to AdBook',
      contacts: [],
      searchQuery: '',
      menuItems: [
        { title: 'Edit Proile' },
        { title: 'Subscription' },
        { title: 'Log Out' }
      ],
    }
  },
  firestore () {
    return {
      contacts: db.collection('contacts').orderBy('firstName')
    }
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.replace('Login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formation {
  margin: auto;
  width: 50%;
  border: 3px;
  padding: 10px;
  align-items: center;
}
button {
  margin: 20px;
  width: 10%;
  cursor: pointer;
}
h1 {
  background-color: rgb(250, 49, 65);
  font-weight: normal;
}
h2 {
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
