import { APP_COLOR } from "@/utils/constant";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface IProps {
    infoHeight: number;
    restaurant: IRestaurant | null;
}

const Info = (props: IProps) => {
    const { infoHeight, restaurant } = props;

    return (
        <View style={{ height: infoHeight, backgroundColor: "white" }}>
            <View style={{ height: 60, margin: 10 }}>
                <Text style={{ lineHeight: 30, }} numberOfLines={2} ellipsizeMode="tail">
                    <View>
                        <Text style={{ color: "white", backgroundColor: APP_COLOR.ORANGE, padding: 0, margin: 0 }}></Text>
                    </View>
                    <Text>{` `}</Text>
                    <Ionicons name="shield-checkmark" size={20} color="orange" />
                    <Text>{` `}</Text>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>
                        {restaurant?.name}
                    </Text>
                </Text>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ gap: 10, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", gap: 3, alignItems: "flex-start" }}>
                        <AntDesign name="star" size={15} color="orange" />
                        <AntDesign name="star" size={15} color="orange" />
                        <AntDesign name="star" size={15} color="orange" />
                        <AntDesign name="star" size={15} color="orange" />
                        <AntDesign name="star" size={15} color="orange" />
                    </View>
                    <Text>5.0 (999+ Bình luận)</Text>
                </View>
            </View>
            <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
        </View>
    )
}

export default Info;