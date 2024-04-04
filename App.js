import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutHome from './screens/HomeStack/WorkoutHome';
import PickWorkout from './screens/HomeStack/PickWorkout';
import WorkoutHistory from './screens/WorkoutHistoryStack/WorkoutHistory';
import WorkoutDetails from './screens/WorkoutHistoryStack/WorkoutDetails';
import WorkoutTemplateList from './screens/HomeStack/WorkoutTemplateList';
import NewWorkout from './screens/HomeStack/NewWorkout';
import { AuthProvider, useAuth } from './context/AuthContext';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen options={{headerShown: false}} name="Home" component={WorkoutHome} />
        <HomeStack.Screen name="Pick Workout" component={PickWorkout} />
        <HomeStack.Screen name="Your Workout Templates" component={WorkoutTemplateList}/>
        <HomeStack.Screen name="New Workout" component={NewWorkout}/>
        <HomeStack.Screen name="Workout Details" component={WorkoutDetails}/>
      </HomeStack.Navigator>
  )
}

const WorkoutHistoryStack = createNativeStackNavigator()

function WorkoutHistoryStackScreen() {
  return (
      <WorkoutHistoryStack.Navigator>
        <WorkoutHistoryStack.Screen name="Workout History" component={WorkoutHistory} />
        <WorkoutHistoryStack.Screen name="Workout Datails" component={WorkoutDetails} />
      </WorkoutHistoryStack.Navigator>

  )

}


const HomeMenu = createBottomTabNavigator()

const AuthStack = createNativeStackNavigator()

export const Layout = () => {

  const {authState, onLogout} = useAuth()

  return (
  <NavigationContainer>
    <AuthStack.Navigator>
    {authState?.authenticated ? (
          <HomeMenu.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#B49654",
            tabBarStyle:{
              backgroundColor: "#342D45"
            }
          }}>
            <HomeMenu.Screen name="HomeStack" component={HomeStackScreen} />
            <HomeMenu.Screen name="WorkoutHistoryStack" component={WorkoutHistoryStackScreen} />
          </HomeMenu.Navigator>
    ) : (
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>

    )}

    </AuthStack.Navigator>
  </NavigationContainer>)
}

export default function App() {

  return (
  <AuthProvider>
    <Layout> </Layout>
  </AuthProvider>
  );
}

