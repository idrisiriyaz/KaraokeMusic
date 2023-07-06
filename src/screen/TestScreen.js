import { ActivityIndicator, Alert, Button, View } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { useNetworkError } from '../hooks/useNetworkError';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Constants } from '../global';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee, { TriggerType } from '@notifee/react-native';
const TestScreen = () => {

  const webViewRef = useRef(null);
  const [objectData, setObjectData] = React.useState([]);
  const [webLink, setWebLink] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const showDateTimePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleDateTimeConfirm = (date) => {
    setSelectedDateTime(date);
    hideDateTimePicker();
  };

  const scheduleTriggerNotification = async () => {
    if (selectedDateTime) {
      const channelId = 'your_channel_id';
      const channel = {
        id: channelId,
        name: 'Your Channel Name',
      };

      await notifee.createChannel(channel);

      // Create a time-based trigger with the selected date and time
      const trigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: selectedDateTime.getTime(),
      };

      // Create the trigger notification
      await notifee.createTriggerNotification(
        {
          title: 'Trigger Notification',
          body: 'This is a trigger-based notification.',
          android: {
            channelId: channelId,
          },
        },
        trigger,
      );
    }
  };

  const htmlContent = `<!DOCTYPE html>
    <html>
    <head>
      <title>Submit Form</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
        }
  
        form {
          max-width: 400px;
          margin: 0 auto;
        }
  
        label {
          display: block;
          margin-top:20px;
          margin-bottom: 10px;
          font-weight: bold;
        }
  
        input[type="email"],
        input[type="text"] {
          width: 100%;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
  
        input[type="button"] {
          margin-top:20px;
        //   width: 100%;
          padding: 10px;
          border-radius: 4px;
          border: none;
          background-color: #4caf50;
          color: white;
        }
  
        /* Mobile Styles */
        @media screen and (max-width: 480px) {
          form {
            max-width: 90%;
          }
  
          label,
          input[type="email"],
          input[type="text"],
          input[type="button"] {
            width: 100%;
          }
  
          label {
            font-size: 14px;
          }
  
          input[type="button"] {
            margin-top: 10px;
          }
        }
      </style>
    </head>
    <body>
      <form id="myForm">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <input type="button" value="Submit" onclick="submitForm()">
      </form>
  
      <script>
        function submitForm() {
          var email = document.getElementById("email").value;
          var username = document.getElementById("username").value;
  
          // Call the submitForm function in React Native
          window.ReactNativeWebView.postMessage(JSON.stringify({ email: email, name: username }));
        }
      </script>
    </body>
    </html>
    `

  const isConnection = useNetworkError()


  const handleWebViewMessage = event => {
    const data = JSON.parse(event.nativeEvent.data);
    performAction(data);
  };

  const performAction = async formData => {
    setLoading(true)
    console.log("🚀 ~ file: TestScreen.js:25 ~ performAction ~ formData:", formData)
    setObjectData([...objectData, formData]);
    const userData = await AsyncStorage.getItem("userData");

    try {
      if (isConnection) {
        const data = await axios.post("https://testofflinepoc.azurewebsites.net/api/v1/employee", objectData);
        if (data.status == 200) {

          Alert.alert("data", JSON.stringify(data.data))
        }
      } else {
        const obj = JSON.parse(userData)
        const newData = [...obj, formData];

        AsyncStorage.setItem("userData", JSON.stringify(newData));
        Alert.alert("Success", "Successfully  uploaded...  ")

      }
    } catch (error) {
      Alert.alert("error", JSON.stringify(error))
    } finally {
      setLoading(false)
    }

  };

  const upgradeURL = () => {
    setWebLink(!webLink)
  }
  useEffect(() => {
    AsyncStorage.setItem("userData", JSON.stringify([]));
  }, [objectData, webLink])


  return <View style={{ flex: 1, alignItems: "center" }}>
    <View style={{ height: Constants.SCREEN_HEIGHT / 1.6, width: Constants.SCREEN_WIDTH }}>
      <WebView

        ref={webViewRef}
        onMessage={handleWebViewMessage}
        source={!webLink ? { html: htmlContent } : { uri: "https://carraapp.azurewebsites.net/" }}

      />
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? <ActivityIndicator size={"large"} style={{ marginBottom: 20 }} /> : null}
      <Button onPress={upgradeURL} title='Upgrade Web Version' />
      <Button title="Select Date and Time" onPress={showDateTimePicker} />
      {selectedDateTime && (
        <Button title="Schedule Trigger Notification" onPress={scheduleTriggerNotification} />
      )}
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={handleDateTimeConfirm}
        onCancel={hideDateTimePicker}
      />
    </View>
  </View>
}

export default TestScreen
