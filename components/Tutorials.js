import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { DATA } from "./Data/Videos";
import YoutubePlayer from "react-native-youtube-iframe";
import { TouchableOpacity } from "react-native";

function Tutorials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...DATA]);
  }, []);

  const handleDisplay = (video) => {
    const index = data.findIndex((d) => d === video);
    const targetVideo = data.find((d) => d === video);

    const currentVideo = [...data].map((prev, idx) => {
      if (idx === index) {
        targetVideo.show = !targetVideo.show;
      }
      return prev;
    });
    setData(currentVideo);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tutorials</Text>
      </View>

      <ScrollView style={{ marginTop: 50 }}>
        {data.map((video) => {
          return (
            <View key={video.title}>
              <TouchableOpacity
                style={styles.subtitle}
                onPress={() => handleDisplay(video)}
              >
                <Text style={styles.videosButton}>{video.title}</Text>
              </TouchableOpacity>
              <View style={{ display: video.show ? "flex" : "none" }}>
                <YoutubePlayer
                  height={400}
                  play={false}
                  videoId={video.uri}
                  webViewStyle={{ opacity: 0.99 }}
                  webViewProps={{
                    allowsInlineMediaPlayback: false,
                    allowsFullscreenVideo: true,
                    androidLayerType: "hardware",
                  }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/*  */}
    </View>
  );
}

export default Tutorials;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#f194ff",
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "#ffdf6c",
    textShadowColor: "black",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 10,
  },
  videosButton: {
    fontSize: 30,
    textAlign: "center",
    color: "aqua",
    textShadowColor: "black",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 10,
  },
  subtitle: {
    borderWidth: 2,
    margin: 2,
    backgroundColor: "black",
  },
  video: {
    borderColor: "black",
    borderWidth: 3,
    marginTop: 5,
    backgroundColor: "orange",
  },
});
