import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FancyCard from './FancyCard';

const TrendingPlaces = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
        <FancyCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </View>
  );
};

export default TrendingPlaces;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
  },
});
