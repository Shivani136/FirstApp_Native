import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppButton from '../component/AppButton';

const Logout = ({ navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Text>Logout</Text> */}
            <AppButton 
            onPress={() => navigation.navigate("Login")}
            title="Logout"></AppButton>  
        </View>
       
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
});
export default Logout;
