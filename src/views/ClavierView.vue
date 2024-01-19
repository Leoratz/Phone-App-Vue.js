<script>

import { useContactStore } from '../stores/contact.js'
import { useCallStore } from '../stores/call.js'


export default {
  name: 'ClavierView',

  setup () {
    const contactStore = useContactStore();
    const callStore = useCallStore()

    return {
      contactStore,
      callStore
    }
  },

  computed: {
    phone () {
      return this.contactStore.phone
    }
  },

  methods: {
    addNumber (number) {
      this.contactStore.addNumber(number)
    },

  }
}
</script>

<template>
  
<div class="clavier">
  <p> {{ phone }}</p>
  <div class="top">
    <button @click="addNumber('1')">1</button>
    <button @click="addNumber('2')">2</button>
    <button @click="addNumber('3')">3</button>
  </div>
  <div class="middle">
    <button @click="addNumber('4')">4</button>
    <button @click="addNumber('5')">5</button>
    <button @click="addNumber('6')">6</button>
  </div>
  <div class="bottom">
    <button @click="addNumber('7')">7</button>
    <button @click="addNumber('8')">8</button>
    <button @click="addNumber('9')">9</button>
  </div>
  <div class="random">
    <button>*</button>
    <button @click="addNumber('0')">0</button>
    <button>#</button>
  </div>
  <button @click="addCall()">📞</button>
</div>
</template>

<style scoped>

.clavier {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #bc7d2c;
  background-color: #ffab40;
  cursor: pointer;
}

</style>
