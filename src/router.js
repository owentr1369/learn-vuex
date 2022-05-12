import { createRouter, createWebHistory } from "vue-router";
import OverViewPage from "./pages/OverView.vue";
import TransactionsPage from "./pages/TransactionsPage.vue";
import BudgetsPage from "./pages/BudgetsPage.vue";
import ReportsPage from "./pages/ReportsPage.vue";
import SettingsPage from "./pages/SettingsPage.vue";
import TransactionsDetail from "./pages/TransactionsDetail.vue";
import NotFound404Page from "./pages/NotFound404Page.vue";

const routes = [
  {
    path: "/",
    component: OverViewPage,
  },
  {
    path: "/transactions",
    name: "transactions-route",
    component: TransactionsPage,
  },
  {
    path: "/transactions/:id",
    name: "transaction-details-route",
    component: TransactionsDetail,
  },
  {
    path: "/budgets",
    component: BudgetsPage,
  },
  {
    path: "/reports",
    component: ReportsPage,
  },
  {
    path: "/settings",
    component: SettingsPage,
  },
  {
    path: "/ts",
    redirect: "/transactions",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound404Page,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
