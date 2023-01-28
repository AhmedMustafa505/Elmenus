import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './Text';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';
import AppButton from './Button';



function AddressPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>

            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

                <View style={styles.container}>

                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.icon}
                            style={styles.icon} />
                    )}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name={'chevron-down'}
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <AppButton title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }
                                }
                            />
                        )}

                    />

                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: defaultStyles.colors.light,
        height: 50
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
        color: defaultStyles.colors.medium,
    }
});

export default AddressPicker;