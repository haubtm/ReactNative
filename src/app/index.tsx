import { router } from "expo-router"
import { useEffect } from "react"
import { getAccountAPI } from "@/utils/api"
import { useCurrentApp } from "@/context/app.context"
import { Text, View } from "react-native"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootPage = () => {
    const { setAppState } = useCurrentApp();

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                const res = await getAccountAPI();

                if (res.data) {
                    setAppState({
                        user: res.data.user,
                    })
                    router.navigate("/(tabs)")
                } else {
                    router.navigate("/(auth)/welcome")
                }
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);
    // if (true) {
    //     return (
    //         <Redirect href={"/(tabs)"} />
    //     )
    // }
    return (
        <>
        </>
    )
}

export default RootPage