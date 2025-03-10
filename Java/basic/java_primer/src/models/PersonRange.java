package models;

import annotations.Range;

public class PersonRange {
    @Range(min = 0, max = 8)
    public String name;

    @Range(min = 0, max = 16)
    public String city;
}
