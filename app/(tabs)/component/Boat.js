import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Boat = ({ name, description, icon_name, picture }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><Icon name={icon_name} size={20} color="#32CD32" /> {name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#FFFACD',
        padding: 15,
        borderWidth: 1,
        borderColor: '#BDB76B',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#8B4513',
        marginBottom: 10,
        fontFamily: 'monospace',
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        fontSize: 15,
        color: '#A52A2A',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 22,
    },
    image: {
        width: 400,
        height: 400,
    }
});

export default Boat;
