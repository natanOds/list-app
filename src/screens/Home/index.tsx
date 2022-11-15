import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home(){
    const participants = ['Neymar', 'ViniJR', 'Pombo', 'Daniel Alves', 'Marquinhos','Eder', 'Raphinha', 'Lucas Paqueta','Casemiro', 'Alisson', 'T.Silva'];

    function handleParticipantAdd(){
        console.log("Voce clicou no botão de Adicionar")
    }
    function handleParticipantRemove(name: string){
        console.log(`Voce clicou no botão de remover ${name}`)
    }
    
    
    return(
        <View style={styles.container}> 
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>segunda, 11 de novembro de 2022.</Text>

    <View style={styles.form}> 
        <TextInput style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor="#363636"
    />

    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>  

    {
        participants.map(participant => (
            <Participant 
            key={participant}
            name={participant} 
            onRemove={() => handleParticipantRemove("natan")} />
        ))
    }
     
     
    </View>
  );
}