import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const CartItemComponent = ({ item, removeFromCart }) => {
  return (
    <View style={styles.cartItemContainer}>
      <Image source={item.image} style={styles.cartItemImage} />
      <Text style={styles.cartItemTitle}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>${item.price}</Text>
      <Button title="Remove from cart" onPress={() => removeFromCart(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cartItemImage: {
    width: '100%',
    height: 150,
  },
  cartItemTitle: {
    fontSize: 16,
    marginVertical: 5,
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default CartItemComponent;
