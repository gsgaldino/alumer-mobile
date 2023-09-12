export type HttpClientBodyDictionary = {
  [key: string]: string
}

export interface HttpClient {
  post(url: string, body: HttpClientBodyDictionary): Promise<void>
}
