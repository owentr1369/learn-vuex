<template>
  <nav class="nav">
    <router-link class="link" to="/">Over View</router-link>
    <router-link class="link" :to="{ name: 'transactions-route' }"
      >Transactions</router-link
    >
    <router-link class="link" to="/budgets">Budgets</router-link>
    <router-link class="link" to="/reports">Reports</router-link>
    <router-link class="link" to="/settings">Settings</router-link>
    <router-view />
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.link {
  padding: 10px;
  background-color: #777;
  margin: 4px;
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}
</style>