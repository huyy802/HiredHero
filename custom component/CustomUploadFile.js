import {React} from "react";
import { useState } from "react";
import { View, Button, Text, StyleSheet, Touchable, TouchableOpacity, Image } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

// import Document

export default CustomUploadFile = (props) => {
    const {content, height, width, selectedFile, setSelectedFile } = props
    
    const pickDocument = async () => {
        try {
            let result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
            console.log(result.uri);
            if (result.type === 'success') {
                setSelectedFile(result)
            }
          } catch (error) {
            console.log('Error picking document:', error);
          }
      };

    return (
        <View>
            <TouchableOpacity style={styles.mainContainer} onPress={pickDocument}>
                <View style={styles.iconContent}>
                    <Image style={{width: 100, height: 100}} source={require('../assets/icons/uploadcv.png')}/>
                    <Text style={{marginTop: 5, fontSize: 16, fontWeight: "600"}}>{content}</Text>
                </View>
                {selectedFile && (
                    <View>
                        <Text>Selected file: {selectedFile.name}</Text>
                    </View>
                )}
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 20,
        width: "100%",
        height: 200,
        borderWidth: 1,
        borderColor: '#E6E5E5',
        borderRadius: 10,
        borderStyle: 'solid',
        justifyContent: "center",
        alignItems: "center"
    },
    iconContent: {
        justifyContent: "center",
        alignItems: "center"
    }
});