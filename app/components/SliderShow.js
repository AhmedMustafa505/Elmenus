import React from 'react';
import { View, StyleSheet, Image, Platform, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SliderShow({
    item,
    imageKey,
    onPress,
    active,
}) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
            <View style={[styles.imageContainer, styles.shadow]}>
                <Image
                    style={[styles.preview, active ? {} : { height: 120 }]}
                    source={{ uri: item[imageKey] }}
                />
            </View>
            <Text style={styles.desc}>{item.desc}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 275,
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    preview: {
        width: 275,
        height: 155,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    desc: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 24,
        marginTop: 18,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});

export default SliderShow;