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
app.mount('#app')
