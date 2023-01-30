import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

const Orders = () => {
    return (
        <View style={styles.container}>
            <Text>Orders Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
});
export default Orders;
