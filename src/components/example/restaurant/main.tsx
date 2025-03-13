import { Dimensions, FlatList, Image, SectionList, StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native';
import Animated, { Extrapolation, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { APP_COLOR } from '@/utils/constant';
import { useRef, useState } from 'react';
import demo from '@/assets/food/banhMi.png';
import { getURLBaseBackend, processDataRestaurantMenu } from '@/utils/api';
import Info from './info';
import { AntDesign } from '@expo/vector-icons';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const { height: sHeight, width: sWidth } = Dimensions.get('window');

const HEADER_HEIGHT = 120;
const IMAGE_HEIGHT = 220;
const INFO_HEIGHT = 250;
const SLIDE_MENU_HEIGHT = 50;

interface IProps {
    restaurant: IRestaurant;
    image: string;
}

const RMain = (props: IProps) => {
    const { restaurant, image } = props;

    const scrollY = useSharedValue(0);

    const sectionListRef = useRef<SectionList>(null);
    const flatListRef = useRef<FlatList>(null);
    const [activeMenuIndex, setActiveMenuIndex] = useState<number | string>(0);
    const blockUpdateRef = useRef<boolean>(false);

    const onScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
        // console.log(scrollY.value);
    })

    const animatedStickyHeaderStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollY.value,
            [0, 100],
            [0, 1],
            Extrapolation.CLAMP
        );

        const pointerEvents = opacity === 0 ? 'none' : 'auto';

        return {
            opacity,
            pointerEvents //on/off click input
        };
    });

    const animatedMenuStyle = useAnimatedStyle(() => {
        const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;
        const translateY = interpolate(
            scrollY.value,
            [0, range], // Define scroll range
            [0, -range - 2], // 2px menu border
            Extrapolation.CLAMP
        );

        return {
            transform: [{ translateY }],
            position: 'absolute',
            top: IMAGE_HEIGHT + INFO_HEIGHT,
            zIndex: 2,
            width: '100%',
            backgroundColor: 'white',
        };
    });

    const animatedInfoStyle = useAnimatedStyle(() => {
        const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;

        const translateY = interpolate(
            scrollY.value,
            [0, range], // Define scroll range
            [0, -range],
            Extrapolation.CLAMP
        );
        return {
            transform: [{ translateY }],
            position: 'absolute',
            top: IMAGE_HEIGHT,
            zIndex: 1,
            width: '100%',
        };
    });

    const animatedHeartStyle = useAnimatedStyle(() => {
        const range = IMAGE_HEIGHT + INFO_HEIGHT - HEADER_HEIGHT;

        const translateY = interpolate(
            scrollY.value,
            [0, range], // Define scroll range
            [0, -range],
            Extrapolation.CLAMP
        );
        return {
            transform: [{ translateY }],
        };
    });

    const animatedBackgroundStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                scrollY.value,
                [0, 100],
                ['rgba(0,0,0,0.3)', 'transparent'],
            ),
        };
    });

    const animatedArrowColorStyle = useAnimatedStyle(() => {
        return {
            color: interpolateColor(
                scrollY.value,
                [0, 100],
                ['white', APP_COLOR.ORANGE],
            ),
        };
    });

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        if (viewableItems.length > 0 && !blockUpdateRef.current) {
            const visibleSectionIndex = viewableItems[0].section.index;
            setActiveMenuIndex(visibleSectionIndex);
            flatListRef.current?.scrollToIndex({ index: visibleSectionIndex, animated: true });
        }
    }).current;

    console.log(processDataRestaurantMenu(restaurant));

    return (
        <View>
            {/* <StickyHeader
                headerHeight={HEADER_HEIGHT}
                imageHeight={IMAGE_HEIGHT}
                animatedBackgroundStyle={animatedBackgroundStyle}
                animatedArrowColorStyle={animatedArrowColorStyle}
                animatedStickyHeaderStyle={animatedStickyHeaderStyle}
                animatedHeartStyle={animatedHeartStyle}
            /> */}

            {/* Image */}
            <View style={styles.header}>
                <Image
                    source={{ uri: image }}
                    style={styles.headerImage}
                />
            </View>

            {/* Info */}
            <Animated.View style={{}}>
                <Info
                    infoHeight={INFO_HEIGHT}
                    restaurant={restaurant}
                />
            </Animated.View>

            {/* Sticky Menu */}
            <Animated.FlatList
                ref={flatListRef}
                horizontal
                data={processDataRestaurantMenu(restaurant)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}
                        onPress={() => {
                            blockUpdateRef.current = true;
                            setActiveMenuIndex(index);
                            sectionListRef.current?.scrollToLocation({
                                sectionIndex: index,
                                itemIndex: 0,
                                viewOffset: HEADER_HEIGHT + SLIDE_MENU_HEIGHT + 2,
                            });
                        }}
                    >
                        <View style={{
                            paddingHorizontal: 7,
                            height: SLIDE_MENU_HEIGHT,
                            justifyContent: 'center',
                            borderBottomColor: item.index === activeMenuIndex ? APP_COLOR.ORANGE : 'transparent',
                            borderBottomWidth: 2,
                        }}>
                            <Text
                                style={{
                                    color: item.index === activeMenuIndex ? APP_COLOR.ORANGE : 'black',
                                    marginHorizontal: 5,
                                }}>
                                {item.title}

                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
                style={[animatedMenuStyle]}
            />

            {/* Scrollable Content */}
            <AnimatedSectionList
                ref={sectionListRef as any}
                style={{ zIndex: 1 }}
                onScroll={onScroll}
                stickySectionHeadersEnabled={false}
                contentContainerStyle={{
                    paddingTop: IMAGE_HEIGHT + INFO_HEIGHT + SLIDE_MENU_HEIGHT - 2,
                    paddingBottom: 30,
                }}
                sections={processDataRestaurantMenu(restaurant)}
                renderItem={({ item, index }: { item: any, index: any }) => {
                    const menuItem = item as IMenuItem;

                    return (
                        <View style={{
                            backgroundColor: "white",
                            gap: 10,
                            flexDirection: "row",
                            padding: 10
                        }}>
                            <View>
                                <Image
                                    style={{ height: 100, width: 100 }}
                                    source={{ uri: menuItem.image }}
                                />
                            </View>
                            <View style={{ flex: 1, gap: 10 }}>
                                <View><Text>{menuItem.title}</Text></View>
                                <View><Text>{menuItem.description}</Text></View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text>{menuItem.basePrice}</Text>
                                    <AntDesign name="plussquare" size={24} color={APP_COLOR.ORANGE} />
                                </View>
                            </View>
                        </View>
                    )
                }}
                renderSectionHeader={({ section }: { section: any }) => (
                    <View style={{ backgroundColor: "white", paddingHorizontal: 10, paddingTop: 10 }}>
                        <Text style={{ textTransform: 'uppercase' }}>{section.title}</Text>
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <>
                        <View style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
                            <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 5 }}></View>
                        </View>
                    </>
                )}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        fontSize: 16,
        fontWeight: '600',
    },
    headerImage: {
        height: IMAGE_HEIGHT,
        width: sWidth,
    },
    header: {
        height: IMAGE_HEIGHT,
        width: sWidth,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
    },
});

export default RMain;