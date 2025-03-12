import ShareInput from '@/components/input/share.input';
import { useCurrentApp } from '@/context/app.context';
import { View, Text, Platform, StyleSheet, Image } from 'react-native';

const AccountPage = () => {
    const { theme, appState } = useCurrentApp();

    // const backend = Platform.OS === 'android'
    //     ? process.env.EXPO_PUBLIC_ANDROID_API_URL
    //     : process.env.EXPO_PUBLIC_IOS_API_URL;

    // const baseImage = `${backend}/images/avatar`;

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', gap: 5 }}>
                <Image
                    style={{ width: 150, height: 150, borderRadius: 75 }}
                    source={{ uri: `${appState?.user.avatar}` }}
                />
                <Text>{appState?.user.name}</Text>
            </View>
            <View style={{ marginTop: 20, gap: 20 }}>
                <ShareInput
                    title="Họ tên"
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={values.email}
                    // error={errors.email}
                    value={appState?.user.name}
                />
                <ShareInput
                    title="Email"
                    keyboardType='email-address'
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={values.email}
                    // error={errors.email}
                    value={appState?.user.email}
                />
                <ShareInput
                    title="Số điện thoại"
                    keyboardType='email-address'
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={values.email}
                    // error={errors.email}
                    value={appState?.user.phone}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 50,
    },
})

export default AccountPage;
