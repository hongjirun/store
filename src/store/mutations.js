export const mutations = {
  //更改定位城市
  changePositionCity(state, payload) { 
    state.positionCity = payload.city;
  },
  //更改收货地址显示
  changeReceiptAddress(state, payload) { 
    state.receiptAddress = payload.receAddr;
  },
  //改变store.state.showareacodePop的值
  changeshowareacodePop(state, payload) { 
    state.showareacodePop = payload.showareacodePop;
  },
  //改变增加收货地址页面的区号插值
  changeCodeIndex(state, payload) { 
    state.codeIndex = payload.codeIndex;
  },
  //改变登录是否成功图标
  changeLoginIconfont(state, payload) { 
    state.loginSuccess = payload.loginSuccess;
  },
  //登录成功改变登录的号码
  changeTeleNumber(state, payload) { 
    state.teleNumber = payload.teleNumber;
  },
  //改变页脚三个按钮的状态
  changeShouye(state, payload) { 
    state.isShouye = payload.isShouye;
  },
  changeDingdan(state, payload) { 
    state.isDingdan = payload.isDingdan;
  },
  changeMine(state, payload) { 
    state.isMine = payload.isMine;
  }
}