// components/ProductComponent.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductComponent = ({ product, addToCart }) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
        <TouchableOpacity onPress={() => addToCart(product)} style={styles.addCircleContainer}>
          <Image source={require('../assets/add_circle.png')} style={styles.addCircle} />
        </TouchableOpacity>
      </View>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>reversible angora cardigan</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 4,
    margin: 1,
    marginTop: 36,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addCircleContainer: {
    position: 'absolute',
    bottom: 8,
    right: 3,
  },
  addCircle: {
    width: 24,
    height: 24,
  },
  productName: {
    fontSize: 19,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#808080',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#964B00',
  },
});

export default ProductComponent;
