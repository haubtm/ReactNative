import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BannerHome from "./banner.home";

const data1 = [
    { key: 1, name: "Bánh Mì", source: require('@/assets/food/banhMi.png') },
    { key: 2, name: "Bún Mắm", source: require('@/assets/food/bunMam.png') },
    { key: 3, name: "Chè", source: require('@/assets/food/che.png') },
    { key: 4, name: "Cơm gà", source: require('@/assets/food/comGa.png') },
    { key: 5, name: "Cơm tấm", source: require('@/assets/food/comTam.png') },
    { key: 6, name: "Dừa dầm", source: require('@/assets/food/duaDam.png') },
    { key: 7, name: "Gà rán", source: require('@/assets/food/gaRan.png') },
    { key: 8, name: "Gỏi cuốn", source: require('@/assets/food/goiCuon.png') },
    { key: 9, name: "Bánh Mì", source: require('@/assets/food/banhMi.png') },
    { key: 10, name: "Bún Mắm", source: require('@/assets/food/bunMam.png') },
    { key: 11, name: "Chè", source: require('@/assets/food/che.png') },
    { key: 12, name: "Cơm gà", source: require('@/assets/food/comGa.png') },
    { key: 13, name: "Cơm tấm", source: require('@/assets/food/comTam.png') },
    { key: 14, name: "Dừa dầm", source: require('@/assets/food/duaDam.png') },
    { key: 15, name: "Gà rán", source: require('@/assets/food/gaRan.png') },
    { key: 16, name: "Gỏi cuốn", source: require('@/assets/food/goiCuon.png') },
];

const TopListHome = () => {
    return (
        <View>
            <BannerHome />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false}
                style={{ marginVertical: 15 }}
            >
                <FlatList
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                    numColumns={Math.ceil(data1.length / 2)}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ padding: 5, width: 100, alignItems: 'center' }}>
                                <Image source={item.source}
                                    style={{ height: 35, width: 35, borderRadius: 50 }}
                                />
                                <Text style={{ textAlign: "center" }}>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default TopListHome;