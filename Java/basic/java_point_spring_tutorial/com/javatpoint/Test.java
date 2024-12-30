package com.javatpoint;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.*;

import com.javatpoint.models.Question;

public class Test {
    public static void main(String[] args) {

        Resource r = new ClassPathResource("applicationContext.xml");
        BeanFactory factory = new XmlBeanFactory(r);

        // Employee s = (Employee) factory.getBean("e");
        // s.show();

        Question q = (Question) factory.getBean("q");
        q.displayInfo();
    }
}