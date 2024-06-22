import { lazy } from "react";
import { Home } from "@screen/Home";
// import { Dashboard } from "@screen/Dashboard/screens/dashboard";
const Dashboard = lazy(() =>
  import('@screen/Dashboard/screens/dashboard')
    .then(({ Dashboard }) => ({ default: Dashboard }))
);
import { Rewards } from "@screen/Dashboard/screens/rewards";
import { Deposit } from "@screen/Dashboard/screens/deposit";
import { Withdraw } from "@screen/Dashboard/screens/withdraw";
import { BuyPower } from "@screen/Dashboard/screens/buyPower";
import { Referral } from "@screen/Dashboard/screens/referral";

export interface IRouteConfig {
  key: string,
  name: string;
  path: string;
  component: JSX.Element;
}

export const routes: Array<IRouteConfig> = [
  {
    key: '1',
    name: "home",
    path: "/",
    component: (
      <Home />
    ),
  },
  {
    key: '2',
    name: "dashboard",
    path: "/dashboard",
    component: (
      <Dashboard />
    ),
  },
  {
    key: '3',
    name: "reward",
    path: "/dashboard/rewards",
    component: (
      <Rewards />
    ),
  },

  {
    key: '4',
    name: "deposit",
    path: "/dashboard/deposit",
    component: (
      <Deposit />
    ),
  },
  {
    key: '5',
    name: "withdraw",
    path: "/dashboard/withdraw",
    component: (
      <Withdraw />
    ),
  },
  {
    key: '6',
    name: "buy power",
    path: "/dashboard/buy-power",
    component: (
      <BuyPower />
    ),
  },
  {
    key: '7',
    name: "referral",
    path: "/dashboard/referral",
    component: (
      <Referral />
    ),
  },
];
