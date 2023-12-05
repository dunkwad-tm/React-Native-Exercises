import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  var cardImage = require('../assets/gms2post.jpg');

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.cardHeader}>You should check this out soon!</Text>
        </View>
        <Image
          source={cardImage}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.cardBody} numberOfLines={3}>
            It's here! We're very proud to officially announce GameMaker Studio 2,
            the next evolution of our flagship game development tool. Studio 2 is
            not just a new version of GameMaker: Studio, it has been rewritten
            from the ground up to improve and expand upon the foundation laid by
            its predecessor. A whole new codebase, a whole new UI, a whole new GameMaker!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => { openWebsite('https://gamemaker.io/en/blog/introducing-gamemaker-studio-2'); }}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => { openWebsite('https://gamemaker.io/en/blog/author/gavin-smart'); }}
          >
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  card: {
    height: 380,
    width: 340,

    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    elevation: 4,
    backgroundColor: '#E07C24',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
    width: 'auto',
    // marginBottom: 8,
    // borderTopLeftRadius: 6,
    // borderTopRightRadius: 6,
  },
  bodyContainer: {
    padding: 14,
  },
  cardBody: {
    color: 'white',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  socialLinks: {
    fontSize: 14,
    color: '#3081D0',
  },
});