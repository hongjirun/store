export const mutations = {
  //更改定位城市
  changePositionCity(state, payload) { 
    state.positionCity = payload.city;
  },
  //更改收货地址显示
  changeReceiptAddress(state, payload) { 
    state.receiptAddress = payload.receAddr;
  }
}