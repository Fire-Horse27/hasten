import { useEffect, useState } from 'react'

type AppStatus = {
  appName: string
  dbReady: boolean
}

function App() {
  const [status, setStatus] = useState<AppStatus | null>(null)

  useEffect(() => {
    window.api.getAppStatus().then(setStatus)
  }, [])

  if (!status) return <div>Loading…</div>

  return (
    <div className="bg-slate-900 text-white h-screen flex items-center justify-center"> <h1 className="text-4xl font-bold">Tailwind Active</h1> </div>
  )
}

export default App
