import { Image, StyleSheet, View } from "react-native";
import TextBetweenLine from "./text.between.line";
import ShareButton from "./share.button";
import fbLogo from '@/assets/auth/facebook.png'
import ggLogo from '@/assets/auth/google.png'

const SocialButton = () => {
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine
                textColor="black"
                title="Đăng nhập với" />
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
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeBtn: {
        flex: 1,
        gap: 30,
    },
})

export default SocialButton;