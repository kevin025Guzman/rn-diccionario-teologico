import { StyleSheet,FlatList, Text, View } from 'react-native'
import React from 'react'
import ListItemWords from '../components/ListItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import {data} from '../data/data'

const Words = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
     data={data}
     keyExtractor={ item => item.id}
     renderItem={ ({item}) => <ListItemWords item={item} navigation={navigation}/>}
    >

    </FlatList>
    </SafeAreaView>
  )
}

export default Words

const styles = StyleSheet.create({})