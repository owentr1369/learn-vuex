<template>
  <h1>OverView</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilted" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>

<script>
import { watch, computed, reactive, ref, watchEffect } from "vue";

export default {
  name: "OverViewPage",
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  setup(props, { emit }) {
    console.log(props.theme);
    console.log(emit);
    // context có thể hiểu là đại diện/hình thù của component
    // 1. ref nên dùng cho primitive type
    // 2. reactive nên dùng cho object, array k cần truy cập .value
    // 3. computed chạy lại liên tục khi value thay đổi (có trả giá trị)
    // 4. watch dùng để theo dõi 1 biến trong quá trình làm việc
    // (trả giá trị trước và sau khi thực hiện)
    // 5. watchEffect là computed phiên bản không yêu cầu trả dữ liệu
    const searchText = ref("");
    const customers = reactive(["Mec", "BMW", "Honda"]);
    const customersFilted = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });

    return {
      searchText,
      customersFilted,
    };
  },
};
</script>

<style>
</style>