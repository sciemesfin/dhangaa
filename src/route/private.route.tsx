import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../widgets/home/Home';

const Stack = createNativeStackNavigator();

export default function PrivateRoute() {
    return (<Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
            options={{ title: 'Home', headerShown: false }}
        />
    </Stack.Navigator>
    );
}