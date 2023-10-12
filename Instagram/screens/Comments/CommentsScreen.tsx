import Comment from '@components/Comment'
import comments from "@data/comments.json"
import React from 'react'
import { FlatList, View } from 'react-native'
import styles from './styles'
import InputCommentText from '@screens/Comments/InputCommentText'

const CommentsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment comment={item} includeDetails />}
      />
      <InputCommentText />
    </View>

  )
}

export default CommentsScreen