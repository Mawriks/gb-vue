<template>
  <div class="calculator">
    <input
      type="number"
      class="calculator__input"
      @focus="clear($event)"
      v-model.number="operand1"
    />
    <input
      type="number"
      class="calculator__input"
      @focus="clear($event)"
      v-model.number="operand2"
    />
    = {{ result }}
    <div class="error" v-show="error != ''">
      <strong>Внимание!</strong> {{ error }}
    </div>
    <div class="calculator__keyboard">
      <button
        v-for="operator in operators"
        :key="operator"
        @click="calculator(operator)"
      >
        {{ operator }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcComp",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      operators: ["+", "-", "/", "*", "^"],
      error: "",
    };
  },
  methods: {
    clear(e) {
      e.target.value = "";
    },
    calculator(sighn = "+") {
      this.error = "";
      switch (sighn) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "/":
          if (this.operand2 != 0) {
            this.result = this.operand1 / this.operand2;
          } else {
            this.error = "Делить на ноль нелья!";
          }
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "^":
          this.result = Math.pow(this.operand1, this.operand2);
          break;
        default:
          this.result = 0;
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>