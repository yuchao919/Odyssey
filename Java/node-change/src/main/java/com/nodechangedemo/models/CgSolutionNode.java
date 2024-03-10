package com.nodechangedemo.models;

import java.util.UUID;

public class CgSolutionNode {

    public String NodeCode;

    public int NodeState;

    public UUID CgSolutionGUID;

    public CgSolutionNode(String nodeCode, UUID sid) {
        this.NodeCode = nodeCode;
        this.NodeState = 1;
        CgSolutionGUID = sid;
    }
}
