<template>
  <div class="home">
    <div>
      <header>
        <h1 class="title">My personal costs</h1>
      </header>
      <formVisiabilityButton
        :show="show"
        @changeVisiability="changeVisiability"
      />
      <div v-show="show">
        <formPaymentAdd @addNewPayment="addPaymentData" />
      </div>
      <paymentsList :payments="currentPageElements" />
      <paginationModule
        :current="current"
        :length="paymentsList.length"
        :elementsOnPage="elementsOnPage"
        @changePage="changePage"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import paymentsList from "@/components/paymentsList.vue";
import formVisiabilityButton from "@/components/formVisiabilityButton.vue";
import formPaymentAdd from "@/components/formPaymentAdd.vue";
import paginationModule from "@/components/paginationModule.vue";

export default {
  name: "HomeView",
  components: {
    paymentsList,
    formVisiabilityButton,
    formPaymentAdd,
    paginationModule,
  },
  data() {
    return {
      show: false,
      paymentsList: [],
      current: 1,
      elementsOnPage: 3,
    };
  },
  computed: {
    currentPageElements() {
      return this.paymentsList.slice(
        this.elementsOnPage * (this.current - 1),
        this.elementsOnPage * (this.current - 1) + this.elementsOnPage
      );
    },
  },
  methods: {
    changePage(page) {
      this.current = page;
    },
    changeVisiability() {
      this.show = !this.show;
    },
    addPaymentData(data) {
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
.title {
  font-size: 44px;
}
.home {
  display: flex;
}
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  margin-bottom: 20px;
  span {
    margin-left: 10px;
    font-size: 16px;
  }
}
</style>
