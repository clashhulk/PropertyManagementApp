import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import BottomTabNavigator from './BottomTabNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
