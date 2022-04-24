<template>
  <form @submit.prevent="addPaymentData">
    <div>
      <input type="date" placeholder="Payment data" v-model="date" />
      <input type="number" placeholder="Payment value" v-model.number="value" />
    </div>
    <input type="text" placeholder="Payment category" v-model="category" />
    <br />
    <button class="btn">Add <span>+</span></button>
  </form>
</template>

<script>
export default {
  name: "formPaymentAdd",
  data() {
    return {
      category: null,
      value: null,
      date: null,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      const currentDate = new Intl.DateTimeFormat("ru-RU", options).format(
        today
      );
      return currentDate;
    },
  },
  methods: {
    convertDate(date) {
      if (date) {
        let dateArr = date.split("-");
        if (+dateArr[1] < 10) {
          return `${dateArr[2]}.0${+dateArr[1]}.${dateArr[0]}`;
        }
        return `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`;
      }
      return this.getCurrentDate;
    },
    addPaymentData() {
      const data = {
        date: this.convertDate(this.date),
        category: this.category,
        value: this.value,
      };
      this.$emit("addNewPayment", data);
      console.log(data);
    },
  },
};
</script>

<style scoped lang="scss">
form {
  max-width: 384px;
  text-align: right;
  div {
    display: flex;
    margin-bottom: 10px;
  }
}
input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  & + input {
    margin-left: 10px;
  }
}
</style>