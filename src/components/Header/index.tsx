import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import { styles } from "./styles";
import { theme } from '../../theme';

export function Header(){
    return (
    <View style={styles.headerContainer}>
       <Text style={styles.title}>Minhas Tecnologias</Text>
       <View style={styles.form}>
            <TextInput style={styles.input} 
                       placeholder='Adicione uma nova tecnologia'
                       placeholderTextColor={theme.colors.base.gray300}
                       />
            <TouchableOpacity style={styles.button}>
                <Text>+</Text>
            </TouchableOpacity>
       </View>
    </View>
    )
}