import { View, Text, TouchableOpacity, ScrollView, Platform,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {Bars3CenterLeftIcon, MagnifyingGlassIcon , ChatBubbleBottomCenterTextIcon } from 'react-native-heroicons/outline'
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { HeartIcon} from 'react-native-heroicons/solid';
import { StarIcon }  from 'react-native-heroicons/micro';
 
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { styles } from '../theme';
import IconSection from '../components/IconSection';

const ios = Platform.OS === 'ios';

export default function HomeScreen() {

  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(()=>{
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  },[]);

  const getTrendingMovies = async ()=>{
    const data = await fetchTrendingMovies();
    console.log('got trending', data.results.length)
    if(data && data.results) setTrending(data.results);
    setLoading(false)
  }
  const getUpcomingMovies = async ()=>{
    const data = await fetchUpcomingMovies();
    console.log('got upcoming', data.results.length)
    if(data && data.results) setUpcoming(data.results);
  }
  const getTopRatedMovies = async ()=>{
    const data = await fetchTopRatedMovies();
    console.log('got top rated', data.results.length)
    if(data && data.results) setTopRated(data.results);
  }



  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar */}
      <SafeAreaView className={ios? "-mb-2": "mb-3"}>
        {/* <StatusBar style="light" /> */}
        <StatusBar backgroundColor="#262626" style="light" />
        <View className="flex-row justify-center items-center mx-4">
        
   
          <Text 
            className="text-white text-3xl font-bold">
              <Text style={styles.text}>M</Text>ovie
              <StarIcon size="30" strokeWidth={2} color="white"/>
                <Text style={styles.text}>M</Text>agic 
          </Text>

         
          
        </View>
      </SafeAreaView>

    
      {
        loading? (
          <Loading />
        ):(
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >
              {/* Icon Section */}
              <IconSection/>

            {/* Trending Movies Carousel */}
            { trending.length>0 && <TrendingMovies data={trending} /> }

            {/* upcoming movies row */}
            { upcoming.length>0 && <MovieList title="Upcoming" data={upcoming} /> }
            

            {/* top rated movies row */}
            { topRated.length>0 && <MovieList title="Top Rated" data={topRated} /> }

          </ScrollView>
        )
      }
      
  </View>
      

   
  )
}
