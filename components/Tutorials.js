import React, { useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { View, Text, StyleSheet, Button } from 'react-native'
import { DATA } from './MyData/Tutorial'
import YoutubePlayer from "react-native-youtube-iframe";



function Tutorials() {

    const [data, setData] = useState([])


    useEffect(() => {
        setData([...DATA])
    }, [data])25

    const handleDisplay = (video) => {
        const index = data.findIndex((d) => d === video)
        const targetVideo = data.find((d) => d === video)

        const currentVideo = [...data].map((prev, idx) => {
            if (idx === index) {
                targetVideo.show = !targetVideo.show
            }
            return prev
        })
        console.log(currentVideo)
        setData(currentVideo)
    }

    return (
        <View>

            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Tutorials</Text>
            </View >

            <ScrollView style={{ width: 'auto', marginTop: 70 }}>

                {data.map((video => {
                    return <View key={video.title}>
                        <ScrollView >
                            <TouchableOpacity style={styles.video} onPress={() => handleDisplay(video)}>
                                <Text style={styles.text}>
                                    {video.title}
                                </Text>
                                <View style={{ display: video.show ? 'flex' : 'none' }}>


                                    <YoutubePlayer
                                        height={240}
                                        play={false}
                                        videoId={video.uri}
                                    />
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                }))}
            </ScrollView>



        </View >
    )
}

export default Tutorials



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon',
    },
    text: {
        fontSize: 30,
        color: 'salmon',
        textAlign: 'center',
        marginVertical: 10
    },
    btn: {
        borderColor: 'black',
        borderWidth: 5,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900',
        color: 'salmon',
        textShadowColor: 'black',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },
    video: {
        margin: 10,
        borderColor: 'salmon',
        borderWidth: 5,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        paddingHorizontal: 10,

    }

});
