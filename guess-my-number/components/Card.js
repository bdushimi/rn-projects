import { View, StyleSheet } from 'react-native'
import Colors from '../constants/colors'


export default function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary600,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
    }
})