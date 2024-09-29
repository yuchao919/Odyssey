package com.itranswarp.learnjava.bean;

public class User {
    public long id;
    public String name;
    public School school;

    public User(long _id, String _name, School _school) {
        this.id = _id;
        this.name = _name;
        this.school = _school;
    }
}
