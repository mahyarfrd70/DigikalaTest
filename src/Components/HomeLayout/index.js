import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {getCategory} from '../../services/category';
import Input from '../Input';
import Loading from '../Loading';
import styles from './style';

function CategoryItem({name, isSelected, onClick}) {
  return (
    <TouchableOpacity
      style={[styles.categoryItem, isSelected && styles.selected]}
      onPress={() => onClick('tags', name !== 'All' ? name : '')}>
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

function HomeLayout({value, onFilter, children}) {
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [categoryLsit, setCategoryList] = useState([]);

  useEffect(() => {
    getCategory()
      .then((res) => {
        setCategoryList([{name: 'All', id: 'All'}, ...res.results]);
        setLoadingCategory(false);
      })
      .catch((err) => {
        // TODO : error handeling
        console.log(err);
      });
  }, []);

  const renderCategoryItem = (name, isSelected) => (
    <CategoryItem name={name} onClick={onFilter} isSelected={isSelected} />
  );

  return (
    <View style={styles.container}>
      <Input name="search" onChange={onFilter} placeholder="Search" />
      <View style={styles.flatListContainer}>
        {loadingCategory ? (
          <Loading />
        ) : (
          <FlatList
            listKey={(item) => item.id}
            keyExtractor={(item) => item.name}
            data={categoryLsit}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>
              renderCategoryItem(
                item.name,
                value?.tags === item.name ||
                  (!value?.tags && item.name === 'All'),
              )
            }
          />
        )}
      </View>
      <View style={styles.contentConatiner}>{children}</View>
    </View>
  );
}

export default HomeLayout;
