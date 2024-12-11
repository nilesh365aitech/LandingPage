import React, { useState } from 'react';
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
  ArrowUpRight
} from 'lucide-react';
import EnhancedRealEstateLanding from './Landing1';
import RealEstateLanding from './Landing2';

const NewLandingPage = () => {
 

  return (
    <>
   
    <EnhancedRealEstateLanding/>
    <RealEstateLanding/>
    </>
  );
};

export default NewLandingPage;