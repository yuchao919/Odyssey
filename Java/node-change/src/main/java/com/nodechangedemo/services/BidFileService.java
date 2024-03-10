package com.nodechangedemo.services;

import java.util.UUID;

import com.nodechangedemo.interfaces.FilingNode;

public class BidFileService implements FilingNode {

    @Override
    public void init(UUID cgSolutionGUID) {
        System.out.println("BidFile Init");
    }
}
