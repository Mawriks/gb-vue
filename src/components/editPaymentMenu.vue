<template>
  <div>
    <router-link :to="{ name: 'editpayment', params: { id: paymentId + 1 } }"
      >Edit</router-link
    >
    <button @click="removePayment">Remove</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "editPaymentMenu",
  props: {
    paymentId: {
      type: Number,
    },
  },
  methods: {
    ...mapMutations(["removeDataFromPaymentsList"]),
    removePayment() {
      this.removeDataFromPaymentsList(this.paymentId);
    },
  },
};
</script>

<style scoped lang="scss">
</style>