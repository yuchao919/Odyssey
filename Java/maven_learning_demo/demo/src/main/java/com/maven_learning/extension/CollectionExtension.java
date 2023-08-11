package com.maven_learning.extension;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CollectionExtension {
    /**
     * 
     * @param <T>
     * @param coll
     * @return
     */
    public static <T> boolean any(Collection<T> coll) {
        return coll != null && coll.size() > 0;
    }

    /**
     * 
     * @param <T>
     * @param coll
     * @param predicate
     * @return
     */
    public static <T> List<T> findAll(Collection<T> coll, Predicate<T> predicate) {
        Stream<T> result = Optional.ofNullable(coll).orElse(new ArrayList<T>()).stream().filter(predicate);
        return result != null ? result.collect(Collectors.toList()) : new ArrayList<>();
    }
}
