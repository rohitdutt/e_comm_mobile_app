import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/Home";
import SubCategories from "./components/sub-category/SubCategories";
import Category from "./components/Category";
import {Text, View} from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const BottomTab = () =>{
    return(
            <Tab.Navigator>
                <Tab.Screen name={'home'} component={Home}/>
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
    );
};

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name={'home'}
                  component={Home}
                  options={{
                      title: 'E-Comm',
                      headerStyle:{
                          backgroundColor:'#89c9b8',
                      },
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                  }}
              />
              <Stack.Screen name={'category'} component={Category}/>
              <Stack.Screen name={'sub-category'} component={SubCategories}/>
          </Stack.Navigator>
          <BottomTab/>
      </NavigationContainer>
  );
};
