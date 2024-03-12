import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useFonts } from 'expo-font';
import {
  configureFonts,
  HelperText,
  List,
  MD2Colors,
  MD3Colors,
  TextInput,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useExampleTheme } from '../index';
import { inputReducer, State } from '../../utils';
import ScreenWrapper from '../ScreenWrapper';

const MAX_LENGTH = 20;

const initialState: State = {
  text: '',
  customIconText: '',
  name: '',
  outlinedText: '',
  largeText: '',
  flatTextPassword: 'Password',
  outlinedLargeText: '',
  outlinedCustomLabel: '',
  outlinedTextPassword: '',
  nameNoPadding: '',
  customStyleText: '',
  nameRequired: '',
  flatDenseText: '',
  flatDense: '',
  outlinedDenseText: '',
  outlinedDense: '',
  flatMultiline: '',
  flatTextArea: '',
  flatUnderlineColors: '',
  outlinedMultiline: '',
  outlinedTextArea: '',
  outlinedColors: '',
  outlinedLongLabel: '',
  maxLengthName: '',
  flatTextSecureEntry: true,
  outlineTextSecureEntry: true,
  iconsColor: {
    flatLeftIcon: undefined,
    flatRightIcon: undefined,
    outlineLeftIcon: undefined,
    outlineRightIcon: undefined,
    customIcon: undefined,
  },
};

type AvoidingViewProps = {
  children: React.ReactNode;
};

type ExpandedId = string | number | undefined;

const TextInputAvoidingView = ({ children }: AvoidingViewProps) => {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <>{children}</>
  );
};

const TextInputExample = () => {
  const [state, dispatch] = React.useReducer(inputReducer, initialState);
  const {
    text,
    email,
    name,
    password,
    outlinedText,
    largeText,
    flatTextPassword,
    outlinedLargeText,
    outlinedCustomLabel,
    outlinedTextPassword,
    nameNoPadding,
    customStyleText,
    nameRequired,
    flatDenseText,
    flatDense,
    outlinedDenseText,
    outlinedDense,
    flatMultiline,
    flatTextArea,
    flatUnderlineColors,
    outlinedMultiline,
    outlinedTextArea,
    outlinedColors,
    maxLengthName,
    flatTextSecureEntry,
    outlineTextSecureEntry,
    iconsColor: {
      flatLeftIcon,
      flatRightIcon,
      outlineLeftIcon,
      outlineRightIcon,
      customIcon,
    },
  } = state;


  const theme = useExampleTheme();

  const inputActionHandler = (type: keyof State, payload: string) =>
    dispatch({
      type: type,
      payload: payload,
    });


  return (
    <TextInputAvoidingView>
      <ScreenWrapper
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      >
            <TextInput
              style={styles.inputContainerStyle}
              label="Enter Email Address"
              placeholder="Type Valid Email"
              value={email}
              onChangeText={(text) =>
                inputActionHandler('email', text)
              }
              maxLength={100}
            />
            <TextInput
              style={styles.inputContainerStyle}
              label="Enter Password"
              secureTextEntry
              placeholder="Type your password"
              value={password}
              onChangeText={(text) =>
                inputActionHandler('password', text)
              }
              maxLength={100}
            />
            <TextInput
              style={styles.inputContainerStyle}
              label="Enter Name"
              placeholder="Type your name"
              value={email}
              onChangeText={(text) =>
                inputActionHandler('name', text)
              }
              maxLength={100}
            />
      </ScreenWrapper>
    </TextInputAvoidingView>
  );
};

TextInputExample.title = 'TextInput';

const styles = StyleSheet.create({
  helpersWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
  },
  helper: {
    flexShrink: 1,
  },
  counterHelper: {
    textAlign: 'right',
  },
  inputContainerStyle: {
    margin: 8,
  },
  inputContentStyle: {
    paddingLeft: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  fontSize: {
    fontSize: 32,
  },
  textArea: {
    height: 80,
  },
  // eslint-disable-next-line react-native/no-color-literals
  noPaddingInput: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  centeredText: {
    textAlign: 'center',
  },
  fixedHeight: {
    height: 100,
  },
  row: {
    margin: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  month: {
    flex: 1,
    marginRight: 4,
  },
  year: {
    flex: 1,
    marginLeft: 4,
  },
  inputLabelText: {
    color: MD3Colors.tertiary70,
  },
  left: {
    width: '30%',
  },
  right: {
    width: '70%',
  },
});

export default TextInputExample;
