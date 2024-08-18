// src/components/UserList.tsx
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { User } from '../types/User';

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => (
  <FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    )}
  />
);
