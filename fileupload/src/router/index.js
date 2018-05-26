import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShopSelection from '@/components/ShopSelection'
import InputResult from '@/components/InputResult'
import PatternLogin from '@/components/PatternLogin'
import SetUp from '@/components/SetUp'
import About from '@/components/About'
import BasedDetails from '@/components/BasedDetails'
import DetailsSucess from '@/components/DetailsSucess'
import DetailsUncheck from '@/components/DetailsUncheck'
import StoreDetailsHeader from '@/components/StoreDetailsHeader'
import TaskList from '@/components/TaskList'
import UploadFile from '@/components/UploadFile'
import BusinessUpgrades from '@/components/BusinessUpgrades'
import BusinessUpgrades2 from '@/components/BusinessUpgrades2'
import Register from '@/components/Register'
import HomePage from '@/components/HomePage'
import ShopTransaction from '@/components/ShopTransaction'
import Welcome from '@/components/Welcome'


Vue.use(Router)
Router.prototype.goBack = function () {
　　this.isBack = true
	console.log("0002");
　　window.history.go(-1)
}

export default new Router({
  routes: [
  	// {
    //   path: '/',
    //   name: 'Welcome',
    //   component: Welcome
    // },
     {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ShopSelection',
      name: 'ShopSelection',
      component: ShopSelection
    },
    {
      path: '/InputResult',
      name: 'InputResult',
      component: InputResult
    },
    {
      path: '/PatternLogin',
      name: 'PatternLogin',
      component: PatternLogin
    },
    {
      path: '/SetUp',
      name: 'SetUp',
      component: SetUp
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/BasedDetails',
      name: 'BasedDetails',
      component: BasedDetails
    },
    {
      path: '/DetailsSucess',
      name: 'DetailsSucess',
      component: DetailsSucess
    },
    {
      path: '/DetailsUncheck',
      name: 'DetailsUncheck',
      component: DetailsUncheck
    },
    {
      path: '/StoreDetailsHeader',
      name: 'StoreDetailsHeader',
      component: StoreDetailsHeader
    },
    {
      path: '/TaskList',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/UploadFile',
      name: 'UploadFile',
      component: UploadFile
    },
    {
      path: '/BusinessUpgrades',
      name: 'BusinessUpgrades',
      component: BusinessUpgrades
    },
    {
      path: '/BusinessUpgrades2',
      name: 'BusinessUpgrades2',
      component: BusinessUpgrades2
    },
    {
      path: '/ShopTransaction',
      name: 'ShopTransaction',
      component: ShopTransaction
    }
  ]
})
