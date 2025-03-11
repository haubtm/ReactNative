import LoadingOverlay from "@/components/loading/overlay";
import { resendCodeAPI, verifyAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Toast from "react-native-root-toast";

const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef<OTPTextView>(null);
    const [code, setCode] = useState<string>("");
    const { email } = useLocalSearchParams();

    const verifyCode = async () => {
        Keyboard.dismiss();
        setIsSubmit(true);
        const res = await verifyAPI(code, email as string);
        if (res.data) {
            otpRef.current?.clear();
            Toast.show("Kích hoạt tài khoản thành công", {
                duration: Toast.durations.LONG,
                textColor: '#fff',
                backgroundColor: 'green',
            });
            router.replace({ pathname: "/(auth)/login" })
        } else {
            const m = Array.isArray(res.message)
                ? res.message[0] : res.message
            Toast.show(m, {
                duration: Toast.durations.LONG,
                textColor: '#fff',
                backgroundColor: 'red',
            });
        }
    }

    useEffect(() => {
        if (code && code.length === 6) {
            verifyCode()
        }
    }, [code])

    const handleResendCode = async () => {
        otpRef.current?.clear();
        const res = await resendCodeAPI(email as string);
        const m = res.data ? "Mã xác nhận đã được gửi" : res.message
        if (res.data) {
            Toast.show(m, {
                duration: Toast.durations.LONG,
                textColor: '#fff',
                backgroundColor: 'green',
                opacity: 0.9
            });
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>Xác thực tài khoản</Text>
                <Text style={{ marginVertical: 10 }}>Vui lòng nhập mã xác nhận đã được gửi tới địa chỉ</Text>
                <View style={{ marginVertical: 20 }}>
                    <OTPTextView
                        ref={otpRef}
                        handleTextChange={setCode}
                        autoFocus
                        inputCount={6}
                        keyboardType="number-pad"
                        inputCellLength={1}
                        tintColor={APP_COLOR.ORANGE}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: APP_COLOR.GREY,
                            borderRadius: 5,
                            borderBottomWidth: 1,
                            //@ts-ignore:next-line
                            color: APP_COLOR.ORANGE,
                        }}
                    />
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <Text>Không nhận được mã xác nhận, </Text>
                    <Text
                        onPress={() => {
                            handleResendCode()
                        }}
                        style={{ textDecorationLine: "underline" }}>gửi lại</Text>
                </View>
            </View>
            {isSubmit && <LoadingOverlay />}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 20
    }
})

export default VerifyPage;