import styles from './index.css';
import React from "react"
import { Layout, Menu, Icon } from 'antd';
import router from "umi/router";
import { connect } from "dva";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

function BasicLayout(props){
  const { children, dispatch, collapsed } = props;
  const menuList = [
    {
      key:1,
      label:"nav 1",
      icon:"user",
      page:"navOne/navOne"
    },{
      key:2,
      label:"nav 2",
      icon:"video-camera",
      page:""
    },{
      key:3,
      label:"nav 3",
      icon:"upload"
    }, {
      key: 4,
      label: "Navigation One",
      icon: "mail",
      subMenu: [
        { key: 41, label: "Option 5" },
        { key: 42, label: "Option 6" },
        { key: 43, label: "Option 7" },
        { key: 44, label: "Option 8", page: 'option/option' },
      ]
    }
  ];
  const toggle = () => {
    dispatch({ type:"layout/toggle" });
  };
  const changeRoute = (path) =>{
    router.replace("");
    router.replace(path);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          { menuList.map((item)=> {
            return item.subMenu ?
              (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon}/>
                      <span>{item.label}</span>
                    </span>
                  }
                >
                  {item.subMenu.map((subItem) => {
                    return (<Menu.Item key={subItem.key}
                                       onClick={changeRoute.bind(this,subItem.page)}>
                              {subItem.label}
                            </Menu.Item>)
                  })}
                </SubMenu>
              ) : (<Menu.Item key={item.key}
                              onClick={changeRoute.bind(this,item.page)}>
                    <Icon type={item.icon}/>
                    <span>{item.label}</span>
                  </Menu.Item>)
            })
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={styles.trigger}
            type='menu-unfold'
            onClick={toggle.bind(this)}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
  )
}
function mapStateToProps(state) {
  const { collapsed } = state.layout;
  return {
    collapsed
  }
}
export default connect(mapStateToProps)(BasicLayout);
