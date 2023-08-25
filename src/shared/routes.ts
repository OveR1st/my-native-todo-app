import type {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
    HomeScreen: { id: string; tit: number }
    CompleteScreen: undefined
}

export type ScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>

export type NavProp<Screen extends keyof RootStackParamList> =
    NativeStackNavigationProp<RootStackParamList, Screen>
