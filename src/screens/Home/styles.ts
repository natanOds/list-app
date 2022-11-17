import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 30
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,
        backgroundColor: '#696969',
        height: 56,
        borderRadius: 10,
        color: '#FFF',
        padding: 10,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: '#FFF',
        fontSize: 35
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 30,
        marginBottom: 36,
        width: '100%',
        flexDirection: 'row'
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
  });