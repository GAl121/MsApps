/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

// This component to set position of the two main component - ImageGrid abd ButtonNav and dispatch when new category selected
import ButtonNav from './ButtonNav';
import ImagesGrid from './ImagesGrid';
import {fetchData} from '../store/actions';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet,SafeAreaView } from 'react-native';

const Main = () => {

  //create state for catgory and save sports by default
  const [category, setCategory] = useState('sports');
  const dispatch = useDispatch();

  // before the page is loading api call for fetch and set data
  useEffect(() => {
    dispatch(fetchData(category));
  }, [dispatch,category]);

  //on selected new category call for dispatch in ButtonNav component to set the new data
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

    return (
      <SafeAreaView style={styles.mainView}>
          <ButtonNav  onCategoryChange={handleCategoryChange} />
          <ImagesGrid />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Main;
