import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context';

const HomeScreen = () => {
    const {loginState, dispatch} = useContext(AuthContext);

    console.warn(loginState);
    useEffect(() => {
    //    fetchUser();
    }, [])
    return (
        <View>
            <Text>Home</Text>
            {/* <TouchableOpacity onPress={() => {signOut()}}>
                <Text>Log out</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default HomeScreen
