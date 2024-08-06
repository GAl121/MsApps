/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable curly */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
// component to set position of the two main component - ImageGrid abd ButtonNav

import {Pressable, StyleSheet, View, Modal, Text, TouchableWithoutFeedback} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { slicerAction } from '../store/slicer';
import { useState } from 'react';

const ButtonNav = ({onCategoryChange}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  // get current index and the size of all data from slicer using redux
  const currentIndex = useSelector(state => state.Data.currentIndex);
  const maxSize = useSelector(state => state.Data.data).length;

  //dispatch getPagination action and check the array boundreys before dispatch
  const handlePerv = () => {
    if(currentIndex - 9 >= 0)
      dispatch(slicerAction.getPagination(-9));
  }

  const handleNext = () => {
    if (currentIndex + 9 < maxSize)
      dispatch(slicerAction.getPagination(9));
  }

  //on selecten new category dispatch to set new data
  const handleSelectCategory = (selectedCategory) => {
    onCategoryChange(selectedCategory);
    setModalVisible(false);
  };

  return (
    <View style={style.buttonsView}>
      <View style={style.buttonContainer}>
        <Pressable style={style.button} onPress={handlePerv}>
          <Text style={style.buttonText}>Perv</Text>
        </Pressable>
        <Pressable style={style.button} onPress={() => setModalVisible(true)}>
          <Text style={style.buttonText}>Select Category</Text>
        </Pressable>
        <Pressable style={style.button} onPress={handleNext}>
          <Text style={style.buttonText}>Next</Text>
        </Pressable>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={style.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={style.modalView}>
                <Text style={style.modalTitle}>Select Category</Text>
                <View style={style.modalButtonContainer}>
                  <Pressable style={style.modalButton} onPress={() => handleSelectCategory('sports')}>
                    <Text style={style.buttonText}>Sports</Text>
                  </Pressable>
                  <Pressable style={style.modalButton} onPress={() => handleSelectCategory('animals')}>
                    <Text style={style.buttonText}>Animals</Text>
                  </Pressable>
                  <Pressable style={style.modalButton} onPress={() => handleSelectCategory('work')}>
                    <Text style={style.buttonText}>Work</Text>
                  </Pressable>
                  <Pressable style={style.modalButton} onPress={() => handleSelectCategory('food')}>
                    <Text style={style.buttonText}>Food</Text>
                  </Pressable>
                  <Pressable style={style.modalButton} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={style.buttonText}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  buttonsView: {
    marginTop: 100,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
  modalButtonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
  },
});

export default ButtonNav;
