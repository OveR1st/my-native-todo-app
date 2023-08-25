import { SafeAreaView, Text, StatusBar } from 'react-native'
import type { ScreenProps } from 'shared'

export const HomeScreen: React.FC<ScreenProps<'HomeScreen'>> = () => {
    return (
        <SafeAreaView>
            <Text>HOME</Text>
            <Text>HOME</Text>
            <Text>HOME</Text>
            <StatusBar />
        </SafeAreaView>
    )
}
