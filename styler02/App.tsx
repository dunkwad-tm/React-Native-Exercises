import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import TrendingPlaces from './components/TrendingPlaces';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
// import FancyCard from './components/TrendingPlaces/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <TrendingPlaces />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
