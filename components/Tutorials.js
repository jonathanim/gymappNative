import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import { View, Text, Image, StyleSheet } from 'react-native'
import { DATA } from './MyData/Tutorial'


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

function Tutorials() {

    const data = DATA

    const [selectedId, setSelectedId] = useState(null)

    const renderItem = ({ item }) => {
        const backgroundColor = item.name === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.name === selectedId ? 'white' : 'black';



        return (

            <Item
                item={item}
                onPress={() => setSelectedId(item.name)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };



    return (

        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(id) => id.title}
                render={renderItem}
                extraData={selectedId}
            />
        </View>

    )
}

export default Tutorials



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        height: 250,
        width: 250
    }
});
