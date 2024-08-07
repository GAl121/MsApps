/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Pressable,Text } from 'react-native';

const CustomButton = (props) => {
    return (
        <Pressable style={props.styleButton} onPress={props.handler}>
          <Text style={props.styleText}>{props.text}</Text>
        </Pressable>
    );
};

export default CustomButton;
