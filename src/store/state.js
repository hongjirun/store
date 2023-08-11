export const state = {
  positionCity: '广州',//定位城市
  receiptAddress: '汇金国际金融中心美团外卖柜',//具体收货地址
  //我的全部收货地址
  myAddressAll: [
    {
      address: "汇金国际金融中心美团外卖柜",
      contact: ["吴彦祖", "15913921974"]
    },
    {
      address: "天安门广场地下停车场",
      contact: ["彭于晏", "15728273929"]
    },
    {
      address: "横店镇街口第二巷",
      contact: ["胡歌", "18738383738"]
    },
    {
      address: "蒙古大草原第二个蒙古包",
      contact: ["刘德华", "19837478383"]
    },
    {
      address: "天安门广场地下停车场",
      contact: ["彭于晏", "15728273929"]
    },
    {
      address: "汇金国际金融中心美团外卖柜",
      contact: ["吴彦祖", "15913921974"]
    },
    {
      address: "天安门广场地下停车场",
      contact: ["彭于晏", "15728273929"]
    },
    {
      address: "横店镇街口第二巷",
      contact: ["胡歌", "18738383738"]
    },
    {
      address: "蒙古大草原第二个蒙古包",
      contact: ["刘德华", "19837478383"]
    },
    {
      address: "天安门广场地下停车场",
      contact: ["彭于晏", "15728273929"]
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
}