import * as React from 'react';
import { Keyboard, StyleSheet } from 'react-native';

import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  List,
  MD3Colors,
  Searchbar,
  Snackbar,
  Avatar,
} from 'react-native-paper';

import { useExampleTheme } from '../index';
import ScreenWrapper from '../ScreenWrapper';

type Props = {
  navigation: StackNavigationProp<{}>;
};

const SearchExample = ({ navigation }: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [searchQueries, setSearchQuery] = React.useState({
    searchBarMode: '',
    traileringIcon: '',
    traileringIconWithRightItem: '',
    rightItem: '',
    loadingBarMode: '',
    searchViewMode: '',
    searchWithoutBottomLine: '',
    loadingViewMode: '',
    clickableBack: '',
    clickableDrawer: '',
    clickableLoading: '',
  });

  const { isV3, colors } = useExampleTheme();

  return (
    <>
      <ScreenWrapper accessibilityRole='header' accessibilityLabel='Search Screen'>
        {isV3 && (
          <List.Section title="Bar mode">
            
            <Searchbar
              placeholder="search icon"
              onChangeText={(query) =>
                setSearchQuery({ ...searchQueries, traileringIcon: query })
              }
              value={searchQueries.traileringIcon}
              traileringIcon={'microphone'}
              traileringIconColor={
                isVisible ? MD3Colors.error40 : colors.onSurfaceVariant
              }
              traileringIconAccessibilityLabel={'microphone button'}
              onTraileringIconPress={() => setIsVisible(true)}
              style={styles.searchbar}
              mode="bar"
            />
            <Searchbar
              mode="bar"
              placeholder="search icon with right item"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  traileringIconWithRightItem: query,
                })
              }
              searchAccessibilityLabel="tap on search "
              value={searchQueries.traileringIconWithRightItem}
              traileringIcon={'microphone'}
              traileringIconColor={
                isVisible ? MD3Colors.error40 : colors.onSurfaceVariant
              }
              traileringIconAccessibilityLabel={'microphone button'}
              onTraileringIconPress={() => setIsVisible(true)}
              right={(props) => (
                <Avatar.Image
                  {...props}
                  size={30}
                  source={require('../../assets/images/avatar.png')}
                />
              )}
              style={styles.searchbar}
            />
           
          </List.Section>
        )}
       
        <List.Section title="Clickable icon">
          <Searchbar
            placeholder="Search"
            onChangeText={(query) =>
              setSearchQuery({
                ...searchQueries,
                clickableBack: query,
              })
            }
            value={searchQueries.clickableBack}
            searchAccessibilityLabel='back'
            onIconPress={() => {
              Keyboard.dismiss();
              navigation.goBack();
            }}
            icon={{ source: 'arrow-left', direction: 'auto' }}
            style={styles.searchbar}
          />
          <Searchbar
            mode='view'
            placeholder="Search"
            onChangeText={(query) =>
              setSearchQuery({
                ...searchQueries,
                clickableDrawer: query,
              })
            }
            value={searchQueries.clickableDrawer}
            searchAccessibilityLabel='Menu'
            onIconPress={() => {
              Keyboard.dismiss();
              (navigation as any as DrawerNavigationProp<{}>).openDrawer();
            }}
            icon="menu"
            style={styles.searchbar}
          />
        </List.Section>
      </ScreenWrapper>
      <Snackbar
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        duration={Snackbar.DURATION_SHORT}
      >
        Microphone button pressed
      </Snackbar>
    </>
  );
};

SearchExample.title = 'Searchbar';

const styles = StyleSheet.create({
  searchbar: {
    margin: 4,
  },
});

export default SearchExample;
