import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HardDrive, 
  Clock, 
  Files,
  AlertTriangle,
  Laptop,
  Coins,
  Loader2,
  Check,
  Zap,
  Sparkles
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
    credit_bytes: 0,
    plan: 'SaaS Premium',
    scans_history: [] as ScanHistoryItem[]
  })

  // Modals visibility states
  const [isBuyOpen, setIsBuyOpen] = useState(false)
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false)

  // Modals workflow steps
  const [buyStep, setBuyStep] = useState<'select' | 'processing' | 'success'>('select')
  const [upgradeStep, setUpgradeStep] = useState<'select' | 'processing' | 'success'>('select')

  // Selected tiers
  const [selectedCredit, setSelectedCredit] = useState({ id: '50gb', name: '50 GB Pack', bytes: 50 * 1024 * 1024 * 1024, price: 19 })
  const [selectedPlan, setSelectedPlan] = useState({ id: 'pro', name: 'SaaS Pro', bytes: 50 * 1024 * 1024 * 1024, price: 29 })

  const [processingMsg, setProcessingMsg] = useState('Initiating transaction...')

  const fetchStats = async () => {
    try {
      const data: any = await apiClient.request('/dashboard/stats')
      setStats(data)
    } catch (err) {
      console.error('Error fetching dashboard stats:', err)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const creditTiers = [
    { id: '10gb', name: '10 GB Pack', bytes: 10 * 1024 * 1024 * 1024, price: 5, description: 'Starter credits for quick scans' },
    { id: '50gb', name: '50 GB Pack', bytes: 50 * 1024 * 1024 * 1024, price: 19, description: 'Best value for media libraries', popular: true },
    { id: '100gb', name: '100 GB Pack', bytes: 100 * 1024 * 1024 * 1024, price: 29, description: 'Power user pack for large drives' }
  ]

  const planTiers = [
    { id: 'free', name: 'SaaS Free', bytes: 1 * 1024 * 1024 * 1024, price: 0, description: 'Trial limits and basic scans' },
    { id: 'premium', name: 'SaaS Premium', bytes: 10 * 1024 * 1024 * 1024, price: 9, description: 'Standard billing with 10 GB limit' },
    { id: 'pro', name: 'SaaS Pro', bytes: 50 * 1024 * 1024 * 1024, price: 29, description: 'Professional package with high thresholds', popular: true },
    { id: 'enterprise', name: 'SaaS Enterprise', bytes: 1024 * 1024 * 1024 * 1024, price: 99, description: 'Dedicated support & unlimited scaling' }
  ]

  const handleBuyCredits = async () => {
    setBuyStep('processing')
    setProcessingMsg('Securing gateway connection...')
    
    const msgs = [
      'Securing gateway connection...',
      'Authorizing mock payment gateway...',
      'Registering credit allocations in database...',
      'Updating your SaaS ledger...'
    ]
    
    let idx = 0
    const interval = setInterval(() => {
      idx++
      if (idx < msgs.length) {
        setProcessingMsg(msgs[idx])
      }
    }, 850)

    try {
      await new Promise(resolve => setTimeout(resolve, 3400))
      await apiClient.request('/billing/buy-credits', {
        method: 'POST',
        body: JSON.stringify({ bytes_to_buy: selectedCredit.bytes })
      })
      await fetchStats()
      clearInterval(interval)
      setBuyStep('success')
    } catch (err) {
      console.error(err)
      clearInterval(interval)
      alert('Failed to purchase credits. Please try again.')
      setBuyStep('select')
    }
  }

  const handleUpgradePlan = async () => {
    setUpgradeStep('processing')
    setProcessingMsg('Securing subscriber portal...')
    
    const msgs = [
      'Securing subscriber portal...',
      'Registering subscription upgrades...',
      'Configuring plan boundaries...',
      'Provisioning new credit pool...'
    ]
    
    let idx = 0
    const interval = setInterval(() => {
      idx++
      if (idx < msgs.length) {
        setProcessingMsg(msgs[idx])
      }
    }, 850)

    try {
      await new Promise(resolve => setTimeout(resolve, 3400))
      await apiClient.request('/billing/upgrade-plan', {
        method: 'POST',
        body: JSON.stringify({ plan_name: selectedPlan.name })
      })
      await fetchStats()
      clearInterval(interval)
      setUpgradeStep('success')
    } catch (err) {
      console.error(err)
      clearInterval(interval)
      alert('Failed to upgrade plan. Please try again.')
      setUpgradeStep('select')
    }
  }

  const getPlanLimit = (planName: string) => {
    switch (planName) {
      case 'SaaS Free': return 1024 * 1024 * 1024;
      case 'SaaS Premium': return 10 * 1024 * 1024 * 1024;
      case 'SaaS Pro': return 50 * 1024 * 1024 * 1024;
      case 'SaaS Enterprise': return 1024 * 1024 * 1024 * 1024;
      default: return 10 * 1024 * 1024 * 1024;
    }
  }

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen relative">
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

        {/* Credits & Billing Card */}
        <Card className="bg-black border-white/10 flex flex-col justify-between">
          <div>
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
                  <span className="font-semibold text-white">{stats.plan || 'SaaS Premium'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Deduplication Credits:</span>
                  <span className="font-bold text-yellow-500">{formatBytes(stats.credit_bytes)} left</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-yellow-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, Math.max(0, (stats.credit_bytes / getPlanLimit(stats.plan || 'SaaS Premium')) * 100))}%` }} 
                  />
                </div>
              </div>
            </CardContent>
          </div>
          <div className="p-6 pt-0 space-y-2">
            <Button 
              onClick={() => {
                setBuyStep('select')
                setIsBuyOpen(true)
              }}
              className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold text-xs py-2 shadow-lg shadow-yellow-500/10 active:scale-95 transition-transform"
            >
              Buy More Credits
            </Button>
            <Button 
              onClick={() => {
                setUpgradeStep('select')
                setIsUpgradeOpen(true)
              }}
              className="w-full bg-transparent border border-white/10 text-white hover:bg-gray-950 text-xs py-2 active:scale-95 transition-transform" 
              variant="outline"
            >
              Upgrade SaaS Plan
            </Button>
          </div>
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

      {/* ====================================================================== */}
      {/* 💳 BUY MORE CREDITS DIALOG */}
      {/* ====================================================================== */}
      {isBuyOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-gray-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {buyStep === 'select' && (
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Coins className="h-5 w-5 text-yellow-500" />
                    Buy Deduplication Credits
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Extend your deduplication capacity instantly. Credits never expire.
                  </p>
                </div>

                <div className="space-y-3">
                  {creditTiers.map((tier) => (
                    <div 
                      key={tier.id}
                      onClick={() => setSelectedCredit(tier)}
                      className={`relative flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedCredit.id === tier.id 
                          ? 'bg-yellow-500/5 border-yellow-500' 
                          : 'bg-gray-900/50 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{tier.name}</span>
                          {tier.popular && (
                            <span className="text-[10px] bg-yellow-500 text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">{tier.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-yellow-500">${tier.price}</span>
                        <p className="text-[10px] text-gray-500">One-time payment</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    onClick={() => setIsBuyOpen(false)}
                    variant="outline" 
                    className="flex-1 bg-transparent border-white/10 text-white hover:bg-gray-900"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleBuyCredits}
                    className="flex-1 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
                  >
                    Purchase {selectedCredit.name.split(' ')[0]} Pack
                  </Button>
                </div>
              </div>
            )}

            {buyStep === 'processing' && (
              <div className="p-12 flex flex-col items-center justify-center space-y-6 text-center">
                <Loader2 className="h-12 w-12 text-yellow-500 animate-spin" />
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-white">Processing Transaction</h4>
                  <p className="text-sm text-gray-400 animate-pulse">{processingMsg}</p>
                </div>
              </div>
            )}

            {buyStep === 'success' && (
              <div className="p-8 flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in slide-in-from-bottom duration-300">
                <div className="h-16 w-16 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center text-green-400">
                  <Check className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">Purchase Completed!</h4>
                  <p className="text-sm text-gray-400">
                    We successfully allocated <span className="text-yellow-500 font-semibold">{formatBytes(selectedCredit.bytes)}</span> of additional deduplication capacity to your user profile.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsBuyOpen(false)}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold mt-4"
                >
                  Return to Dashboard
                </Button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ====================================================================== */}
      {/* 🚀 UPGRADE PLAN DIALOG */}
      {/* ====================================================================== */}
      {isUpgradeOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-gray-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">

            {upgradeStep === 'select' && (
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    Change SaaS Subscription Plan
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Select a plan matching your deduplication speed and storage requirements.
                  </p>
                </div>

                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                  {planTiers.map((plan) => {
                    const isActive = stats.plan === plan.name;
                    return (
                      <div 
                        key={plan.id}
                        onClick={() => !isActive && setSelectedPlan(plan)}
                        className={`relative flex items-center justify-between p-4 rounded-lg border transition-all ${
                          isActive 
                            ? 'bg-gray-900/20 border-white/5 opacity-60 cursor-not-allowed' 
                            : selectedPlan.id === plan.id 
                              ? 'bg-yellow-500/5 border-yellow-500 cursor-pointer' 
                              : 'bg-gray-900/50 border-white/5 hover:border-white/20 cursor-pointer'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{plan.name}</span>
                            {plan.popular && (
                              <span className="text-[10px] bg-yellow-500 text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                                Recommended
                              </span>
                            )}
                            {isActive && (
                              <span className="text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                                Current Plan
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400">{plan.description}</p>
                          <p className="text-[10px] text-yellow-500/80 font-medium">Includes {formatBytes(plan.bytes)} allowance / mo</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-white">${plan.price}</span>
                          <p className="text-[10px] text-gray-500">/ month</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    onClick={() => setIsUpgradeOpen(false)}
                    variant="outline" 
                    className="flex-1 bg-transparent border-white/10 text-white hover:bg-gray-900"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleUpgradePlan}
                    className="flex-1 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
                  >
                    Subscribe to {selectedPlan.name}
                  </Button>
                </div>
              </div>
            )}

            {upgradeStep === 'processing' && (
              <div className="p-12 flex flex-col items-center justify-center space-y-6 text-center">
                <Loader2 className="h-12 w-12 text-yellow-500 animate-spin" />
                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-white">Upgrading Plan</h4>
                  <p className="text-sm text-gray-400 animate-pulse">{processingMsg}</p>
                </div>
              </div>
            )}

            {upgradeStep === 'success' && (
              <div className="p-8 flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in slide-in-from-bottom duration-300">
                <div className="h-16 w-16 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center text-green-400">
                  <Zap className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">Subscription Active!</h4>
                  <p className="text-sm text-gray-400">
                    Your profile has been upgraded to <span className="text-yellow-500 font-semibold">{selectedPlan.name}</span>. Your monthly deduplication allowance has been reset to <span className="text-white font-semibold">{formatBytes(selectedPlan.bytes)}</span>.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsUpgradeOpen(false)}
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold mt-4"
                >
                  Return to Dashboard
                </Button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  )
}