import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';


import colors from '../config/colors';
import DetectLocation from './DetectLocation';
import AppTextInput from './TextInput';



function DeliveryModal({ visible }) {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}

        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.firstViewContainer}>
                        <Text style={styles.mainText}>
                            Choose your delivery location
                        </Text>
                        <AppTextInput
                            iconz={'search1'}
                            placeholder={'Search for your address'}
                            backgroundcolor={'#E5E4E2'}
                            borderColor={'#E5E4E2'}
                            borderRadius={15} />
                        <DetectLocation
                            icon={'location-arrow'}
                            placeholder='Deliver to my current location'
                        />
                    </View>
                    <View style={styles.secondViewContainer}>
                        <Text style={styles.secondaryText}>
                            Your recent delivery locations
                        </Text>
                        <DetectLocation
                            icon={'rotate-left'}
                            placeholder='Dokki, Dokki'
                        />
                    </View>
                    <DetectLocation
                        icon={'plus'}
                        placeholder='Choose another address'
                        onPress={() => setModalVisible(false)} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        justifyContent: 'flex-end'
    },
    modal: {
        backgroundColor: colors.white,
        padding: 18,
        margin: 2,

    },
    firstViewContainer: {
        borderWidth: 0.5,
        borderColor: colors.white,
        borderBottomColor: colors.light
    },
    mainText: {
        fontSize: 16,
        color: colors.dark
    },
    secondViewContainer: {
        borderWidth: 0.5,
        borderColor: colors.white,
        borderBottomColor: colors.light,
        marginTop: 10
    },
    secondaryText: {
        fontSize: 12,
        color: colors.medium
    }
});

export default DeliveryModal;