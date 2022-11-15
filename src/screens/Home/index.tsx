import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';


export function Home(){
  return(
    <View style={styles.container}> 
    <Text style={styles.eventName}>TO-DO LIST</Text>
    <Text style={styles.eventDate}>segunda, 11 de novembro de 2022.</Text>

    <TextInput style={styles.input}
    placeholder="Nome do Participante"
    placeholderTextColor="#363636"
    />

    </View>
  );
}