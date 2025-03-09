import { Slot, Stack, Tabs } from "expo-router"
import { Text, View } from "react-native"

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="setting" />
        </Tabs>
    )
}

export default TabLayout