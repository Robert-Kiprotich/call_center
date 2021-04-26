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
    name: 'Calls'
  },

  {
    name: 'Calls',
    url: '/calls',
    icon: 'icon-puzzle',
    children: [

      {
        name: 'Missed',
        url: '/calls/missedcalls',
        icon: 'icon-puzzle'
      },
      {
        name: 'Dialled',
        url: '/calls/dialledcalls',
        icon: 'icon-puzzle'
      },
      {
        name: 'Recieved',
        url: '/calls/recievedcalls',
        icon: 'icon-puzzle'
      },
      {
        name: 'Rejected',
        url: '/calls/rejectedcalls',
        icon: 'icon-puzzle'
      },

      {
        name: 'inbox',
        url: '/calls/inbox',
        icon: 'icon-puzzle'
      },
    ]
  },


  {
    name: 'Messages',
    url: '/sms',
    icon: 'icon-puzzle',
    children: [


      {
        name: 'Sent',
        url: '/sms/sent',
        icon: 'icon-puzzle'
      },
      {
        name: 'Recieved',
        url: '/sms/recieved',
        icon: 'icon-puzzle'
      },
    ]
  },

  {
    name: 'Mails',
    url: '/mails',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'inbox',
        url: '/mails/inbox',
        icon: 'icon-puzzle'
      },
      {
        name: 'Recieved',
        url: '/mails/sent',
        icon: 'icon-puzzle'
      },
      {
        name: 'spam',
        url: '/mails/spam',
        icon: 'icon-puzzle'
      },
    ]
  }
];