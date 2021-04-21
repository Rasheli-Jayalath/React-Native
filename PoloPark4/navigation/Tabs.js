import * as React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from '../screens/HomeScreen';
import ForecastScreen from '../screens/ForecastScreen'; 
import AvailableScreen from '../screens/AvailableScreen';
import ProfileScreen from '../screens/ProfileScreen';


const HomeStack = createStackNavigator();
const AvailableStack = createStackNavigator();
const ForecastStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator(); 

const Tabs = () => { 
    return( 
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#2f364a',
                borderRadius: 20,
                height: 90,
                ...styles.shadow
            }
        }}> 
            <Tab.Screen name="Home"    component={HomeStackScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', top: 10}}>
                            <Image 
                               source = {require( '../assets/home.png')}
                               resizeMode = "contain"
                               style = {{
                                   width : 45,
                                   height: 45,
                                   tintColor: focused ? '#FFD700' : '#1123454',
                               }}
                            />
                            <Text
                              style={{color: focused ? '#FFD700' : '#1123454', fontSize: 12}}>
                                  Home
                              </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Available" component={AvailableStackScreen} 
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', top: 10}}>
                            <Image 
                               source = {require( '../assets/Available.png')}
                               resizeMode = "contain"
                               style = {{
                                   width : 45,
                                   height: 45,
                                   tintColor: focused ? '#FFD700' : '#1123454',
                               }}
                            />
                            <Text
                              style={{color: focused ? '#FFD700' : '#1123454', fontSize: 12}}>
                                  Available 
                              </Text>
                        </View>
                    )
                }}           
            />

            <Tab.Screen name="Forecast" component={ForecastStackScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', top: 10}}>
                            <Image 
                               source = {require( '../assets/saved.png')}
                               resizeMode = "contain"
                               style = {{
                                   width : 45,
                                   height: 45,
                                   tintColor: focused ? '#FFD700' : '#1123454',
                               }}
                            />
                            <Text
                              style={{color: focused ? '#FFD700' : '#1123454', fontSize: 12}}>
                                  Forecast
                              </Text>
                        </View>
                    )
                }}           
            />
            <Tab.Screen name="Profile" component={ProfileStackScreen}
                 options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', top: 10}}>
                            <Image 
                               source = {require( '../assets/profile.png')}
                               resizeMode = "contain"
                               style = {{
                                   width : 45,
                                   height: 45,
                                   tintColor: focused ? '#FFD700' : '#1123454',
                               }}
                            />
                            <Text
                              style={{color: focused ? '#FFD700' : '#1123454', fontSize: 12}}>
                                  Profile
                              </Text>
                        </View>
                    )
                }}           
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#000000',
        textShadowOffset:{
            width: 0,
            height:10,
        },
        shadowOpacity: 0.25,
        shadowRadius : 3.5,
        elevation: 5
    }
})


export default Tabs;
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#030329',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#030329" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </HomeStack.Navigator>
    );
    
    const AvailableStackScreen = ({navigation}) => (
    <AvailableStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#030329',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <AvailableStack.Screen name="Available" component={AvailableScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#030329" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </AvailableStack.Navigator>
    );


    const ForecastStackScreen = ({navigation}) => (
        <ForecastStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#030329',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <ForecastStack.Screen name="Forecast" component={ForecastScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#030329" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }} />
        </ForecastStack.Navigator>
        );


        const ProfileStackScreen = ({navigation}) => (
            <ProfileStack.Navigator screenOptions={{
                    headerStyle: {
                    backgroundColor: '#030329',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                    fontWeight: 'bold'
                    }
                }}>
                    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" size={25} backgroundColor="#030329" onPress={() => navigation.openDrawer()}></Icon.Button>
                    )
                    }} />
            </ProfileStack.Navigator>
            );
      