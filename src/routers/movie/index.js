export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [{
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'newmovie',
      component: () => import('@/components/Newmovie')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/Comingsoon')
    },
    {
      path: '/movie',
      redirect: '/movie/Newmovie'
    }
  ]

}