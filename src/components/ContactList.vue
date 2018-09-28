<template>
  <div>



    <!-- <div class="people">
      <div class="container">
        <template v-for="c in contacts">
          <Contacts :person="c"></Contacts>
        </template>
      </div>
    </div> -->
  </div>
</template>

<script>
// https://vuejs.org/v2/examples/grid-component.html
// https://github.com/spatie/vue-table-component
// https://medium.com/@darrenjennings/data-driven-vue-js-53e84f16e28f
// http://www.developerdrive.com/2017/07/creating-a-data-table-in-vue-js/
import { db } from '../main'
import Contacts from './Contacts'

export default {
  name: 'ContactList',
  props: {
    contacts: [],
    filterKey: ''
  },
  components: {
    Contacts
  },
  data() {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      columns: [
        'firstName',
        'lastName',
        'city',
        'phone',
        'email'
      ]
    }
  },
  computed: {
    // Computed value as a derived value that will be automatically updated
    // whenever one of the underlying values used to calculate it is updated
    // TODO: Change to only filter to match columns list
    filteredData() {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.contacts
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.people {
    background: #F7F8FB;
    padding: 30px 0;
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
