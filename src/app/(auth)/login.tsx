import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { loginAPI, registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Toast from 'react-native-root-toast';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import { LoginSchema } from "@/utils/validate.schema";
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setAppState } = useCurrentApp();

    const handleLogin = async (email: string, password: string) => {
        try {
            setLoading(true);
            const res = await loginAPI(email, password);
            setLoading(false);
            if (res.data) {
                await AsyncStorage.setItem("access_token", res.data.accessToken);
                setAppState(res.data)
                router.replace("/(tabs)")
            } else {
                const m = Array.isArray(res.message)
                    ? res.message[0] : res.message
                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: '#fff',
                    backgroundColor: 'red',
                    opacity: 0.9
                });

                if (res.statusCode === 400) {
                    router.replace({
                        pathname: "/(auth)/verify",
                        params: { email: email, isLogin: 1 }
                    })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={values => handleLogin(values.email, values.password)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    // <View style={{ margin: 10 }}>
                    //     <Text>Email</Text>
                    //     <TextInput
                    //         style={{ borderWidth: 1, borderColor: '#ccc' }}
                    //         onChangeText={handleChange('email')}
                    //         onBlur={handleBlur('email')}
                    //         value={values.email}
                    //     />
                    //     {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                    //     <View style={{ marginVertical: 10 }}></View>
                    //     <Text>Password</Text>
                    //     <TextInput
                    //         style={{ borderWidth: 1, borderColor: '#ccc' }}
                    //         onChangeText={handleChange('password')}
                    //         onBlur={handleBlur('password')}
                    //         value={values.password}
                    //     />
                    //     {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                    //     <View style={{ marginVertical: 10 }}></View>
                    //     <Button onPress={handleSubmit as any} title="Submit" />
                    // </View>
                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 30
                            }}>Đăng nhập</Text>
                        </View>
                        <ShareInput
                            title="Email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />
                        <ShareInput
                            title="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                        />
                        <View style={{ marginVertical: 10 }}></View>
                        <ShareButton
                            loading={loading}
                            title="Đăng nhập"
                            onPress={handleSubmit as any}
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
                                Chưa có tài khoản?
                            </Text>
                            <Link href={"/(auth)/signup"}>
                                <Text style={{ textDecorationLine: "underline", color: 'black' }}>Đăng ký</Text>
                            </Link>
                        </View>
                        <SocialButton title="Đăng nhập với" />
                    </View>
                )}
            </Formik>
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

export default LoginPage;