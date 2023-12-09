import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Green</Text>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        height: 100,
        width: 100,

        borderRadius: 6,
        margin: 8,
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'blue',
    },
    cardThree: {
        backgroundColor: 'yellow',
    },
    cardFour: {
        backgroundColor: 'green',
    },
});
