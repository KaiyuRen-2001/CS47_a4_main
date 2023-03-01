import { StyleSheet, SafeAreaView, Text,View } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
import { useNavigation} from '@react-navigation/native';


const DetailsScreen = ({navigation, route}) => {
    return (
        <WebView
        source={{
          uri: route.params.url ?? '',
        }}
        
      />
            
    );
};

export default DetailsScreen;
const styles = StyleSheet.create({});