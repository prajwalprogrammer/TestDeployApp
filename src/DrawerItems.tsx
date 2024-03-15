import * as React from 'react';
import { I18nManager, StyleSheet, View, Platform, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import * as Updates from 'expo-updates';
import {
  Badge,
  Drawer,
  MD2Colors,
  MD3Colors,
  Paragraph,
  Switch,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import { PreferencesContext, useExampleTheme } from './index';

const isWeb = Platform.OS === 'web';

const DrawerItemsData = [
  {
    label: 'Inbox',
    icon: 'inbox',
    key: 0,
    right: () => <Text variant="labelLarge">44</Text>,
  },
  {
    label: 'Starred',
    icon: 'star',
    key: 1,
    right: ({ color }: { color: string }) => (
      <Badge
        visible
        size={8}
        style={[styles.badge, { backgroundColor: color }]}
      />
    ),
  },
  { label: 'Sent mail', icon: 'send', key: 2 },
  { label: 'Colored label', icon: 'palette', key: 3 },
  {
    label: 'A very long title that will be truncated',
    icon: 'delete',
    key: 4,
    right: () => <Badge visible size={8} style={styles.badge} />,
  },
];

const DrawerCollapsedItemsData = [
  {
    label: 'Inbox',
    focusedIcon: 'inbox',
    unfocusedIcon: 'inbox-outline',
    key: 0,
    badge: 44,
  },
  {
    label: 'Starred',
    focusedIcon: 'star',
    unfocusedIcon: 'star-outline',
    key: 1,
  },
  {
    label: 'Sent mail',
    focusedIcon: 'send',
    unfocusedIcon: 'send-outline',
    key: 2,
  },
  {
    label: 'A very long title that will be truncated',
    focusedIcon: 'delete',
    unfocusedIcon: 'delete-outline',
    key: 3,
  },
  {
    label: 'Full width',
    focusedIcon: 'arrow-all',
    key: 4,
  },
  {
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
    key: 5,
    badge: true,
  },
];

function DrawerItems({ navigation }: { navigation: any }) {
  const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>();
  const preferences = React.useContext(PreferencesContext);

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  const { isV3, colors } = useExampleTheme();
  const isIOS = Platform.OS === 'ios';

  if (!preferences) throw new Error('PreferencesContext not provided');

  const {
    toggleTheme,
    toggleRtl: toggleRTL,
    toggleThemeVersion,
    toggleCollapsed,
    toggleCustomFont,
    toggleRippleEffect,
    customFontLoaded,
    rippleEffectEnabled,
    collapsed,
    rtl: isRTL,
    theme: { dark: isDarkTheme },
  } = preferences;

  const _handleToggleRTL = () => {
    toggleRTL();
    I18nManager.forceRTL(!isRTL);
    if (isWeb) {
      Updates.reloadAsync();
    }
  };


  const DrawerItemsArray = [
    {
      icon: () => <Feather name="phone-call" size={20} />,
      label: 'School Office'
    },
    {
      icon: () => <FontAwesome name="newspaper-o" size={20} />,
      label: 'News/Notification'
    },
    {
      icon: () => <Feather name="bell" size={20} />,
      label: 'Personal Notification'
    },
    {
      icon: () => <AntDesign name="folder1" size={20} />,
      label: 'News Archives'
    },
    {
      icon: () => <FontAwesome name="photo" size={20} />,
      label: 'Gallary'
    },
    {
      icon: 'menu',
      label: 'Calender'
    },
    {
      icon: () => <MaterialIcon name="toaster-oven" size={20} />,
      label: 'My Student'
    },
    {
      icon: 'menu',
      label: 'Absentee form'
    },
    {
      icon: () => <Octicons name="stopwatch" size={20} />,
      label: 'Late Note'
    },
    {
      icon: () => <Foundation name="social-skillshare" size={20} />,
      label: 'Study Skills'
    },
    {
      icon: () => <MaterialIcon name="logout" size={20} />,
      label: 'Permission to leave'
    },
    {
      icon: 'menu',
      label: 'Canteen'
    },
    {
      icon: () => <MaterialIcon name="cart" size={20} />,
      label: 'shop'
    },
    {
      icon: 'menu',
      label: 'Notice Boards'
    },
  ]
  const coloredLabelTheme = {
    colors: isV3
      ? {
        secondaryContainer: MD3Colors.tertiary80,
        onSecondaryContainer: MD3Colors.tertiary20,
      }
      : {
        primary: MD2Colors.tealA200,
      },
  };

  return (
    <DrawerContentScrollView
      accessibilityLabel='Drawer'
      accessibilityRole='menu'
      alwaysBounceVertical={false}
      style={[
        styles.drawerContent,
        {
          backgroundColor: '#fff',
        },
      ]}
    >
      {isV3 && collapsed && (
        <Drawer.Section style={styles.collapsedSection}>
          {DrawerCollapsedItemsData.map((props, index) => (
            <Drawer.CollapsedItem
              {...props}
              key={props.key}
              active={drawerItemIndex === index}
              onPress={() => {
                _setDrawerItem(index);
                index === 4 && toggleCollapsed();
              }}
            />
          ))}
        </Drawer.Section>
      )}
      {!collapsed && (
        <>

          <Drawer.Section>
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
              <Image source={require('../assets/images/school_logo_124.png')} style={{ width: 100, height: 100, }} />
              <Text variant='titleLarge'>Test App</Text>
              <Text variant='titleMedium'>Dublin, Ireland</Text>
            </View>
          </Drawer.Section>
          <Drawer.Section>
            <View style={styles.cardContent}>
              <View style={styles.cardImage}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} style={{
                  width: 60,
                  height: 60,
                }} />
              </View>
              <View style={styles.textContainer}>
                <Text variant='titleMedium'>Aunt May</Text>
                <Text variant='titleSmall'>Teacher</Text>
              </View>
            </View>
          </Drawer.Section>
          <Drawer.Section>
            {DrawerItemsArray.map((props, index) => (
              <Drawer.Item
                {...props}
                key={index}
                theme={{ colors: { secondaryContainer: MD3Colors.error50 } }}
                style={{ width: '100%', borderRadius: 0, }}
                active={drawerItemIndex === index}
                
                onPress={() => { navigation.navigate(props.label), _setDrawerItem(index) }}
              />
            ))}
          </Drawer.Section>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleTheme}>
              <View style={[styles.preference, isV3 && styles.v3Preference]}>
                <Text variant="labelLarge">Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>


            {isV3 && (
              <TouchableRipple onPress={toggleCollapsed}>
                <View style={[styles.preference, isV3 && styles.v3Preference]}>
                  <Text variant="labelLarge">Collapsed drawer *</Text>
                  <View pointerEvents="none">
                    <Switch value={collapsed} />
                  </View>
                </View>
              </TouchableRipple>
            )}

          </Drawer.Section> */}

        </>
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardImage: {
    backgroundColor: '#fff',
    borderRadius: 50,

    marginRight: 15,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: 'center',
  },
  collapsedSection: {
    marginTop: 16,
  },
  annotation: {
    marginHorizontal: 24,
    marginVertical: 6,
  },
});

export default DrawerItems;
