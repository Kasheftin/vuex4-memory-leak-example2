<template>
  <div>
    <p>
      There're {{ regularItemsCount }} regular items in the store.
    </p>
    <p>
      Add <input v-model="addRegularItemsCount" type="number" style="width: 70px"> items in a regular way.
      <button @click="addRegularItems">
        Add
      </button>
      <button @click="clearRegularItems">
        Clear regular items
      </button>
    </p>
    <hr>
    <p>
      There're {{ frozenItemsCount }} frozen items in the store.
    </p>
    <p>
      Add <input v-model="addFrozenItemsCount" type="number" style="width: 70px"> items, apply Object.freeze for each.
      <button @click="addFrozenItems">
        Add
      </button>
      <button @click="clearFrozenItems">
        Clear frozen items
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addRegularItemsCount: 100,
      addFrozenItemsCount: 100
    }
  },
  computed: {
    regularItemsCount () {
      return this.$store.state.example.regularItems.length
    },
    frozenItemsCount () {
      return this.$store.state.example.frozenItems.length
    }
  },
  methods: {
    addRegularItems () {
      this.$store.commit('example/addRegularItems', Array(Number(this.addRegularItemsCount)).fill().map(() => this.createHeavyItem(3)))
    },
    clearRegularItems () {
      this.$store.commit('example/setRegularItems', [])
    },
    addFrozenItems () {
      this.$store.commit('example/addFrozenItems', Array(Number(this.addFrozenItemsCount)).fill().map(() => this.createHeavyItem(3)))
    },
    clearFrozenItems () {
      this.$store.commit('example/setFrozenItems', [])
    },
    createHeavyItem (it, childrenCount = 10) {
      return {
        hashes: Array(10).fill('Lorem ipsum dolor sit amet.'),
        children: it ? Array(childrenCount).fill().map(() => this.createHeavyItem(it - 1, childrenCount)) : []
      }
    }
  }
}
</script>
