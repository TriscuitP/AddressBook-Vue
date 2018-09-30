<template>
  <div class="register">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <h2>Register</h2>
      <div class="formation">
        <div class="form-group">
          <input type="text" v-model="firstName" placeholder="First Name">
          <!-- <div v-show="submitted && !firstname" class="invalid-feedback">First name is required</div> -->
        </div>
        <div class="form-group">
          <input type="text" v-model="lastName" placeholder="Last Name">
          <!-- <div v-show="submitted && !lastname" class="invalid-feedback">Last name is required</div> -->
        </div>
        <div class="form-group">
          <input type="text" v-model="username" placeholder="Username (Email)">
          <!-- <div v-show="submitted && !username" class="invalid-feedback">Username is required</div> -->
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Password">
        </div>
        <div class="form-group">
          <button v-on:click="addUser">Register</button>
          <!-- <button type="submit">Register</button> -->
          <router-link to="/Login" tag="button" type="submit">Got to login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../main'

export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register to AdBook',
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  },
  methods: {
    addUser() {
      // The createUserWithEmailAndPassword function return a Firebase promise,
      // with an onResolve and onReject callback
      auth.createUserWithEmailAndPassword(this.username, this.password).then(
        (user) => {
          alert('Regiester successful')
          this.$router.push('Login')
        },
        (err) => {
          alert('Something went wrong: ' + err.message)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
  margin-top: 60px;
  text-align: center;
}
.formation {
  align-items: center;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin: 20px;
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
