/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

// This  component disaplay single picture and it details
import { TouchableOpacity, Image, StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { useState } from 'react';

const ImageItem = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    // set Modal visible
    const handlePress = () => {
        setModalVisible(true);
    };

    return (
        <>
            <TouchableOpacity onPress={handlePress}>
                <Image source={{uri: props.item.webformatURL }} style={styles.image} />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{props.item.tags}</Text>
                        <Text>Collection: {props.item.collections}</Text>
                        <Text>Views: {props.item.views}</Text>
                        <Text>Downloads: {props.item.downloads}</Text>
                        <Text>Type: {props.item.type}</Text>
                        <Text>By: {props.item.user}</Text>
                        <Text>Image size: {props.item.imageHeight} x {props.item.imageWidth}</Text>
                        <Text>Likes: {props.item.likes}</Text>
                        <Pressable style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        padding: 10,
        margin: 10,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 10,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ImageItem;
