import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import ShareButton from "components/button/share.button"
import { APP_COLOR } from "utils/constant"
import { FontAwesome5 } from "@expo/vector-icons"
import bg from '@/assets/auth/welcome-background.png'
import fbLogo from '@/assets/auth/facebook.png'
import ggLogo from '@/assets/auth/google.png'
import { LinearGradient } from 'expo-linear-gradient'
import TextBetweenLine from "@/components/button/text.between.line"
import { Link, router } from "expo-router"

const WelcomePage = () => {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={bg}>
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#19182F',]}
                locations={[0.2, 0.8]}
            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>
                            Welcome to
                        </Text>
                        <Text style={styles.body}>
                            FoodHub
                        </Text>
                        <Text style={styles.footer}>
                            Your favourite foods delivered fast at your door.
                        </Text>
                    </View>
                    <View style={styles.welcomeBtn}>
                        <TextBetweenLine title="Đăng nhập với" />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 30
                        }}>
                            <ShareButton
                                title="Facebook"
                                onPress={() => alert("Facebook")}
                                textStyle={{ textTransform: "uppercase" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 50,
                                    backgroundColor: "#fff"
                                }}
                                icon={
                                    <Image source={fbLogo} />
                                }
                            />
                            <ShareButton
                                title="Google"
                                onPress={() => alert("Facebook")}
                                textStyle={{ textTransform: "uppercase" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 50,
                                    paddingHorizontal: 20,
                                    backgroundColor: "#fff"
                                }}
                                icon={
                                    <Image source={ggLogo} />
                                }
                            />
                        </View>
                        <View>
                            <ShareButton
                                title="Đăng nhập với email"
                                onPress={() => { router.navigate("/(auth)/login") }}
                                textStyle={{ color: '#fff', paddingVertical: 5 }}
                                pressStyle={{ alignSelf: "stretch" }}
                                btnStyle={{
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    marginHorizontal: 50,
                                    marginVertical: 10,
                                    backgroundColor: "#2c2c2c",
                                    borderColor: "#505050",
                                    borderWidth: 1
                                }}
                                icon={
                                    <FontAwesome5 name="google" size={30} color="black" />}
                            />
                        </View>
                        <View style={{
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center",
                        }}>
                            <Text style={{
                                color: 'white'
                            }}>
                                Chưa có tài khoản?
                            </Text>
                            <Link href={"/(auth)/signup"}>
                                <Text style={{ textDecorationLine: "underline", color: 'white' }}>Đăng ký</Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    welcomeText: {
        flex: 0.6,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 20,
    },
    heading: {
        fontSize: 40,
        fontWeight: "600",
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10
    },
    footer: {
        fontSize: 10,
    },
})

export default WelcomePage