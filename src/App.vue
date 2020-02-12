<template>
  <div id="app">
    <ul class="user-list">
      <li v-for="(user, userIndex) in users" 
          :key="user.id">
        <div>
          <strong>id: </strong>
          {{ user.id }}
        </div>
        <div>
          <strong>name:</strong>
           {{ user.name }}
        </div>
        <div>
          <strong>email:</strong>
           {{ user.email }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  created () {
    axios.get('/users').then( ({ data }) => {
      this.users = data.users
    })
  },
  data () {
    return {
      users: []
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.user-list {
  list-style-type: none;
  width: 500px;
  margin:0 auto;
}
.user-list li {
  text-align: left;
  padding: 10px;
}
.user-list li:not(:last-child) {
  border-bottom: 1px solid #E5E9F2;
}
</style>
