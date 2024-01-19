<script>
import { useContactStore } from "@/stores/contact";


export default {
  name: "ContactView",
  setup() {
    const contactStore = useContactStore();
    
    return {
      contactStore,
    };
  },
  computed: {
    contact() {
      return this.contactStore.contact;
    },
  },
  methods: {
    makeCall(contact) {
      const now = new Date();
      const call = {
        name: contact.name,
        date: now.toISOString().split("T")[0],
        time: now.toTimeString().split(" ")[0].slice(0, 5),
      };
    },
  },
};
</script>

<template>
  <div class="contacts">
    <div v-for="item in contact" :key="item.name">
      <div class="contact">
        <p>{{ item.name }}</p>
        <p>{{ item.phone }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.contact {
  display: flex;
  background-color: grey;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>