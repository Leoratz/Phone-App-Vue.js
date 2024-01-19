<script>

import { useContactStore } from '../stores/contact.js'

export default {
  name: 'JournalView',

  setup () {
    const contactStore = useContactStore();

    return {
      contactStore
    }
  },

  computed: {
    num () {
      return this.contactStore.num
    }
  },

  methods: {
    addConctact () {
      this.contactStore.addContact()
    },

    addNumber (number) {
      this.contactStore.addNumber(number)
    },
  }
}

</script>

<template>

</template>
