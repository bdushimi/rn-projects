import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { useState } from 'react'
import Comment from '@components/Comment'
import comments from '@data/comments.json'
import Colors from '@theme/colors'
import fonts from '@theme/fonts'

const InputCommentText = () => {

  const [newComment, setNewComment] = useState('')

  const onPost = () => {
    console.warn("Posting the comment", newComment)
    setNewComment('')
  }
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg'
        }}

        style={styles.image}
      />
      <TextInput
        placeholder='Write your comment...'
        style={styles.input}
        multiline
        value={newComment}
        onChangeText={setNewComment} // this is the same as writting onChangeText={newText => setNewComment(newText)}
      />
      <Text style={styles.button} onPress={onPost}>POST</Text>
    </View>
  )
}

export default InputCommentText


const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: Colors.lightgrey
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20
  },

  input: {
    flex: 1,
    borderColor: Colors.lightgrey,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight: 55,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: Colors.primary
  }
})