import {
  ToastAndroid,
  Alert,
  PermissionsAndroid,
  Platform,
  Permis,
} from 'react-native';

import RNFetchBlob from 'rn-fetch-blob';

class DownloadUtils {}

DownloadUtils.requestPermission = async function (file) {
  try {
    const granted =
      Platform.OS == 'android'
        ? await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          )
        : await request(PERMISSIONS.IOS.WRITE_EXTERNAL_STORAGE);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      DownloadUtils.downloadPdf(file);
      console.log('Storage permission granted');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

DownloadUtils.downloadPdf = async function (file) {
  if (file == '' || file == null) {
    Alert.alert('File Not Available');
  } else {
    Platform.select({
      ios: () => {
        Alert.alert('Report is Downloading....');
      },
      android: () => {
        ToastAndroid.show('Report is Downloading', ToastAndroid.SHORT);
      },
    })();
    const {config, fs} = RNFetchBlob;
    let DownloadDir = fs.dirs.DownloadDir; // this is the Downloads directory.
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        notification: true,
        useDownloadManager: true, //uses the device's native download manager.
        mime: `application/pdf`,
        title: 'Report', // Title of download notification.
        path: DownloadDir + '/Report' + '.' + 'pdf', // this is the path where your download file will be in
        description: 'Downloading file.',
      },
    };

    config(options)
      .fetch('GET', file)
      .then((res) => {
        console.log('Success');
        Platform.select({
          ios: () => {
            Alert.alert('Download complete');
          },
          android: () => {
            ToastAndroid.show('Download complete', ToastAndroid.SHORT);
          },
        })();
      })
      .catch((err) => {
        console.log('error', err);
      }); // To execute when download cancelled and other errors
  }
};

module.exports = {
  functions: DownloadUtils,
};
