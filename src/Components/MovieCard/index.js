import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

function MovieCard({item}) {
  return (
    <View style={styles.container}>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
      <View style={styles.tags}>
        {item.tags.map((tag) => (
          <Text>{tag} </Text>
        ))}
      </View>
    </View>
  );
}

export default MovieCard;
