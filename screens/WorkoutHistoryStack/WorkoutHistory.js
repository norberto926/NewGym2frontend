import { Button, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';



const workouts = [{"id": "1", "date": "20-10-2023", "...": "..."}]


export default function WorkoutHistory({navigation}) {
    return <View style={globalStyles.container}>
                <Text>
                    Workouts List
                </Text>
            </View>
}