export default {
  //命名空间String,且唯一。models层中的多个model通过命名空间加以区分
  namespace: 'layout',
  //state里定义一些默认值，相当于component中的state抽离出来
  state:{
    collapsed: false
  },
  //处理数据，reducers是唯一可以更改state的地方，由action触发，处理同步操作，把更新后的state return出去后，挂载到state相关数据的界面就会更新
  //*官方推荐将逻辑处理放在effects中
  reducers:{
    //reducers中的方法接收两个参数，第一个参数是未更改的state,第二个参数是action(可选，没有的话可以不写或用_代替)
    toggle(state) {
      //把旧的state解构出来，用新值覆盖
      return { ...state, collapsed: !state.collapsed }
    }
  },
  //接收数据，effects处理异步操作、业务逻辑、与后台服务器交互等，不直接修改state, 将处理结果给到reducers
  //由action触发，可触发action,可以获取全局state数据
  //effects中的方法接收2个参数，第1个参数action(没有可以写_),第2个参数是用其中call, put, select这3个参数
  // call: 用来与后台交互
  // put:用来触发reducers中的方法，与dispacth功能一样
  // select:用来选择models层所有model里state的数据
  // * yield是es6的Generator函数
  effects: {
   /* *toggle({payload},{call, put, select}){
      yield put({ type:"toggle"});
    }*/

  },
  //监听数据，订阅数据源，根据需要dispatch相应的action
  //数据源指当前时间、服务器的websocket连接、键盘输入、路由变化等
  subscriptions:{

  }
}
