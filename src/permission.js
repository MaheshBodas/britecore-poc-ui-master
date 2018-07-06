import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress bar
import 'nprogress/nprogress.css'// Progress bar style
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // Right of verification

const whiteList = ['/login'] // Do not redirect whitelist
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // TBD
      /*
      if (store.getters.token === '') {
        store.dispatch('GetToken').then(res => { // Pull token information
          next()
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('Verification failed, please log in again')
            next({ path: '/login' })
          })
        })
      }
      */
      // TBD
      if (store.getters.roles.length === 0) {
        store.dispatch('GetAccountDetails').then(res => { // Pull user information
          next()
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('Verification failed, please log in again')
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // End Progress
})
