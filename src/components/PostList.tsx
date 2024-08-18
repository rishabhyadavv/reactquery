// src/components/PostList.tsx
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Post } from '../types/Post';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <FlatList
    data={posts}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    )}
  />
);
