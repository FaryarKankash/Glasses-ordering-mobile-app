import React , {useState} from "react";

import { StyleSheet , Button , View , Text } from "react-native";


const HomeScreen = (props) => {

    const SendHandler = () => {
        props.navigation.navigate("Send")
    }

    const ReceiveHandler = () => {
        props.navigation.navigate("Receive")
    }

    return(
        <>
          <View style={Style.View}>
            <View style={Style.Button}>
                <Button onPress={SendHandler} color={"#f95959"} title="ارسال اطلاعات"></Button>
            </View>
            <View style={Style.Button}>
                <Button onPress={ReceiveHandler} color={"#f95959"} title="دریافت اطلاعات"></Button>
            </View>
            {

            }
          </View>
        </>
    )
}

const Style = StyleSheet.create({
    View: {
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        backgroundColor: "#e3e3e3"
    },
    Button: {
        width: "70%",
        marginTop: "2%",
        marginBottom: "3%"
    }
})
export default HomeScreen