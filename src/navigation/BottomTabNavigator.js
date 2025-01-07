import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import DashboardScreen from '../screens/DashboardScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import PropertyListScreen from '../screens/PropertyListScreen';
import TenantListScreen from '../screens/TenantListScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Dashboard Stack
const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="PropertyList" component={PropertyListScreen} />
    <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
  </Stack.Navigator>
);

// Properties Stack
const PropertiesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="PropertyList" component={PropertyListScreen} />
    <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
  </Stack.Navigator>
);

// Tenants Stack
const TenantsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TenantList" component={TenantListScreen} />
    <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
  </Stack.Navigator>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#6200EE",
        tabBarInactiveTintColor: "#828282",
        headerShown: false,
      }}
      //   tabBarOptions={{
      //     style: { backgroundColor: "#6200EE" },
      //     activeTintColor: "#fff",
      //     inactiveTintColor: "#828282",
      //   }}
    >
      <Tab.Screen
        name="DashboardTab"
        component={DashboardStack}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PropertiesTab"
        component={PropertiesStack}
        options={{
          tabBarLabel: "Properties",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TenantsTab"
        component={TenantsStack}
        options={{
          tabBarLabel: "Tenants",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
