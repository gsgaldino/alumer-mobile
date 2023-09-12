import { HttpClient, HttpClientBodyDictionary } from '../interfaces'

export class HttpClientFetchAdapter implements HttpClient {
  constructor(private readonly baseUrl: string) {}

  async post(path: string, body: HttpClientBodyDictionary): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, body)
      console.log('API RESPONSE', response)
      const data = await response.json()
      console.log('DATA', data)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}
