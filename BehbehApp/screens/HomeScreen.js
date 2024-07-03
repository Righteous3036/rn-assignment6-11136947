import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductComponent from '../components/ProductComponent';

const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'Iame', price: 120, image: require('../assets/dress1.png') },
];

const HomeScreen = () => {
  const addToCart = async (product) => {
    try {
      const cartItems = JSON.parse(await AsyncStorage.getItem('cartItems')) || [];
      cartItems.push(product);
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductComponent product={item} addToCart={addToCart} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', // Set the background color to #fff
  },
});

export default HomeScreen;
