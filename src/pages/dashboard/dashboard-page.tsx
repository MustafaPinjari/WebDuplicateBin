import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HardDrive, 
  FileSearch, 
  Clock, 
  Shield,
  TrendingUp,
  Files,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="text-gray-400">
            Welcome back! Here's an overview of your storage optimization.
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-gray-200">
          <FileSearch className="mr-2 h-4 w-4" />
          Start New Scan
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Storage Saved</CardTitle>
            <HardDrive className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.4 GB</div>
            <p className="text-xs text-gray-400">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Files Processed</CardTitle>
            <Files className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,847</div>
            <p className="text-xs text-gray-400">
              +573 this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Duplicates Found</CardTitle>
            <AlertTriangle className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-xs text-gray-400">
              -23% from last scan
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-black border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">99.8%</div>
            <p className="text-xs text-gray-400">
              Accuracy maintained
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
              {[
                {
                  action: 'Scan completed',
                  details: 'Documents folder - 247 duplicates found',
                  time: '2 hours ago',
                  status: 'success'
                },
                {
                  action: 'Files cleaned',
                  details: '1.2 GB freed from Downloads folder',
                  time: '1 day ago',
                  status: 'success'
                },
                {
                  action: 'Scan started',
                  details: 'Media library scan in progress',
                  time: '2 days ago',
                  status: 'pending'
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 rounded-lg border border-white/10 p-3 bg-gray-900">
                  <div className={`h-2 w-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-white">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.details}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-gray-400">
              Common tasks to optimize your storage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gray-900 text-white border-white/10 hover:bg-gray-800" variant="outline">
              <FileSearch className="mr-2 h-4 w-4" />
              Scan Downloads Folder
            </Button>
            <Button className="w-full justify-start bg-gray-900 text-white border-white/10 hover:bg-gray-800" variant="outline">
              <HardDrive className="mr-2 h-4 w-4" />
              Check Storage Usage
            </Button>
            <Button className="w-full justify-start bg-gray-900 text-white border-white/10 hover:bg-gray-800" variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              Security Scan
            </Button>
            <Button className="w-full justify-start bg-gray-900 text-white border-white/10 hover:bg-gray-800" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
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