import React from 'react';
import { ScrollView, StatusBar, Text, View, StyleSheet } from 'react-native';
import Boat from './component/Boat.js';

const Index = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.headerText}>GetABoat - For Sale</Text>
            <Boat
                name="Sea Ray 500 Sundancer"
                icon_name="rightsquareo"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                picture={require("./img/sea_ray.jpg")}
            />
            <Boat
                name="Four Winns Horizon 180"
                icon_name="rightsquareo"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                picture={require("./img/four_winns.jpg")}
            />
            <Boat
                name="Flipper 640 ST"
                icon_name="rightsquareo"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                picture={require("./img/flipper.jpg")}
            />
            <Boat
                name="Princess V48"
                icon_name="rightsquareo"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                picture={require("./img/princess.jpg")}
            />
            <Boat
                name="Bayliner 175 Bowrider"
                icon_name="rightsquareo"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                picture={require("./img/bayliner.jpg")}
            />
            <Boat
                name="Fairline Targa 47"
                icon_name="rightsquareo"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                picture={require("./img/fairline.jpg")}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#F0E68C',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2F4F4F',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'monospace',
    }
});

export default Index;
