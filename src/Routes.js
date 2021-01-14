import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Screens/Splash';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';

// I've just developed for android
// I didn't use any styles in this testing app

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

const LoginRoutes = () => {
  return (
    <LoginStack.Navigator initialRouteName="SignIn">
      <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const Routes = () => {
  const {token, loading} = useSelector((state) => state.Auth);
  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <RootStack.Screen name="App" component={AppRoutes} />
        ) : (
          <RootStack.Screen name="Login" component={LoginRoutes} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
