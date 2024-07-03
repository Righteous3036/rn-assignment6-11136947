// components/HeaderComponent.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/Menu.png')} style={styles.icon} />
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <View style={styles.rightIcons}>
          <Image source={require('../assets/Search.png')} style={styles.icon} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/Bag.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.ourStoryText}>OUR STORY</Text>
        <View style={styles.filterIcons}>
          <Image source={require('../assets/filter1.png')} style={styles.icon} />
          <Image source={require('../assets/filter2.png')} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Adjust the background color to match the first header
    height: 50, // Adjust height if needed
    marginTop: 30,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  logo: {
    width: 100, // Adjust the width as necessary
    height: 40, // Adjust the height as necessary
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Adjust the background color to match the first header
    height: 60, // Adjust height if needed
  },
  ourStoryText: {
    fontSize: 31,
    color: '#000',
    fontStyle: 'italic',    
  },
  filterIcons: {
    flexDirection: 'row',
  },
});

export default HeaderComponent;
