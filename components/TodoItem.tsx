import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string;
}

const TodoItem: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default TodoItem;
