/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

// This component will present each picture in items array calling ImageItem

import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ImageItem from './ImageItem';

const ImagesGrid = () => {
  //selected data to present on screen
  const items = useSelector(state => state.Data.items);

  return (
    <View style={styles.gridItem}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ImageItem item={item} />}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default ImagesGrid;
