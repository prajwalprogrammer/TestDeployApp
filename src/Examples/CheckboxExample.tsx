import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Checkbox,
  MD2Colors,
  MD3Colors,
  Paragraph,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import { useExampleTheme } from '../index';
import ScreenWrapper from '../ScreenWrapper';

const CheckboxExample = () => {
  const [checkedNormal, setCheckedNormal] = React.useState<boolean>(true);
  const [checkedCustom, setCheckedCustom] = React.useState<boolean>(true);
  const [indeterminate, setIndeterminate] = React.useState<boolean>(true);

  const { isV3 } = useExampleTheme();
  const TextComponent = isV3 ? Text : Paragraph;

  return (
    <ScreenWrapper accessibilityRole='header' accessibilityLabel='Checkbox Accessibility test' style={styles.container}>
      <TouchableRipple accessible={true}
        accessibilityLabel={checkedNormal ? "Option selected" : "Option not selected"}
        accessibilityHint="Toggles the option on or off" onPress={() => setCheckedNormal(!checkedNormal)}>
        <View aria-hidden style={styles.row}>
          <TextComponent>Normal</TextComponent>
          <View pointerEvents="none">
            <Checkbox status={checkedNormal ? 'checked' : 'unchecked'} />
          </View>
        </View>
      </TouchableRipple>


      <View style={styles.row} accessible={true}
        accessibilityLabel="Checkbox Disabled"
        accessibilityHint="Toggles the option on or off">
        <TextComponent>Checked (Disabled)</TextComponent>
        <Checkbox status="checked" disabled />
      </View>
    </ScreenWrapper>
  );
};

CheckboxExample.title = 'Checkbox';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default CheckboxExample;
