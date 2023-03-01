import { StyleSheet, SafeAreaView, Text,View } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
import { useNavigation} from '@react-navigation/native';


const PreviewScreen = ({navigation, route}) => {
    return (
        <WebView
        source={{
          uri: route.params.url,
        }}
        
      />
            
    );
};

export default PreviewScreen;
const styles = StyleSheet.create({});
