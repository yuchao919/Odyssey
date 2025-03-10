package com.example;

import com.example.service.HelloService;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {

        HelloService service = new HelloService();
        String name = "World123";

        service.sayHello(name);
    }
}