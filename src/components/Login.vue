<template>
  <div class="login">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Login</h2>
    <div class="formation">
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password">
      </div>
      <div class="form-group">
        <button v-on:click="access">Login</button>
        <!-- <button type="submit">Login</button> -->
        <!-- <router-link to="/Home" tag="button">Login</router-link> -->
        <router-link to="/Register" tag="button">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../main'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login to Adbook',
      username: '',
      password: '',
    }
  },
  methods: {
    access() {
      auth.signInWithEmailAndPassword(this.username, this.password).then(
        (user) => {
          alert('Login successful')
          // Changed 'push' to 'replace' to change starting router
          this.$router.replace('Home')
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
.login {
  margin-top: 40px;
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
