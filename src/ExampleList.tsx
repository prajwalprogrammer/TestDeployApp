import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {
  createStackNavigator, type StackNavigationProp,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Appbar, Divider, List, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ActivityIndicatorExample from './Examples/ActivityIndicatorExample';
import AnimatedFABExample from './Examples/AnimatedFABExample';
import AppbarExample from './Examples/AppbarExample';
import AvatarExample from './Examples/AvatarExample';
import BadgeExample from './Examples/BadgeExample';
import BannerExample from './Examples/BannerExample';
import BottomNavigationBarExample from './Examples/BottomNavigationBarExample';
import BottomNavigationExample from './Examples/BottomNavigationExample';
import ButtonExample from './Examples/ButtonExample';
import CardExample from './Examples/CardExample';
import CheckboxExample from './Examples/CheckboxExample';
import CheckboxItemExample from './Examples/CheckboxItemExample';
import ChipExample from './Examples/ChipExample';
import DataTableExample from './Examples/DataTableExample';
import DialogExample from './Examples/DialogExample';
import DividerExample from './Examples/DividerExample';
import FABExample from './Examples/FABExample';
import IconButtonExample from './Examples/IconButtonExample';
import IconExample from './Examples/IconExample';
import ListAccordionExample from './Examples/ListAccordionExample';
import ListAccordionExampleGroup from './Examples/ListAccordionGroupExample';
import ListItemExample from './Examples/ListItemExample';
import ListSectionExample from './Examples/ListSectionExample';
import MenuExample from './Examples/MenuExample';
import ProgressBarExample from './Examples/ProgressBarExample';
import RadioButtonExample from './Examples/RadioButtonExample';
import RadioButtonGroupExample from './Examples/RadioButtonGroupExample';
import RadioButtonItemExample from './Examples/RadioButtonItemExample';
import SearchbarExample from './Examples/SearchbarExample';
import SegmentedButtonMultiselectRealCase from './Examples/SegmentedButtons/SegmentedButtonMultiselectRealCase';
import SegmentedButtonRealCase from './Examples/SegmentedButtons/SegmentedButtonRealCase';
import SegmentedButtonExample from './Examples/SegmentedButtonsExample';
import SnackbarExample from './Examples/SnackbarExample';
import SurfaceExample from './Examples/SurfaceExample';
import SwitchExample from './Examples/SwitchExample';
import TeamDetails from './Examples/TeamDetails';
import TeamsList from './Examples/TeamsList';
import TextExample from './Examples/TextExample';
import TextInputExample from './Examples/TextInputExample';
import ThemeExample from './Examples/ThemeExample';
import ThemingWithReactNavigation from './Examples/ThemingWithReactNavigation';
import ToggleButtonExample from './Examples/ToggleButtonExample';
import TooltipExample from './Examples/TooltipExample';
import TouchableRippleExample from './Examples/TouchableRippleExample';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';

import { useExampleTheme } from './index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Category from './Examples/Components/Category';
import ScreenWrapper from './ScreenWrapper';
import Card1 from './Examples/Components/Card';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen({ navigation }: Props) {
  const keyExtractor = (item: { id: string }) => item.id;

  const { colors, isV3 } = useExampleTheme();
  const safeArea = useSafeAreaInsets();

  const renderItem = ({ item }: { item: Item }) => {
    const { data, id } = item;

    if (!isV3 && data.title === mainExamples.themingWithReactNavigation.title) {
      return null;
    }

    return (
      <List.Item
        unstable_pressDelay={65}
        title={data.title}
        onPress={() => navigation.navigate(id)}
      />
    );
  };
  return (

    <View>
      <FlatList
        contentContainerStyle={{
          backgroundColor: colors.background,
          paddingBottom: safeArea.bottom,
          paddingLeft: safeArea.left,
          paddingRight: safeArea.right,
        }}
        style={{
          backgroundColor: colors.background,
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={data}
      />
    </View>
  );
}
function Notification({ navigation }: Props) {
  const keyExtractor = (item: { id: string }) => item.id;

  const { colors, isV3 } = useExampleTheme();
  const safeArea = useSafeAreaInsets();

  const data1 = ["Stock", "Science Information", "something new","Sports","Art","naresh School","Music","news limited","Cat1","Cricket","Events"];
  const renderItem = ({ item }: { item: Item }) => {
    const { data, id } = item;

    if (!isV3 && data.title === mainExamples.themingWithReactNavigation.title) {
      return null;
    }

    return (
      <>
      <Category data={data1} />
          <List.Item
            unstable_pressDelay={65}
            title={data.title}
            onPress={() => navigation.navigate(id)}
          />
      </>

    );
  };
  return (

    <ScreenWrapper>
      <Category data={data1} />
      <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hello" dis="world" />
      <Divider />
      <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hello" dis="world" />
      <Divider />
      <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hello" dis="world" />
      <Divider />
      <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hello" dis="world" />
      <Divider />
      <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hello" dis="world" />
      <Divider />
      <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hello" dis="world" />
      <Divider />
    </ScreenWrapper>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Notification'
      screenOptions={({ navigation }) => {
        return {
          tabBarStyle: {
            height: 60,
          },
          tabBarItemStyle:{
            alignSelf:'center'
          },
          tabBarInactiveTintColor:'#6F6A71',
          tabBarIconStyle:{},
          tabBarLabelStyle:{},
          tabBarActiveTintColor: '#b70000',
          detachPreviousScreen: !navigation.isFocused(),
          CardStyleInterpolators,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <Appbar.Header style={{ backgroundColor: '#b70000' }} elevated>
                {(navigation as any).openDrawer ? (
                  <Appbar.Action
                    accessibilityRole='menu'
                    accessibilityLabel='Open Drawer'
                    icon="menu"
                    color='white'
                    isLeading
                    size={32}
                    onPress={() =>
                      (
                        navigation as any as DrawerNavigationProp<{}>
                      ).openDrawer()
                    }
                  />
                ) : null}
                <Appbar.Content color='white' title={title} accessibilityLabel={`${title}`} accessibilityRole='header' />
              </Appbar.Header>
            );
          },
        };
      }}
    >
      <Tab.Screen
        name="News"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="notification" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="newspaper-variant-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Personal Notification"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Student Blog"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Attention Please"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const mainExamples: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  // animatedFab: AnimatedFABExample,
  // activityIndicator: ActivityIndicatorExample,
  // appbar: AppbarExample,
  // avatar: AvatarExample,
  // badge: BadgeExample,
  // banner: BannerExample,
  bottomNavigationBarExample: BottomNavigationBarExample,
  bottomNavigation: BottomNavigationExample,
  // button: ButtonExample,
  // card: CardExample,
  checkbox: CheckboxExample,
  checkboxItem: CheckboxItemExample,
  // chip: ChipExample,
  // dataTable: DataTableExample,
  dialog: DialogExample,
  // divider: DividerExample,
  // fab: FABExample,
  iconButton: IconButtonExample,
  icon: IconExample,
  listAccordion: ListAccordionExample,
  listAccordionGroup: ListAccordionExampleGroup,
  listSection: ListSectionExample,
  listItem: ListItemExample,
  menu: MenuExample,
  progressbar: ProgressBarExample,
  radio: RadioButtonExample,
  radioGroup: RadioButtonGroupExample,
  radioItem: RadioButtonItemExample,
  searchbar: SearchbarExample,
  segmentedButton: SegmentedButtonExample,
  snackbar: SnackbarExample,
  surface: SurfaceExample,
  switch: SwitchExample,
  text: TextExample,
  textInput: TextInputExample,
  toggleButton: ToggleButtonExample,
  tooltipExample: TooltipExample,
  touchableRipple: TouchableRippleExample,
  theme: ThemeExample,
  themingWithReactNavigation: ThemingWithReactNavigation,
};

export const nestedExamples: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  themingWithReactNavigation: ThemingWithReactNavigation,
  teamDetails: TeamDetails,
  teamsList: TeamsList,
  segmentedButtonRealCase: SegmentedButtonRealCase,
  segmentedButtonMultiselectRealCase: SegmentedButtonMultiselectRealCase,
};

export const examples: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  ...mainExamples,
  ...nestedExamples,
};

type Props = {
  navigation: StackNavigationProp<{ [key: string]: undefined }>;
};

type Item = {
  id: string;
  data: (typeof mainExamples)[string];
};

const data = Object.keys(mainExamples).map(
  (id): Item => ({ id, data: mainExamples[id] })
);

export default function ExampleList({ navigation }: Props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="React Navigation" options={{ headerShown: false }} component={HomeTab} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
