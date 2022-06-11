import React , {useState , useEffect} from "react";
import { View , Button , FlatList , Text , StyleSheet } from "react-native";

const Receive = () => {

    const [OrderList , setOrderList] = useState()



    async function getData() {

        const response = await fetch("https://glasses-94273-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json")
        const data = await response.json()
    

        console.log(data)

        const Orders = []

        for(const key in data) {

            Orders.push({
                Id: data[key].Id,
                Add: data[key].Add,
                Distance: data[key].Distance,
                lens: data[key].lens
            })
        }

        setOrderList(Orders)
        console.log(OrderList)

    }

    useEffect(() => {
        getData()
    }, [] )



    return(
        <>
          <View style={style.All}>
            <FlatList data={OrderList} renderItem={({item}) => {
                return(
                    <View  style={[style.elevation , style.View]}>
                      <Text style={style.Text}>Id: {item.Id}</Text>
                      <Text style={style.Text}>Add :{item.Add}</Text>
                      <Text style={style.Text}>Distance: {item.Distance}</Text>
                      <Text style={style.Text}>lens: {item.lens}</Text>
                    </View>
                )
            }}/>
          </View>
        </>
    )
}

const style = StyleSheet.create({
    All: {
        backgroundColor: "#e3e3e3",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    View: {
        padding: 5,
        width: '100%',
        marginTop: 35,
        backgroundColor: "#ffffff"
    },

    Text: {
        fontSize: 18,
    },

    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
})

export default Receive