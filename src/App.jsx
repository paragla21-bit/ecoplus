import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, Brain, 
  ChevronDown, ChevronUp, BarChart3, Activity, Filter, Search, Bell,
  Download, Settings, RefreshCw, Volume2, PieChart, Shield, TrendingUp as ChartLine,
  Users, DollarSign, Globe, Smartphone, Maximize2, Minimize2, Star, X, Menu,
  Home, Heart, LineChart, Cog
} from 'lucide-react';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedMarket, setSelectedMarket] = useState('Stocks');
  const [sortBy, setSortBy] = useState('Total Score');
  const [expandedAsset, setExpandedAsset] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedSector, setSelectedSector] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [priceUpdates, setPriceUpdates] = useState({});
  
  // Settings state
  const [refreshInterval, setRefreshInterval] = useState('5 seconds');
  const [defaultCurrency, setDefaultCurrency] = useState('Indian Rupees (₹)');
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [signalAlerts, setSignalAlerts] = useState(true);
  
  const mainRef = useRef(null);
  const detailsRefs = useRef({});

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sectors = ['All', 'AI/Semiconductors', 'Cloud/AI', 'FinTech', 'Biotech', 'Clean Energy', 'EV/Energy', 'Social/VR', 'Energy/Retail', 'Banking', 'Telecom', 'IT Services', 'NBFC', 'Engineering', 'Insurance', 'FMCG', 'FMCG/Cigarettes', 'Automobile', 'Pharma', 'Conglomerate', 'Power', 'Consumer Goods', 'Cement', 'Oil & Gas', 'Paints', 'Infrastructure', 'Mining', 'Financial Services', 'Defense', 'Steel', 'Capital Goods', 'Retail', 'Internet', 'Beverages', 'Cement/Textile', 'Finance', 'Real Estate', 'Aviation', 'Gas', 'Electricals', 'Chemicals', 'Metals', 'Renewable', 'Auto Parts', 'Explosives', 'Healthcare', 'Shipbuilding', 'IT', 'Textile', 'Blockchain', 'Smart Contract', 'Stablecoin', 'Payment', 'Exchange Token', 'Meme', 'Oracle', 'Interoperability', 'Exchange', 'L1 Blockchain', 'Layer 2', 'DEX', 'Web3', 'Privacy', 'Bitcoin L2', 'AI/DePIN', 'AI', 'Enterprise', 'Storage', 'Gaming', 'DeFi', 'Supply Chain', 'Web3 Indexing', 'Major', 'Minor', 'Exotic'];

  // Fix: Realistic stock prices
  const getRealisticPrice = (symbol, idx) => {
    // Realistic price mapping for Indian stocks
    const priceMap = {
      'RELIANCE': 1560.00,
      'HDFCBANK': 1650.00,
      'BHARTIARTL': 875.00,
      'TCS': 3500.00,
      'ICICIBANK': 950.00,
      'SBIN': 600.00,
      'INFY': 1500.00,
      'BAJFINANCE': 7200.00,
      'LT': 3200.00,
      'LICI': 850.00,
      'HINDUNILVR': 2400.00,
      'ITC': 430.00,
      'HCLTECH': 1250.00,
      'M&M': 1800.00,
      'MARUTI': 10500.00,
      'SUNPHARMA': 1250.00,
      'ADANIENT': 3000.00,
      'AXISBANK': 1050.00,
      'NTPC': 320.00,
      'TITAN': 3500.00,
      'ULTRACEMCO': 9500.00,
      'TATAMOTORS': 850.00,
      'ONGC': 220.00,
      'ASIANPAINT': 2900.00,
      'KOTAKBANK': 1700.00,
      'ADANIPORTS': 1250.00,
      'COALINDIA': 430.00,
      'BAJAJFINSV': 1600.00,
      'HAL': 3800.00,
      'POWERGRID': 280.00,
      'BEL': 185.00,
      'JSWSTEEL': 850.00,
      'TATASTEEL': 140.00,
      'ADANIPOWER': 500.00,
      'SIEMENS': 4200.00,
      'TRENT': 3500.00,
      'ZOMATO': 150.00,
      'VBL': 1200.00,
      'GRASIM': 2100.00,
      'BAJAJ-AUTO': 7500.00,
      'IRFC': 160.00,
      'PFC': 400.00,
      'IOC': 120.00,
      'DLF': 700.00,
      'DMART': 3800.00,
      'INDIGO': 3000.00,
      'GAIL': 180.00,
      'HAVELLS': 1400.00,
      'PIDILITIND': 2500.00,
      'TECHM': 1200.00,
      'HINDALCO': 600.00,
      'VEDL': 250.00,
      'ABB': 5500.00,
      'BANKBARODA': 220.00,
      'PNB': 110.00,
      'SHREECEM': 25000.00,
      'ADANIGREEN': 1700.00,
      'AMBUJACEM': 550.00,
      'DRREDDY': 5800.00,
      'CIPLA': 1400.00,
      'BPCL': 600.00,
      'TVSMOTOR': 2000.00,
      'EICHERMOT': 4000.00,
      'JINDALSTEL': 700.00,
      'CHOLAFIN': 1200.00,
      'HDFCLIFE': 600.00,
      'SBILIFE': 1400.00,
      'SHRIRAMFIN': 2400.00,
      'TATAPOWER': 350.00,
      'GODREJCP': 1100.00,
      'HEROMOTOCO': 4500.00,
      'CANBK': 500.00,
      'POLYCAB': 4500.00,
      'COLPAL': 2700.00,
      'DABUR': 550.00,
      'MCDOWELL-N': 1100.00,
      'SRF': 2400.00,
      'MARICO': 550.00,
      'CUMMINSIND': 2000.00,
      'TUBEINVEST': 3000.00,
      'NAUKRI': 6000.00,
      'MOTHERSON': 100.00,
      'LODHA': 900.00,
      'LUPIN': 1500.00,
      'TORNTPHARM': 2500.00,
      'SOLARINDS': 7000.00,
      'BERGEPAINT': 500.00,
      'RECLTD': 450.00,
      'BOSCHLTD': 30000.00,
      'MUTHOOTFIN': 1600.00,
      'PRESTIGE': 800.00,
      'MAXHEALTH': 650.00,
      'PERSISTENT': 8500.00,
      'MAZDOCK': 2500.00,
      'APOLLOHOSP': 6000.00,
      'ASHOKLEY': 180.00,
      'OFSS': 5500.00,
      'YESBANK': 25.00,
      'IDFCFIRSTB': 80.00,
      'PAGEIND': 36000.00,
    };
    
    return priceMap[symbol] || (500 + idx * 50);
  };

  const formatIndianPrice = (price) => {
    const num = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.-]+/g,"")) : price;
    if (isNaN(num)) return '₹0';
    
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)}Cr`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(2)}L`;
    } else if (num >= 1000) {
      return `₹${(num / 1000).toFixed(2)}K`;
    }
    return `₹${num.toFixed(2)}`;
  };

  const generateAdvancedData = () => {
    const stocks = [
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy/Retail' },
      { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking' },
      { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom' },
      { symbol: 'TCS', name: 'TCS', sector: 'IT Services' },
      { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking' },
      { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking' },
      { symbol: 'INFY', name: 'Infosys', sector: 'IT Services' },
      { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'NBFC' },
      { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Engineering' },
      { symbol: 'LICI', name: 'LIC of India', sector: 'Insurance' },
      { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG' },
      { symbol: 'ITC', name: 'ITC', sector: 'FMCG/Cigarettes' },
      { symbol: 'HCLTECH', name: 'HCL Technologies', sector: 'IT Services' },
      { symbol: 'M&M', name: 'Mahindra & Mahindra', sector: 'Automobile' },
      { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Automobile' },
      { symbol: 'SUNPHARMA', name: 'Sun Pharma', sector: 'Pharma' },
      { symbol: 'ADANIENT', name: 'Adani Enterprises', sector: 'Conglomerate' },
      { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking' },
      { symbol: 'NTPC', name: 'NTPC', sector: 'Power' },
      { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer Goods' },
      { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', sector: 'Cement' },
    ];

    return stocks.map((stock, idx) => {
      const basePrice = getRealisticPrice(stock.symbol, idx);
      const priceChange = ((Math.random() - 0.5) * 2); // Smaller change percentage
      const newPrice = basePrice * (1 + priceChange/100);
      const changePercent = priceChange.toFixed(2);
      
      return {
        ...stock,
        rank: idx + 1,
        price: newPrice.toFixed(2),
        change: changePercent,
        volume: Math.floor(Math.random() * 10000000).toLocaleString(),
        totalScore: (95 - idx * 2 + Math.random() * 5).toFixed(1),
        aiScore: (85 + Math.random() * 15).toFixed(1),
        ictScore: (80 + Math.random() * 20).toFixed(1),
        sentimentScore: (70 + Math.random() * 30).toFixed(1),
        volumeProfile: ['Very High', 'High', 'Medium'][Math.floor(Math.random() * 3)],
        signal: idx < 7 ? '🟢 STRONG BUY' : idx < 14 ? '🟢 BUY' : '🟡 HOLD',
        trend: Math.random() > 0.3 ? '🟢 BULLISH' : '🔴 BEARISH',
        riskScore: (3 + Math.random() * 4).toFixed(1),
        nextOptimal: ['NY Kill Zone', 'London Kill Zone', 'Silver Bullet'][Math.floor(Math.random() * 3)],
        institutionalFlow: Math.random() > 0.5 ? 'Buying' : 'Selling',
        darkPoolActivity: (Math.random() * 100).toFixed(1) + 'M',
        shortInterest: (Math.random() * 15).toFixed(1) + '%',
        optionsFlow: Math.random() > 0.5 ? 'Bullish' : 'Neutral',
        earningsDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        whaleActivity: Math.random() > 0.7 ? 'Detected' : 'Normal',
        marketCap: (basePrice * (Math.random() * 100 + 1)).toFixed(1) + 'B',
        peRatio: (Math.random() * 50).toFixed(1),
        dividendYield: (Math.random() * 3).toFixed(2) + '%'
      };
    });
  };

  const [assets, setAssets] = useState(generateAdvancedData());
  const [performanceStats, setPerformanceStats] = useState({
    dailyProfit: '+2.4%',
    weeklyProfit: '+8.7%',
    winRate: '76.2%',
    sharpeRatio: '2.1'
  });

  const filteredAssets = assets
    .filter(asset => selectedSector === 'All' || asset.sector === selectedSector)
    .filter(asset => {
      if (riskFilter === 'All') return true;
      if (riskFilter === 'Low') return parseFloat(asset.riskScore) <= 4;
      if (riskFilter === 'Medium') return parseFloat(asset.riskScore) > 4 && parseFloat(asset.riskScore) <= 6;
      if (riskFilter === 'High') return parseFloat(asset.riskScore) > 6;
      return true;
    })
    .filter(asset => 
      asset.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'Total Score': return parseFloat(b.totalScore) - parseFloat(a.totalScore);
        case 'AI Score': return parseFloat(b.aiScore) - parseFloat(a.aiScore);
        case 'Risk Score': return parseFloat(a.riskScore) - parseFloat(b.riskScore);
        case 'Volume Profile': return b.volumeProfile.localeCompare(a.volumeProfile);
        case 'Price Change': return parseFloat(b.change) - parseFloat(a.change);
        default: return a.rank - b.rank;
      }
    });

  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      setAssets(generateAdvancedData());
      
      if (Math.random() > 0.7) {
        const newAlert = {
          id: Date.now(),
          message: `Price alert: ${assets[Math.floor(Math.random() * assets.length)].symbol} moved ${Math.random() > 0.5 ? 'up' : 'down'} ${(Math.random() * 5).toFixed(2)}%`,
          type: Math.random() > 0.5 ? 'info' : 'warning',
          time: new Date().toLocaleTimeString()
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const marketSentiment = {
    overall: 'Bullish',
    sp500: '+0.8%',
    nasdaq: '+1.2%',
    fearGreedIndex: '75 (Extreme Greed)',
    putCallRatio: '0.68',
    vix: '15.2'
  };

  const sessions = [
    { name: 'Asian KZ', active: false, time: '6:30-9:30 AM IST', priority: 3, volatility: 'Medium', volume: 'Low' },
    { name: 'London KZ', active: true, time: '12:30-3:30 PM IST', priority: 5, volatility: 'High', volume: 'High' },
    { name: 'NY KZ', active: true, time: '5:30-8:30 PM IST', priority: 5, volatility: 'High', volume: 'Very High' },
    { name: 'Silver Bullet', active: false, time: '8:30-9:30 PM IST', priority: 4, volatility: 'Low', volume: 'Medium' }
  ];

  const marketStats = {
    totalAssets: assets.length,
    strongSignals: assets.filter(a => a.signal.includes('STRONG')).length,
    averageAccuracy: '87.3%',
    activeSession: 'London + NY Overlap',
    marketRegime: 'TRENDING',
    totalMarketCap: '45.2T',
    advancingStocks: Math.floor(assets.length * 0.65),
    decliningStocks: Math.floor(assets.length * 0.35)
  };

  const topGainers = [...assets].sort((a, b) => parseFloat(b.change) - parseFloat(a.change)).slice(0, 3);
  const topLosers = [...assets].sort((a, b) => parseFloat(a.change) - parseFloat(b.change)).slice(0, 3);

  const toggleWatchlist = (symbol) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(assets, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `trading-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  // Fix: Handle details expansion properly
  const toggleDetails = (index) => {
    if (expandedAsset === index) {
      setExpandedAsset(null);
    } else {
      setExpandedAsset(index);
    }
  };

  const DashboardView = () => (
    <>
      {/* Enhanced Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {[
          { label: 'Total Assets', value: marketStats.totalAssets, icon: BarChart3, color: 'green', change: '+2' },
          { label: 'Strong Signals', value: marketStats.strongSignals, icon: Zap, color: 'green', change: '+3' },
          { label: 'Avg Accuracy', value: marketStats.averageAccuracy, icon: Target, color: 'purple', change: '+1.2%' },
          { label: 'Active Session', value: marketStats.activeSession, icon: Clock, color: 'orange', change: 'Live' },
          { label: 'Market Regime', value: marketStats.marketRegime, icon: Activity, color: 'red', change: 'Trending' },
          { label: 'Win Rate', value: performanceStats.winRate, icon: TrendingUp, color: 'green', change: '↑ 2.1%' }
        ].map((stat, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} rounded-lg p-3`}>
            <div className="flex items-center justify-between mb-1">
              <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
              <span className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-lg font-bold">{stat.value}</div>
              <span className={`text-xs ${stat.change.includes('+') || stat.change.includes('↑') ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Market Sentiment Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <Globe className="mr-2 text-emerald-400" /> Market Overview
          </h3>
          <div className="space-y-3">
            {Object.entries(marketSentiment).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className={`px-2 py-1 rounded text-sm ${value.includes('+') ? 'bg-emerald-600' : 'bg-emerald-800'}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Movers with Fixed Alignment */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <TrendingUp className="mr-2 text-emerald-400" /> Top Movers
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-emerald-400 mb-2">Top Gainers</div>
              {topGainers.map((stock, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <div className="flex items-center flex-1">
                    <span className="font-medium w-20">{stock.symbol}</span>
                    <span className="text-emerald-400 font-semibold ml-auto mr-4">+{stock.change}%</span>
                  </div>
                  <span className="text-gray-300 text-sm">{formatIndianPrice(stock.price)}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-red-400 mb-2">Top Losers</div>
              {topLosers.map((stock, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <div className="flex items-center flex-1">
                    <span className="font-medium w-20">{stock.symbol}</span>
                    <span className="text-red-400 font-semibold ml-auto mr-4">{stock.change}%</span>
                  </div>
                  <span className="text-gray-300 text-sm">{formatIndianPrice(stock.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <ChartLine className="mr-2 text-emerald-400" /> Your Performance
          </h3>
          <div className="space-y-3">
            {Object.entries(performanceStats).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className={`font-bold ${value.includes('+') ? 'text-emerald-400' : 'text-emerald-400'}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Kill Zones */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center">
            <Clock className="mr-2 text-emerald-400" /> Trading Sessions (Kill Zones)
          </h2>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} ${autoRefresh ? 'text-emerald-400' : 'text-gray-400'}`}
            >
              <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
            </button>
            <span className="text-xs text-gray-400">Auto-refresh: {autoRefresh ? 'ON' : 'OFF'}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {sessions.map((session, idx) => (
            <div key={idx} className={`p-3 rounded-lg border-2 ${session.active ? 'border-emerald-500 bg-emerald-900 bg-opacity-30' : 'border-gray-600 bg-gray-700 bg-opacity-30'}`}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-bold">{session.name}</span>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded mr-2 ${session.active ? 'bg-emerald-500' : 'bg-gray-600'}`}>
                      {session.active ? 'ACTIVE' : 'CLOSED'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{session.priority}/5</div>
                  <div className="text-xs text-gray-400">Priority</div>
                </div>
              </div>
              <div className="text-sm text-gray-300">{session.time}</div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>📊 {session.volume}</span>
                <span>⚡ {session.volatility}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Controls */}
      <div className="mb-6 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search symbols or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
          />
        </div>

        <select 
          value={selectedMarket}
          onChange={(e) => setSelectedMarket(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        >
          {['Stocks', 'Crypto', 'Forex', 'Futures', 'Options'].map(market => (
            <option key={market} value={market}>{market}</option>
          ))}
        </select>

        <select 
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        >
          {sectors.slice(0, 10).map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>

        <select 
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        >
          {['All Risk', 'Low Risk (≤4)', 'Medium Risk (4-6)', 'High Risk (>6)'].map(risk => (
            <option key={risk} value={risk}>{risk}</option>
          ))}
        </select>

        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        >
          {['Total Score', 'AI Score', 'Risk Score', 'Volume Profile', 'Price Change'].map(sort => (
            <option key={sort} value={sort}>{sort}</option>
          ))}
        </select>
      </div>

      {/* Enhanced Assets Table with Fixed Details */}
      <div className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-sm rounded-lg border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} overflow-hidden mb-6`}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className={`${darkMode ? 'bg-emerald-900 bg-opacity-50' : 'bg-emerald-50'}`}>
              <tr>
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Price (₹)</th>
                <th className="p-3 text-left">Change</th>
                <th className="p-3 text-left">Total Score</th>
                <th className="p-3 text-left">AI Score</th>
                <th className="p-3 text-left">Signal</th>
                <th className="p-3 text-left">Risk</th>
                <th className="p-3 text-left">Watch</th>
                <th className="p-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.slice(0, 21).map((asset, idx) => (
                <React.Fragment key={idx}>
                  <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors`}>
                    <td className="p-3">
                      <span className={`font-bold ${idx < 3 ? 'text-yellow-400' : idx < 7 ? 'text-emerald-400' : ''}`}>
                        #{asset.rank}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-emerald-400">{asset.symbol}</div>
                      <div className="text-xs text-gray-400">{asset.name}</div>
                      <div className="text-xs text-gray-500">{asset.sector}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold">{formatIndianPrice(asset.price)}</div>
                      <div className="text-xs text-gray-400">Vol: {asset.volume}</div>
                    </td>
                    <td className="p-3">
                      <div className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="text-lg font-bold text-emerald-400">{asset.totalScore}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <Brain className="w-4 h-4 mr-1 text-purple-400" />
                        <span className="font-semibold">{asset.aiScore}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        asset.signal.includes('STRONG') ? 'bg-emerald-600' : 
                        asset.signal.includes('BUY') ? 'bg-emerald-700' : 'bg-yellow-600'
                      }`}>
                        {asset.signal}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center">
                        <span className={`font-semibold ${parseFloat(asset.riskScore) < 4 ? 'text-emerald-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {asset.riskScore}/10
                        </span>
                        <Shield className={`w-4 h-4 ml-1 ${parseFloat(asset.riskScore) < 4 ? 'text-emerald-400' : 'text-red-400'}`} />
                      </div>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => toggleWatchlist(asset.symbol)}
                        className={`p-2 rounded ${watchlist.includes(asset.symbol) ? 'text-yellow-400 bg-yellow-900 bg-opacity-30' : 'text-gray-400 hover:text-yellow-400'}`}
                      >
                        {watchlist.includes(asset.symbol) ? <Star className="w-5 h-5 fill-current" /> : <Star className="w-5 h-5" />}
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => toggleDetails(idx)}
                        className="p-2 hover:bg-emerald-600 rounded transition-colors"
                      >
                        {expandedAsset === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </td>
                  </tr>
                  <tr className={expandedAsset === idx ? '' : 'hidden'}>
                    <td colSpan="10" className={`p-6 ${darkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-gray-50'} transition-all duration-300`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-bold mb-3 text-emerald-400">📊 Advanced Metrics</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">ICT Score:</span>
                              <span className="font-semibold">{asset.ictScore}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Market Cap:</span>
                              <span className="font-semibold">{asset.marketCap}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">P/E Ratio:</span>
                              <span className="font-semibold">{asset.peRatio}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 text-purple-400">🏦 Institutional Data</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Dark Pool:</span>
                              <span className="font-semibold">{asset.darkPoolActivity}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Short Interest:</span>
                              <span className="font-semibold">{asset.shortInterest}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 text-emerald-400">💡 Trading Insights</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              <span>Next optimal entry: {asset.nextOptimal}</span>
                            </div>
                            <div className="flex items-center">
                              <Activity className="w-4 h-4 mr-2" />
                              <span>Institutional flow: {asset.institutionalFlow}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const WatchlistView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Heart className="mr-3 text-emerald-400" /> Your Watchlist
      </h2>
      {watchlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400">No assets in watchlist. Click the star icon to add assets.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assets.filter(asset => watchlist.includes(asset.symbol)).map((asset, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{asset.symbol}</h3>
                  <p className="text-gray-400 text-sm">{asset.name}</p>
                </div>
                <button
                  onClick={() => toggleWatchlist(asset.symbol)}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="font-bold">{formatIndianPrice(asset.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Change:</span>
                  <span className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Signal:</span>
                  <span className="font-bold text-emerald-400">{asset.signal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const AnalysisView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <LineChart className="mr-3 text-emerald-400" /> Advanced Analysis
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h3 className="font-bold mb-3">Technical Indicators</h3>
            <div className="space-y-3">
              {['RSI', 'MACD', 'Bollinger Bands', 'Moving Averages'].map((indicator, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>{indicator}</span>
                  <span className={`px-3 py-1 rounded text-sm ${idx % 2 === 0 ? 'bg-emerald-600' : 'bg-emerald-800'}`}>
                    {idx % 2 === 0 ? 'Bullish' : 'Neutral'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h3 className="font-bold mb-3">Risk Analysis</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Portfolio Risk</span>
                <span className="text-yellow-400 font-bold">Medium</span>
              </div>
              <div className="flex justify-between">
                <span>Diversification Score</span>
                <span className="text-emerald-400 font-bold">82%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <h3 className="font-bold mb-3">Market Insights</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Market Sentiment</span>
              <span className="text-emerald-400 font-bold">76% Bullish</span>
            </div>
            <div className="flex justify-between">
              <span>Volatility Index</span>
              <span className="text-yellow-400 font-bold">15.2</span>
            </div>
            <div className="flex justify-between">
              <span>Put/Call Ratio</span>
              <span className="text-emerald-400 font-bold">0.68</span>
            </div>
            <div className="flex justify-between">
              <span>Advance/Decline</span>
              <span className="text-emerald-400 font-bold">65%/35%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Cog className="mr-3 text-emerald-400" /> Settings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-gray-400">Switch between dark and light theme</p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-emerald-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto Refresh</p>
                  <p className="text-sm text-gray-400">Auto refresh data every 5 seconds</p>
                </div>
                <button
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${autoRefresh ? 'bg-emerald-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${autoRefresh ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Data Export</h3>
            <button
              onClick={exportData}
              className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-medium flex items-center justify-center`}
            >
              <Download className="w-5 h-5 mr-2" />
              Export All Data
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Data Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Refresh Interval</label>
                <select 
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                >
                  <option>5 seconds</option>
                  <option>15 seconds</option>
                  <option>30 seconds</option>
                  <option>1 minute</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Default Currency</label>
                <select 
                  value={defaultCurrency}
                  onChange={(e) => setDefaultCurrency(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                >
                  <option>Indian Rupees (₹)</option>
                  <option>US Dollar ($)</option>
                  <option>Euro (€)</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Price Alerts</span>
                <input 
                  type="checkbox" 
                  checked={priceAlerts}
                  onChange={(e) => setPriceAlerts(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Signal Alerts</span>
                <input 
                  type="checkbox" 
                  checked={signalAlerts}
                  onChange={(e) => setSignalAlerts(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch(activeView) {
      case 'dashboard': return <DashboardView />;
      case 'watchlist': return <WatchlistView />;
      case 'analysis': return <AnalysisView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div ref={mainRef} className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 font-sans`}>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className={`absolute right-0 top-0 h-full w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { id: 'dashboard', icon: <Home className="w-5 h-5 mr-3" />, label: 'Dashboard' },
                { id: 'watchlist', icon: <Heart className="w-5 h-5 mr-3" />, label: 'Watchlist' },
                { id: 'analysis', icon: <LineChart className="w-5 h-5 mr-3" />, label: 'Analysis' },
                { id: 'settings', icon: <Cog className="w-5 h-5 mr-3" />, label: 'Settings' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveView(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeView === tab.id ? 'bg-emerald-600 text-white' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden mr-3"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent">
                Ecoplus Analyzer v.1169
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                AI-Powered Trading Intelligence | Made in India 🇮🇳
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className={`hidden md:block ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-4 py-2 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
              <div className="text-lg font-mono text-emerald-400">{currentTime.toLocaleTimeString('en-IN')}</div>
              <div className="text-xs text-gray-400">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
                })}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={toggleFullscreen}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Desktop */}
        <div className="hidden lg:flex space-x-2">
          {[
            { id: 'dashboard', icon: <Home className="w-5 h-5 mr-2" />, label: 'Dashboard' },
            { id: 'watchlist', icon: <Heart className="w-5 h-5 mr-2" />, label: 'Watchlist' },
            { id: 'analysis', icon: <LineChart className="w-5 h-5 mr-2" />, label: 'Analysis' },
            { id: 'settings', icon: <Cog className="w-5 h-5 mr-2" />, label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium capitalize transition-colors flex items-center ${
                activeView === tab.id 
                  ? 'bg-emerald-600 text-white' 
                  : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Navigation Tabs - Mobile */}
        <div className="lg:hidden flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'dashboard', icon: '🏠', label: 'Dash' },
            { id: 'watchlist', icon: '⭐', label: 'Watch' },
            { id: 'analysis', icon: '📊', label: 'Analyze' },
            { id: 'settings', icon: '⚙️', label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium capitalize whitespace-nowrap flex items-center ${
                activeView === tab.id 
                  ? 'bg-emerald-600 text-white' 
                  : `${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {renderView()}
      </div>

      {/* Footer */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>⚡ Live Data Updates | 🧠 AI-Powered Analysis | 🇮🇳 Made in India</p>
            <p className="mt-1">{filteredAssets.length} Assets filtered | ⭐ {watchlist.length} in watchlist</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setAssets(generateAdvancedData())}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-medium flex items-center`}
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh Data
            </button>
            <div className="text-xs text-gray-400">
              Last update: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
