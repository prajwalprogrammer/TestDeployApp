import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, TouchableRipple } from 'react-native-paper'

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Card1 from '../Components/Card';
const ShopItemsArray = [
  {
    // icon : hand-holding-dollar / FontAwesome6
    // icon : newspaper-outline / Ionicons
    // icon : book-outline / Iconics
    // icon : notebook-plus-outline / MaterialCommunityIcons
    // icon : shirt-outline / Ionicons
    // icon : shirt-sharp / Ionicons
    // icon : help-circle / Feather
    icon: <FontAwesome6 name="hand-holding-usd" size={30} color="white" />,
    label: 'School Payment',
    dis : "Buy School items and services"
    
  },
  {
    icon: <Ionicons name="newspaper-outline" size={30} color="white" />,
    label: 'order History',
    dis : "Buy School items and services"
  },
  {
    icon: <Ionicons name="book-outline" size={30} color="white" />,
    label: 'Book List',
    dis : "Buy School items and services"
  },
  {
    icon: <MaterialIcon name="notebook-plus-outline" size={30} color="white"/>,
    label: 'Book Order History',
    dis : "Buy School items and services"
  },
  {
    icon:  <Ionicons name="shirt-outline" size={30} color="white" />,
    label: 'Uniform',
    dis : "Buy School items and services"
  },
  {
    icon: <Ionicons name="shirt-sharp" size={30} color="white" />,
    label: 'Uniform Order History',
    dis : "Buy School items and services"
  },
  {
    icon: <Feather name="help-circle" size={30} color="white" />,
    label: 'Manage Payment Methods',
    dis : "Buy School items and services"
  },
]
const CardExample = ({ icon, label ,dis}: { icon: any, label: string,dis: string }) => {
  return (
    <Card onPress={()=>NavigationPreloadManager.navigate('1')} accessibilityRole='button' style={styles.card} mode='outlined'>
      <View style={styles.cardContent}>
        <View style={styles.cardImage}>
          {icon}
        </View>
        <View style={styles.textContainer}>
          <Text variant='titleMedium' accessibilityLabel={label}>{label}</Text>
          <Text variant='labelSmall' style={{fontWeight:"100"}}>{dis}</Text>
        </View>
      </View>
    </Card>
  )
}
const Shop = ({ navigation }: { navigation: any }) => {
  console.log(navigation)
  const arr= ["schoolPayment","orderHistory","bookList","bookHistory","uniform","uniformHis"];
  return (
    <View>
      {ShopItemsArray.map((val, index) => {
        return (
          <Card key={index} onPress={()=>navigation.navigate(arr[index])} accessibilityRole='button' style={styles.card} mode='outlined'>
          <View style={styles.cardContent}>
            <View style={styles.cardImage}>
              {val.icon}
            </View>
            <View style={styles.textContainer}>
              <Text variant='titleMedium' accessibilityLabel={val.label}>{val.label}</Text>
              <Text variant='labelSmall' style={{fontWeight:"100"}}>{val.dis}</Text>
            </View>
          </View>
        </Card>
        )
      })}
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  chip: {
    margin: 4,
  },
  card: {
    borderColor: 'transparent',
    margin: 10,
    elevation: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#B70000'
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:50,

    backgroundColor:'#B70000'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 12,
  },
  customCardRadius: {
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  customCoverRadius: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
  },
});

