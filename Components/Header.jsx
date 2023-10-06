import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({ currentTime, setCurrentTime }) {

    const handlePress = (index) => {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index)
    }


    return (
        <View style={{ flexDirection: "row" }}>
            {options.map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemStyles}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyles: {
        borderWidth: 3,
        padding: 5,
        width: "33%",
    }
})