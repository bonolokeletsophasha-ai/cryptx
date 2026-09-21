import MetricCard from '../ui/MetricCard'

function MainContent() {
    return (
        <main ClassName="p-6">
            
            /* Top Section Dashboard*/ 
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

                /* Crypto Card */
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:col-span-2">

                    <MetricCard
                        icon="₿"
                        inconBg="bg-[#ffb511]"
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

                /* Chart placeholder */
                <div className="min-h-[260px] rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <h2 className="text-lg font-semibold text-[#252525]">
                     BTC Prices
                  </h2>
                </div>
            </div>
        </main>
    )
}

export default MainContent