/***公共事件对象***/
var event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn); // 订阅的消息添加进缓存列表
  },
  trigger: function() {
    var key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key];

    if (!fns || fns.length === 0) {
      // 如果没有绑定对应 的消息
      return false;
    }

    for (var i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments);
    }
  },
  remove: function(key, fn) {
    var fns = this.clientList[key];

    if (!fns) {
      // 如果key对应的消息没有被人订阅，则直接返回
      return false;
    }
    if (!fn) {
      // 如果没有传入具体的回调函数，表示需要取消key对应消息的所有订阅
      fns && (fns.length = 0);
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1); // 删除订阅者的回调函数
        }
      }
    }
  }
};

var installEvent = function(obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
};

/***登陆对象***/
var login = {};
installEvent(login);

var header = (function() {
  // header模块
  login.listen("loginSucc", function(data) {
    header.setAvatar(data.avatar);
  });

  return {
    setAvatar: function(data) {
      console.log("设置header模块头像");
    }
  };
})();

var nav = (function(arguments) {
  // nav模块
  login.listen("loginSucc", function(data) {
    nav.setAvatar(data.avatar);
  });
  return {
    setAvatar: function(avatart) {
      console.log("设置nav模块的头像");
    }
  };
})();

var address = (function(arguments) {
  login.listen("loginSucc", function(data) {
    address.refresh(data.avatar);
  });
  return {
    refresh: function(avatart) {
      console.log("刷新地址信息");
    }
  };
})();

var test = (function(arguments) {
  var obj = {
    refresh: function(data) {
      console.log("测试:" + data.name);
    }
  };
  login.listen("loginSucc", obj.refresh);
  return obj;
})();

login.remove("loginSucc", test.refresh);

/***模拟登陆***/
setTimeout(function() {
  var data = {
    avatart: {},
    name: "leslie"
  };
  login.trigger("loginSucc", data);
}, 3e3);
