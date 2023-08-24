import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, ViewComponent } from 'react-native'
import { RootStackParamList } from './routes'
import { Home } from '../pages/home'
import { Complete } from '../pages/complete'
// import { AddTaskScreen } from "pages/add-task";
// import { TasksScreen } from "pages/list-tasks";
// import { TaskScreen } from "pages/view-task-details";
// import { RootStackParamList } from "shared";

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const Routing: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Home">
                <RootStack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <RootStack.Screen name="Complete" component={Complete} />
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
