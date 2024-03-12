import * as React from 'react';
import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';

import {
  Avatar,
  Button,
  Card,
  Chip,
  IconButton,
  Paragraph,
  Text,
  Title,
} from 'react-native-paper';

import { PreferencesContext, useExampleTheme } from '../index';
import { isWeb } from '../../utils';
import ScreenWrapper from '../ScreenWrapper';

type Mode = 'elevated' | 'outlined' | 'contained';

const CardExample = () => {
  const { colors, isV3 } = useExampleTheme();
  const [selectedMode, setSelectedMode] = React.useState('elevated' as Mode);
  const [isSelected, setIsSelected] = React.useState(false);
  const preferences = React.useContext(PreferencesContext);

  const modes = isV3
    ? ['elevated', 'outlined', 'contained']
    : ['elevated', 'outlined'];

  const TextComponent = isV3 ? Text : Paragraph;

  return (
        <Card style={styles.card} mode='outlined'>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500' }}
              style={styles.cardImage}
            />
            <View style={styles.textContainer}>
              <Title>Card Title</Title>
              <Paragraph>Card content</Paragraph>
            </View>
          </View>
        </Card>
    );
};

CardExample.title = 'Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  chip: {
    margin: 4,
  },
  card: {
    borderColor:'transparent',
    margin: 10,
    elevation: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 12,
  },
  customCardRadius: {
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  customCoverRadius: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 24,
  },
});

export default CardExample;
