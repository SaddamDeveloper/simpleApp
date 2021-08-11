import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { AuthContext } from '../context';

const LoginScreen = () => {
    const {signIn} = React.useContext(AuthContext);
    const loginHandler = () => {
        signIn();
    }
    return (
        <View>
            <Text>LoginScreen</Text>
            <View>
                <TextInput 
                    placeholder="Enter Username"
                    
                />
            </View>
            <View>
                <TextInput 
                    placeholder="Enter Password"
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => loginHandler()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen
