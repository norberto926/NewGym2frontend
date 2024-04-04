import { Button, Text, View, Image } from 'react-native';
import { globalStyles } from '../../styles/global';
import MyButton from '../../components/Button';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function WorkoutHome({navigation}) {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const url = 'https://newgym2backend.onrender.com/API/workout/?user=1'
        
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            return response.json()
        })
        .then(result => {
            setWorkouts(result)
        })
        .catch(error => {
            console.error('Error fetching data:', error.message)
        })

    }, [])



    return workouts? <View style={globalStyles.container}>
            <Image 
            source={require('../../assets/icon_muscle.png')}
            resizeMode='contain'
            style={styles.image}
            />
            
       <View style={styles.element}>
            <Text>
                {JSON.stringify(workouts[0].date_created)}
            </Text>
        </View>
        <View style={styles.element}>
            <MyButton
                onPress = {() => navigation.navigate('Pick Workout')}
                title="Start new workout"
            />   
        </View>      
        </View>
        :
        <View style={styles.element}>
        <Text>
            Loading...
        </Text>
        </View>
}


const styles = StyleSheet.create({
    element: {
      flex: 1,
      justifyContent: "flex-end",
      padding: 20
    },
    image:{
        flex:2,
        marginTop: 50,

    }
  });