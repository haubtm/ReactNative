import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"
import { RootSiblingParent } from 'react-native-root-siblings'
import { SafeAreaView } from "react-native-safe-area-context"
const RootLayout = () => {
    return (
        <RootSiblingParent>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#f4511e"
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold"
                        }
                    }}>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false, headerTitle: "Trang chủ" }}
                    />
                    <Stack.Screen
                        name="(auth)/login"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(auth)/signup"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(auth)/verify"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerTitle: "trang chu" }}
                    />
                </Stack>
            </SafeAreaView>
        </RootSiblingParent>
    )
}

export default RootLayout