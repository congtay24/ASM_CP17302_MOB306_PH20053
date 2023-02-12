import {
    View,
    Text,
    Button,
    TouchableHighlight,
    Image,
    ImageBackground, TouchableOpacity, FlatList,
} from "react-native";
  import { useState, useEffect } from "react";
  import { AppLoading } from "expo";
  import {StyleSheet} from "react-native";
  

export default function Profile2({ route, navigation }) {
    let { dataList } = route.params;
    let [data,setData] = useState(route.params.dataList)
    let [id,setId] = useState()


    return (
      <View style={styles.containerProfile}>
        <ImageBackground
          source={require("../assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.imgBackground}>
            <Button title={"Thêm cửa hàng"}  onPress={()=>navigation.navigate("AddShop",{dataList: dataList})}></Button>
            <FlatList data={data} renderItem={({item,index})=>
                <View style={{flexDirection:"row", padding: 20, borderWidth: 1, borderColor: "brown"}}>
                    <Image source={{uri:item.logo}} style={styles.itemImg}/>
                    <View style={styles.textTitle}>       
                        <Text style={styles.textInfo}>Id: {item.id}</Text>
                        <Text style={styles.textInfo}>Name: {item.name}</Text>
                        <Text style={styles.textInfo}>Address: {item.address}</Text>
                        <Text style={styles.textInfo}>Phone: {item.sdt}</Text>
                        <Text style={styles.textInfo}>Status: {item.status}</Text>

                    </View>

                    <View style={styles.container1}>
                        <Button title={"Sửa"} onPress={()=>{
                            navigation.navigate("UpdateShop",{index:index,dataList:dataList})
                        }}/>
                        </View>
                        <View style={styles.container2}>
                        <Button title={"Xóa"} onPress={()=>{
                            data.splice(index,1)
                            setId(item)
                        } }/>
                    </View>
                </View>
            }
            keyExtractor={(item) => item.id}
                      extraData={id}
            />

        </ImageBackground>
        <View style={styles.banner} >
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:100,
    },

    container1: {
        left:10,
        top:2,
        flex:1,
    },

    container2: {
        left:15,
        top:2,
        flex:1,
    },

    textTitle: {
        width:"55%",
        color: "#636363",
        fontWeight: "400",
        left:5,
        fontSize: 19,
      },
      textInfo: {
        color: "black",
        fontSize: 19,
      },
    itemContainer:{
        flexDirection:'row',
        height:80,
        borderRadius:8,
        marginBottom:5,
        marginTop:5,
        padding:10,
        justifyContent:"space-between",
        alignItems:"center",
        shadowColor: "#000",
        elevation: 2,
    },
    itemImg:{
        width:70,
        height: 70,   
        top:20,
        right:10,
    },
    itemName:{
        marginLeft:20,
        justifyContent:"center",
        alignItems: "flex-start",
    },
    itemPrice: {
        justifyContent:"center",
        alignItems:"flex-end"
    }
});
