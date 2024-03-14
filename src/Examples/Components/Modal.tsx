import * as React from 'react';
import { ScrollView, View, StyleSheet, AccessibilityInfo, findNodeHandle, Modal } from 'react-native';
import {
  Button,
  Portal,
  Dialog,
  RadioButton,
  TouchableRipple,
} from 'react-native-paper';
import { TextComponent } from '../Dialogs/DialogTextComponent';

type Props = {
  visible: boolean;
  close: () => void;
  checked: string | null;
  setChecked: React.Dispatch<React.SetStateAction<string | null>>;
  arrayOfObjects: MyObject[];
};
interface MyObject {
  label: string;
  value: string;
}

const nameList = [
  {
    label: "Peter Parker",
    value: "Peter Parker",
  },
  {
    label: "Tony Stark",
    value: "Tony Stark",
  },
  {
    label: "Bruce Banner",
    value: "Bruce Banner",
  },
];
const GlobalModal = ({ visible, close, checked, setChecked, arrayOfObjects }: Props) => {

  const myRef = React.useRef<Modal>(null);
  const focusAccess = () => {
    const tag = findNodeHandle(myRef.current);
    if (tag) {
      AccessibilityInfo.setAccessibilityFocus(tag);
    }
  }
  return (
    <Modal
      ref={myRef}
      animationType={"none"}
      transparent={true}
      visible={visible}
      onShow={focusAccess}
    >
      <Dialog onDismiss={close} visible={visible}>
        <Dialog.Title>Choose an option</Dialog.Title>
        <Dialog.ScrollArea style={styles.container}>
          <ScrollView>
            <View>
              {arrayOfObjects.map((name, idx) => (
                <TouchableRipple key={idx} onPress={() => setChecked(name.value)}>
                  <View style={styles.row}>
                    <View pointerEvents="none">
                      <RadioButton
                        value="normal"
                        status={checked === name.value ? 'checked' : 'unchecked'}
                      />
                    </View>
                    <TextComponent isSubheading style={styles.text}>
                      {name.label}
                    </TextComponent>
                  </View>
                </TouchableRipple>))}
              {/* <TouchableRipple onPress={() => setChecked('normal')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="normal"
                      status={checked === 'normal' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                    Option 1
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('second')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="second"
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                    Option 2
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('third')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="third"
                      status={checked === 'third' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                    Option 3
                  </TextComponent>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => setChecked('fourth')}>
                <View style={styles.row}>
                  <View pointerEvents="none">
                    <RadioButton
                      value="fourth"
                      status={checked === 'fourth' ? 'checked' : 'unchecked'}
                    />
                  </View>
                  <TextComponent isSubheading style={styles.text}>
                    Option 4
                  </TextComponent>
                </View>
              </TouchableRipple> */}
            </View>
          </ScrollView>
        </Dialog.ScrollArea>
        <Dialog.Actions>
          <Button onPress={close}>Cancel</Button>
          <Button onPress={close}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Modal>
  );
};

export default GlobalModal;

const styles = StyleSheet.create({
  container: {
    maxHeight: 170,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    paddingLeft: 8,
  },
});
