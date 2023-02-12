import {
    View,
    Text,
    Button,
    TouchableHighlight,
    Image,
    ImageBackground, TextInput, TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { styles } from "../Styles/Style";
import * as ImagePicker from "expo-image-picker";

export default function AddShop({ route, navigation }) {
    const { dataList } = route.params;
    const { item } = route.params;
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [logo, setLogo] = useState();
    const [status, setStatus] = useState();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result.assets[0].uri);

        if (!result.canceled) {
            setLogo(result.assets[0].uri);
        }

    };

    return (
        <View style={styles.containerProfile}>
            <ImageBackground
                source={require("../assets/images/background.jpg")}
                resizeMode="cover"
                style={styles.imgBackground}
            >
                <Text
                    style={{fontSize:30,marginLeft:18,left:120,color:"red"}}
                >Thêm Shop</Text>


                <View
                    style={{
                        borderBottomColor:"red",
                        borderBottomWidth:4,
                        borderRadius:10,
                        marginLeft:120,
                        marginRight:100,
                        marginTop:4
                    }}
                />
                <TouchableOpacity onPress={()=>{pickImage()}}>
                    {logo?<Image style={{width:120,height:120,left:150,marginTop:20,marginBottom:20}} source={{uri:logo}}></Image>:<Image source={require("../assets/addimg.png")}></Image>}
                </TouchableOpacity>
                <TextInput
                    label='id'
                    placeholder = "id:"
                    mode="outlined"
                    value={id}
                    style={{fontSize:30,left:20}}
                    theme={{colors:{primary:"blue"}}}
                    onChangeText={(text)=>setId(text)}
                />

                <TextInput
                    label='fullName'
                    placeholder = "name"
                    mode="outlined"
                    value={name}
                    style={{fontSize:30,left:20}}
                    theme={{colors:{primary:"blue"}}}
                    onChangeText={(text)=>setName(text)}

                />
                <TextInput
                    label='address'
                    mode="outlined"
                    placeholder = "address"
                    value={address}
                    style={{fontSize:30,left:20}}
                    theme={{colors:{primary:"blue"}}}
                    onChangeText={(text)=>setAddress(text)}

                />
                <TextInput
                    label='phone'
                    mode="outlined"
                    placeholder = "phone"
                    value={phone}
                    style={{fontSize:30,left:20}}
                    theme={{colors:{primary:"blue"}}}
                    onChangeText={(text)=>setPhone(text)}

                />
                <TextInput
                    label='status'
                    mode="outlined"
                    placeholder = "status"
                    value={status}
                    style={{fontSize:30,left:20,marginBottom:25}}
                    theme={{colors:{primary:"blue"}}}
                    onChangeText={(text)=>setStatus(text)}

                />


                <Button
                    title="thêm"
                    mode="contained"
                    style={{marginLeft:18,marginRight:18,marginTop:18}}
                    onPress={() => {
                        dataList.push({
                            id: id,
                            name: name,
                            address : address,
                            sdt : phone,
                            logo: logo,
                            status: status
                        })
                        navigation.navigate("Profile2",{dataList})
                    }}>
                </Button>
            </ImageBackground>
        </View>
    );
}
