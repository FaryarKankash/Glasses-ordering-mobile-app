import React , {useState} from "react";
import {Alert , StyleSheet, TextInput , Button , View , Text} from "react-native";

const Send = () => {

    const [Id, setId] = useState()
    const [Distance, setDistance] = useState()
    const [Add, setAdd] = useState()
    const [lens, setlens] = useState()

    const IdHandler = (e) => {
        setId(e.target.value)
        console.log(Id)
    }

    const DistanceHandler = (e) => {
        setDistance(e.target.value)
        console.log(Distance)
    }

    const AddHandler = (e) => {
        setAdd(e.target.value)
        console.log(Add)
    }

    const lensHandler = (e) => {
        setlens(e.target.value)
        console.log(lens)
    }

    async function Firebase (e) {
        const response = await fetch('https://glasses-94273-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json', {
           method: "POST",
           body: JSON.stringify(e)
         })
     
         const data = await response.json()
         console.log(data)
       }

    const SubmitHandler = () => {

        const ListObj = {
            Id: Id,
            Distance: Distance,
            Add: Add,
            lens: lens
        }

        Firebase(ListObj)
    }
    
    return(
    <View style={Style.All}>
        <Text style={Style.Text}>Order Id:</Text>
        <TextInput onChange={IdHandler} keyboardType = 'numeric' style={Style.input} placeholder="Id"></TextInput>

        <Text style={Style.Text}>Distance:</Text>
        <TextInput onChange={DistanceHandler} style={Style.input} placeholder="Sphere/Axis/Prism/Base"></TextInput>

        <Text style={Style.Text}>Add:</Text>
        <TextInput onChange={AddHandler} style={Style.input} placeholder="Sphere/Axis/Prism/Base"></TextInput>

        <Text style={Style.Text}>lens type:</Text>
        <TextInput onChange={lensHandler} style={Style.input} placeholder="type"></TextInput>

        <View style={Style.Flex}>
            <View style={Style.Button}>
                <Button onPress={SubmitHandler} color={"#f95959"} title="Send"></Button>
            </View>
        </View>
    </View>
    )
}

const Style = StyleSheet.create({

    All: {
        backgroundColor: "#e3e3e3",
        width: "100%",
        height: "100%"
    },

    input: {
        height: 40,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    Text: {
        margin: 6,
        fontSize: 16,
        color: "#233142",
        fontWeight: "bold"
    },
    Button: {
        width: "70%",
        marginTop: "2%",
        marginBottom: "3%",
    },
    Flex: {
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
    }
})

export default Send