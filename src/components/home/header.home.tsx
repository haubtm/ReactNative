import { APP_COLOR } from "@/utils/constant";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const HeaderHome = () => {
    return (
        <View style={styles.container}>
            <Text style={{ paddingLeft: 5 }}>Giao đến:</Text>
            <View style={styles.location}>
                <Entypo name="location-pin" size={20} color={APP_COLOR.ORANGE} />
                <Text>Gò Vấp, TP HCM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        gap: 3
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})


export default HeaderHome;