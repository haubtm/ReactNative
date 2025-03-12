import CustomFlatList from '@/components/CustomFlatList/CustomFlatList';
import CollectionHome from '@/components/home/collection.home';
import HeaderHome from '@/components/home/header.home';
import SearchHome from '@/components/home/search.home';
import TopListHome from '@/components/home/top.list.home';
import { View, Text, StyleSheet } from 'react-native';

const data = [
    { key: 1, name: "Top Quán Rating 5* tuần nầy", ref: "" },
    { key: 2, name: "Quán mới lên sàn", ref: "" },
    { key: 3, name: "Ăn thoả thích, Freeship 0Đ", ref: "" },
]
const data1 = Array(20).fill(2);

export default function HomeTab() {
    return (
        <CustomFlatList
            data={data}
            style={styles.list}
            renderItem={({ item }) => <CollectionHome name={item.name} />}
            HeaderComponent={<HeaderHome />}
            StickyElementComponent={<SearchHome />}
            // TopListElementComponent={<View style={styles.topList} />}
            TopListElementComponent={<TopListHome />}
        />
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

