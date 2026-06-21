import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Laptop, Play, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react'
import { apiClient } from '@/services/api'

interface Device {
  id: string
  name: string
  os: string
  is_active: boolean
}

export function ScanPage() {
  const [devices, setDevices] = useState<Device[]>([])
  const [selectedDevice, setSelectedDevice] = useState('')
  const [scanPath, setScanPath] = useState('C:\\Users\\pinja\\Downloads')
  const [isScanning, setIsScanning] = useState(false)
  const [scanPercent, setScanPercent] = useState(0)
  const [scanStatus, setScanStatus] = useState('idle') // idle, scanning, completed, failed
  const [stats, setStats] = useState<any>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoadingDevices, setIsLoadingDevices] = useState(false)
  
  const wsRef = useRef<WebSocket | null>(null)

  const fetchDevices = async () => {
    setIsLoadingDevices(true)
    try {
      const data: any = await apiClient.request('/devices')
      setDevices(data)
      const online = data.find((d: Device) => d.is_active)
      if (online) {
        setSelectedDevice(online.id)
      }
    } catch (err) {
      console.error('Error fetching devices:', err)
    } finally {
      setIsLoadingDevices(false)
    }
  }

  // Connect to backend WebSockets for real-time telemetry updates
  const connectWebSocket = () => {
    const token = localStorage.getItem('duplicate-bin-token')
    if (!token) return

    const baseWsUrl = window.location.origin.replace('http://', 'ws://').replace('https://', 'wss://').replace('5173', '8000').replace('5174', '8000')
    const wsUrl = `${baseWsUrl}/ws/dashboard?token=${token}`
    
    console.log('Connecting dashboard WS to:', wsUrl)
    const ws = new WebSocket(wsUrl)
    wsRef.current = ws

    ws.onmessage = (event) => {
      try {
        const message = json.loads ? json.loads(event.data) : JSON.parse(event.data)
        const { type, device_id, payload } = message
        
        if (device_id !== selectedDevice) return

        if (type === 'AGENT_PROGRESS') {
          setIsScanning(true)
          setScanStatus('scanning')
          setScanPercent(payload.percentage)
        } else if (type === 'AGENT_COMPLETE') {
          setIsScanning(false)
          setScanPercent(100)
          if (payload.status === 'completed') {
            setScanStatus('completed')
            setStats(payload)
          } else {
            setScanStatus('failed')
            setErrorMsg(payload.error || 'Scan failed on the agent.')
          }
        }
      } catch (err) {
        console.error('WS parse error:', err)
      }
    }

    ws.onclose = () => {
      console.log('Dashboard WS disconnected. Reconnecting...')
      setTimeout(connectWebSocket, 3000)
    }
  }

  useEffect(() => {
    fetchDevices()
    connectWebSocket()
    return () => {
      if (wsRef.current) wsRef.current.close()
    }
  }, [selectedDevice])

  const triggerScan = async () => {
    if (!selectedDevice) {
      setErrorMsg('Please select a paired device.')
      return
    }
    if (!scanPath.trim()) {
      setErrorMsg('Please input a folder path to scan.')
      return
    }

    setIsScanning(true)
    setScanPercent(0)
    setScanStatus('scanning')
    setStats(null)
    setErrorMsg('')

    try {
      const url = `/scan/trigger?device_id=${selectedDevice}&path=${encodeURIComponent(scanPath)}`
      await apiClient.request(url, { method: 'POST' })
      console.log('Scan triggered successfully!')
    } catch (err: any) {
      console.error(err)
      setIsScanning(false)
      setScanStatus('failed')
      setErrorMsg(err.message || 'Trigger failed. Make sure the agent is paired and currently online.')
    }
  }

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Remote Scan</h1>
        <p className="text-gray-400">Scan folders on any paired online device remotely from your browser dashboard.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Controls Card */}
        <Card className="bg-black border-white/10 md:col-span-1">
          <CardHeader>
            <CardTitle className="text-white">Scan Orchestrator</CardTitle>
            <CardDescription className="text-gray-400">Configure parameters and launch target scan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Device Selector */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-400">Select Machine Agent</label>
              <div className="flex space-x-2">
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  disabled={isScanning}
                  className="w-full bg-gray-900 border border-white/20 text-white rounded-md p-2 text-sm focus:outline-none"
                >
                  <option value="">-- Choose Device --</option>
                  {devices.map((device) => (
                    <option key={device.id} value={device.id}>
                      {device.name} ({device.is_active ? 'Online' : 'Offline'})
                    </option>
                  ))}
                </select>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={fetchDevices}
                  disabled={isScanning || isLoadingDevices}
                  className="bg-gray-900 border-white/10 text-white hover:bg-gray-800 shrink-0"
                >
                  <RefreshCw className={`h-4 w-4 ${isLoadingDevices ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>

            {/* Folder Input */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-400">Absolute Folder Path</label>
              <input
                type="text"
                value={scanPath}
                onChange={(e) => setScanPath(e.target.value)}
                disabled={isScanning}
                className="w-full bg-gray-900 border border-white/20 text-white rounded-md p-2 text-sm focus:outline-none placeholder:text-gray-500"
              />
            </div>

            {/* Launch Scan */}
            <Button
              onClick={triggerScan}
              disabled={isScanning || !selectedDevice}
              className="w-full bg-white text-black hover:bg-gray-200"
            >
              <Play className="mr-2 h-4 w-4 shrink-0" />
              Launch Scan Now
            </Button>
          </CardContent>
        </Card>

        {/* Live Progress Card */}
        <Card className="bg-black border-white/10 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">Active Scanning Stream</CardTitle>
            <CardDescription className="text-gray-400">Real-time scanner updates and results logs.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[220px]">
            {scanStatus === 'idle' && (
              <div className="text-center text-gray-500 text-sm space-y-2">
                <Laptop className="h-10 w-10 mx-auto text-gray-600 mb-2" />
                <p>No active scanning streams.</p>
                <p className="text-xs text-gray-600">Select an online agent and trigger a scan to monitor status.</p>
              </div>
            )}

            {scanStatus === 'scanning' && (
              <div className="w-full space-y-6 px-4">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>Analyzing directories...</span>
                  <span className="font-semibold text-white">{scanPercent.toFixed(1)}%</span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all duration-300 ease-out" 
                    style={{ width: `${scanPercent}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400 text-center animate-pulse">
                  Streaming active hashes back to dashboard. Do not close this tab.
                </div>
              </div>
            )}

            {scanStatus === 'completed' && stats && (
              <div className="w-full p-4 bg-gray-900/50 border border-green-500/20 rounded-lg space-y-4">
                <div className="flex items-center space-x-2 text-green-400 font-medium">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Scan Completed Successfully!</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-black/50 rounded-lg border border-white/5">
                    <p className="text-xs text-gray-500">Processed</p>
                    <p className="text-lg font-bold text-white">{stats.files_scanned.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-black/50 rounded-lg border border-white/5">
                    <p className="text-xs text-gray-500">Duplicates</p>
                    <p className="text-lg font-bold text-white">{stats.duplicates_found.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-black/50 rounded-lg border border-white/5">
                    <p className="text-xs text-gray-500">Savings</p>
                    <p className="text-lg font-bold text-green-400">
                      {(stats.bytes_recoverable / (1024 * 1024)).toFixed(1)} MB
                    </p>
                  </div>
                </div>

                <div className="text-xs text-gray-400 text-center pt-2">
                  Scan duration: {stats.duration_seconds}s. Storage overview tables have been updated.
                </div>
              </div>
            )}

            {scanStatus === 'failed' && (
              <div className="text-center text-red-400 text-sm space-y-2">
                <AlertTriangle className="h-10 w-10 mx-auto text-red-500/80 mb-2" />
                <p className="font-semibold">Scan Aborted</p>
                <p className="text-xs text-red-500/60 max-w-md mx-auto">{errorMsg}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
