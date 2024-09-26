import { jsx as _jsx } from "react/jsx-runtime";
import { Text, View, StyleSheet } from 'react-native';
export const HelloWorld = ({ message = 'Hello World' }) => {
    return (_jsx(View, { style: styles.container, children: _jsx(Text, { style: styles.text, children: message }) }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'black',
    },
});
