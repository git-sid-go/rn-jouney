import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
const { width: DEVICE_WIDTH } = Dimensions.get('screen');


const Card = ({ image, title, subtitle, cost }) => {
    return (
        <View style={styles.root}>
            <Image style={styles.cardimg} source={image}></Image>
            <Text style={styles.cardtext}>{title}</Text>
            <Text style={[styles.cardtext, styles.cardsubtext]}>{subtitle}</Text>
            <Text style={styles.cardtext}>{cost}</Text>

        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    root: {
        height: 200,
        justifyContent: 'flex-end',
        paddingBottom: 7,
        width: (((DEVICE_WIDTH - 30) / 2) - 10),
    },
    cardimg: {
        maxHeight: 200,
        width: (((DEVICE_WIDTH - 30) / 2) - 10),
        borderRadius: 10,
        position: "absolute",

    },
    cardtext: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        marginLeft: 20,
    },
    cardsubtext: {
        fontSize: 12,
        fontWeight: "normal",
    }


})