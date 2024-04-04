import { Button, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function PickWorkout({navigation}) {
    return <View style={globalStyles.container}>
        <Button
            onPress = {() => navigation.navigate('New Workout')}
            title="Last workout template"/>
        <Button
            onPress = {() => navigation.navigate('Your Workout Templates')}
            title="Your Workout Templates"/>
        <Button
            onPress = {() => navigation.navigate('New Workout')}
            title="Free roam workout"/>
        </View>
}