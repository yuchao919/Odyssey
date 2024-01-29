package models;

public class PersonComparable implements Comparable<PersonComparable> {
    public String name;

    public PersonComparable(String name) {
        this.name = name;
    }

    public int compareTo(PersonComparable other) {
        return this.name.compareTo(other.name);
    }

    public String toString() {
        return "Name:" + this.name;
    }
}
