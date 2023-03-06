import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.conteinerItem}>
      <View style={styles.conteinerItem}>
        <Image
          style={styles.image}
          source={{ uri: coin.image }}

        />

        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text styles={styles.pricePercentage}>$ {coin.current_price}</Text>
        <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.positive : styles.negative]}>{coin.price_change_percentage_24h}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  conteinerItem: {
    backgroundColor: '#121212',
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  image: {
    width: 30,
    height: 30
  },
  text: {
    color: "#ffffff"

  },

  symbol: {
    color: "#434343",
    textTransform: "uppercase"
  },
  containerNames: {
    marginLeft: 10
  },
  pricePercentage: {
    textAlign: "right"
  },
  positive: {
    color: "green"
  },
  negative: {
    color: "red"
  }



})
export default CoinItem