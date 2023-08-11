package com.maven_learning.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class ExportRowDataDTO implements Serializable {

    /**
     * 
     */
    @JsonIgnore
    private Integer fooType;

    /**
     * 
     */
    private Integer barType;

}
