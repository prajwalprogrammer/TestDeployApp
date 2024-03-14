import * as React from 'react';
import { Alert, Image, ScrollView, StyleSheet, View } from 'react-native';

import {
  Avatar,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Paragraph,
  Text,
  Title,
  TouchableRipple,
} from 'react-native-paper';

const Card1 = ({data,url,dis}: {data: string,url: string,dis: string}) => {

  return (
        <Card accessibilityRole='button' style={styles.card} mode='outlined'>
          <View style={styles.cardContent}>
            <Image
              accessibilityRole='image'
              accessibilityLabel={data}
              source={require('../../../assets/images/school_logo_124.png')}
              style={styles.cardImage}
            />
            <View style={styles.textContainer}>
              <Text variant='bodyLarge' accessibilityLabel={data}>{data}</Text>
              <Text variant='labelSmall' style={{fontWeight:"100"}}>{dis}</Text>
            </View>
          </View>
        </Card>
    );
};

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
    elevation: 6,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
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

export default Card1;
