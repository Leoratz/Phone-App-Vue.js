<script>
import FormContact from "@/components/FormContact.vue";

import { useContactStore } from "@/stores/contact";
export default {
  name: "FormView",
  components: {
    FormContact,
  },
  setup(){
    const contactsStore = useContactStore();
    return { contactsStore };
  },
  computed: {
    contacts() {
      return this.contactsStore.contacts;
    },
  },

  
};
</script>

<template>
  <FormContact/>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>