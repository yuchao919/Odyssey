package com.example;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
  public static void main(String[] args) {

    List<Foo> fooList = Stream.of(new Foo("a"), new Foo("b"), new Foo("c")).collect(Collectors.toList());
    fooList.add(new Foo("d"));

    System.out.println(fooList.size());
  }
}