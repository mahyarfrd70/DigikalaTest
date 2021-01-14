import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {setAuth} from '../../redux/Auth/actions';
import {getStorageItem} from '../../helpers/asyncStorage';
import styles from './style';

function Splash() {
  const dispatch = useDispatch();

  useEffect(() => {
    getStorageItem('token')
      .then((token) => {
        dispatch(setAuth(token));
      })
      .catch(() => {
        // error handle in case of getting token throw an issue
      });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Text>Please Wait ...</Text>
    </View>
  );
}

export default Splash;
