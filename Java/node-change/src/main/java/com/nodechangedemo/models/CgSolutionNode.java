package com.nodechangedemo.models;

import java.util.UUID;

public class CgSolutionNode {

    public String NodeCode;

    public int NodeState;

    public UUID CgSolutionGUID;

    public Integer OrderNum;

    public Integer GroupId;

    public CgSolutionNode(String nodeCode, int orderNum, UUID sid) {
        this.NodeState = NodeStateEnum.NotStart;
        this.NodeCode = nodeCode;
        this.OrderNum = orderNum;
        this.CgSolutionGUID = sid;
    }
}
