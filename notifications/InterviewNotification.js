import React from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { ToastAndroid } from 'react-native';
import moment from 'moment';

const requestNotificationPermission = () => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
    .then((response) =>  {
      if(response.status !== "granted"){
        return Permissions.askAsync(Permissions.Notifications);
      }
      return response;
    }).then((response)=> {
      if(response.status !== "granted"){
        alert('Ứng dụng không thể gửi thông báo báo thức nếu không được cấp quyền truy cập!')
      }
    });
}
const InterviewNotification = async (title,body, time) => {
    const date = moment(time, 'YYYY-MM-DD hh:mm A').toDate();
    if(date - Date.now() < 0){
      ToastAndroid.show('Phỏng vấn đã quá hạn', ToastAndroid.SHORT);
      return;
    }
    const schedulingOptions = {
      content: {
        title: title,
        body: body,
        sound: true,
      },
      android: {
        priority: Notifications.AndroidNotificationPriority.HIGH,
        style: {
          fontWeight: 'bold',
        }
      },
      trigger: {
        date,
      },
    };
    const result = await Notifications.scheduleNotificationAsync(schedulingOptions);
    ToastAndroid.show('Thông báo báo thức đã được lên lịch', ToastAndroid.SHORT);
}

export default InterviewNotification

