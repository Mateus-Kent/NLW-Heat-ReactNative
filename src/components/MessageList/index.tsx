import React from "react";
import { ScrollView } from "react-native";

import { Message } from "../Message";

import { styles } from "./styles";

export function MessageList() {
  const message = {
    id: '1',
    text: 'mensagem',
    user: {
      name: 'Carla',
      avatar_url: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e',
    }
  }


  return (
    <ScrollView 
    style={styles.container}
    contentContainerStyle={styles.content}
    keyboardShouldPersistTaps="never"
    >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
    </ScrollView>
  );
}
