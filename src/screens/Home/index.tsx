import React from "react";
import { View, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";

import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { SendMessageForm } from "../../components/SendMessageForm";

import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { COLORS } from "../../theme";

export function Home() {
  const { user, isSigninIn } = useAuth();
  if (user === undefined || isSigninIn) {
    return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <ActivityIndicator size={40} color={COLORS.PINK} />
    </View>);
  }
  return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
    <View style={styles.container}>
      <Header />
      <MessageList />

      {user ? <SendMessageForm /> : <SignInBox />}
    </View>
    </KeyboardAvoidingView>
  );
}
