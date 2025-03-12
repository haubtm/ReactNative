import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import demo from '@/assets/food/banhMi.png';
import { APP_COLOR } from "@/utils/constant";
interface IProps {
    name: string;
    description: string;
}

const CollectionHome = (props: IProps) => {
    const { name, description } = props
    const data = [
        { key: 1, image: demo, name: "Bánh mì", description: "Bánh mì thịt ngon tuyệt" },
        { key: 2, image: demo, name: "Bánh mì", description: "Bánh mì thịt ngon tuyệt" },
        { key: 3, image: demo, name: "Bánh mì", description: "Bánh mì thịt ngon tuyệt" },
        { key: 4, image: demo, name: "Bánh mì", description: "Bánh mì thịt ngon tuyệt" },
        { key: 5, image: demo, name: "Bánh mì", description: "Bánh mì thịt ngon tuyệt" },
        { key: 6, image: demo, name: "Bánh mì", description: "Bánh mì thịt ngon tuyệt" },
    ]
    return (
        <>
            <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
            <View style={styles.container}>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{
                        color: APP_COLOR.ORANGE,
                        fontSize: 16,
                        fontWeight: "600"
                    }}>{name}</Text>
                    <Text style={{ color: "#5a5a5a" }}>Xem tất cả</Text>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ color: "#5a5a5a" }}>{description}</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: "#efefef" }}>
                            <Image
                                style={{ width: 130, height: 130 }}
                                source={item.image} />
                            <View style={{ padding: 5 }}>
                                <Text style={{ fontWeight: "600" }}>{item.name}</Text>
                                <View>
                                    <View style={styles.sale}>
                                        <Text style={{ color: APP_COLOR.ORANGE }}>Flash sale</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.key.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ gap: 5 }}
                />
            </View >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    sale: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: APP_COLOR.ORANGE,
        borderRadius: 3,
        padding: 3,
        alignItems: "flex-start",
    }
});

export default CollectionHome;