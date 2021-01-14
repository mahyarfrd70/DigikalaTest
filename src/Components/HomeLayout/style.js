import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  flatListContainer: {
    height: 30,
    marginBottom: 10,
  },
  categoryItem: {
    justifyContent: 'center',
    marginRight: 5,
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 7,
    borderColor: '#404040',
    borderWidth: 1,
    color: '#404040',
  },
  selected: {
    backgroundColor: '#404040',
  },
  text: {
    color: '#404040',
  },
  selectedText: {
    color: '#fff',
  },
  contentConatiner: {
    flex: 1,
  },
});
