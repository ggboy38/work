layui.use( function(){
	  var form = layui.form;
	  form.on('submit', function(data){
	      if(!data.field.agreement){
	          layer.msg('请先阅读并同意用户协议');
	          return false;
	      }
	      layer.msg('登录成功');
	      setTimeout(function(){
	          window.location.href = 'main.html';
	      }, 1000);
	      return false;
	  });
	  var table = layui.table;
	  var inst = table.render({
	    elem: '#table-data',
	    cols: [[ 
	      {field: 'id', title: 'ID', width: 80, sort: true},
	      {field: 'username', title: '岗位名称', width: 200},
	      {field: 'worktype', title: '工作类型', width: 200},
	      {field: 'range', title: '薪资范围', width: 200},
	      {field: 'city', title: '工作地点', width: 200},
	      {field: 'time', title: '发布时间', sort: true}
	    ]],
	    data: [{ 
	      "id": "10001",
	      "username": "Java",
	      "worktype": "后端开发",
	      "city": "浙江杭州",
	      "range": "6-9k",
	      "time": "2025-06-01"
	    }, {
	      "id": "10002",
	      "username": "全栈工程师",
	      "worktype": "后端开发",
	      "city": "浙江杭州",
	      "range": "11-20k",
	      "time": "2025-06-02",
	      "LAY_CHECKED": true
	    }, {
	      "id": "10003",
	      "username": "web前端开发工程师",
	      "worktype": "前端开发",
	      "city": "浙江杭州",
	      "range": "6-10k",
	      "time": "2025-06-03"
	    }, {
	      "id": "10004",
	      "username": "安卓工程师",
	      "worktype": "移动开发",
	      "city": "浙江杭州",
	      "range": "14-17k",
	      "time": "2025-06-04"
	    }, {
	      "id": "10005",
	      "username": "软件开发工程师",
	      "worktype": "电子开发",
	      "city": "浙江杭州",
	      "range": "13-20k",
	      "time": "2025-06-05"
	    }, {
	      "id": "10006",
	      "username": "电气工程师",
	      "worktype": "电气工程师",
	      "city": "浙江杭州",
	      "range": "8-13k",
	      "time": "2025-06-06"
	    }, {
	      "id": "10007",
	      "username": "产品工程师",
	      "worktype": "产品经理",
	      "city": "浙江杭州",
	      "range": "10-15k",
	      "time": "2025-06-07"
	    }, {
	      "id": "10008",
	      "username": "服务员",
	      "worktype": "餐饮",
	      "city": "浙江杭州",
	      "range": "4-5k",
	      "time": "2025-06-08"
	    }],
	    
	    
	    page: true, 
	    limits: [5, 10, 15],
	    limit: 5 
	  });
	});