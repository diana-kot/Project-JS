import '@babel/polyfill'
import appMain from './js/main'
import './css/normalize.css'
import './css/style.css'
import open from './js/opClose'

const app = new Vue(appMain);
const openClose = document.addEventListener("DOMContentLoaded", open);



