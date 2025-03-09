import { Slot, Stack } from "expo-router"
import { Text, View } from "react-native"

const RootLayout = () => {
    return (
        // <View>
        //     <Text>header</Text>
        //     <Slot />
        //     <Text>footer</Text>
        // </View>
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
    )
}

export default RootLayout