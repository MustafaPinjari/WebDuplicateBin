import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Laptop, RefreshCw, Key, AlertTriangle } from 'lucide-react'
import { apiClient } from '@/services/api'

interface Device {
  id: string
  name: string
  os: string
  is_active: boolean
  last_seen: string
  created_at: string
}

export function SettingsPage() {
  const [devices, setDevices] = useState<Device[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [pairingCode, setPairingCode] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)

  const fetchDevices = async () => {
    setIsLoading(true)
    try {
      const data: any = await apiClient.request('/devices')
      setDevices(data)
    } catch (err) {
      console.error('Error fetching paired devices:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const getPairingCode = async () => {
    try {
      const data: any = await apiClient.request('/devices/pairing-code')
      setPairingCode(data.code)
      setTimeLeft(data.expires_in_seconds)
    } catch (err) {
      console.error('Error fetching pairing code:', err)
    }
  }

  useEffect(() => {
    fetchDevices()
  }, [])

  useEffect(() => {
    if (timeLeft <= 0) return
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])

  const getOsIcon = (_os: string) => {
    return <Laptop className="h-5 w-5 text-gray-400" />
  }

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
        <p className="text-gray-400">Manage account preferences and connected local agent devices.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Device Pairing Section */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Key className="mr-2 h-5 w-5 text-white" />
              Link Device Agent
            </CardTitle>
            <CardDescription className="text-gray-400">
              Generate a temporary pairing code to connect your local Duplicate Bin agent (.exe / .deb).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pairingCode ? (
              <div className="p-6 bg-gray-900 border border-white/10 rounded-lg flex flex-col items-center justify-center space-y-3">
                <span className="text-gray-400 text-sm">Pairing Code</span>
                <span className="text-4xl font-extrabold tracking-widest text-white">{pairingCode}</span>
                <span className="text-xs text-gray-500">
                  Expires in {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            ) : (
              <Button 
                onClick={getPairingCode}
                className="w-full bg-white text-black hover:bg-gray-200"
              >
                Generate Pairing Code
              </Button>
            )}
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-lg flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                To link a device, run <code>duplicate-bin-cli pair &lt;code&gt;</code> in your terminal on the target machine.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Paired Devices List */}
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-white">Connected Devices</CardTitle>
              <CardDescription className="text-gray-400">
                List of active agent machines authorized on this account.
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={fetchDevices}
              disabled={isLoading}
              className="bg-gray-900 border-white/10 text-white hover:bg-gray-800"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </CardHeader>
          <CardContent>
            {devices.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                No connected devices. Generate a pairing code above to add one.
              </div>
            ) : (
              <div className="space-y-3">
                {devices.map((device) => (
                  <div 
                    key={device.id} 
                    className="flex items-center justify-between p-3 bg-gray-900 border border-white/10 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {getOsIcon(device.os)}
                      <div>
                        <p className="text-sm font-medium text-white">{device.name}</p>
                        <p className="text-xs text-gray-500">OS: {device.os}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${
                        device.is_active ? 'bg-green-500' : 'bg-gray-700'
                      }`} />
                      <span className="text-xs text-gray-400">
                        {device.is_active ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
