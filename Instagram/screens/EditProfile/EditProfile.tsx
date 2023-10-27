import CustomInput from "@components/CustomInput"
import user from "@data/user.json"
import Colors from "@theme/colors"
import fonts from "@theme/fonts"
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useForm, Controller } from "react-hook-form"
import { IEditableUser } from "@myTypes/models"

const EditProfile = () => {

    const REGEX_URL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/i
    
    const { control, handleSubmit } = useForm<IEditableUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            bio: user.bio
        }
    })
    const onSubmitHandler = (data: IEditableUser) => {
        console.log('onSubmit', data)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.page}>
                <Image source={{ uri: user.image }} style={styles.avatar} />
                <Text style={styles.textButton}>Change profile photo</Text>
                <CustomInput
                    label="Name"
                    name="name"
                    control={control}
                    rules={{
                        required: "Name is required",
                        minLength: {
                            value: 3,
                            message: 'Name should be more than 3 characters'
                        }
                    }}
                />
                <CustomInput label="Username" name="username" rules={{ required: "Username is required" }} control={control} />
                <CustomInput
                    label="Website"
                    name="website"
                    control={control}
                    rules={{
                        pattern: {
                            value: REGEX_URL,
                            message: 'Invalid URL'
                        }
                    }}
                />
                <CustomInput label="Bio" name="bio" multiline control={control} />
                <Text style={styles.textButton} onPress={handleSubmit(onSubmitHandler)}>Submit</Text>
            </View>
        </SafeAreaView>
    )
}

export default EditProfile


const styles = StyleSheet.create({

    page: {
        alignItems: 'center',
        padding: 10
    },

    avatar: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 100
    },

    textButton: {
        color: Colors.primary,
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,
        margin: 10

    }
})