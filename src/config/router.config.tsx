import { Home } from "@screen/Home";
import { Dashboard } from "@screen/Dashboard/screens/dashboard";
import { Rewards } from "@screen/Dashboard/screens/rewards";
import { Deposit } from "@screen/Dashboard/screens/deposit";
import { Withdraw } from "@screen/Dashboard/screens/withdraw";
import { BuyPower } from "@screen/Dashboard/screens/buyPower";
import { Referral } from "@screen/Dashboard/screens/referral";

export interface IRouteConfig {
  name: string;
  path: string;
  component: JSX.Element;
}

export const routes: Array<IRouteConfig> = [
  {
    name: "home",
    path: "/",
    component: (
      <Home />
    ),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: (
      <Dashboard />
    ),
  },
  {
    name: "reward",
    path: "/dashboard/rewards",
    component: (
      <Rewards />
    ),
  },

  {
    name: "deposit",
    path: "/dashboard/deposit",
    component: (
      <Deposit />
    ),
  },
  {
    name: "withdraw",
    path: "/dashboard/withdraw",
    component: (
      <Withdraw />
    ),
  },
  {
    name: "buy power",
    path: "/dashboard/buy-power",
    component: (
      <BuyPower />
    ),
  },
  {
    name: "referral",
    path: "/dashboard/referral",
    component: (
      <Referral />
    ),
  },
];
