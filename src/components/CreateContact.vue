<template>
  <div>
    <h2>Add a contact</h2>
    <!-- TODO: Doesn't clear input text after submit -->
    <form id="newContact" @submit="addContact(firstName, lastName, birthdate, address, city, state, phone, email, image)">
      <div class="form-group">
        <input v-model="firstName" placeholder="First Name">
        <!-- <div v-show="submitted && !firstname" class="invalid-feedback">First name is required</div> -->
      </div>
      <div class="form-group">
        <input v-model="lastName" placeholder="Last Name">
        <!-- <div v-show="submitted && !lastname" class="invalid-feedback">Last name is required</div> -->
      </div>
      <div class="form-group">
        <input v-model="birthdate" placeholder="Birth Date">
        <!-- <div v-show="submitted && !username" class="invalid-feedback">Birthdate is required</div> -->
      </div>
      <div class="form-group">
        <input v-model="address" placeholder="Address">
      </div>
      <div class="form-group">
        <input v-model="city" placeholder="City">
      </div>
      <div class="form-group">
        <input v-model="state" placeholder="State">
      </div>
      <div class="form-group">
        <input v-model="phone" placeholder="Phone">
      </div>
      <div class="form-group">
        <input v-model="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input v-model="image" placeholder="Image URL">
      </div>
      <div class="form-group">
        <button type="submit" v-bind:submitted="true">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'CreateContact',
  data () {
    return {
      firstName: '',
      lastName: '',
      birthdate: '',
      address: '',
      city: '',
      state: '',
      phone: '',
      email: '',
      image: '',
      submitted: false
    }
  },
  methods: {
    addContact(firstName, lastName, birthdate, address, city, state, phone, email, image) {
      db.collection('contacts').add({
        firstName,
        lastName,
        birthdate,
        address,
        city,
        state,
        phone,
        email,
        image
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin: 5px;
  width: 20%;
  padding: 3px;
}
button {
  margin: 5px;
  width: 10%;
  cursor: pointer;
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
