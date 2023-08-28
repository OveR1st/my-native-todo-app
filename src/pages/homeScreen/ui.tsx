import {
    SafeAreaView,
    Text,
    StatusBar,
    View,
    Button,
    ScrollView,
} from 'react-native'
import type { ScreenProps } from 'shared'

export const HomeScreen: React.FC<ScreenProps<'Home'>> = () => {
    const testArr = [
        { id: 1, title: 'Test', completed: false },
        { id: 2, title: 'Test', completed: false },
        { id: 3, title: 'Test', completed: false },
        { id: 4, title: 'Test', completed: false },
        { id: 5, title: 'Test', completed: false },
        { id: 6, title: 'Test', completed: false },
    ]
    return (
        <SafeAreaView className="flex-1 flex-col justify-between">
            <Text className="pt-5 pl-5 font-bold text-2xl">TODO</Text>

            <ScrollView>
                {testArr.map((todo) => {
                    return (
                        <View
                            key={todo.id}
                            className="p-6 m-4 border-b-4  border-bottom-bar-button-dark"
                        >
                            <Text>{todo.title}</Text>
                        </View>
                    )
                })}
            </ScrollView>

            <View className="flex pl-5 pr-5 pt-8 pb-8 flex-row justify-between">
                <Button title="New Todo" />
                <Button title="Show Active" />
            </View>
        </SafeAreaView>
    )
}
