import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card1 from '../Components/Card'
import ScreenWrapper from '../../ScreenWrapper'

const StudySkills = () => {
    const itemsArray = [{
        heading : "Facebook",
        dis : "",
    },{
        heading : "Full HTML Testing",
        dis : "",
    },{
        heading : "Sub Item - shweta's",
        dis : "Unique Schools",
    },{
        heading : "Link - Study Skills",
        dis : "",
    },{
        heading : "PDF - Study skills",
        dis : "",
    },{
        heading : "Test 123",
        dis : "",
    },{
        heading : "Image",
        dis : "",
    },{
        heading : "Image 2",
        dis : "",
    },{
        heading : "Image 3",
        dis : "",
    },{
        heading : "Image 4",
        dis : "",
    },{
        heading : "Image 5",
        dis : "",
    },{
        heading : "Image 6",
        dis : "",
    },]
  return (
    <ScreenWrapper>
      {itemsArray.map((val,idx) => {
        return(
            <Card1 key={idx} url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data={val.heading} dis={val.dis} />
        )
      })}
    </ScreenWrapper>
  )
}

export default StudySkills

const styles = StyleSheet.create({})