import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import {
  MD3Elevation,
  Surface,
  Text,
  MD3Colors,
  List,
  Button,
} from 'react-native-paper';
import ScreenWrapper from '../../ScreenWrapper';


const Category = ({ data }: { data: any }) => {
  const renderSurface = (val: any, idx: number) => (

    <Button mode='contained-tonal' onPress={() => { }} style={{ margin: 5, backgroundColor: '#b70000', minHeight: 45 }}>
      <Text variant='titleLarge' style={{ color: 'white' }}>{val}</Text>
    </Button>
  );

  return (
    <ScreenWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((val: string, idx: number) => renderSurface(val, idx))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Category