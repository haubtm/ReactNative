import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpPage = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignUp = async () => {
        const code = Math.floor(Math.random() * 1000000);
        try {
            const res = await registerAPI(code, email, password, name);
            if (res.data) {
                router.navigate("/(auth)/verify")
            } else {
                // alert(res.message)
            }
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 600,
                        marginVertical: 30
                    }}>Đăng ký tài khoản</Text>
                </View>
                <ShareInput
                    title="Họ tên"
                    value={name}
                    setValue={setName}
                />
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                    value={email}
                    setValue={setEmail}
                />
                <ShareInput
                    title="Password"
                    secureTextEntry={true}
                    value={password}
                    setValue={setPassword}
                />
                <View style={{ marginVertical: 10 }}></View>
                <ShareButton
                    title="Đăng ký"
                    onPress={handleSignUp}
                    textStyle={{
                        textTransform: "uppercase",
                        color: '#fff',
                        paddingVertical: 5
                    }}
                    pressStyle={{ alignSelf: "stretch" }}
                    btnStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        marginHorizontal: 50,
                        marginVertical: 10,
                        backgroundColor: APP_COLOR.ORANGE,
                    }}
                    icon={
                        <></>}
                />
                <View style={{
                    marginVertical: 15,
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center",
                }}>
                    <Text style={{
                    }}>
                        Đã có tài khoản?
                    </Text>
                    <Link href={"/(auth)/signup"}>
                        <Text style={{ textDecorationLine: "underline", color: 'black' }}>Đăng nhập</Text>
                    </Link>
                </View>
                <SocialButton />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },

})

export default SignUpPage;