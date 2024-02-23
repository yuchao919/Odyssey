package demos;

import java.lang.reflect.Field;

import annotations.ActionRight;
import annotations.Range;
import models.Person;
import models.PersonRange;

public class AnnotationDemo {

    @ActionRight(ActionCode = "00")
    public static void test() {
        PersonRange person = new PersonRange();
        person.name = "1234567";
        person.city = "12345678901234567890";

        try {
            checkPerson(person);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void checkPerson(PersonRange person) throws IllegalArgumentException, ReflectiveOperationException {
        if (person == null) {
            return;
        }

        for (Field field : person.getClass().getFields()) {
            Range range = field.getAnnotation(Range.class);
            if (range != null) {
                Object value = field.get(person);
                if (value != null && value instanceof String) {
                    String s = (String) value;
                    // 判断值是否满足@Range的min/max:
                    if (s.length() > range.max() || s.length() < range.min()) {
                        throw new IllegalArgumentException("Invalid field:" + field.getName());
                    }
                }
            }
        }
    }
}
