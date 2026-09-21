import MetricCard from '../ui/MetricCard'
import ChartVisual from '../ui/ChartVisual'

function MainContent() {
  return (
    <main className="p-6">

      {/* Top Dashboard Section */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Cryptocurrency Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:col-span-2">

          <MetricCard
            icon="₿"
            iconBg="bg-[#ffb511]"
            name="Bitcoin"
            symbol="BTC"
            price="$40,291"
            change="+0.25%"
            positive={true}
          />

          <MetricCard
            icon="♦"
            iconBg="bg-[#5b4df5]"
            name="Ethereum"
            symbol="ETH"
            price="$18,291"
            change="+0.25%"
            positive={true}
          />

          <MetricCard
            icon="Ł"
            iconBg="bg-[#3f5bea]"
            name="Litecoin"
            symbol="LTC"
            price="$8,291"
            change="+0.25%"
            positive={true}
          />

          <MetricCard
            icon="✳"
            iconBg="bg-[#19c957]"
            name="Cardano"
            symbol="ADA"
            price="$3,291"
            change="-2.05%"
            positive={false}
          />

        </div>

        {/* BTC Chart */}
        <ChartVisual />

      </div>
    </main>
  )
}

export default MainContent