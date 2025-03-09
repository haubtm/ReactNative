import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"
import { RootSiblingParent } from 'react-native-root-siblings'
const RootLayout = () => {
    return (
        <RootSiblingParent>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{ headerShown: false, headerTitle: "Trang chủ" }}
                />
                <Stack.Screen
                    name="(auth)/signup"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerTitle: "trang chu" }}
                />
            </Stack>
        </RootSiblingParent>
    )
}

export default RootLayout