import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import RazorpayCheckout from "react-native-razorpay";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={"Pay now"} onPress={()=>{
        const options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
          amount: '5000',
          name: 'foo',
          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software'
          },
          theme: {color: '#F37254'}
        };
        RazorpayCheckout.open(options).then((data)=>{
          alert(JSON.stringify(data))
        }).catch((error)=>{
          alert(JSON.stringify(error))
        })
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
