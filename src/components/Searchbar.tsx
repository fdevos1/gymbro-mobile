import React, {useState} from 'react';

import {StyleSheet, TextInput} from 'react-native';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (e: string) => {
    setSearchTerm(e);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={handleSearchTerm}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: '100%',
    padding: 4,
    backgroundColor: '#ccc',
    borderRadius: 4,
    fontFamily: '',
  },
});

export default Searchbar;
