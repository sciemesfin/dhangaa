import React, { useEffect, useState, useMemo } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { PublicRoute, PrivateRoute } from './route';
import { AuthContext } from './utils/context';
import auth from './services/auth.service';

const RootWidget = () => {
    const [authStatus, setAuthStatus] = useState({ loading: true, userToken: false, error: false })
    const [cart, setCart] = useState(0)
    useEffect(() => {
        //check state status
        getToken()
        getCart()
    }, [])
    async function getToken() {
        let authenticated = await auth.isAutenticated()
        setAuthStatus({
            ...authStatus,
            loading: false,
            error: false,
            userToken: authenticated ? true : false
        })
    }

    async function getCart() {
        // auth.clearCart()
        let items = await auth.getCartItems()
        setCart(items.length)
        console.log(items.length)
    }

    const authContext = useMemo(() => ({
        signinContext: () => { setAuthStatus({ ...authStatus, userToken: true, loading: false, error: false }) },
        signupContext: () => { setAuthStatus({ ...authStatus, userToken: true, loading: false, error: false }) },
        signoutContext: () => { setAuthStatus({ ...authStatus, userToken: false, loading: false, error: false }) },
        cartContext: () => cart,
        refreshCartContext: () => getCart()
    }))
    return (<AuthContext.Provider value={authContext}>
        {authStatus.loading ? <View style={{ height: '100%', justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color='#00a1ff' />
        </View>
            : authStatus.error ? <View>
                <Text>ERROR</Text>
            </View>
                : <NavigationContainer>
                    {
                        authStatus.userToken ? <PrivateRoute /> : <PublicRoute />
                    }
                </NavigationContainer>}
    </AuthContext.Provider>

    );
};

export default RootWidget;