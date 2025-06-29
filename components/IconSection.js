import React, { useState } from 'react';
import { View, TouchableWithoutFeedback ,Text} from 'react-native';
import { HeartIcon} from 'react-native-heroicons/solid';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon , ChatBubbleBottomCenterTextIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'


const IconSection = () => {
  const [showText, setShowText] = useState(null);

  const handleLogout = async () => { await signOut(auth);}

  const navigation = useNavigation();

  const handleMouseEnter = (text) => {
    setShowText(text);
  };

  const handleMouseLeave = () => {
    setShowText(null);
  };

  return (
    <View className="flex-row justify-around px-4 py-4">

<TouchableWithoutFeedback 
        onPressIn={() => handleMouseEnter('Bars')} 
        onPressOut={handleMouseLeave}
        onPress={handleLogout}
      >
        <View>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          {showText === 'Bars' && <Text style={styles.text}>Bars</Text>}
        </View>
      </TouchableWithoutFeedback>

      
      {/* <TouchableWithoutFeedback 
        onPressIn={() => handleMouseEnter('Heart')} 
        onPressOut={handleMouseLeave} 
      >
        <View>
          <HeartIcon size="30" strokeWidth={2} color="white" />
          {showText === 'Heart' && <Text style={styles.text}>Heart</Text>}
        </View>
      </TouchableWithoutFeedback> */}

     

      <TouchableWithoutFeedback 
        onPressIn={() => handleMouseEnter('Magnifying Glass')} 
        onPressOut={handleMouseLeave}
        onPress={()=> navigation.navigate('Search')}
      >
        <View>
          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          {showText === 'Magnifying Glass' && <Text style={styles.text}>Magnifying{"\n"}Glass</Text>}
        </View>
      </TouchableWithoutFeedback>

      

      <TouchableWithoutFeedback 
        onPressIn={() => handleMouseEnter('Chat Bubble')} 
        onPressOut={handleMouseLeave}
        onPress={()=> navigation.navigate('Chat')}
      >
        <View>
          <ChatBubbleBottomCenterTextIcon size="30" strokeWidth={2} color="white" />
          {showText === 'Chat Bubble' && <Text style={styles.text}>Chat{"\n"}Bubble</Text>}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default IconSection;
