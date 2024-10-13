import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons"
import User from './screens/User';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Contact from './screens/Contact';
import Favorite from './screens/Favorite';
import Option from './screens/Option';
import Profile from './screens/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from './utils/utils/colors';
import { NavigationContainer } from '@react-navigation/native';

const getDrawerItemIcon = icon => ({ tintColor }) => (
    <Icon name={icon} size={24} style={{ color: tintColor }} />
);
const getTabBarIcon = icon => ({ tintColor }) => (
    <Icon name={icon} size={24} style={{ color: tintColor }} />
);
        
    

const Stack = createStackNavigator();
const ContactsScreens = ()=>
{
    return (
            <Stack.Navigator
                initialRouteName="Contacts"
                screenOptions ={
                    {
                        headerShown:false
                    }
                }
            >
                <Stack.Screen name='Contacts' component={Contact}options={{title:"Contacts"}}/>
                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={({route})=>
                        {
                            const {contact} = route.params;
                            const {name}= contact;
                            return {
                                title: name.split(' ')[0],
                                headerTintColor: 'white',
                                headerStyle: {
                                    backgroundColor: colors.blue,
                                }
                            };
                        }
                    }
                />
            </Stack.Navigator>
    );
}
const FavoritesScreens = ()=>
{
    return (
        <Stack.Navigator
            initialRouteName="Favorites"
            screenOptions ={
                {
                    headerShown:false
                }
            }
        >
            <Stack.Screen name='Favorites' component={Favorite}options={{title:"Favorites"}}/>
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/>
        </Stack.Navigator>
    );
    }
    const UserScreens = ({navigation})=>
    {
        return (
            <Stack.Navigator
                initialRouteName="User"
            >
                <Stack.Screen name='User' component={User}
                    options={{
                        headerTitle:"Me",
                        headerTintColor: 'white',
                        headerStyle: {
                            backgroundColor: colors.blue,
                        },
                    headerRight: ()=>(
                        <Icon
                            name="settings"
                            size={24}
                            style={{ color: 'white', marginRight: 10 }}
                            onPress={() => navigation.navigate('Options')}
                        />
                    ),
                }}
            />
            <Stack.Screen name='Options' component={Option} options={{title:"Options"}}/>
            </Stack.Navigator>
        );
    }
    const Tab = createMaterialBottomTabNavigator();
    const TabNavigator= ()=>
    {
        return(
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName= 'ContactsScreens'
                    barStyle= {{backgroundColor: colors.blue}}
                    labeled={false}
                    activeTintColor={colors.greyLight}
                    inactiveColor = {colors.greyDark}
                >
                <Tab.Screen name="ContactsScreens" component={ContactsScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('list'),
                    }}
                />
                <Tab.Screen name="FavoritesScreens" component={FavoritesScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('star'),
                    }}
                />
                <Tab.Screen name="UserScreens" component={UserScreens}
                    options={{
                        tabBarIcon: getTabBarIcon('person'),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator= ()=>
{
    return(
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName= 'ContactsScreens'
            >
            <Drawer.Screen name="ContactsScreens" component={ContactsScreens}
                options={{
                    drawerIcon: getDrawerItemIcon('list'),
                }}
            />
            <Drawer.Screen name="FavoritesScreens" component={FavoritesScreens}
                options={{
                    drawerIcon: getDrawerItemIcon('star'),
                }}
            />
            <Drawer.Screen name="UserScreens" component={UserScreens}
                options={{
                    drawerIcon: getDrawerItemIcon('person'),
                }}
            />
        </Drawer.Navigator>
    </NavigationContainer>
    );
}
export default DrawerNavigator;