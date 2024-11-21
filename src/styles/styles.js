import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#975aa8', 
    },
    container: {
        flex: 1,
        backgroundColor: '#975aa8',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        marginTop: 45
    },
    containerImage: {
        width: '80%',
        height: 400, 
        padding: 10,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'justify',
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    butoon: {
        margin: 30,
        display: 'flex',
        flexDirection: 'column'
    },
    customButton: {
        backgroundColor: '#493548',  
        padding: 10,
        borderRadius: 10,
        width:100
    },
    buttonText: {
        color: '#fff',  
        fontSize: 16,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        marginTop: 10,
        fontSize: 14,
        marginBottom: 10,
    },
});