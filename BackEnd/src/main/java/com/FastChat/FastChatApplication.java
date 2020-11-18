package com.FastChat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;


@EnableAutoConfiguration
@ComponentScan
public class FastChatApplication {

	public static void main(String[] args) {

		SpringApplication.run(FastChatApplication.class, args);
	}

}
