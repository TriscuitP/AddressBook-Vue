<template>
  <div>
    <div>
      <!-- Trying to do transition nav bar (For later)-->
      <transition name="menu-popover">
        <ul class="MenuPopover">
          <li>Profile</li>
          <li>Subscriptions</li>
          <li>Log Out</li>
        </ul>
      </transition>
    </div>
    <div class="row">
      <h1 id="title">{{ msg }}</h1>
      <!-- First column to add to contact list -->
      <div class="column">
        <CreateContact></CreateContact>
      </div>
      <!-- Second column to display all contacts in scrollable table with filteredData -->
      <!-- Also create option to edit or delete contact from choosing from table -->
      <div class="column">

      </div>
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
      searchQuery: ''
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
#title {
  text-align: center;
}
.signOut {
  float: right;
}
.MenuPopover {
  position:absolute;
  top:0;
  right:0;
}
.menu-popover-enter,
.menu-popover-leave-to {
  opacity: 0;
  transform: rotateY(50deg);
}
.menu-popover-enter-to,
.menu-popover-leave {
  opacity: 1;
  transform: rotateY(0deg);
}
.menu-popover-enter-active,
.menu-popover-leave-active {
  transition: opacity, transform 200ms ease-out;
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
.column {
    float: left;
    width: 50%;
    text-align: center;
}
/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
</style>
