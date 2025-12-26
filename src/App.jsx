import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, Brain, 
  ChevronDown, ChevronUp, BarChart3, Activity, Filter, Search, Bell,
  Download, Settings, RefreshCw, Volume2, PieChart, Shield, TrendingUp as ChartLine,
  Users, DollarSign, Globe, Smartphone, Maximize2, Minimize2, Star, X, Menu,
  Home, Heart, LineChart, Cog, ExternalLink, Database, Cpu, BarChart2,
  Cloud, Wifi, WifiOff, Battery, BatteryCharging, Thermometer
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // New state variables
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [themeColor, setThemeColor] = useState('emerald');
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [gridView, setGridView] = useState(false);
  
  // Settings state
  const [refreshInterval, setRefreshInterval] = useState('Manual');
  const [defaultCurrency, setDefaultCurrency] = useState('Indian Rupees (₹)');
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [signalAlerts, setSignalAlerts] = useState(true);
  
  const mainRef = useRef(null);
  const searchInputRef = useRef(null);

  // Performance optimization - useMemo for expensive calculations
  const generateAdvancedData = useCallback(() => {
    const stocks = [
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy/Retail', basePrice: 1560.60, baseChange: 0.15, marketCap: '21,09,105', weekHigh: 1581.30 },
      { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', basePrice: 992.00, baseChange: -0.52, marketCap: '7,60,379', weekHigh: 1020.50 },
      { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', basePrice: 2106.00, baseChange: -0.83, marketCap: '12,61,762', weekHigh: 2174.50 },
      { symbol: 'TCS', name: 'TCS', sector: 'IT Services', basePrice: 3276.80, baseChange: -1.27, marketCap: '11,86,835', weekHigh: 4322.95 },
      { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', basePrice: 1351.00, baseChange: -0.65, marketCap: '9,62,840', weekHigh: 1500.00 },
      { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', basePrice: 966.50, baseChange: -0.25, marketCap: '8,92,046', weekHigh: 999.00 },
      { symbol: 'INFY', name: 'Infosys', sector: 'IT Services', basePrice: 1657.00, baseChange: -0.38, marketCap: '6,86,108', weekHigh: 1982.80 },
      { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'NBFC', basePrice: 7200.00, baseChange: 0.45, marketCap: '4,45,210', weekHigh: 7500.00 },
      { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Engineering', basePrice: 3200.00, baseChange: 0.78, marketCap: '4,40,000', weekHigh: 3450.00 },
      { symbol: 'LICI', name: 'LIC of India', sector: 'Insurance', basePrice: 850.00, baseChange: -0.35, marketCap: '5,38,000', weekHigh: 925.00 },
      { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', basePrice: 2400.00, baseChange: 0.25, marketCap: '5,64,000', weekHigh: 2550.00 },
      { symbol: 'ITC', name: 'ITC', sector: 'FMCG/Cigarettes', basePrice: 430.00, baseChange: 0.12, marketCap: '5,37,500', weekHigh: 460.00 },
      { symbol: 'HCLTECH', name: 'HCL Technologies', sector: 'IT Services', basePrice: 1250.00, baseChange: -0.48, marketCap: '3,39,000', weekHigh: 1450.00 },
      { symbol: 'M&M', name: 'Mahindra & Mahindra', sector: 'Automobile', basePrice: 1800.00, baseChange: 0.88, marketCap: '2,22,000', weekHigh: 1950.00 },
      { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Automobile', basePrice: 10500.00, baseChange: -0.65, marketCap: '3,17,625', weekHigh: 11500.00 },
      { symbol: 'SUNPHARMA', name: 'Sun Pharma', sector: 'Pharma', basePrice: 1250.00, baseChange: 0.32, marketCap: '3,00,000', weekHigh: 1350.00 },
      { symbol: 'ADANIENT', name: 'Adani Enterprises', sector: 'Conglomerate', basePrice: 3000.00, baseChange: 1.25, marketCap: '3,45,000', weekHigh: 3200.00 },
      { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', basePrice: 1050.00, baseChange: -0.42, marketCap: '3,24,450', weekHigh: 1150.00 },
      { symbol: 'NTPC', name: 'NTPC', sector: 'Power', basePrice: 320.00, baseChange: 0.18, marketCap: '3,10,400', weekHigh: 340.00 },
      { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer Goods', basePrice: 3500.00, baseChange: 0.55, marketCap: '3,10,000', weekHigh: 3750.00 },
      { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', sector: 'Cement', basePrice: 9500.00, baseChange: -0.28, marketCap: '2,74,550', weekHigh: 10200.00 },
    ];

    return stocks.map((stock, idx) => {
      const aiScore = (85 + Math.random() * 15).toFixed(1);
      const riskScore = (3 + Math.random() * 4).toFixed(1);
      const sentimentScore = (70 + Math.random() * 30).toFixed(1);
      
      return {
        ...stock,
        rank: idx + 1,
        price: stock.basePrice.toFixed(2),
        change: stock.baseChange.toFixed(2),
        volume: Math.floor(Math.random() * 10000000).toLocaleString(),
        totalScore: (95 - idx * 2 + Math.random() * 5).toFixed(1),
        aiScore,
        ictScore: (80 + Math.random() * 20).toFixed(1),
        sentimentScore,
        volumeProfile: ['Very High', 'High', 'Medium'][Math.floor(Math.random() * 3)],
        signal: idx < 7 ? '🟢 STRONG BUY' : idx < 14 ? '🟢 BUY' : '🟡 HOLD',
        trend: stock.baseChange >= 0 ? '🟢 BULLISH' : '🔴 BEARISH',
        riskScore,
        nextOptimal: ['NY Kill Zone', 'London Kill Zone', 'Silver Bullet'][Math.floor(Math.random() * 3)],
        institutionalFlow: stock.baseChange >= 0 ? 'Buying' : 'Selling',
        darkPoolActivity: (Math.random() * 100).toFixed(1) + 'M',
        shortInterest: (Math.random() * 15).toFixed(1) + '%',
        optionsFlow: stock.baseChange >= 0 ? 'Bullish' : 'Neutral',
        earningsDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        whaleActivity: Math.random() > 0.7 ? 'Detected' : 'Normal',
        marketCapCr: stock.marketCap + ' Cr',
        peRatio: (Math.random() * 50).toFixed(1),
        dividendYield: (Math.random() * 3).toFixed(2) + '%',
        weekHigh: stock.weekHigh.toFixed(2),
        rsi: (30 + Math.random() * 50).toFixed(1),
        macd: (Math.random() - 0.5).toFixed(3),
        support: (stock.basePrice * 0.95).toFixed(2),
        resistance: (stock.basePrice * 1.05).toFixed(2)
      };
    });
  }, []);

  const [assets, setAssets] = useState(() => generateAdvancedData());
  const [performanceStats, setPerformanceStats] = useState({
    dailyProfit: '+2.4%',
    weeklyProfit: '+8.7%',
    winRate: '76.2%',
    sharpeRatio: '2.1',
    totalTrades: '1,247',
    profitFactor: '2.8'
  });

  // Use useMemo for filtered assets to prevent unnecessary recalculations
  const filteredAssets = useMemo(() => {
    return assets
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
          case 'Market Cap': return parseFloat(b.marketCapCr.replace(/,/g, '')) - parseFloat(a.marketCapCr.replace(/,/g, ''));
          default: return a.rank - b.rank;
        }
      });
  }, [assets, selectedSector, riskFilter, searchQuery, sortBy]);

  // Removed auto-refresh useEffect - PROBLEM FIXED
  // This was causing the refresh issue

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate system metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => Math.min(100, Math.max(20, prev + (Math.random() * 10 - 5))));
      setMemoryUsage(prev => Math.min(100, Math.max(30, prev + (Math.random() * 8 - 4))));
      setBatteryLevel(prev => {
        if (isCharging) {
          return Math.min(100, prev + 0.5);
        }
        return Math.max(10, prev - 0.2);
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isCharging]);

  const sectors = ['All', 'Energy/Retail', 'Banking', 'Telecom', 'IT Services', 'NBFC', 'Engineering', 'Insurance', 'FMCG', 'FMCG/Cigarettes', 'Automobile', 'Pharma', 'Conglomerate', 'Power', 'Consumer Goods', 'Cement'];

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

  const marketSentiment = useMemo(() => ({
    overall: 'Bullish',
    sp500: '+0.8%',
    nasdaq: '+1.2%',
    fearGreedIndex: '75 (Extreme Greed)',
    putCallRatio: '0.68',
    vix: '15.2',
    advancers: '1,245',
    decliners: '876'
  }), []);

  const sessions = useMemo(() => [
    { name: 'Asian KZ', active: false, time: '6:30-9:30 AM IST', priority: 3, volatility: 'Medium', volume: 'Low' },
    { name: 'London KZ', active: true, time: '12:30-3:30 PM IST', priority: 5, volatility: 'High', volume: 'High' },
    { name: 'NY KZ', active: true, time: '5:30-8:30 PM IST', priority: 5, volatility: 'High', volume: 'Very High' },
    { name: 'Silver Bullet', active: false, time: '8:30-9:30 PM IST', priority: 4, volatility: 'Low', volume: 'Medium' }
  ], []);

  const marketStats = useMemo(() => ({
    totalAssets: assets.length,
    strongSignals: assets.filter(a => a.signal.includes('STRONG')).length,
    averageAccuracy: '87.3%',
    activeSession: 'London + NY Overlap',
    marketRegime: 'TRENDING',
    totalMarketCap: '45.2T',
    advancingStocks: Math.floor(assets.length * 0.65),
    decliningStocks: Math.floor(assets.length * 0.35),
    totalVolume: '₹4.2T',
    putCallRatio: '0.68'
  }), [assets]);

  const topGainers = useMemo(() => [...assets].sort((a, b) => parseFloat(b.change) - parseFloat(a.change)).slice(0, 3), [assets]);
  const topLosers = useMemo(() => [...assets].sort((a, b) => parseFloat(a.change) - parseFloat(b.change)).slice(0, 3), [assets]);

  const toggleWatchlist = useCallback((symbol) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  }, []);

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
    
    // Show success notification
    const newAlert = {
      id: Date.now(),
      message: `Data exported successfully!`,
      type: 'success',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const toggleDetails = useCallback((index) => {
    setExpandedAsset(prev => prev === index ? null : index);
  }, []);

  const refreshData = useCallback(() => {
    setAssets(generateAdvancedData());
    
    // Show notification
    const newAlert = {
      id: Date.now(),
      message: `Data refreshed successfully`,
      type: 'info',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  }, [generateAdvancedData]);

  const clearFilters = () => {
    setSelectedSector('All');
    setRiskFilter('All');
    setSearchQuery('');
    setSortBy('Total Score');
  };

  const quickAddToWatchlist = useCallback((symbol) => {
    toggleWatchlist(symbol);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, [toggleWatchlist]);

  // System Status Component
  const SystemStatus = () => (
    <div className={`flex items-center space-x-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-3 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex items-center space-x-2">
        {connectionStatus === 'connected' ? (
          <Wifi className="w-4 h-4 text-emerald-400" />
        ) : (
          <WifiOff className="w-4 h-4 text-red-400" />
        )}
        <span className="text-xs">{connectionStatus === 'connected' ? 'Online' : 'Offline'}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Cpu className="w-4 h-4 text-blue-400" />
        <span className="text-xs">{cpuUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2">
        <Database className="w-4 h-4 text-purple-400" />
        <span className="text-xs">{memoryUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2">
        {isCharging ? (
          <BatteryCharging className="w-4 h-4 text-green-400" />
        ) : (
          <Battery className="w-4 h-4 text-yellow-400" />
        )}
        <span className="text-xs">{batteryLevel.toFixed(0)}%</span>
      </div>
    </div>
  );

  const DashboardView = () => (
    <>
      {/* System Status Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className="text-sm">Live</span>
          </div>
          <span className="text-sm text-gray-400">Last update: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <SystemStatus />
      </div>

      {/* Enhanced Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {[
          { label: 'Total Assets', value: marketStats.totalAssets, icon: BarChart3, color: 'emerald', change: '+2' },
          { label: 'Strong Signals', value: marketStats.strongSignals, icon: Zap, color: 'emerald', change: '+3' },
          { label: 'Win Rate', value: performanceStats.winRate, icon: Target, color: 'purple', change: '+1.2%' },
          { label: 'Total Volume', value: marketStats.totalVolume, icon: Activity, color: 'blue', change: '₹1.2T' },
          { label: 'Profit Factor', value: performanceStats.profitFactor, icon: TrendingUp, color: 'green', change: '↑ 0.3' },
          { label: 'Put/Call', value: marketStats.putCallRatio, icon: BarChart2, color: 'orange', change: '0.68' }
        ].map((stat, idx) => (
          <div key={idx} className={`${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-sm border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} rounded-lg p-3 hover:scale-[1.02] transition-transform duration-200`}>
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

      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold flex items-center">
              <Globe className="mr-2 text-emerald-400" /> Market Overview
            </h3>
            <div className="flex space-x-1">
              {['1D', '1W', '1M', '3M'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-2 py-1 text-xs rounded ${selectedTimeframe === tf ? 'bg-emerald-600 text-white' : darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {Object.entries(marketSentiment).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className={`px-2 py-1 rounded text-sm ${value.includes('+') ? 'bg-emerald-600' : value.includes('-') ? 'bg-red-600' : 'bg-emerald-800'}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Movers */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <TrendingUp className="mr-2 text-emerald-400" /> Top Movers
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-emerald-400 mb-2 flex justify-between">
                <span>Top Gainers</span>
                <span className="text-xs">Change</span>
              </div>
              {topGainers.map((stock, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700 hover:bg-gray-700 hover:bg-opacity-30 rounded px-2 cursor-pointer">
                  <div className="flex items-center flex-1">
                    <span className="font-medium w-20">{stock.symbol}</span>
                    <span className="text-emerald-400 font-semibold ml-auto mr-4">+{stock.change}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-sm">{formatIndianPrice(stock.price)}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        quickAddToWatchlist(stock.symbol);
                      }}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-red-400 mb-2 flex justify-between">
                <span>Top Losers</span>
                <span className="text-xs">Change</span>
              </div>
              {topLosers.map((stock, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700 hover:bg-gray-700 hover:bg-opacity-30 rounded px-2 cursor-pointer">
                  <div className="flex items-center flex-1">
                    <span className="font-medium w-20">{stock.symbol}</span>
                    <span className="text-red-400 font-semibold ml-auto mr-4">{stock.change}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-sm">{formatIndianPrice(stock.price)}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        quickAddToWatchlist(stock.symbol);
                      }}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <ChartLine className="mr-2 text-emerald-400" /> Performance
          </h3>
          <div className="space-y-3">
            {Object.entries(performanceStats).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className={`font-bold ${value.includes('+') ? 'text-emerald-400' : 'text-emerald-400'}`}>
                  {value}
                </span>
              </div>
            ))}
            <div className="pt-3 border-t border-gray-700">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Trades</span>
                <span className="font-bold">{performanceStats.totalTrades}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trading Sessions */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center">
            <Clock className="mr-2 text-emerald-400" /> Trading Sessions
          </h2>
          <button 
            onClick={refreshData}
            className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-emerald-400 hover:text-emerald-300`}
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {sessions.map((session, idx) => (
            <div 
              key={idx} 
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${session.active ? 'border-emerald-500 bg-emerald-900 bg-opacity-30 hover:bg-emerald-900 hover:bg-opacity-50' : 'border-gray-600 bg-gray-700 bg-opacity-30 hover:bg-gray-700 hover:bg-opacity-50'} cursor-pointer`}
              onClick={() => alert(`Session Details: ${session.name}\nTime: ${session.time}\nPriority: ${session.priority}/5`)}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-bold">{session.name}</span>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded mr-2 ${session.active ? 'bg-emerald-500 animate-pulse' : 'bg-gray-600'}`}>
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
            ref={searchInputRef}
            type="text"
            placeholder="Search symbols or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            onKeyDown={(e) => e.key === 'Escape' && setSearchQuery('')}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
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
          {sectors.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>

        <select 
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        >
          {['All', 'Low', 'Medium', 'High'].map(risk => (
            <option key={risk} value={risk}>
              {risk === 'All' ? 'All Risk' : risk === 'Low' ? 'Low Risk (≤4)' : risk === 'Medium' ? 'Medium Risk (4-6)' : 'High Risk (>6)'}
            </option>
          ))}
        </select>

        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        >
          {['Total Score', 'AI Score', 'Risk Score', 'Volume Profile', 'Price Change', 'Market Cap'].map(sort => (
            <option key={sort} value={sort}>{sort}</option>
          ))}
        </select>

        <button
          onClick={clearFilters}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} flex items-center`}
        >
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </button>

        <button
          onClick={() => setGridView(!gridView)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} flex items-center`}
        >
          {gridView ? 'List View' : 'Grid View'}
        </button>
      </div>

      {/* Enhanced Assets Table */}
      {gridView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filteredAssets.slice(0, 12).map((asset, idx) => (
            <div 
              key={idx} 
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              onClick={() => toggleDetails(idx)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-bold ${idx < 3 ? 'text-yellow-400' : idx < 7 ? 'text-emerald-400' : 'text-gray-300'}`}>
                      #{asset.rank}
                    </span>
                    <h3 className="font-bold text-emerald-400">{asset.symbol}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{asset.name}</p>
                  <span className="text-xs px-2 py-1 bg-gray-700 rounded mt-1 inline-block">{asset.sector}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    quickAddToWatchlist(asset.symbol);
                  }}
                  className={`p-1 ${watchlist.includes(asset.symbol) ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`}
                >
                  <Star className={`w-5 h-5 ${watchlist.includes(asset.symbol) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Price</span>
                  <span className="font-bold text-lg">{formatIndianPrice(asset.price)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Change</span>
                  <span className={`font-bold ${parseFloat(asset.change) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {parseFloat(asset.change) >= 0 ? '+' : ''}{asset.change}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Score</span>
                  <span className="font-bold text-emerald-400">{asset.totalScore}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Risk</span>
                  <span className={`font-bold ${parseFloat(asset.riskScore) < 4 ? 'text-emerald-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {asset.riskScore}/10
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className={`px-3 py-1 rounded text-sm font-semibold ${
                  asset.signal.includes('STRONG') ? 'bg-emerald-600' : 
                  asset.signal.includes('BUY') ? 'bg-emerald-700' : 'bg-yellow-600'
                }`}>
                  {asset.signal}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
                    <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors cursor-pointer`}
                        onClick={() => toggleDetails(idx)}>
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
                          onClick={(e) => {
                            e.stopPropagation();
                            quickAddToWatchlist(asset.symbol);
                          }}
                          className={`p-2 rounded ${watchlist.includes(asset.symbol) ? 'text-yellow-400 bg-yellow-900 bg-opacity-30' : 'text-gray-400 hover:text-yellow-400'}`}
                        >
                          <Star className={`w-5 h-5 ${watchlist.includes(asset.symbol) ? 'fill-current' : ''}`} />
                        </button>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDetails(idx);
                            }}
                            className="p-2 hover:bg-emerald-600 rounded transition-colors"
                          >
                            {expandedAsset === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </div>
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
                                <span className="font-semibold">{asset.marketCapCr}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">RSI:</span>
                                <span className={`font-semibold ${parseFloat(asset.rsi) > 70 ? 'text-red-400' : parseFloat(asset.rsi) < 30 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                                  {asset.rsi}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Support:</span>
                                <span className="font-semibold">{formatIndianPrice(asset.support)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Resistance:</span>
                                <span className="font-semibold">{formatIndianPrice(asset.resistance)}</span>
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
                              <div className="flex justify-between">
                                <span className="text-gray-400">Whale Activity:</span>
                                <span className={`font-semibold ${asset.whaleActivity === 'Detected' ? 'text-emerald-400' : 'text-gray-400'}`}>
                                  {asset.whaleActivity}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Options Flow:</span>
                                <span className={`font-semibold ${asset.optionsFlow === 'Bullish' ? 'text-emerald-400' : 'text-red-400'}`}>
                                  {asset.optionsFlow}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold mb-3 text-emerald-400">💡 Trading Insights</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center">
                                <Target className="w-4 h-4 mr-2" />
                                <span>Next optimal: {asset.nextOptimal}</span>
                              </div>
                              <div className="flex items-center">
                                <Activity className="w-4 h-4 mr-2" />
                                <span>Inst. flow: {asset.institutionalFlow}</span>
                              </div>
                              <div className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                <span>Sentiment: {asset.sentimentScore}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Earnings: {asset.earningsDate}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                          <button 
                            onClick={() => window.open(`https://www.google.com/search?q=${asset.symbol}+stock`, '_blank')}
                            className="px-3 py-1 text-sm bg-blue-600 rounded hover:bg-blue-700 flex items-center"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" /> Research
                          </button>
                          <button 
                            onClick={() => alert(`Added ${asset.symbol} to trade watch`)}
                            className="px-3 py-1 text-sm bg-emerald-600 rounded hover:bg-emerald-700"
                          >
                            Track Trade
                          </button>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );

  const WatchlistView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Heart className="mr-3 text-emerald-400" /> Your Watchlist
          <span className="ml-2 text-sm bg-emerald-600 px-2 py-1 rounded">{watchlist.length} items</span>
        </h2>
        {watchlist.length > 0 && (
          <button
            onClick={() => setWatchlist([])}
            className="px-3 py-1 text-sm bg-red-600 rounded hover:bg-red-700"
          >
            Clear All
          </button>
        )}
      </div>
      {watchlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">No assets in watchlist.</p>
          <p className="text-sm text-gray-500">Click the star icon on any asset to add it here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assets.filter(asset => watchlist.includes(asset.symbol)).map((asset, idx) => (
            <div key={idx} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} hover:scale-[1.02] transition-transform duration-200`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{asset.symbol}</h3>
                  <p className="text-gray-400 text-sm">{asset.name}</p>
                  <span className="text-xs px-2 py-1 bg-gray-700 rounded mt-1 inline-block">{asset.sector}</span>
                </div>
                <button
                  onClick={() => toggleWatchlist(asset.symbol)}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              </div>
              <div className="space-y-3">
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
                  <span className={`font-bold ${
                    asset.signal.includes('STRONG') ? 'text-emerald-400' : 
                    asset.signal.includes('BUY') ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {asset.signal.replace('🟢 ', '').replace('🟡 ', '')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Risk Score:</span>
                  <span className={`font-bold ${parseFloat(asset.riskScore) < 4 ? 'text-emerald-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {asset.riskScore}/10
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                <button 
                  onClick={() => toggleDetails(assets.findIndex(a => a.symbol === asset.symbol))}
                  className="px-3 py-1 text-sm bg-gray-700 rounded hover:bg-gray-600"
                >
                  Details
                </button>
                <button 
                  onClick={() => window.open(`https://www.google.com/search?q=${asset.symbol}+stock`, '_blank')}
                  className="px-3 py-1 text-sm bg-blue-600 rounded hover:bg-blue-700 flex items-center"
                >
                  <ExternalLink className="w-3 h-3 mr-1" /> Research
                </button>
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
            <h3 className="font-bold mb-3 flex items-center">
              <Activity className="mr-2" /> Technical Indicators
            </h3>
            <div className="space-y-3">
              {[
                { name: 'RSI', value: '68.4', status: 'Neutral' },
                { name: 'MACD', value: '2.45', status: 'Bullish' },
                { name: 'Bollinger Bands', value: 'Upper Band', status: 'Warning' },
                { name: 'Moving Averages', value: 'Golden Cross', status: 'Bullish' },
                { name: 'Volume Profile', value: 'High Volume Node', status: 'Strong' },
                { name: 'Fibonacci', value: '0.618 Retracement', status: 'Key Level' }
              ].map((indicator, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>{indicator.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{indicator.value}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      indicator.status === 'Bullish' ? 'bg-emerald-600' : 
                      indicator.status === 'Warning' ? 'bg-yellow-600' : 
                      indicator.status === 'Strong' ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                      {indicator.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h3 className="font-bold mb-3 flex items-center">
              <Shield className="mr-2" /> Risk Analysis
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Portfolio Risk</span>
                <span className="text-yellow-400 font-bold">Medium</span>
              </div>
              <div className="flex justify-between">
                <span>Diversification Score</span>
                <span className="text-emerald-400 font-bold">82%</span>
              </div>
              <div className="flex justify-between">
                <span>Max Drawdown</span>
                <span className="text-red-400 font-bold">-8.4%</span>
              </div>
              <div className="flex justify-between">
                <span>Value at Risk (95%)</span>
                <span className="text-yellow-400 font-bold">-12.2%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h3 className="font-bold mb-3 flex items-center">
              <Globe className="mr-2" /> Market Insights
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Market Sentiment</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-700 rounded-full mr-2">
                    <div className="w-3/4 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <span className="text-emerald-400 font-bold">76% Bullish</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Volatility Index (VIX)</span>
                <span className="text-yellow-400 font-bold">15.2</span>
              </div>
              <div className="flex justify-between">
                <span>Put/Call Ratio</span>
                <span className="text-emerald-400 font-bold">0.68</span>
              </div>
              <div className="flex justify-between">
                <span>Advance/Decline</span>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400">1,245</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-red-400">876</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Market Breadth</span>
                <span className="text-emerald-400 font-bold">Positive</span>
              </div>
              <div className="flex justify-between">
                <span>Institutional Activity</span>
                <span className="text-emerald-400 font-bold">High</span>
              </div>
            </div>
          </div>
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h3 className="font-bold mb-3 flex items-center">
              <Brain className="mr-2" /> AI Predictions
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Next Week Outlook</span>
                <span className="text-emerald-400 font-bold">Bullish</span>
              </div>
              <div className="flex justify-between">
                <span>Confidence Level</span>
                <span className="text-emerald-400 font-bold">87.3%</span>
              </div>
              <div className="flex justify-between">
                <span>Top Sector</span>
                <span className="text-emerald-400 font-bold">IT Services</span>
              </div>
              <div className="flex justify-between">
                <span>Risk Assessment</span>
                <span className="text-yellow-400 font-bold">Moderate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Cog className="mr-3 text-emerald-400" /> Settings & Preferences
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
              
              <div>
                <p className="font-medium mb-2">Theme Color</p>
                <div className="flex space-x-2">
                  {['emerald', 'blue', 'purple', 'red', 'orange'].map(color => (
                    <button
                      key={color}
                      onClick={() => setThemeColor(color)}
                      className={`w-8 h-8 rounded-full ${themeColor === color ? 'ring-2 ring-white' : ''}`}
                      style={{ backgroundColor: getColorValue(color) }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Data Management</h3>
            <div className="space-y-3">
              <button
                onClick={exportData}
                className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-medium flex items-center justify-center`}
              >
                <Download className="w-5 h-5 mr-2" />
                Export All Data (JSON)
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  refreshData();
                  alert('Cache cleared successfully!');
                }}
                className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium flex items-center justify-center`}
              >
                <Database className="w-5 h-5 mr-2" />
                Clear Cache
              </button>
            </div>
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
                  <option>Manual</option>
                  <option>30 seconds</option>
                  <option>1 minute</option>
                  <option>5 minutes</option>
                  <option>15 minutes</option>
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
                  <option>British Pound (£)</option>
                  <option>Japanese Yen (¥)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span>Price Alerts</span>
                  <p className="text-sm text-gray-400">Notify on price movements</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={priceAlerts}
                  onChange={(e) => setPriceAlerts(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span>Signal Alerts</span>
                  <p className="text-sm text-gray-400">Notify on trading signals</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={signalAlerts}
                  onChange={(e) => setSignalAlerts(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span>Risk Alerts</span>
                  <p className="text-sm text-gray-400">Notify on high-risk assets</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={true}
                  onChange={(e) => {}}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-700">
        <h3 className="font-bold mb-4">About</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p>Ecoplus Analyzer v.1169</p>
          <p>AI-Powered Trading Intelligence Platform</p>
          <p>Made in India 🇮🇳 • Version 1.16.9</p>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );

  const getColorValue = (color) => {
    const colors = {
      emerald: '#10b981',
      blue: '#3b82f6',
      purple: '#8b5cf6',
      red: '#ef4444',
      orange: '#f97316'
    };
    return colors[color] || colors.emerald;
  };

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
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
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
            <div className="mt-8 pt-6 border-t border-gray-700">
              <SystemStatus />
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
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button 
                onClick={toggleFullscreen}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
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
            { id: 'watchlist', icon: <Heart className="w-5 h-5 mr-2" />, label: `Watchlist (${watchlist.length})` },
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
            { id: 'watchlist', icon: '⭐', label: `Watch (${watchlist.length})` },
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
            <div className="flex items-center space-x-4">
              <span>⚡ Live Data</span>
              <span>•</span>
              <span>🧠 AI Analysis</span>
              <span>•</span>
              <span>🇮🇳 Made in India</span>
            </div>
            <p className="mt-1">{filteredAssets.length} Assets filtered | ⭐ {watchlist.length} in watchlist | 🎯 {marketStats.strongSignals} strong signals</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={refreshData}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-medium flex items-center`}
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh Data
            </button>
            <div className="text-xs text-gray-400">
              Updated: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
            </div>
          </div>
        </div>
      </div>
      
      {/* Alerts Notification */}
      {alerts.length > 0 && (
        <div className="fixed bottom-4 right-4 z-30 space-y-2 max-w-sm">
          {alerts.slice(0, 2).map(alert => (
            <div 
              key={alert.id}
              className={`p-3 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l-4 ${
                alert.type === 'success' ? 'border-emerald-500' : 
                alert.type === 'warning' ? 'border-yellow-500' : 
                'border-blue-500'
              }`}
            >
              <div className="flex items-center">
                {alert.type === 'success' ? '✅' : alert.type === 'warning' ? '⚠️' : 'ℹ️'}
                <span className="ml-2 text-sm">{alert.message}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">{alert.time}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
  @keyframes confetti {
    0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
  }
  .animate-confetti {
    animation: confetti linear forwards;
  }
`;
document.head.appendChild(style);

export default App;
