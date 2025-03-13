import RMain from "@/components/example/restaurant/main";
import { getRestaurantById } from "@/utils/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ProductPage = () => {
    const { id } = useLocalSearchParams();
    const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
    useEffect(() => {
        const fetchRestaurant = async () => {
            const res = await getRestaurantById(id as string);
            if (res.data) {
                console.log(res.data.image);
                setRestaurant(res.data);
            }
        }
        fetchRestaurant();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <RMain image={restaurant?.image as string} restaurant={restaurant as any} />
            {/* <Text>{JSON.stringify(restaurant?.menu)}</Text> */}
        </View>
    );
}

export default ProductPage;