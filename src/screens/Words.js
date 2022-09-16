import { StyleSheet,FlatList, Text, View } from 'react-native'
import React from 'react'
import ListItemWords from '../components/ListItemWords'
import { SafeAreaView } from 'react-native-safe-area-context'


const Words = ({ route, navigation }) => {

  const { wordArray, char} = route.params;
  console.log(wordArray)

  navigation.setOptions({ title: "Letra " + char })

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wordArray}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ListItemWords item={item} navigation={navigation} />
        )}
      ></FlatList>
    </SafeAreaView>
  )
}

export default Words

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    paddingTop: 10,
    paddingHorizontal: 10
  },
})