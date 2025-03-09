import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ReactNode } from "react";
import { APP_COLOR } from "@/utils/constant";
const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: APP_COLOR.ORANGE
    },
})

interface IProps {
    title: string;
    onPress: () => void;
    textStyle?: StyleProp<TextStyle>;
    pressStyle?: StyleProp<TextStyle>;
    btnStyle?: StyleProp<TextStyle>;
    icon?: ReactNode
}

const ShareButton = (props: IProps) => {
    const { title, onPress, textStyle, pressStyle, btnStyle, icon } = props;
    return (
        <Pressable style={
            ({ pressed }) => ([{
                opacity: pressed ? 0.5 : 1,
                alignSelf: 'flex-start'
            }, pressStyle])
        }
            onPress={onPress}
        >
            <View style={[styles.btnContainer, btnStyle]}>
                {icon}
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default ShareButton;