import styles from './index.css';
import React from "react"
import { Layout, Menu, Icon } from 'antd';
import router from "umi/router"
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.Component{
  state = {
    collapsed: false,
    menuList: [
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
      },{
        key:4,
        label:"Navigation One",
        icon:"mail",
        subMenu:[
          {key:41, label:"Option 5"},
          {key:42, label:"Option 6"},
          {key:43, label:"Option 7"},
          {key:44, label:"Option 8", page:'option/option'},
        ]
      }
    ]
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  changeRoute = (path) =>{
    router.replace("");
    router.replace(path);
  };
  render() {
    let list = this.state.menuList.map((item)=>{
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
            {item.subMenu.map((subItem)=>{
              return (<Menu.Item key={subItem.key}
                                 onClick={this.changeRoute.bind(this,subItem.page)}>
                {subItem.label}
              </Menu.Item>)
            })}
          </SubMenu>
        ):(<Menu.Item key={item.key}
                      onClick={this.changeRoute.bind(this,item.page)}>
          <Icon type={item.icon}/>
          <span>{item.label}</span>
        </Menu.Item>)

    });
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {list}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
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
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default BasicLayout;
