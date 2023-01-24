import { StyleSheet,Text, TouchableOpacity} from 'react-native';
import colors from './colors';

export default {
    colors,
    text  : {
        color : colors.dark,
        fontSize : 18 ,
        fontFamily : Platform.OS === 'android' ? "monospace" : "Avenir"
    }
}

