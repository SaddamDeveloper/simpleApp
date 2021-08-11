import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { AuthStack } from './AuthStack';
import { ActivityIndicator, View } from 'react-native';
import { AppStack } from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './AuthNavigator';
import RootNavigator from './RootNavigator';

export default function Route() {
    const { user, setUser, login, logout } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Check whether the user logged in or not
        const fetching = async () => {
            await AsyncStorage.getItem('user');
            setLoading(false);
        }
        fetching();
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {user && user !== null ? <AuthNavigator /> : <RootNavigator /> }
        </NavigationContainer>
    );
}