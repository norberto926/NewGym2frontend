import React from 'react'
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { globalStyles } from '../styles/global';
import { FlatList, NativeBaseProvider } from 'native-base';
import { StyleSheet} from 'react-native';
import { Button, Text, View } from 'react-native';
import MyButton from './Button';


const WorkoutTemplate = ({name, exercises, navigation}) => {
    return (
        <NativeBaseProvider>
            <View style={globalStyles.container}>
                    <CollapsibleView 
                    title={<View style={globalStyles.button}><Text style={globalStyles.buttonText}>{name}</Text></View>}
                    noArrow={true}
                    style={{
                        borderWidth: 0
                    }}
                    collapsibleContainerStyle={{
                        alignItems: "center",
                      }}
                    > 
                    <FlatList
                        data={exercises}
                        renderItem={({ item }) => (
                            <View style={styles.exercise}>
                                <Text>{item.name}</Text>
                                <Text>{item.sets}</Text>
                            </View>
                        )}
                    />
                    <MyButton
                        title="Start workout"
                        onPress={() => navigation.navigate('New Workout')}
                    />
                    </CollapsibleView>
            </View>
        </NativeBaseProvider>
    )
}

styles = StyleSheet.create({
    exercise: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });
    



export default WorkoutTemplate