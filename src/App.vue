<template>
    <div>
      <!-- <user-list v-bind:data="users" v-bind:users-coming="usersWhoWillCome"></user-list> -->
      <router-view v-bind:data="users" v-bind:users-coming="usersWhoWillCome"></router-view>
      <div v-for="user in usersWhoWillCome" :key="user.id">
          {{user.id}} - {{user.email}}
      </div>
    </div>
</template>

<script>
// import UserList from './UserList.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    // 'user-list': UserList
  },
  data () {
    return {
      usersURL: 'https://jsonplaceholder.typicode.com/users',
      users: [], // au depart intialiser puis executer avec le then
      usersWhoWillCome: []
    }
  },
  created: function () { // created est un lifecycle hook
    axios.get(this.usersURL) // req de axios, url à requeter ds data usersURL
      .then((response) => {
        this.users = response.data
        // console.log(vm.users);
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
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
