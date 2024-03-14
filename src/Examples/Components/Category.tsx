import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import {
  MD3Elevation,
  Surface,
  Text,
  MD3Colors,
  List,
  Button,
  TouchableRipple,
} from 'react-native-paper';
import ScreenWrapper from '../../ScreenWrapper';


const Category = ({ data }: { data: any }) => {
  const renderSurface = (val: any, idx: number) => (

    <TouchableRipple onPress={() => { }} style={{paddingHorizontal:30,borderRadius:30, margin: 5,justifyContent:'center', backgroundColor: '#b70000', minHeight: 48 }}>
      <Text  style={{ color: 'white',fontSize: 20}}>{val}</Text>
    </TouchableRipple>
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