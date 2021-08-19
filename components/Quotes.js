import React, { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import axios from "axios";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        const data = res.data;
        setQuotes(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const getSingleQuote = (quotes) => {
    const randomQuote = [...quotes][Math.floor(Math.random() * quotes.length)];

    setQuote(randomQuote);
  };

  return (
    <View style={{ margin: 15, padding: 10 }}>
      {quote.author === undefined || quote.text === undefined ? (
        <View />
      ) : (
        <Text style={{ textAlign: "center", fontSize: 15, marginBottom: 20 }}>
          {`"${quote.text}"`}{" "}
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            {`-by ${quote.author} `}
          </Text>
        </Text>
      )}
      <Button
        title="Wisdom of the Day"
        color="#f75990"
        onPress={() => getSingleQuote(quotes)}
      />
    </View>
  );
}

export default Quotes;
