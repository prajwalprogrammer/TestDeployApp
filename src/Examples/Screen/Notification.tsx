import { Divider, List } from "react-native-paper";
import ScreenWrapper from "../../ScreenWrapper";
import Category from "../Components/Category";
import Card1 from "../Components/Card";

function Notification() {
    
  
    const data1 = ["Stock", "Science Information", "something new","Sports","Art","naresh School","Music","news limited","Cat1","Cricket","Events"];
 
    return (
  
      <ScreenWrapper>
        <Category data={data1} />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Checking Cron" dis="2 days ago" />
        <Divider />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Checking Notification" dis="5 Mar 2024" />
        <Divider />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Hey Hey" dis="5 Mar" />
        <Divider />
        <Divider />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="Test" dis="4 Mar" />
        <Divider />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="QA2 Cron Check" dis="5 Mar" />
        <Divider />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="One More" dis="7 Mar" />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="One More 2" dis="7 Mar" />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="One More 3" dis="7 Mar" />
        <Card1 url="https://photos.wellfound.com/startups/i/1105510-cfc8fe7e2e2e2cccf5e6315b27e2c572-medium_jpg.jpg?buster=1627560500" data="One More 5" dis="7 Mar" />
      </ScreenWrapper>
    );
  }

  export default Notification;