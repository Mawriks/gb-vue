<template>
  <div class="payment-add">
    <div>
      <h1 class="title" v-if="id">Edit payment #{{ id }}</h1>
      <h1 class="title" v-else>Add new payment in {{ category }}</h1>

      <formPaymentAdd
        :idProp="id"
        :categoryProp="category"
        :valueProp="value"
      />
    </div>
  </div>
</template>

<script>
import formPaymentAdd from "@/components/formPaymentAdd.vue";
import { mapGetters } from "vuex";
export default {
  name: "formPaymentAddView",
  components: {
    formPaymentAdd,
  },
  data() {
    return {
      category: null,
      value: null,
      id: null,
    };
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
  },
  methods: {
    getLinkParams() {
      if (location.search) {
        let params = new URLSearchParams(location.search);
        if (params.get("value")) {
          this.value = +params.get("value");
        }
      }
      if (this.$route.params.category) {
        this.category = this.$route.params.category;
      }
      if (this.$route.params.id) {
        this.id = +this.$route.params.id;
        this.category = this.getPaymentsList[this.id - 1].category;
        this.value = this.getPaymentsList[this.id - 1].value;
      }
    },
  },
  created() {
    this.getLinkParams();
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 44px;
  text-align: left;
}
.payment-add {
  display: flex;
}
</style>