import React, { useState } from "react";
import {
  Clock,
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Award,
  Bell,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import EnhancedRealEstateLanding from "./Landing1";
import RealEstateLanding from "./Landing2";
import PlanLanding from "./PlanLanding";

const NewLandingPage = () => {
  return (
    <>
      <EnhancedRealEstateLanding />
      {/* <PlanLanding /> */}
      <RealEstateLanding />
    </>
  );
};

export default NewLandingPage;
