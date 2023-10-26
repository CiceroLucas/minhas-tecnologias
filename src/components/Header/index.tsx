import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import { styles } from "./styles";
import { theme } from '../../theme';

type HeaderProps = {
    task: string,
    inputRef: React.RefObject<TextInput>
    onChangeText: (task: string) => void
    onPress: () => void
}

export function Header({task, inputRef,onChangeText, onPress}: HeaderProps){
    return (
    <View style={styles.headerContainer}>
       <Text style={styles.title}>Minhas Tecnologias</Text>
       <View style={styles.form}>
            <TextInput style={[
                styles.input, 
                inputRef.current?.isFocused() && task ? styles.inputBorder : null
            ]} 
                       placeholder='Adicione uma nova tecnologia'
                       placeholderTextColor={theme.colors.base.gray300}
                       value={task}
                       onChangeText={onChangeText}
                       ref={inputRef}
                       autoCorrect={false}
                       onSubmitEditing={onPress}
                       returnKeyType='done'
                       />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>+</Text>
            </TouchableOpacity>
       </View>
    </View>
    )
}