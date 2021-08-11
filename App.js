import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useMemo } from 'react'
import { useReducer } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import AuthNavigator from './src/AuthNavigator'
import { AuthContext } from './src/context'
import RootNavigator from './src/RootNavigator'
const App = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);
    const initialState = {
        isLoading: true,
        user: '',
        token: ''
    }
    const loginReducer = (prevState, action) => {
        console.warn(action);
        switch (action.type) {
            case 'RETRIEVE_TOKEN' : 
                return {
                    ...prevState,
                    isLoading: false,
                    token: action.token,
                    user: action.username
                }
            case 'FETCH_USER' : 
                return {
                    ...prevState,
                    isLoading: false,
                    user: action.user
                }
            case 'LOGIN' : 
                return {
                    ...prevState,
                    isLoading: false,
                    user: action.user,
                    token: action.token
                }
            case 'LOGOUT' : 
                return {
                    ...prevState,
                    user: null,
                    token: null,
                    isLoading: false,
                }
            default :
                return prevState;
        }
    }
    const [loginState, dispatch] = useReducer(loginReducer, initialState);
    const authContext = React.useMemo(() => ({
        signIn: (username, password) => {
            let token;
            if(username == 'saddam' && password == '123456'){
                token = '86870'
            }
            dispatch({type: 'LOGIN', user: username, token: token});
            // setUserToken('fgkj');
            // setIsLoading(false);
        },
        signOut: () => {
           dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
            setUserToken('fgkj');
            setIsLoading(false);
        },
        fetchUser: () => {
            dispatch({type: 'FETCH_USER', user: 'saddam'});
        }
    }), []);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'RETRIEVE_TOKEN', user: {username: 'saddam', token: '123456'}});
        }, 1000)
    }, []);
    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <AuthContext.Provider value={{loginState, dispatch}}>
            <NavigationContainer>
                {loginState.token !== null ? <AuthNavigator /> : <RootNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App
