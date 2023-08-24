import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App from './src/app'

const Stack = createNativeStackNavigator()

export default function AppRoot() {
    return <App />
}
