import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={paletteName} />
        )}
      />
    </SafeAreaView>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
