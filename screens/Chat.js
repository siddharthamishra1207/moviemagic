import React, {useEffect, useState,useReducer, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
  StatusBar
} from 'react-native';
import {apiCall} from '../api/openAi';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Chat = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);


  const scrollViewRef = useRef();

  const fetchResponse = async ()=>{
    if(result.trim().length>0){
      setLoading(true);
      let newMessages = [...messages];
      newMessages.push({role: 'user', content: result.trim()});
      setMessages([...newMessages]);

      // scroll to the bottom of the view
      updateScrollView();

      // fetching response from chatGPT with our prompt and old messages
      apiCall(result.trim(), newMessages).then(res=>{
        console.log('got api data');
        setLoading(false);
        if(res.success){
          setMessages([...res.data]);
          setResult('');

        }else{
          Alert.alert('Error', res.msg);
        }

      })
    }
  }

  const updateScrollView = ()=>{
    setTimeout(()=>{
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    },200)
  }

  return (
    <View className="flex-1  bg-neutral-800">
      {/* <StatusBar barStyle="dark-content" /> */}
      <StatusBar backgroundColor="#eab308"   hidden={true}/>
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
        <Image  
              source={require('../assets/images/bot.png')}
              style={{height: hp(15), width: hp(15)}}
          />
        </View>
        
        {/* features || message history */}
        {
          messages.length>0? (
            <View className="space-y-2 flex-1">
              <Text className="text-gray-700 font-semibold ml-1" style={{fontSize: wp(5)}}>Assistant</Text>
        
              <View 
                style={{height: hp(58)}} 
                className="bg-neutral-200 rounded-3xl p-4">
                  <ScrollView  
                    ref={scrollViewRef} 
                    bounces={false} 
                    className="space-y-4" 
                    showsVerticalScrollIndicator={false}
                  >
                    {
                      messages.map((message, index)=>{
                        if(message.role=='assistant'){
                          return (
                            <View 
                              key={index} style={{width: wp(70)}} 
                              className="bg-emerald-100 p-2 rounded-xl rounded-tl-none">
                                <Text className="text-neutral-800" style={{fontSize: wp(4)}}  >
                                  {message.content}
                                </Text>
                              </View>
                            )
                        }else{
                          // user input text
                          return (
                            <View key={index} className="flex-row justify-end">
                              <View 
                                style={{width: wp(70)}} 
                                className="bg-white p-2 rounded-xl rounded-tr-none">
                                <Text style={{fontSize: wp(4)}}  >
                                  {message.content}
                                </Text>
                              </View>
                            </View>
                          );
                        }
                        
                        
                      })
                    }
                  </ScrollView>
              </View>
            </View>
          ): (
            <Text style={{ fontSize: 24 }}> </Text>
          )
        }
        
        
        {/* text input and send button */}
       <View className="flex-row items-center">
          <TextInput
            value={result}
            onChangeText={text => setResult(text)}
            className="flex-1 p-2  bg-neutral-200 "
            placeholder="Ask me something"
          />
          <TouchableOpacity onPress={fetchResponse} className="bg-emerald-400 p-3  ">
            <Text className="text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Chat;