import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {
  Tabbar,
  TabbarItem,
  Search,
  Icon,
  Loading,
  Skeleton,
  Tabs,
  Tab,
  Sticky,
  NavBar,
  Form,
  CellGroup,
  Field,
  Button,
  ActionSheet,
  Sidebar,
  SidebarItem,
  Popup,
  Checkbox,
  CheckboxGroup,
} from 'vant'

import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(Icon)
app.use(Loading)
app.use(Skeleton)
app.use(Tabs)
app.use(Tab)
app.use(Sticky)
app.use(NavBar)
app.use(Form)
app.use(CellGroup)
app.use(Field)
app.use(Button)
app.use(ActionSheet)
app.use(Sidebar)
app.use(SidebarItem)
app.use(Popup)
app.use(Checkbox)
app.use(CheckboxGroup)

const rootValue = 16
const rootWidth = 390 //适配
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'

app.mount('#app')
