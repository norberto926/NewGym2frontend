import { Button, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import WorkoutTemplate from '../../components/WorkoutTemplate';

const templates = [
    {name: 'StartingStrength', exercises: [{name: 'deadlift', sets: '5, 5, 5', key: 1}, {name: 'squat', sets: '7, 7, 7', key: 2}], key: '1'},
    {name: 'StartingStrength2', exercises: [{name: 'deadlift', sets: '1, 5, 5', key:1}, {name: 'squat', sets: '7, 7, 7', key:2}], key: '2'}
]

export default function WorkoutTemplateList({navigation}) {
    return (<View style={globalStyles.container}>
                {templates.map(template => (
                    <WorkoutTemplate
                        name={template.name}
                        exercises={template.exercises}
                        navigation={navigation}
                    />
                ))}
            </View>)
}

