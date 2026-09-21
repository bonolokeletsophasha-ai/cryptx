import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import MainContent from './components/layout/MainContent'

function App() {
  return (
    <main className="min-h-screen bg-[#858585] p-0 lg:p-4">
      <div className="mx-auto flex min-h-screen max-w-[1400px] overflow-hidden bg-white lg:min-h-[calc(100vh-2rem)] lg:rounded-2xl">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <section className="min-w-0 flex-1">

          {/* Header */}
          <Header />

          {/* Dashboard */}
          <MainContent />

        </section>
      </div>
    </main>
  )
}

export default App