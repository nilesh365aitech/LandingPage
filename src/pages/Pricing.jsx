import React from "react";
import PricingTable from "../components/pricingpart";
import Pricing1 from "../components/Pricing1";
import IntegrationsTable from "../components/IntegrationTable";
import SupportTable from "../components/SupportTable";
import Pricing0 from "../components/Pricing0";
import PricingCards from "../components/PricingCards";

const Pricing = () => {
  return (
    <>
      <PricingCards />
      {/* <Pricing1/> */}
      <Pricing0 />
      <PricingTable />
      <IntegrationsTable />
      <SupportTable />
    </>
  );
};

export default Pricing;
