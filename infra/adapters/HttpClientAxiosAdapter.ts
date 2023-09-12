import axios from 'axios'
import { HttpClient, HttpClientBodyDictionary } from '../interfaces'

export class HttpClientAxiosAdapter implements HttpClient {
  async post(url: string, body: HttpClientBodyDictionary): Promise<void> {
    try {
      console.log('POSTI|NG', body)
      const response = await axios.post(url, body)
      return response.data
    } catch (error) {
      throw error
    }
  }
}
