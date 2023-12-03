import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
    var cardImage = require('../../assets/dorsay.jpg');

    return (
        <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={cardImage}
                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Musée d'Orsay</Text>
                <Text style={styles.cardLabel}>Paris, France</Text>
                <Text style={styles.cardDescription}>The Musée d'Orsay is a museum in Paris, France, on the Left Bank of the Seine.
                    It is housed in the former Gare d'Orsay, a Beaux-Arts railway station built between
                    1898 and 1900.</Text>
                <Text style={styles.cardFooter}>Don't forget!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 370,
        width: 360,
        borderRadius: 6,
        margin: 10,
    },
    cardElevated: {
        elevation: 4,
        backgroundColor: 'wheat',
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 180,
        width: 'auto',
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    cardLabel: {
        fontSize: 12,
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        marginTop: 8,
        marginBottom: 12,
        flexShrink: 1,
    },
    cardFooter: {
        marginBottom: 4,
    },
});
