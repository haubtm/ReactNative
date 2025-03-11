import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Toast from 'react-native-root-toast';
import { Formik } from "formik";

import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpSchema } from "@/utils/validate.schema";

const SignUpPage = () => {

    const handleSignUp = async (email: string, password: string, name: string) => {
        const code = Math.floor(Math.random() * 1000000);
        try {
            const res = await registerAPI(code.toString(), email, password, name);
            if (res.data) {
                router.replace({ pathname: "/(auth)/verify", params: { email: email } })
            } else {
                const m = Array.isArray(res.message)
                    ? res.message[0] : res.message
                Toast.show(m, {
                    duration: Toast.durations.LONG,
                    textColor: '#fff',
                    backgroundColor: 'red',
                });

            }
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                validationSchema={SignUpSchema}
                onSubmit={values => handleSignUp(values.email, values.password, values.name)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={errors.name}
                        />
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
                            title="Đăng ký"
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
                                Đã có tài khoản?
                            </Text>
                            <Link href={"/(auth)/login"}>
                                <Text style={{ textDecorationLine: "underline", color: 'black' }}>Đăng nhập</Text>
                            </Link>
                        </View>
                        <SocialButton title="Đăng ký với" />
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

export default SignUpPage;