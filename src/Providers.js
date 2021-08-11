import React from 'react';
import { AuthContext, AuthProvider } from './AuthProvider';
import Route from './Route';

export const Providers = ({ }) => {
    const authContext = React.useMemo(() => ({
        signIn: async (foundUser) => {
            setUserToken('fgkj');
            setIsLoading(false);
           
        },
        signOut: async () => {
            alert();
            setUserToken(null);
            setIsLoading(false);
           
        },
        signUp: () => {
            setUserToken('fgkj');
            setIsLoading(false);
        }
    }), []);
    return (
        <AuthContext value={authContext}>
            <Route />
        </AuthContext>
    )
}