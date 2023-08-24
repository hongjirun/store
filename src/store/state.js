export const state = {
  positionCity: '广州',//定位城市
  receiptAddress: '汇金国际金融中心美团外卖柜',//具体收货地址
  //我的全部收货地址
  myAddressAll: [
    { 
      city:'广州',
      address: "汇金国际金融中心美团外卖柜",
      contact: ["吴彦祖", "15913921974"]
    },
    {
      city:'北京',
      address: "天安门广场地下停车场",
      contact: ["彭于晏", "15728273929"]
    },
    {
      city:'江苏',
      address: "横店镇街口第二巷",
      contact: ["胡歌", "18738383738"]
    },
    {
      city:'内蒙古',
      address: "蒙古大草原第二个蒙古包",
      contact: ["刘德华", "19837478383"]
    },
    { 
      city:'广州',
      address: "汇金国际金融中心美团外卖柜",
      contact: ["吴彦祖", "15913921974"]
    },
    {
      city:'北京',
      address: "天安门广场地下停车场",
      contact: ["彭于晏", "15728273929"]
    },
    {
      city:'江苏',
      address: "横店镇街口第二巷",
      contact: ["胡歌", "18738383738"]
    },
    {
      city:'内蒙古',
      address: "蒙古大草原第二个蒙古包",
      contact: ["刘德华", "19837478383"]
    },
  ],
  //用于选择区号弹窗判断
  showareacodePop: false,
  //区号
  code: [
    { name:"中国大陆",code:"+86" },
    { name:"中国香港",code: "+852" },
    { name:"中国澳门",code:"+853" },
    { name:"中国台湾",code:"+886" }
  ],
  //增加页面收货选择区号变量
  codeIndex: 0,
  //每个城市的各个地方
  cityTown:[
    {city:"广州", places:[
      "越秀区广州塔",
      "天河区珠江新城",
      "海珠区广州广场",
      "荔湾区陈家祠",
      "白云区白云山",
      "黄埔区黄埔军校",
      "番禺区长隆野生动物园",
      "花都区花都广场",
      "从化区从化温泉",
      "南沙区南沙港"
    ]},
    {city:"北京", places:[
      "东城区天安门广场",
      "西城区故宫",
      "朝阳区三里屯",
      "丰台区北京西站",
      "海淀区颐和园",
      "石景山区八大处公园",
      "通州区通州大运河",
      "昌平区龙泽苑",
      "大兴区北京大兴国际机场",
      "顺义区顺义古堡"
    ]},
    {city:"上海",places:[
      "黄浦区外滩",
      "徐汇区复兴公园",
      "长宁区中山公园",
      "静安区南京西路",
      "普陀区静安寺",
      "闸北区虹口足球场",
      "虹口区世博滨江公园",
      "杨浦区五角场",
      "浦东新区东方明珠塔",
      "奉贤区海湾旅游区"
    ]},
    {city:"杭州",places:[
      "上城区西湖",
      "下城区河坊街",
      "江干区钱江新城",
      "拱墅区灵隐寺",
      "西湖区龙井茶村",
      "滨江区钱塘江",
      "萧山区西溪湿地",
      "余杭区九溪烟树",
      "富阳区千岛湖",
      "临安区西天竺"
    ]},
  ],
  //登录是否成功切换图标
  loginSuccess: false,
  //成功登录的号码
  teleNumber: '',
  //页脚上的三个按钮
  isShouye: true,
  isDingdan: false,
  isMine:false

}