package com.example.hellowebsocket.dto;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import java.time.LocalDateTime;

public class ChatMessage {
    String value;
    LocalDateTime localDateTime;

    public ChatMessage(String value){
        this.value = value;
        localDateTime = LocalDateTime.now();
    }
}
