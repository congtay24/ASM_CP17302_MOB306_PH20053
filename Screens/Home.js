import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Styles/Style";

export default function Home(props) {
  const navigation = props.navigation;

  const data = {
    name: "Đào Khắc Công",
    masv: "PH20053",

  };
  var dataList = []

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logoo.png")}
        style={styles.icEditInfo}
      />
      <Pressable
        android_ripple={{ color: "#a6e6facc" }}
        style={styles.buttonNext}
        onPress={() => navigation.navigate("Profile", { data })}
      >
        <Text style={styles.textButton}>Thông tin cá nhân</Text>
      </Pressable>

      <Pressable
        android_ripple={{ color: "#a6e6fa" }}
        style={styles.buttonNext}
        onPress={() => navigation.navigate("Profile2", { dataList })}
      >
        <Text style={styles.textButton}>Quản lý cửa hàng</Text>
      </Pressable>

     
    </View>
  );
}
