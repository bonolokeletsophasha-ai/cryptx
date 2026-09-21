import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'

function App() {
  return ( 
  <main className="min-h-screen bg-{#858585] p-0 lg:p-4">
    <div className="mx-auto flex min-h-screen max-w-[1400px] overflow-hidden bg-white lg:min-h-[calc(100vh-2rem)] lg:rounded-2xl">

    /* Sidebar */ 
    <Sidebar/>

    /* Main Area*/ 
    <section className="min-w-0 flex-1">

      /* Header */
      <header/>

      /* Dashboard Content */ 
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">
        Overview 
        </h1>
        </div>
    </section>
    </div>
  </main>
  )
}
