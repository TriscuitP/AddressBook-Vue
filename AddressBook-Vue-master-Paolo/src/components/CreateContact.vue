<template>
  <div>
    <h2>Add a contact</h2>
    <!-- TODO: Doesn't clear input text after submit -->
    <!-- TODO: Make better form -->
    <form class="formation" @submit="addContact(firstName, lastName, birthdate, address, city, state, phone, email, image)">
      <div class="form-group1">
        <input v-model="firstName" placeholder="First Name">
        <!-- <div v-show="submitted && !firstname" class="invalid-feedback">First name is required</div> -->
      </div>
      <div class="form-group1">
        <input v-model="lastName" placeholder="Last Name">
        <!-- <div v-show="submitted && !lastname" class="invalid-feedback">Last name is required</div> -->
      </div>
      <div class="form-group1">
        <input v-model="birthdate" placeholder="Birth Date">
        <!-- <div v-show="submitted && !username" class="invalid-feedback">Birthdate is required</div> -->
      </div>
      <div class="form-group1">
        <input v-model="address" placeholder="Address">
      </div>
      <div class="form-group1">
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
      <div class="form-group-add">
        <button type="submit" v-bind:submitted="true">Add</button>
      </div>
    </form>
    <br>
    <br>
    <br>
    <br>
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
.formation {
  align-items: center;
}
input {
  margin: 10px;
  width: 75%;
  padding: 10px;
  border-bottom: 2px solid red;
}
.form-group-add {
  text-align: right;
  float: center;
}
button {
  margin: 10px;
  width: 30%;
  cursor: pointer;
  font-size: 25px;
  background-color: #CACACA;
  border-radius: 2px;
}
button:hover {
  background-color: #A5A5A5;
}
h1, h2 {
  font-weight: normal;
  align-items: center;
  text-align: center;
  background-color: #E1E1E1;
  width: 77%;
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
