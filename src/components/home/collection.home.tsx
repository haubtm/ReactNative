import { StyleSheet, Text, View } from "react-native";

interface IProps {
    name: string
}

const CollectionHome = (props: IProps) => {
    const { name } = props
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    },
});

export default CollectionHome;