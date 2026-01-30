// API configuration and base client setup
// This will be expanded when backend integration is needed

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export class ApiClient {
  private baseURL: string

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL
  }

  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    // Add auth token if available
    const token = localStorage.getItem('duplicate-bin-token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }

    const response = await fetch(url, config)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  // Auth methods
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
  }

  async register(name: string, email: string, password: string) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    })
  }

  // File scanning methods (placeholder)
  async startScan(paths: string[]) {
    return this.request('/scan/start', {
      method: 'POST',
      body: JSON.stringify({ paths }),
    })
  }

  async getScanResults(scanId: string) {
    return this.request(`/scan/${scanId}/results`)
  }
}

export const apiClient = new ApiClient()