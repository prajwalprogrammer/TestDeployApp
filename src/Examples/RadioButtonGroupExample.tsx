import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { List, Paragraph, RadioButton, Text } from 'react-native-paper';

import { useExampleTheme } from '../index';
import ScreenWrapper from '../ScreenWrapper';

const RadioButtonGroupExample = () => {
  const [value, setValue] = React.useState('first');
  const [value2, setValue2] = React.useState('first');

  const { colors, isV3 } = useExampleTheme();
  const TextComponent = isV3 ? Text : Paragraph;

  return (
    <ScreenWrapper accessibilityRole='header' accessibilityLabel="RadioButton Screen">
      <List.Section title="With RadioButton" accessibilityRole='radiogroup'>
        <RadioButton.Group
          value={value2}
          onValueChange={(value: string) => setValue2(value)}
        >
          <RadioButton.Item accessibilityLabel='First item' label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item
            label="Third item"
            value="third"
            labelStyle={{ color: colors?.primary }}
          />
        </RadioButton.Group>
      </List.Section>
    </ScreenWrapper>
  );
};

RadioButtonGroupExample.title = 'Radio Button';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default RadioButtonGroupExample;
