<template>
  <div class="payments">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, i) in payments" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ payment.date }}</td>
          <td>{{ payment.category }}</td>
          <td>{{ payment.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "paymentsList",
  props: {
    payments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-spacing: 0;
}
th,
td {
  border-bottom: 1px solid #ced4da;
}
th {
  padding: 20px 0;
}
td {
  padding: 10px 0;
}
</style>