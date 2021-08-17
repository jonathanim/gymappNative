import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import axios from 'axios'
import { Button } from 'react-native'


function Quotes() {

    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({})


    useEffect(() => {
        axios.get("https://type.fit/api/quotes")
            .then(res => {
                const data = res.data
                setQuotes(data)
            }).then(
                console.log(quotes)
            )
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    const getSingleQuote = (quotes) => {

        const randomQuote = [...quotes][Math.floor(Math.random() * quotes.length)]

        setQuote(randomQuote)
        console.log(randomQuote)
    }

    return (
        <View style={{ marginTop: 15 }}>
            {quote.author === undefined ? <View />
                :
                <Text style={{ textAlign: 'center', fontSize: 15, marginBottom: 20 }}>
                    {`"${quote.text}"`} <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {`-by ${quote.author} `}</Text>
                </Text>

            }
            <Button title="Wisdom of the Day" color="#f75990"  onPress={() => getSingleQuote(quotes)} />
        </View >
    )
}

export default Quotes
