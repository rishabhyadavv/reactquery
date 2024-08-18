// src/screens/HomeScreen.tsx
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text, Button } from 'react-native';
import { useUsers } from '../hooks/useUsers';
import { usePosts } from '../hooks/usePosts';
import { UserList } from '../components/UserList';
import { PostList } from '../components/PostList';
import { useStore } from '../store/useStore';

export const HomeScreen: React.FC = () => {
  const { data: users, error: userError, isLoading: isUserLoading } = useUsers();
  const { data: posts, error: postError, isLoading: isPostLoading } = usePosts();

  const {
    users: storedUsers,
    posts: storedPosts,
    setUsers,
    setPosts,
    addUser,
    addPost,
  } = useStore();

  useEffect(() => {
    if (users) {
      setUsers(users);
    }
  }, [users, setUsers]);

  useEffect(() => {
    if (posts) {
      setPosts(posts);
    }
  }, [posts, setPosts]);

  if (isUserLoading || isPostLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (userError) {
    return <Text>Error loading users: {userError.message}</Text>;
  }

  if (postError) {
    return <Text>Error loading posts: {postError.message}</Text>;
  }

  return (
    <ScrollView>
      <Text>Users</Text>
      {storedUsers && <UserList users={storedUsers} />}
      <Text>Posts</Text>
      {storedPosts && <PostList posts={storedPosts} />}
      <Button
        title="Add Dummy User"
        onPress={() =>
          addUser({ id: Date.now(), name: 'Dummy User', username: 'dummy', email: 'dummy@example.com' })
        }
      />
      <Button
        title="Add Dummy Post"
        onPress={() =>
          addPost({
            id: Date.now(),
            userId: 1,
            title: 'Dummy Post',
            body: 'This is a dummy post added to the global state.',
          })
        }
      />
    </ScrollView>
  );
};
