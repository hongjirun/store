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
  
}