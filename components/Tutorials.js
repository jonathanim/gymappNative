import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import { DATA } from './Data/Videos'
import YoutubePlayer from "react-native-youtube-iframe";
import { FlatList } from "react-native";




function Tutorials() {

    const [data, setData] = useState([])


    useEffect(() => {
        setData([...DATA])
    }, [])

    const handleDisplay = (video) => {
        const index = data.findIndex((d) => d === video)
        const targetVideo = data.find((d) => d === video)

        const currentVideo = [...data].map((prev, idx) => {
            if (idx === index) {
                targetVideo.show = !targetVideo.show
            }
            return prev
        })
        setData(currentVideo)
    }

    return (
        <View style={styles.mainContainer}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Tutorials</Text>
            </View >

            <ScrollView >
                {data.map((video => {
                    return <View key={video.title} >
                        <Button title={video.title} style={styles.subtitle} onPress={() => handleDisplay(video)}>
                            {video.title}
                        </Button>
                        <View style={{ display: video.show ? 'flex' : 'none', }}>
                            <YoutubePlayer
                                height={400}
                                play={false}
                                videoId={video.uri}

                                webViewProps={{
                                    allowsInlineMediaPlayback: false,
                                    allowsFullscreenVideo: true,
                                    androidLayerType: 'hardware'
                                }}
                            />
                        </View>

                    </View>
                }))}
            </ScrollView>

            {/*  */}

        </View >
    )
}

export default Tutorials



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'aqua',

    },
    titleContainer: {
        marginTop: 40
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffdf6c',
        textShadowColor: 'black',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        textShadowColor: 'white',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },
    video: {
        borderColor: 'black',
        borderWidth: 3,
        marginTop: 5,
        backgroundColor: 'orange'
    }


});
