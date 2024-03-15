import * as React from 'react';
import { I18nManager } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import {
  InitialState,
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
  MD2DarkTheme,
  MD2LightTheme,
  MD2Theme,
  MD3Theme,
  useTheme,
  adaptNavigationTheme,
  configureFonts,
  Appbar,
} from 'react-native-paper';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import DrawerItems from './DrawerItems';
import App from './RootNavigator';
import Canteen from './Examples/Screen/Canteen';
import PersonalNotification from './Examples/Screen/PersonalNotification';
import News from './Examples/Screen/News';
import Gallary from './Examples/Screen/Gallary';
import MyStudent from './Examples/Screen/MyStudent';
import Notification from './Examples/Screen/Notification';
import { getHeaderTitle } from '@react-navigation/elements';
import PermissionToLeave from './Examples/Screen/PermissionToLeave';
import StudySkills from './Examples/Screen/StudySkills';
import Shop from './Examples/Screen/Shop';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const PREFERENCES_KEY = 'APP_PREFERENCES';

export const PreferencesContext = React.createContext<{
  toggleTheme: () => void;
  toggleRtl: () => void;
  toggleThemeVersion: () => void;
  toggleCollapsed: () => void;
  toggleCustomFont: () => void;
  toggleRippleEffect: () => void;
  customFontLoaded: boolean;
  rippleEffectEnabled: boolean;
  collapsed: boolean;
  rtl: boolean;
  theme: MD2Theme | MD3Theme;
} | null>(null);

export const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();

const Drawer = createDrawerNavigator<{ Home: undefined }>();

