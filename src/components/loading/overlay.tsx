import { ActivityIndicator, StyleSheet, View } from "react-native";

interface LoadingOverlayProps {
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const LoadingOverlay = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default LoadingOverlay;