import {
  Appbar,
  Button,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
  Text,
  Title,
  Paragraph,
  TouchableRipple
} from "react-native-paper";
import React, { useState } from "react";
import { AccessibilityInfo, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View, findNodeHandle } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { DatePickerModal } from "react-native-paper-dates";
import ScreenWrapper from "../../ScreenWrapper";
import GlobalModal from "../Components/Modal";
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
const PermissionToLeave = () => {
  const [nightMode, setNightmode] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState<string>("");
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [colors, setColors] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [reason, setReason] = useState<string | null>("Select a Reason");
  const [checked, setChecked] = React.useState<string | null>("Select Student Name");

  const genderList = [
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
  const ReasonList = [
    {
      label: "illness (Sick/Medical/Appointment)",
      value: "illness",
    },
    {
      label: "Family",
      value: "Family",
    },
    {
      label: "Holiday",
      value: "Holiday",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const [date, setDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [date1, setDate1] = React.useState("");
  const [open1, setOpen1] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      console.log(params.date)
      setOpen(false);
      setDate(params.date.toString());
    },
    [setOpen, setDate]
  );
  const onDismissSingle1 = React.useCallback(() => {
    setOpen1(false);
  }, [setOpen1]);

  const onConfirmSingle1 = React.useCallback(
    (params: any) => {
      console.log(params.date)
      setOpen1(false);
      setDate1(params.date.toString());
    },
    [setOpen1, setDate1]
  );


  const _toggleDialog = () => {
    setShowDropDown((showDropDown) => !showDropDown)
  }
  const _toggleDialog1 = () => {
    setShowDropDown1((showDropDown1) => !showDropDown1)
  }
  return (
    <TextInputAvoidingView>
      <ScreenWrapper
        keyboardShouldPersistTaps={'always'}
        removeClippedSubviews={false}
      >
        <SafeAreaView style={styles.safeContainerStyle}>
          <View>
            <Text variant="titleMedium">Student</Text>
            <TouchableRipple onPress={() => _toggleDialog()} style={{ paddingHorizontal: 30, margin: 5, justifyContent: 'center', borderColor: '#b70000', borderWidth: 1, minHeight: 48 }}>
              <Text style={{ color: '#B70000', fontSize: 17 }}> {checked}</Text>
            </TouchableRipple>

            <GlobalModal
              visible={showDropDown}
              close={_toggleDialog}
              checked={checked}
              setChecked={setChecked}
              arrayOfObjects={genderList}
            />

          </View>

          <Text variant="titleMedium">Leave Info</Text>
          <View style={{ paddingVertical: 15 }}>
            <Text variant="titleSmall">From :{date}</Text>

            <TouchableRipple onPress={() => setOpen1(true)} style={{ paddingHorizontal: 30, borderRadius: 30, margin: 5, justifyContent: 'center', borderColor: '#b70000', borderWidth: 1, minHeight: 48, alignItems: 'center' }}>
              <Text style={{ color: '#B70000', fontSize: 17 }}> Pick a From date</Text>
            </TouchableRipple>
            <Text variant="titleSmall">Until : {date1}</Text>

            <TouchableRipple onPress={() => setOpen(true)} style={{ paddingHorizontal: 30, borderRadius: 30, margin: 5, justifyContent: 'center', borderColor: '#b70000', borderWidth: 1, minHeight: 48, alignItems: 'center' }}>
              <Text style={{ color: '#B70000', fontSize: 17 }}> Pick a until date</Text>
            </TouchableRipple>
          </View>


          <TouchableRipple onPress={() => _toggleDialog1()} style={{ paddingHorizontal: 30, margin: 5, justifyContent: 'center', borderColor: '#b70000', borderWidth: 1, minHeight: 48 }}>
            <Text style={{ color: '#B70000', fontSize: 17 }}> {reason}</Text>
          </TouchableRipple>

          <GlobalModal
            visible={showDropDown1}
            close={_toggleDialog1}
            checked={reason}
            setChecked={setReason}
            arrayOfObjects={ReasonList}
          />


          <TextInput
            style={{
              height: 48,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderColor:'#B70000'
            }}
            onChangeText={setEmail}
            value={email}
            placeholderTextColor={"#B70000"}
            placeholder="Further Reason"
          />
          <Text variant="labelLarge" style={{ paddingVertical: 15, color: "blue" }}>Include signature here</Text>
          <Text variant="labelLarge">Parent/Guardian</Text>
          <Text variant="labelLarge">Aunt May</Text>
          <Text variant="labelSmall">13 Mar 2015</Text>
          <Paragraph>Student/parents/guardians Must follow the schools "sign out" procedure and sign out at reception BEFORE they leave the school premises</Paragraph>


          <TouchableRipple onPress={() => { }} style={{ paddingHorizontal: 30, borderRadius: 30, margin: 5, justifyContent: 'center', backgroundColor: '#b70000', minHeight: 48, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
          </TouchableRipple>
        </SafeAreaView>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>

          <DatePickerModal
            locale="en"
            mode="single"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle}
          />
          <DatePickerModal
            locale="en"
            mode="single"
            visible={open1}
            onDismiss={onDismissSingle1}
            date={date1}
            onConfirm={onConfirmSingle1}
          />
        </View>
      </ScreenWrapper>
    </TextInputAvoidingView>
  )
}

export default PermissionToLeave

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  inputContainerStyle: {
    margin: 8,
  },
});
