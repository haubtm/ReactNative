import CustomFlatList from '@/components/CustomFlatList/CustomFlatList';
import CollectionHome from '@/components/home/collection.home';
import HeaderHome from '@/components/home/header.home';
import SearchHome from '@/components/home/search.home';
import TopListHome from '@/components/home/top.list.home';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    {
        key: 1,
        name: "Top Quán Rating 5* tuần nầy",
        description: "Đừng bỏ lỡ những quán ngon được cộng đồng ưa thích nhất tuần này",
        refAPI: "2"
    },
    {
        key: 2,
        name: "Quán mới lên sàn",
        description: "Các quán mới nhất đã được cập nhật",
        refAPI: "3"
    },
    {
        key: 3,
        name: "Ăn thoả thích, Freeship 0Đ",
        description: "Tận hưởng ưu đãi freeship 0Đ từ các quán ăn yêu thích",
        refAPI: "top"
    },
]
const data1 = Array(20).fill(2);

export default function HomeTab() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomFlatList
                data={data}
                style={styles.list}
                renderItem={({ item }) => (
                    <CollectionHome
                        name={item.name}
                        description={item.description}
                        refAPI={item.refAPI}
                    />)}
                HeaderComponent={<HeaderHome />}
                StickyElementComponent={<SearchHome />}
                // TopListElementComponent={<View style={styles.topList} />}
                TopListElementComponent={<TopListHome />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ecf0f1",
        flex: 1,
        justifyContent: "center",
        overflow: "hidden",
    },
    header: {
        borderColor: "red",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    item: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    },
    list: {
        overflow: "hidden"
    },
    sticky: {
        backgroundColor: "#2555FF50",
        borderColor: "blue",
        borderWidth: 5,
        height: 100,
        marginBottom: 6,
        width: "100%"
    }
});