export default function PaperExample() {
  useKeepAwake();

  const [fontsLoaded] = useFonts({
    Abel: require('../assets/fonts/Abel-Regular.ttf'),
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();

  const [shouldUseDeviceColors, setShouldUseDeviceColors] =
    React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [themeVersion, setThemeVersion] = React.useState<2 | 3>(3);
  const [rtl, setRtl] = React.useState<boolean>(
    I18nManager.getConstants().isRTL
  );
  const [collapsed, setCollapsed] = React.useState(false);
  const [customFontLoaded, setCustomFont] = React.useState(false);
  const [rippleEffectEnabled, setRippleEffectEnabled] = React.useState(true);

  const theme = React.useMemo(() => {
    if (themeVersion === 2) {
      return isDarkMode ? MD2DarkTheme : MD2LightTheme;
    }

    return isDarkMode ? MD3DarkTheme : MD3LightTheme;
  }, [isDarkMode, themeVersion]);

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString || '');

        setInitialState(state);
      } catch (e) {
        // ignore error
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  React.useEffect(() => {
    const restorePrefs = async () => {
      try {
        const prefString = await AsyncStorage.getItem(PREFERENCES_KEY);
        const preferences = JSON.parse(prefString || '');

        if (preferences) {
          setIsDarkMode(preferences.theme === 'dark');

          if (typeof preferences.rtl === 'boolean') {
            setRtl(preferences.rtl);
          }
        }
      } catch (e) {
        // ignore error
      }
    };

    restorePrefs();
  }, []);

  React.useEffect(() => {
    const savePrefs = async () => {
      try {
        await AsyncStorage.setItem(
          PREFERENCES_KEY,
          JSON.stringify({
            theme: isDarkMode ? 'dark' : 'light',
            rtl,
          })
        );
      } catch (e) {
        // ignore error
      }

      if (I18nManager.getConstants().isRTL !== rtl) {
        I18nManager.forceRTL(rtl);
        Updates.reloadAsync();
      }
    };

    savePrefs();
  }, [rtl, isDarkMode]);

  const preferences = React.useMemo(
    () => ({
      toggleShouldUseDeviceColors: () =>
        setShouldUseDeviceColors((oldValue) => !oldValue),
      toggleTheme: () => setIsDarkMode((oldValue) => !oldValue),
      toggleRtl: () => setRtl((rtl) => !rtl),
      toggleCollapsed: () => setCollapsed(!collapsed),
      toggleCustomFont: () => setCustomFont(!customFontLoaded),
      toggleRippleEffect: () => setRippleEffectEnabled(!rippleEffectEnabled),
      toggleThemeVersion: () => {
        setCustomFont(false);
        setCollapsed(false);
        setThemeVersion((oldThemeVersion) => (oldThemeVersion === 2 ? 3 : 2));
        setRippleEffectEnabled(true);
      },
      customFontLoaded,
      rippleEffectEnabled,
      collapsed,
      rtl,
      theme,
      shouldUseDeviceColors,
    }),
    [
      rtl,
      theme,
      collapsed,
      customFontLoaded,
      shouldUseDeviceColors,
      rippleEffectEnabled,
    ]
  );

  if (!isReady && !fontsLoaded) {
    return null;
  }

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };

  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  const combinedTheme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;
  const configuredFontTheme = {
    ...combinedTheme,
    fonts: configureFonts({
      config: {
        fontFamily: 'Abel',
      },
    }),
  };
  const DrawerItemsArray = [
    {
      icon: 'menu',
      label: 'School Office',
      comp : Canteen
    },
    {
      icon: 'menu',
      label: 'News/Notification',
      comp : Notification
    },
    {
      icon: 'menu',
      label: 'Personal Notification',
      comp : PersonalNotification
    },
    {
      icon: 'menu',
      label: 'News Archives',
      comp : News
    },
    {
      icon: 'menu',
      label: 'Gallary',
      comp :Gallary
    },
    {
      icon: 'menu',
      label: 'Calender',
      comp :Gallary
    },
    {
      icon: 'menu',
      label: 'My Student',
      comp : MyStudent
    },
    {
      icon: 'menu',
      label: 'Absentee form',
      comp : MyStudent
    },
    {
      icon: 'menu',
      label: 'Late Note',
      comp : MyStudent
    },
    {
      icon: 'menu',
      label: 'Study Skills',
      comp : StudySkills
    },
    {
      icon: 'menu',
      label: 'Permission to leave',
      comp : PermissionToLeave
    },
    {
      icon: 'menu',
      label: 'Canteen',
      comp : MyStudent
    },
    {
      icon: 'menu',
      label: 'shop',
      comp : Shop
    },
    {
      icon: 'menu',
      label: 'Notice Boards',
      comp : MyStudent
    },
  ]

  return (
    <PaperProvider
      settings={{ rippleEffectEnabled: preferences.rippleEffectEnabled }}
      theme={customFontLoaded ? configuredFontTheme : theme}>
      <PreferencesContext.Provider value={preferences}>
        <React.Fragment>
          <NavigationContainer
            theme={combinedTheme}
            initialState={initialState}
            onStateChange={(state) =>
              AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }>
            <SafeAreaInsetsContext.Consumer>
              {(insets) => {
                const { left, right } = insets || { left: 0, right: 0 };
                const collapsedDrawerWidth = 80 + Math.max(left, right);
                return (
                  <Drawer.Navigator
                    screenOptions={{
                      drawerStyle: collapsed && {
                        width: collapsedDrawerWidth,
                      },
                      header: ({ navigation, route, options }) => {
                        const title = getHeaderTitle(options, route.name);
                        return (
                          <Appbar.Header style={{ backgroundColor: '#b70000' }} elevated>
                            {(navigation as any).openDrawer ? (
                              <Appbar.Action
                                accessibilityRole='menu'
                                accessibilityLabel='Open Drawer'
                                icon="menu"
                                isLeading
                                color='white'
                                size={32}
                                onPress={() =>
                                  (
                                    navigation as any as DrawerNavigationProp<{}>
                                  ).openDrawer()
                                }
                              />
                            ) : null}
                            <Appbar.Content color='white'  title={title} accessibilityLabel={`${title}`} accessibilityRole='header' />
                          </Appbar.Header>
                        );
                      },
                    }}
                    
                    drawerContent={(props) => <DrawerItems {...props} />}>
                    <Drawer.Screen
                      name="Home"
                      component={App}
                      options={{ headerShown: false }}
                    />
                    {DrawerItemsArray.map((screen,idx) =>
                    <Drawer.Screen
                      key={idx}
                      name={screen.label}
                      component={screen.comp}
                      // options={{ headerShown: false }}
                    />)}
                  </Drawer.Navigator>
                );
              }}
            </SafeAreaInsetsContext.Consumer>
            <StatusBar style={!theme.isV3 || theme.dark ? 'light' : 'dark'} />
          </NavigationContainer>
        </React.Fragment>
      </PreferencesContext.Provider>
    </PaperProvider>
  );
}
