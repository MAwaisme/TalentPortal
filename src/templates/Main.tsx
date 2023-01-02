import React, { useState } from 'react';
import {
    BellOutlined,
    EyeInvisibleOutlined,
    InfoCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    PieChartOutlined,
    DesktopOutlined,
    createFromIconfontCN,
    UserOutlined, 
    TeamOutlined,
    FileOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Image, Layout, Menu, theme, Input, MenuProps } from 'antd';
// import {Search} from 'antd/es/input/Search';
// import Search from 'antd/es/transfer/search';
// import flag from '../../public/assets/images/flag.png'


const Main: React.FC = () => {


    const MyIcon = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
    });



    const [collapsed, setCollapsed] = useState(false);
    const { Header, Sider, Content } = Layout;
    const onSearch = (value: string) => console.log(value);
  

    const {
        token: { colorBgContainer },
      } = theme.useToken();




    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
      ): MenuItem {
        return {
          key,
          icon,
          children,
          label,
        } as MenuItem;
      }



    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        getItem('Option 1', '1', <PieChartOutlined />),
        getItem('Option 2', '2', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
          getItem('Tom', '3'),
          getItem('Bill', '4'),
          getItem('Alex', '5'),
        ]),
        getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Files', '9', <FileOutlined />),
      ];

      const items2: MenuItem[] = [
        getItem('User', 'sub1', <UserOutlined />, [
          getItem('Tom', '3'),
          getItem('Bill', '4'),
          getItem('Alex', '5'),
        ]),
      ];

    return (
        <Layout className='min-h-screen layout__wrapper'>
            <Sider trigger={null} collapsible collapsed={collapsed} className="w-4/6" style={{ background: colorBgContainer,}}>
                {/* <div style={{ height: 32, margin: 16, background: 'lightgray' }} /> */}
                <Menu style={{ background: '#f5f5f5' }} defaultSelectedKeys={['1']} mode="inline" items={items2} />
                <Menu style={{ background: 'colorBgContainer' }} defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header className='headerrrrr justify-between header___wrapper flex items-center' style={{ paddingLeft: '25px', paddingRight: '25px', background: colorBgContainer}}>
                    <div className='justify-start items-center flex w-7/12'>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <div className='search___input w-8/12 ml-4'>
                            <Input placeholder="input search text" style={{ backgroundColor: '#f5f5f5' }} />
                        </div>
                    </div>
                    <div className='header__right___links w-8/12 flex justify-end items-center gap-x-9'>
                        <Image
                            // width={20}
                            style={{ width: '25px', height: '20px', borderRadius: '5px' }}
                            className={'rounded-sm'}
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                        />
                        <EyeInvisibleOutlined className={'text-3xl'} />
                        <InfoCircleOutlined className={'text-2xl'} />
                        <i className="far fa-moon text-[27px] pt-2"></i>
                        <Badge count={4} style={{ backgroundColor: '#299cdb' }} offset={[-4, 5]}>
                            <MessageOutlined className={'text-2xl'} />
                        </Badge>
                        <Badge count={1} style={{ backgroundColor: '#f06548' }} offset={[-4, 5]}>
                            <BellOutlined className={'text-2xl'} />
                        </Badge>
                        <div className='flex justify-between items-center px-3 pb-2 pt-5 mb-6' style={{ backgroundColor: '#f5f5f5' }}>
                            <Avatar shape="circle" src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />
                            <div className="ml-3">
                                <h6 className='text-base font-medium m-0'>Jackeline kappel</h6>
                                <p className='text-sm m-0'>Marketing Dircetor</p>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;