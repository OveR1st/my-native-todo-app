import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CompleteScreen } from 'pages/completeScreen'
import { HomeScreen } from 'pages/homeScreen'

import { RootStackParamList } from 'shared'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Routing: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home">
                <RootStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <RootStack.Screen name="Complete" component={CompleteScreen} />
                {/* <RootStack.Group
                screenOptions={{
                    presentation: 'transparentModal',
                    headerShown: false,
                }}
            >
                <RootStack.Screen name="AddTask" component={AddTaskScreen} />
            </RootStack.Group> */}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
