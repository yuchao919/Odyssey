package com.maven_learning;

public enum KhStateEnum {
    Launched(1),
    Checking(2), Checked(3);

    private int value;

    KhStateEnum(int value) {
        this.value = value;
    }

    public int valueOf() {
        return value;
    }
}
