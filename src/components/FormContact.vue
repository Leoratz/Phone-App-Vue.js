
<script>
import { useContactStore } from "@/stores/contact";
export default {
  name: "FormContact",
  data() {
    return {
      formContact: {
        name: "",
        phone: "",
      },
    };
  },
  setup() {
    const contactsStore = useContactStore();
    return { contactsStore };
  },
  methods: {
    ajoutContact() {
      this.contactsStore.ajoutContact(this.formContact);
      this.formContact = { name: "", phone: "" };
    },
  },
};
</script>

<template>
  <form @submit.prevent="ajoutContact">
    <input type="text" placeholder="Nom" v-model="formContact.name" />
    <input
      type="text"
      placeholder="Numéro"
      v-model="formContact.phone"
    />
    <button type="submit">Ajouter au contact</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #bc7d2c;
}

button {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #bc7d2c;
  background-color: #ffab40;
  cursor: pointer;
}


</style>