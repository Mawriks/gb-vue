<template>
  <v-layout column>
    <v-simple-table class="mb-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">Date</th>
            <th class="text-center">Category</th>
            <th class="text-center">Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, i) in payments" :key="i">
            <td>{{ elNumber + i + 1 }}</td>
            <td>{{ payment.date }}</td>
            <td>{{ payment.category }}</td>
            <td>{{ payment.value }}</td>
            <td>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    dense
                    v-for="(item, i) in items"
                    :key="i"
                    @click="item.action(payment, elNumber + i + 1)"
                  >
                    <v-list-item-title class="text-body-2 font-weight-light">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <p>Total: {{ getFPV }}</p>
  </v-layout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "paymentsList",
  data() {
    return {
      items: [
        {
          title: "Edit",
          action: this.editItem,
        },
        {
          title: "Remove",
          action: this.deleteItem,
        },
      ],
    };
  },
  props: {
    payments: {
      type: Array,
      default: () => [],
    },
    elementsOnPage: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    elNumber() {
      if (this.currentPage > 1) {
        return this.elementsOnPage * this.currentPage - this.elementsOnPage;
      }
      return 0;
    },
    getFPV() {
      return this.getFullPaymentValue;
    },
  },
  methods: {
    ...mapMutations(["removeDataFromPaymentsList"]),
    editItem(item, id) {
      if (id) {
        item.id = id;
      }
      this.$modal.show("editpayment", {
        title: "Edit payment",
        component: "formPaymentAdd",
        props: {
          item,
        },
      });
    },
    deleteItem(payment) {
      this.removeDataFromPaymentsList(payment);
    },
  },
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
  svg {
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
}
</style>