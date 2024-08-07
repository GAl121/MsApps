/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */


import { StyleSheet, View, ActivityIndicator, Text } from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.horizontal} size="large" color="#00ff00" />
            <Text> Loading data...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default Loading;
