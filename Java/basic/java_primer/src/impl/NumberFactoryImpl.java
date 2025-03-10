package impl;

import interfaces.NumberFactory;

public class NumberFactoryImpl implements NumberFactory {

    @Override
    public Number parse(String s) {
        return Integer.valueOf(s);
    }
}
