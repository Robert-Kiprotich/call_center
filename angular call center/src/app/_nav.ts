import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
  },
  {
    name: 'Calls',
    url: '/base/calls',
    icon: 'icon-puzzle'
  },
  {
    name: 'Cards',
    url: '/base/cards',
    icon: 'icon-puzzle'
  },
  {
    name: 'Missed',
    url: '/base/missedcalls',
    icon: 'icon-puzzle'
  },
  {
    name: 'Dialled',
    url: '/base/dialledcalls',
    icon: 'icon-puzzle'
  },
  {
    name: 'Recieved',
    url: '/base/recievedcalls',
    icon: 'icon-puzzle'
  },
  {
    name: 'Rejected',
    url: '/base/rejectedcalls',
    icon: 'icon-puzzle'
  },

  {
    name: 'inbox',
    url: '/base/inbox',
    icon: 'icon-puzzle'
  },
  
  {
    name: 'Collapses',
    url: '/base/collapses',
    icon: 'icon-puzzle'
  },
  {
    name: 'Forms',
    url: '/base/forms',
    icon: 'icon-puzzle'
  },
  {
    name: 'Navbars',
    url: '/base/navbars',
    icon: 'icon-puzzle'

  },
];