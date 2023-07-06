import { useEffect, useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import axios from 'axios';

export const useNetworkError = () => {

    const { isConnected, isInternetReachable } = useNetInfo();
    const [isConnection, setIsConnection] = useState(null);


    const setDataPostAPI = async () => {
        const userData = await AsyncStorage.getItem("userData");
        const formData = JSON.parse(userData);
        console.log("🚀 ~ file: useNetworkError.js:17 ~ setDataPostAPI ~ formData:", formData)
        if (formData.length > 0) {
            await axios.post("https://testofflinepoc.azurewebsites.net/api/v1/employee", formData).then((data) => {
                AsyncStorage.setItem("userData", JSON.stringify([]));
                Alert.alert("local storage data in db inserted successfully...", JSON.stringify(data.data))

            }).catch((error) => {
                Alert.alert("error", JSON.stringify(error))
            })
        }
    }

    useEffect(() => {
        if (isInternetReachable === null) return;

        if (isInternetReachable) {
            setDataPostAPI()
        }
        if (!isInternetReachable && !isConnected) {
            setIsConnection(false)
        } else {
            setIsConnection(true)
        }
    }, [isInternetReachable, isConnected]);

    return isConnection;
};