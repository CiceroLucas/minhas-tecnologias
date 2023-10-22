import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import { styles } from "./styles";
import { theme } from '../../theme';

type HeaderProps = {
    task: string,
    onChangeText: (task: string) => void
    onPress: () => void
}

export function Header({task, onChangeText, onPress}: HeaderProps){
    return (
    <View style={styles.headerContainer}>
       <Text style={styles.title}>Minhas Tecnologias</Text>
       <View style={styles.form}>
            <TextInput style={styles.input} 
                       placeholder='Adicione uma nova tecnologia'
                       placeholderTextColor={theme.colors.base.gray300}
                       value={task}
                       onChangeText={onChangeText}
                       />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>+</Text>
            </TouchableOpacity>
       </View>
    </View>
    )
}