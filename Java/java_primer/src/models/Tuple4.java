package models;

import java.util.Objects;

/**
 * 模拟元组
 *
 * @param <T1> 第一个元素的类型
 * @param <T2> 第二个元素的类型
 * @param <T3> 第三个元素的类型
 * @param <T4> 第四个元素的类型
 * @author mingh03
 */
public class Tuple4<T1, T2, T3, T4> implements Comparable<Tuple4> {

    private T1 item1;

    private T2 item2;

    private T3 item3;

    private T4 item4;

    public Tuple4(T1 item1, T2 item2, T3 item3, T4 item4) {
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
        this.item4 = item4;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(this.item1) ^
                Objects.hashCode(this.item2) ^
                Objects.hashCode(this.item3) ^
                Objects.hashCode(this.item4);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (!(o instanceof Tuple4)) {
            return false;
        } else {
            Tuple4<?, ?, ?, ?> another = (Tuple4) o;
            return Objects.equals(this.item1, another.item1) &&
                    Objects.equals(this.item2, another.item2) &&
                    Objects.equals(this.item3, another.item3) &&
                    Objects.equals(this.item4, another.item4);
        }
    }

    @Override
    public int compareTo(Tuple4 o) {
        String json1 = this.toString();
        String json2 = o.toString();

        return json1.compareTo(json2);
    }
}