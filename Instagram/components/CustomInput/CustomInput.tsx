import { Control, Controller } from "react-hook-form";
import { Text, TextInput, View } from 'react-native';
import styles from './styles';
import { IEditableUser, IEditableUserField } from "@myTypes/models";
import Colors from "@theme/colors";


interface ICustomInput {
    control: Control<IEditableUser>;
    label: string;
    name: IEditableUserField;
    multiline?: boolean;
    rules?: object;
}
const CustomInput = ({ control, label, name, multiline = false, rules = {} }: ICustomInput) => {
    return (

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {

                return (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>{label}</Text>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={[styles.input, { borderColor: error ? Colors.error : Colors.border }]}
                                placeholder={label}
                                multiline={multiline} />
                            {error && <Text style={{ color: Colors.error }}>{error?.message}</Text>}
                        </View>
                    </View>
                )
            }}


        />
    )
}

export default CustomInput
