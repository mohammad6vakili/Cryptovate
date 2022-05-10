import axios, { AxiosRequestConfig } from 'axios'

class HttpService {
  private client

  constructor() {
    this.client = axios.create({
      timeout: 100000,
    })
  }

  get(url: string, config: AxiosRequestConfig) {
    return this.client.get(url, config)
  }

  post(url: string, params: object, config: AxiosRequestConfig) {
    return this.client.post(url, params, config)
  }

  delete(url: string, config: AxiosRequestConfig) {
    return this.client.delete(url, config)
  }

  put(url: string, params: object, config: AxiosRequestConfig) {
    return this.client.put(url, params, config)
  }
}

export default HttpService
