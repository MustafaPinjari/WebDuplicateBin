import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HardDrive, 
  Clock, 
  Files,
  AlertTriangle,
  Laptop,
  Coins
} from 'lucide-react'
import { apiClient } from '@/services/api'

interface ScanHistoryItem {
  id: string
  device_id: string
  status: string
  path_scanned: string
  files_count: number
  duplicates_count: number
  bytes_recoverable: number
  created_at: string
}

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function DashboardPage() {
  const [stats, setStats] = useState({
    total_bytes_saved: 0,
    total_files_processed: 0,
    total_duplicates_found: 0,
    active_devices_count: 0,
    scans_history: [] as ScanHistoryItem[]
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data: any = await apiClient.request('/dashboard/stats')
        setStats(data)
      } catch (err) {
        console.error('Error fetching dashboard stats:', err)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="text-gray-400">
            Welcome back! Here's an overview of your storage optimization.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Storage Saved</CardTitle>
            <HardDrive className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{formatBytes(stats.total_bytes_saved)}</div>
            <p className="text-xs text-gray-400">
              Recovered space
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Files Processed</CardTitle>
            <Files className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.total_files_processed.toLocaleString()}</div>
            <p className="text-xs text-gray-400">
              Total files analyzed
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Duplicates Found</CardTitle>
            <AlertTriangle className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.total_duplicates_found.toLocaleString()}</div>
            <p className="text-xs text-gray-400">
              Redundant copies identified
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Active Devices</CardTitle>
            <Laptop className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.active_devices_count}</div>
            <p className="text-xs text-gray-400">
              Agents connected online
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="col-span-2 bg-black border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Clock className="mr-2 h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription className="text-gray-400">
              Your latest file optimization activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.scans_history.length === 0 ? (
                <div className="text-center py-6 text-gray-500 text-sm">
                  No scan history available yet.
                </div>
              ) : (
                stats.scans_history.map((scan) => (
                  <div key={scan.id} className="flex items-center space-x-4 rounded-lg border border-white/10 p-3 bg-gray-900">
                    <div className={`h-2.5 w-2.5 rounded-full ${
                      scan.status === 'completed' ? 'bg-green-500' : scan.status === 'running' ? 'bg-blue-500 animate-pulse' : 'bg-red-500'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-white">
                        Scan {scan.status}
                      </p>
                      <p className="text-xs text-gray-400">
                        {scan.path_scanned} - Found {scan.duplicates_count} duplicates ({formatBytes(scan.bytes_recoverable)} saved)
                      </p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(scan.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Credits & Billing */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Coins className="mr-2 h-5 w-5 text-yellow-500" />
              Credits & Billing
            </CardTitle>
            <CardDescription className="text-gray-400">
              Manage your deduplication credits and SaaS plan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-900 border border-white/10 rounded-lg space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Active Plan:</span>
                <span className="font-semibold text-white">SaaS Premium</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Deduplication Credits:</span>
                <span className="font-bold text-yellow-500">14.2 GB left</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-xs py-2">
                Buy More Credits
              </Button>
              <Button className="w-full bg-transparent border border-white/10 text-white hover:bg-gray-950 text-xs py-2" variant="outline">
                Upgrade SaaS Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Storage Overview */}
      <Card className="bg-black border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Storage Overview</CardTitle>
          <CardDescription className="text-gray-400">
            Visual breakdown of your storage usage and optimization opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Documents</span>
                  <span className="text-gray-400">2.1 GB</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-3/5 rounded-full bg-blue-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Media</span>
                  <span className="text-gray-400">4.7 GB</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-4/5 rounded-full bg-green-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Downloads</span>
                  <span className="text-gray-400">1.3 GB</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-2/5 rounded-full bg-yellow-500" />
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400">
                Total storage: 8.1 GB used of 50 GB available
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}