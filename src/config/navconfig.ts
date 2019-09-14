export interface MenuItems{
  link: string;
  name: string;
  icon: string;
  uuid: string;
  children: MenuItems[];
  open?: boolean;
}

export const menus: MenuItems[] = [
  {
    link: '/home',
    name: '主页',
    icon: 'mail',
    uuid: 'HOME',
    open: true,
    children: [
      {
        link: '/home/business',
        name: '业务管理',
        icon: 'compass',
        uuid: 'HOME_BUSINESS',
        children: []
      },
      {
        link: '/home/game',
        name: '游戏管理',
        icon: 'crown',
        uuid: 'HOME_GAME',
        children: []
      }
    ]
  },
  {
    link: '/order',
    name: '订单管理',
    icon: 'compass',
    uuid: 'ORDER',
    children: []
  },
  {
    link: '/error',
    name: '错误日志',
    icon: 'crown',
    uuid: 'ERROR',
    children: []
  },
  {
    link: '/system',
    name: '账号设置',
    icon: 'setting',
    uuid: 'SYSTEM',
    children: []
  },
];
