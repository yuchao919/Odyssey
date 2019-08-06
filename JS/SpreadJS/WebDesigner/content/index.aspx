<%@ Page Language="C#" EnableSessionState="False" MasterPageFile="~/PubPlatform/Nav/MasterPage/Nav.Master" %>

<%@ Import Namespace="Mysoft.Map6.Platform" %>
<%@ Import Namespace="ClownFish.Web" %>

<asp:Content ID="Content2" ContentPlaceHolderID="resources" runat="server">
    <cnt:AppWebResource ID="appWebResource" runat="server">


    </cnt:AppWebResource>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="content" runat="server">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<div class="container" id="container">
    <iframe id="myExcel" width="100%" height="100%" style="min-height: 900px;" src="./index.html" frameborder="0"></iframe>
</div>

<script>
            var myData = {
            "version": "11.2.2",
            "sheets": {
                "土地增值税明细编制": {
                    "name": "土地增值税明细编制",
                    "rowCount": 100,
                    "columnCount": 100,
                    "frozenColCount": 1,
                    "frozenRowCount": 2,
                    "theme": "Office",
                    "data": {
                        "dataTable": {
                            "0": {
                                "0": {
                                    "value": "土地增值税条目名称",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "1": {
                                    "value": "计算代码",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "2": {
                                    "value": "规则说明",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "3": {
                                    "value": "合计",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "4": {
                                    "value": "合并计算[分产品计算]",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "5": {
                                    "value": "合并计算[分产品计算]",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "6": {
                                    "value": "合并计算[分产品计算]",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                }
                            },
                            "1": {
                                "0": {
                                    "value": "土地增值税条目名称",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "1": {
                                    "value": "计算代码",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "2": {
                                    "value": "规则说明",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "3": {
                                    "value": "合计",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "4": {
                                    "value": "合计",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "5": {
                                    "value": "高层",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                },
                                "6": {
                                    "value": "别墅",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1
                                    }
                                }
                            },
                            "2": {
                                "0": {
                                    "value": "一、转让房地产收入总额",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "1",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[1.1]+[1.2]+[1.3]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E3,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E4+E5+E6,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F4+F5+F6,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G4+G5+G6,2),0.00)"
                                }
                            },
                            "3": {
                                "0": {
                                    "value": "销售收入（不含税）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "1.1",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "销售金额（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E4,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G4+F4"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "1531531531.53",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "4684684684.68",
                                    "formula": ""
                                }
                            },
                            "4": {
                                "0": {
                                    "value": "土地抵扣款对应的进项税",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "1.2",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "土地抵扣款对应的进项税",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E5,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G5+F5"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "244.16",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "746.83",
                                    "formula": ""
                                }
                            },
                            "5": {
                                "0": {
                                    "value": "销售收入（调整）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "1.3",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "手动输入",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E6,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G6+F6"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                }
                            },
                            "6": {
                                "0": {
                                    "value": "二、扣除项目金额合计",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[2.1]+[2.2]+[2.3]+[2.4]+[2.5]+[2.6]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E7,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E8+E9+E15+E19+E21+E22,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F8+F9+F15+F19+F21+F22,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G8+G9+G15+G19+G21+G22,2),0.00)"
                                }
                            },
                            "7": {
                                "0": {
                                    "value": "土地成本（含税）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.1",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "土地成本（含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E8,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G8+F8"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2100000.00",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2000000.00",
                                    "formula": ""
                                }
                            },
                            "8": {
                                "0": {
                                    "value": "建设成本（不含税）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.2",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[2.2.1]+[2.2.2]+[2.2.3]+[2.2.4]+[2.2.5]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E9,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E10+E11+E12+E13+E14,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F10+F11+F12+F13+F14,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G10+G11+G12+G13+G14,2),0.00)"
                                }
                            },
                            "9": {
                                "0": {
                                    "value": "前期工程费",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.2.1",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "前期工程费（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E10,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G10+F10"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "270270.27",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "198198.20",
                                    "formula": ""
                                }
                            },
                            "10": {
                                "0": {
                                    "value": "建安成本",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.2.2",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "建安成本（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E11,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G11+F11"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "450450.45",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "297297.30",
                                    "formula": ""
                                }
                            },
                            "11": {
                                "0": {
                                    "value": "基础设施费",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.2.3",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "基础设施费（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E12,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G12+F12"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                }
                            },
                            "12": {
                                "0": {
                                    "value": "公共配套",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.2.4",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "公共配套（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E13,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G13+F13"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "360360.36",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "450450.45",
                                    "formula": ""
                                }
                            },
                            "13": {
                                "0": {
                                    "value": "资本化利息",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.2.5",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "资本化利息（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E14,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G14+F14"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "450450.45",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "540540.54",
                                    "formula": ""
                                }
                            },
                            "14": {
                                "0": {
                                    "value": "开发费用",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.3",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[2.3.1]+[2.3.2]+[2.3.3]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E15,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E16+E17+E18,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F16+F17+F18,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G16+G17+G18,2),0.00)"
                                }
                            },
                            "15": {
                                "0": {
                                    "value": "管理费用",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.3.1",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "管理费用（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E16,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G16+F16"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "270270.27",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "198198.20",
                                    "formula": ""
                                }
                            },
                            "16": {
                                "0": {
                                    "value": "营销费用",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.3.2",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "营销费用（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E17,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G17+F17"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                }
                            },
                            "17": {
                                "0": {
                                    "value": "财务费用",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.3.3",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "财务费用（不含税）",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E18,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G18+F18"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "450450.45",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "297297.30",
                                    "formula": ""
                                }
                            },
                            "18": {
                                "0": {
                                    "value": "与转让房地产有关的税金",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.4",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[2.4.1]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E19,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "E20"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "F20"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "G20"
                                }
                            },
                            "19": {
                                "0": {
                                    "value": "增值税附加税",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 2
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.4.1",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "增值税附加税",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E20,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G20+F20"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "94249230.55",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "288291764.04",
                                    "formula": ""
                                }
                            },
                            "20": {
                                "0": {
                                    "value": "加计扣除",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.5",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "([2.1]+[2.2])*0.2",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E21,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN((E8+E9)*0.2,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN((F8+F9)*0.2,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN((G8+G9)*0.2,2),0.00)"
                                }
                            },
                            "21": {
                                "0": {
                                    "value": "扣除金额（调整）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 1
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "2.6",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "手动输入",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E22,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G22+F22"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                }
                            },
                            "22": {
                                "0": {
                                    "value": "三、增值额",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "3",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[1]-[2]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E23,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G23+F23,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F3-F7,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G3-G7,2),0.00)"
                                }
                            },
                            "23": {
                                "0": {
                                    "value": "四、增值率（%）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "4",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[3]/[2]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(D23/D7,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E23/E7,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F23/F7,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G23/G7,2),0.00)"
                                }
                            },
                            "24": {
                                "0": {
                                    "value": "五、适用税率（%）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "5",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "规则取值",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": ""
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": ""
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(IF(F24<=10.000000,10.000000,10.000000,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(IF(G24<=10.000000,10.000000,10.000000,2),0.00)"
                                }
                            },
                            "25": {
                                "0": {
                                    "value": "六、速算扣除系数（%）",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "6",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "规则取值",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": ""
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": ""
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(IF(F24<=10.000000,10.000000,10.000000,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(IF(G24<=10.000000,10.000000,10.000000,2),0.00)"
                                }
                            },
                            "26": {
                                "0": {
                                    "value": "七、参考税金",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "7",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[3]*[5]-[2]*[6]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E27,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G27+F27,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F23*F25-F7*F26,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G23*G25-G7*G26,2),0.00)"
                                }
                            },
                            "27": {
                                "0": {
                                    "value": "八、手动调整",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "8",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "手动输入",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E28,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": "G28+F28"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "0.00",
                                    "formula": ""
                                }
                            },
                            "28": {
                                "0": {
                                    "value": "九、税金预算总额",
                                    "style": {
                                        "backColor": "#F4F4F9",
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": true,
                                        "imeMode": 1,
                                        "textIndent": 0
                                    }
                                },
                                "1": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "9",
                                    "formula": ""
                                },
                                "2": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "[7]+[8]",
                                    "formula": ""
                                },
                                "3": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(E29,2),0.00)"
                                },
                                "4": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G29+F29,2),0.00)"
                                },
                                "5": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(F27+F28,2),0.00)"
                                },
                                "6": {
                                    "style": {
                                        "backColor": "",
                                        "hAlign": 1,
                                        "vAlign": 1,
                                        "font": "14.6667px Calibri",
                                        "themeFont": "Body",
                                        "borderLeft": {
                                            "style": 1
                                        },
                                        "borderTop": {
                                            "style": 1
                                        },
                                        "borderRight": {
                                            "style": 1
                                        },
                                        "borderBottom": {
                                            "style": 1
                                        },
                                        "locked": false,
                                        "imeMode": 1
                                    },
                                    "value": "",
                                    "formula": "IFERROR(ROUNDDOWN(G27+G28,2),0.00)"
                                }
                            }
                        }
                    },
                    "columns": [
                        {
                            "size": 200
                        },
                        {
                            "size": 150
                        },
                        {
                            "size": 250
                        },
                        {
                            "size": 150
                        },
                        {
                            "size": 150
                        },
                        {
                            "size": 150
                        },
                        {
                            "size": 150
                        }
                    ],
                    "rows": [
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        },
                        {
                            "size": 30
                        }
                    ],
                    "spans": [
                        {
                            "row": 0,
                            "rowCount": 1,
                            "col": 4,
                            "colCount": 3
                        },
                        {
                            "row": 0,
                            "rowCount": 2,
                            "col": 0,
                            "colCount": 1
                        },
                        {
                            "row": 0,
                            "rowCount": 2,
                            "col": 1,
                            "colCount": 1
                        },
                        {
                            "row": 0,
                            "rowCount": 2,
                            "col": 2,
                            "colCount": 1
                        },
                        {
                            "row": 0,
                            "rowCount": 2,
                            "col": 3,
                            "colCount": 1
                        }
                    ],
                    "showRowOutline": false,
                    "outlineColumnOptions": {
                        "columnIndex": 0,
                        "showCheckBox": false,
                        "maxLevel": 2
                    },
                    "isProtected": false,
                    "protectionOptions": {
                        "allowSelectLockedCells": true,
                        "allowSelectUnlockedCells": true,
                        "allowCopyPasteExcelStyle ": true,
                        "allowFilter": true,
                        "allowSort": true,
                        "allowResizeRows": true,
                        "allowResizeColumns": true,
                        "allowEditObjects": true,
                        "autoFitType": true,
                        "tabStripVisible": false,
                        "tabEditable ": false,
                        "newTabVisible": false,
                        "allowDragInsertRows": false,
                        "allowDragInsertColumns": false,
                        "allowInsertRows": false,
                        "allowInsertColumns": false,
                        "allowDeleteRows": false,
                        "allowDeleteColumns": false
                    }
                }
            }
        };
            //注册spread
             window.spreadLoaded = function () {
                 document.getElementById("myExcel").contentWindow.initJsonData(myData)
             }

             window.spreadFullScreen = function () {
                 $("body").toggleClass("fullIFrame");
             }



</script>


</asp:Content>


