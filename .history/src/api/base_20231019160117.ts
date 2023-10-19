import axios from 'axios'

const instance = axios.create({
  // eslint-disable-next-line prettier/prettier
  baseURL: '/api',
})

export default instance
