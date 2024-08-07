/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

// This component to set position of the two main component - ImageGrid abd ButtonNav and dispatch when new category selected
import ButtonNav from './ButtonNav';
import ImagesGrid from './ImagesGrid';
import {fetchData} from '../store/actions';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet,SafeAreaView, View, Text } from 'react-native';
import Loading from './Loading';
import CustomButton from './CustomButton';

const Main = () => {

  //create state for catgory and save sports by default
  const [category, setCategory] = useState('sports');
  const dispatch = useDispatch();
  //check show if loading or have errors before show data
  const isLoading = useSelector(state => state.Data.isLoading);
  const error = useSelector(state => state.Data.error);

  // before the page is loading api call for fetch and set data
  useEffect(() => {
    dispatch(fetchData(category));
  }, [dispatch,category]);

  //on selected new category call for dispatch in ButtonNav component to set the new data
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // check if there any errors and return message

  if (error.isError) {
    return (
    <View style={styles.errorView}>
      <Text style={styles.errorTextHeader} >Error!</Text>
      <Text style={styles.errorText} >{error.message}!</Text>
      <Text style={styles.errorText} >Please try again</Text>
       </View>
    );
  }

    return (
      <>
      {(isLoading) ? (<Loading />) : (
        <SafeAreaView style={styles.mainView}>
          <ButtonNav  onCategoryChange={handleCategoryChange} />
          <ImagesGrid />
        </SafeAreaView>)}
    </>
    );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  errorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  errorTextHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 16,
    marginVertical: 5,
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
    fontSize: 16,
},
});

export default Main;
