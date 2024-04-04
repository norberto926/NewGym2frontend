import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#342D45'
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#342D45',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      paddingHorizontal: 80,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#B49654',
    }
  });