import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, Clock, Target, Zap, Brain, 
  ChevronDown, ChevronUp, BarChart3, Activity, Filter, Search, Bell,
  Download, Settings, RefreshCw, Volume2, PieChart, Shield, TrendingUp as ChartLine,
  Users, DollarSign, Globe, Smartphone, Maximize2, Minimize2, Star, X, Menu,
  Home, Heart, LineChart, Cog, ExternalLink, Database, Cpu, BarChart2,
  Cloud, Wifi, WifiOff, Battery, BatteryCharging, Thermometer, Moon, Sun,
  TrendingDown as Bear, Lock, Unlock, Eye, EyeOff, Radio, Satellite, Radar,
  Activity as Pulse, Wind, ThermometerSun, CloudRain, CloudLightning,
  Cast, Airplay, Bluetooth, Server, HardDrive, Cctv, Fingerprint, Key,
  Rocket, Sparkles, Target as Crosshair, Swords, Shield as ShieldCheck,
  Award, Trophy, Crown, Gem, Diamond, Coins, Wallet, CreditCard, Bitcoin,
  MessageSquare, PhoneCall, Video, Mail, BellRing, Siren, Siren as Alarm,
  VolumeX, Volume1, Volume2 as VolumeHigh, Mic, MicOff, Headphones,
  Music, Play, Pause, StopCircle, SkipBack, SkipForward, RotateCcw,
  Calendar, Map, Navigation, Compass, Globe2, MapPin, Layers, Grid,
  Cpu as Processor, MemoryStick, HardDrive as Storage, Router,
  Database as Data, Binary, Code, Terminal, Cursor, MousePointerClick,
  Hand, HandMetal, FishSymbol, Anchor, Ship, Plane, Car, Train, Bike,
  Skull, Ghost, Alien, Gamepad2, Dice5, Puzzle, BrainCircuit, Atom,
  FlaskConical, Beaker, TestTube, Microscope, Telescope, SatelliteDish,
  Earthquake, Volcano, Tornado, Hurricane, Snowflake, Umbrella, SunDim,
  Droplets, Flame, TreePine, Leaf, Sprout, Flower2, Bone, HeartPulse,
  Stethoscope, Pill, Syringe, Scan, ScanFace, QrCode, Barcode, KeySquare,
  ShieldOff, ShieldQuestion, ShieldAlert, ShieldPlus, ShieldMinus,
  Sword, Axe, Hammer, Wrench, Nut, Bolt, Cog as Gear, Sliders,
  ToggleLeft, ToggleRight, SwitchCamera, Camera, CameraOff, VideoOff,
  Mic2, Voicemail, PhoneOff, PhoneForwarded, PhoneIncoming, PhoneOutgoing,
  PhoneMissed, Phone as PhoneCall2, MessageCircle, MessageSquarePlus,
  Send, Inbox, Archive, Trash2, Folder, FolderOpen, File, FileText,
  FileCode, FileSpreadsheet, FileImage, FileAudio, FileVideo,
  BookOpen, Bookmark, BookmarkCheck, BookmarkPlus, BookmarkMinus,
  Clipboard, ClipboardCheck, ClipboardCopy, ClipboardList, ClipboardX,
  CalendarDays, CalendarCheck, CalendarClock, CalendarPlus, CalendarMinus,
  Timer, TimerReset, TimerOff, Hourglass, Watch, AlarmClock, AlarmClockCheck,
  AlarmClockMinus, AlarmClockOff, AlarmClockPlus, BellDot, BellMinus,
  BellPlus, BellRing as BellRing2, BellOff, Megaphone, MegaphoneOff,
  Broadcast, RadioTower, Satellite as Satellite2, Signal, SignalHigh,
  SignalLow, SignalZero, Wifi as Wifi2, WifiOff as WifiOff2, Bluetooth as Bluetooth2,
  Usb, Plug, PlugZap, Power, PowerOff, Battery as Battery2, BatteryCharging as BatteryCharging2,
  BatteryFull, BatteryMedium, BatteryLow, BatteryWarning, Cpu as Cpu2,
  MemoryStick as Ram, HardDrive as Hdd, Database as Database2, Server as Server2,
  Router as Router2, Cloud as Cloud2, CloudOff, CloudDrizzle, CloudLightning as CloudLightning2,
  CloudSnow, CloudRain as CloudRain2, CloudFog, CloudSun, CloudMoon,
  Cloudy, Sunrise, Sunset, Moon as Moon2, Sun as Sun2, Star as Star2,
  Planet, Satellite as Satellite3, Rocket as Rocket2, UFO, Meteor,
  Sparkles as Sparkles2, Fire, Droplet, Waves, Mountain, Tree,
  Tent, Factory, Warehouse, Home as Home2, Building, Building2,
  Bank, Hospital, School, Store, ShoppingCart, ShoppingBag, Tag,
  Ticket, Percent, IndianRupee, DollarSign as Dollar, Euro, PoundSterling,
  Yen, Bitcoin as Bitcoin2, Ethereum, Litecoin, Dogecoin, CreditCard as CreditCard2,
  Wallet as Wallet2, Receipt, ReceiptText, Calculator
} from 'lucide-react';

// Import for Charts
import { 
  LineChart as RechartsLineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart as RechartsPie, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart, 
  Area, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar as RechartsRadar
} from 'recharts';

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
  
  // Advanced State Variables
  const [connectionStatus] = useState('connected');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [themeColor, setThemeColor] = useState('emerald');
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [gridView, setGridView] = useState(false);
  const [neuralNetworkMode, setNeuralNetworkMode] = useState(false);
  const [cyberpunkMode, setCyberpunkMode] = useState(false);
  const [quantumMode, setQuantumMode] = useState(false);
  const [aiAssistantActive, setAiAssistantActive] = useState(false);
  const [voiceCommands, setVoiceCommands] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(true);
  const [darkWebMonitoring, setDarkWebMonitoring] = useState(false);
  const [satelliteView, setSatelliteView] = useState(false);
  const [predictionAccuracy, setPredictionAccuracy] = useState(87.3);
  const [marketTemperature, setMarketTemperature] = useState(72);
  const [quantumEntanglement, setQuantumEntanglement] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState([]);
  const [cryptoMining, setCryptoMining] = useState(false);
  const [blockchainSync, setBlockchainSync] = useState(85);
  const [quantumBits, setQuantumBits] = useState([]);
  const [cyberAttackDetected, setCyberAttackDetected] = useState(false);
  const [aiInsights, setAiInsights] = useState([]);
  const [tradingBotsActive, setTradingBotsActive] = useState(3);
  const [timeTravelMode, setTimeTravelMode] = useState(false);
  const [parallelUniverse, setParallelUniverse] = useState(0);
  const [wormholeOpen, setWormholeOpen] = useState(false);
  
  // Settings state
  const [refreshInterval, setRefreshInterval] = useState('Manual');
  const [defaultCurrency, setDefaultCurrency] = useState('Indian Rupees (₹)');
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [signalAlerts, setSignalAlerts] = useState(true);
  
  const mainRef = useRef(null);
  const searchInputRef = useRef(null);

  // Generate Quantum Bits
  useEffect(() => {
    if (quantumMode) {
      const interval = setInterval(() => {
        setQuantumBits(prev => {
          const newBits = Array.from({length: 5}, () => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            state: Math.random() > 0.5 ? '|0⟩' : '|1⟩',
            spin: Math.random() * 360
          }));
          return newBits.slice(0, 20);
        });
      }, 300000);
      return () => clearInterval(interval);
    }
  }, [quantumMode]);

  // Generate Neural Activity
  useEffect(() => {
    if (neuralNetworkMode) {
      const interval = setInterval(() => {
        setNeuralActivity(prev => {
          const newActivity = Array.from({length: 10}, (_, i) => ({
            id: Date.now() + i,
            intensity: Math.random() * 100,
            layer: Math.floor(Math.random() * 5),
            timestamp: Date.now()
          }));
          return [...newActivity, ...prev].slice(0, 50);
        });
      }, 300000);
      return () => clearInterval(interval);
    }
  }, [neuralNetworkMode]);

  // Quantum Entanglement Effect
  useEffect(() => {
    if (quantumMode) {
      const interval = setInterval(() => {
        setQuantumEntanglement(prev => (prev + 1) % 100);
      }, 300000);
      return () => clearInterval(interval);
    }
  }, [quantumMode]);

  // Market Temperature Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketTemperature(prev => {
        const change = (Math.random() - 0.5) * 2;
        return Math.min(100, Math.max(0, prev + change));
      });
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  // Generate AI Insights
  useEffect(() => {
    const insights = [
      "Market showing fractal pattern in 4H timeframe",
      "Dark pool accumulation detected in banking sector",
      "Quantum resistance forming at 15,800 level",
      "Neural network predicts 78% probability of breakout",
      "Blockchain analysis shows institutional buying",
      "Time series anomaly detected in Asian session",
      "Sentiment analysis turning bullish across forums",
      "AI detects hidden support at Fibonacci 0.618",
      "Quantum computing model suggests trend reversal",
      "Neural oscillator showing overbought conditions"
    ];
    
    const interval = setInterval(() => {
      setAiInsights(prev => {
        const newInsight = insights[Math.floor(Math.random() * insights.length)];
        if (prev.length === 0 || prev[0]?.text !== newInsight) {
          return [{ id: Date.now(), text: newInsight, time: new Date().toLocaleTimeString() }, ...prev.slice(0, 4)];
        }
        return prev;
      });
    }, 300000);
    
    return () => clearInterval(interval);
  }, []);

  // Performance optimization - useMemo for expensive calculations
  const generateAdvancedData = useCallback(() => {
    const stocks = [
          // === TOP 75 LARGE CAP INDIAN STOCKS ===
      { symbol: 'RELIANCE', name: 'Reliance Industries', sector: 'Energy/Retail', basePrice: 1560.60, baseChange: 0.15, marketCap: '21,09,105', weekHigh: 1581.30 },
      { symbol: 'TCS', name: 'TCS', sector: 'IT Services', basePrice: 3276.80, baseChange: -1.27, marketCap: '11,86,835', weekHigh: 4322.95 },
      { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Banking', basePrice: 992.00, baseChange: -0.52, marketCap: '7,60,379', weekHigh: 1020.50 },
      { symbol: 'BHARTIARTL', name: 'Bharti Airtel', sector: 'Telecom', basePrice: 2106.00, baseChange: -0.83, marketCap: '12,61,762', weekHigh: 2174.50 },
      { symbol: 'ICICIBANK', name: 'ICICI Bank', sector: 'Banking', basePrice: 1351.00, baseChange: -0.65, marketCap: '9,62,840', weekHigh: 1500.00 },
      { symbol: 'SBIN', name: 'State Bank of India', sector: 'Banking', basePrice: 966.50, baseChange: -0.25, marketCap: '8,92,046', weekHigh: 999.00 },
      { symbol: 'INFY', name: 'Infosys', sector: 'IT Services', basePrice: 1657.00, baseChange: -0.38, marketCap: '6,86,108', weekHigh: 1982.80 },
      { symbol: 'LICI', name: 'LIC of India', sector: 'Insurance', basePrice: 850.00, baseChange: -0.35, marketCap: '5,38,000', weekHigh: 925.00 },
      { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', sector: 'FMCG', basePrice: 2400.00, baseChange: 0.25, marketCap: '5,64,000', weekHigh: 2550.00 },
      { symbol: 'ITC', name: 'ITC', sector: 'FMCG/Cigarettes', basePrice: 430.00, baseChange: 0.12, marketCap: '5,37,500', weekHigh: 460.00 },
      { symbol: 'LT', name: 'Larsen & Toubro', sector: 'Engineering', basePrice: 3200.00, baseChange: 0.78, marketCap: '4,40,000', weekHigh: 3450.00 },
      { symbol: 'BAJFINANCE', name: 'Bajaj Finance', sector: 'NBFC', basePrice: 7200.00, baseChange: 0.45, marketCap: '4,45,210', weekHigh: 7500.00 },
      { symbol: 'ADANIENT', name: 'Adani Enterprises', sector: 'Conglomerate', basePrice: 3000.00, baseChange: 1.25, marketCap: '3,45,000', weekHigh: 3200.00 },
      { symbol: 'AXISBANK', name: 'Axis Bank', sector: 'Banking', basePrice: 1050.00, baseChange: -0.42, marketCap: '3,24,450', weekHigh: 1150.00 },
      { symbol: 'MARUTI', name: 'Maruti Suzuki', sector: 'Automobile', basePrice: 10500.00, baseChange: -0.65, marketCap: '3,17,625', weekHigh: 11500.00 },
      { symbol: 'SUNPHARMA', name: 'Sun Pharma', sector: 'Pharma', basePrice: 1250.00, baseChange: 0.32, marketCap: '3,00,000', weekHigh: 1350.00 },
      { symbol: 'TITAN', name: 'Titan Company', sector: 'Consumer Goods', basePrice: 3500.00, baseChange: 0.55, marketCap: '3,10,000', weekHigh: 3750.00 },
      { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', sector: 'Cement', basePrice: 9500.00, baseChange: -0.28, marketCap: '2,74,550', weekHigh: 10200.00 },
      { symbol: 'ASIANPAINT', name: 'Asian Paints', sector: 'Consumer Goods', basePrice: 2850.00, baseChange: -0.15, marketCap: '2,73,000', weekHigh: 3300.00 },
      { symbol: 'WIPRO', name: 'Wipro', sector: 'IT Services', basePrice: 520.40, baseChange: 0.45, marketCap: '2,72,000', weekHigh: 545.00 },
      { symbol: 'HCLTECH', name: 'HCL Technologies', sector: 'IT Services', basePrice: 1250.00, baseChange: -0.48, marketCap: '3,39,000', weekHigh: 1450.00 },
      { symbol: 'M&M', name: 'Mahindra & Mahindra', sector: 'Automobile', basePrice: 1800.00, baseChange: 0.88, marketCap: '2,22,000', weekHigh: 1950.00 },
      { symbol: 'NTPC', name: 'NTPC', sector: 'Power', basePrice: 320.00, baseChange: 0.18, marketCap: '3,10,400', weekHigh: 340.00 },
      { symbol: 'POWERGRID', name: 'Power Grid', sector: 'Power', basePrice: 280.00, baseChange: -0.10, marketCap: '2,60,000', weekHigh: 310.00 },
      { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', sector: 'Banking', basePrice: 1750.00, baseChange: -0.30, marketCap: '3,48,000', weekHigh: 1900.00 },
      { symbol: 'TATASTEEL', name: 'Tata Steel', sector: 'Metals', basePrice: 150.00, baseChange: 1.10, marketCap: '1,85,000', weekHigh: 170.00 },
      { symbol: 'JSWSTEEL', name: 'JSW Steel', sector: 'Metals', basePrice: 900.00, baseChange: 0.40, marketCap: '2,15,000', weekHigh: 950.00 },
      { symbol: 'ADANIPORTS', name: 'Adani Ports', sector: 'Infrastructure', basePrice: 1350.00, baseChange: 0.90, marketCap: '2,90,000', weekHigh: 1450.00 },
      { symbol: 'GRASIM', name: 'Grasim Industries', sector: 'Textiles/Cement', basePrice: 2200.00, baseChange: -0.45, marketCap: '1,50,000', weekHigh: 2400.00 },
      { symbol: 'NESTLEIND', name: 'Nestle India', sector: 'FMCG', basePrice: 2500.00, baseChange: 0.15, marketCap: '2,40,000', weekHigh: 2700.00 },
      { symbol: 'ONGC', name: 'ONGC', sector: 'Oil & Gas', basePrice: 260.00, baseChange: 0.60, marketCap: '3,25,000', weekHigh: 285.00 },
      { symbol: 'COALINDIA', name: 'Coal India', sector: 'Mining', basePrice: 450.00, baseChange: -0.20, marketCap: '2,75,000', weekHigh: 480.00 },
      { symbol: 'HINDALCO', name: 'Hindalco', sector: 'Metals', basePrice: 600.00, baseChange: 0.85, marketCap: '1,35,000', weekHigh: 640.00 },
      { symbol: 'TATAMOTORS', name: 'Tata Motors', sector: 'Automobile', basePrice: 950.00, baseChange: -1.20, marketCap: '3,15,000', weekHigh: 1050.00 },
      { symbol: 'SBILIFE', name: 'SBI Life Insurance', sector: 'Insurance', basePrice: 1450.00, baseChange: 0.35, marketCap: '1,45,000', weekHigh: 1550.00 },
      { symbol: 'HDFCLIFE', name: 'HDFC Life', sector: 'Insurance', basePrice: 650.00, baseChange: -0.10, marketCap: '1,38,000', weekHigh: 710.00 },
      { symbol: 'BPCL', name: 'BPCL', sector: 'Oil & Gas', basePrice: 600.00, baseChange: 0.75, marketCap: '1,30,000', weekHigh: 650.00 },
      { symbol: 'DRREDDY', name: 'Dr. Reddys', sector: 'Pharma', basePrice: 6200.00, baseChange: 0.25, marketCap: '1,05,000', weekHigh: 6500.00 },
      { symbol: 'CIPLA', name: 'Cipla', sector: 'Pharma', basePrice: 1450.00, baseChange: 0.15, marketCap: '1,15,000', weekHigh: 1550.00 },
      { symbol: 'DIVISLAB', name: 'Divis Lab', sector: 'Pharma', basePrice: 3800.00, baseChange: -0.50, marketCap: '1,00,000', weekHigh: 4200.00 },
      { symbol: 'APOLLOHOSP', name: 'Apollo Hospitals', sector: 'Healthcare', basePrice: 6100.00, baseChange: 0.80, marketCap: '88,000', weekHigh: 6500.00 },
      { symbol: 'BAJAJ-AUTO', name: 'Bajaj Auto', sector: 'Automobile', basePrice: 8500.00, baseChange: 1.10, marketCap: '2,40,000', weekHigh: 9000.00 },
      { symbol: 'EICHERMOT', name: 'Eicher Motors', sector: 'Automobile', basePrice: 4200.00, baseChange: -0.30, marketCap: '1,15,000', weekHigh: 4500.00 },
      { symbol: 'BRITANNIA', name: 'Britannia', sector: 'FMCG', basePrice: 5000.00, baseChange: 0.20, marketCap: '1,20,000', weekHigh: 5300.00 },
      { symbol: 'INDUSINDBK', name: 'IndusInd Bank', sector: 'Banking', basePrice: 1450.00, baseChange: -0.90, marketCap: '1,12,000', weekHigh: 1600.00 },
      { symbol: 'TECHM', name: 'Tech Mahindra', sector: 'IT Services', basePrice: 1300.00, baseChange: 0.55, marketCap: '1,25,000', weekHigh: 1450.00 },
      { symbol: 'HEROMOTOCO', name: 'Hero MotoCorp', sector: 'Automobile', basePrice: 4500.00, baseChange: 0.35, marketCap: '90,000', weekHigh: 4900.00 },
      { symbol: 'SHREECEM', name: 'Shree Cement', sector: 'Cement', basePrice: 25000.00, baseChange: -0.15, marketCap: '90,000', weekHigh: 28000.00 },
      { symbol: 'ADANIGREEN', name: 'Adani Green', sector: 'Energy', basePrice: 1800.00, baseChange: 1.45, marketCap: '2,80,000', weekHigh: 2000.00 },
      { symbol: 'ADANITRANS', name: 'Adani Energy Sol', sector: 'Power', basePrice: 1100.00, baseChange: 0.70, marketCap: '1,25,000', weekHigh: 1250.00 },
      { symbol: 'DMART', name: 'Avenue Supermarts', sector: 'Retail', basePrice: 4500.00, baseChange: -0.25, marketCap: '2,90,000', weekHigh: 4800.00 },
      { symbol: 'BAJAJHLDNG', name: 'Bajaj Holdings', sector: 'Finance', basePrice: 8200.00, baseChange: 0.10, marketCap: '92,000', weekHigh: 8800.00 },
      { symbol: 'DLF', name: 'DLF', sector: 'Real Estate', basePrice: 850.00, baseChange: 1.20, marketCap: '2,10,000', weekHigh: 950.00 },
      { symbol: 'HAL', name: 'Hindustan Aero', sector: 'Defense', basePrice: 4200.00, baseChange: 2.10, marketCap: '2,80,000', weekHigh: 4500.00 },
      { symbol: 'BEL', name: 'Bharat Electronics', sector: 'Defense', basePrice: 280.00, baseChange: 1.80, marketCap: '2,05,000', weekHigh: 310.00 },
      { symbol: 'SIEMENS', name: 'Siemens', sector: 'Engineering', basePrice: 6500.00, baseChange: 0.90, marketCap: '2,30,000', weekHigh: 7200.00 },
      { symbol: 'IRFC', name: 'IRFC', sector: 'Finance', basePrice: 175.00, baseChange: 1.50, marketCap: '2,25,000', weekHigh: 220.00 },
      { symbol: 'IOC', name: 'Indian Oil', sector: 'Oil & Gas', basePrice: 165.00, baseChange: -0.40, marketCap: '2,30,000', weekHigh: 190.00 },
      { symbol: 'ZOMATO', name: 'Zomato', sector: 'Internet', basePrice: 260.00, baseChange: 2.50, marketCap: '2,30,000', weekHigh: 298.00 },
      { symbol: 'JIOFIN', name: 'Jio Financial', sector: 'Finance', basePrice: 350.00, baseChange: 0.80, marketCap: '2,20,000', weekHigh: 390.00 },
      { symbol: 'GAIL', name: 'GAIL', sector: 'Gas', basePrice: 210.00, baseChange: 0.35, marketCap: '1,38,000', weekHigh: 235.00 },
      { symbol: 'PFC', name: 'PFC', sector: 'Finance', basePrice: 480.00, baseChange: 1.15, marketCap: '1,25,000', weekHigh: 550.00 },
      { symbol: 'RECLTD', name: 'REC Ltd', sector: 'Finance', basePrice: 520.00, baseChange: 0.95, marketCap: '1,35,000', weekHigh: 600.00 },
      { symbol: 'VBL', name: 'Varun Beverages', sector: 'FMCG', basePrice: 650.00, baseChange: 0.60, marketCap: '2,10,000', weekHigh: 700.00 },
      { symbol: 'GODREJCP', name: 'Godrej Consumer', sector: 'FMCG', basePrice: 1250.00, baseChange: -0.15, marketCap: '1,28,000', weekHigh: 1400.00 },
      { symbol: 'PIDILITIND', name: 'Pidilite', sector: 'Chemicals', basePrice: 3100.00, baseChange: 0.40, marketCap: '1,55,000', weekHigh: 3300.00 },
      { symbol: 'TRENT', name: 'Trent', sector: 'Retail', basePrice: 7000.00, baseChange: 3.20, marketCap: '2,50,000', weekHigh: 7800.00 },
      { symbol: 'TATACONSUM', name: 'Tata Consumer', sector: 'FMCG', basePrice: 1100.00, baseChange: -0.25, marketCap: '1,05,000', weekHigh: 1250.00 },
      { symbol: 'AMBUJACEM', name: 'Ambuja Cement', sector: 'Cement', basePrice: 630.00, baseChange: 0.50, marketCap: '1,55,000', weekHigh: 700.00 },
      { symbol: 'ABB', name: 'ABB India', sector: 'Engineering', basePrice: 7800.00, baseChange: 1.10, marketCap: '1,65,000', weekHigh: 8500.00 },
      { symbol: 'CANBK', name: 'Canara Bank', sector: 'Banking', basePrice: 115.00, baseChange: -0.30, marketCap: '1,05,000', weekHigh: 130.00 },
      { symbol: 'PNB', name: 'PNB', sector: 'Banking', basePrice: 125.00, baseChange: -0.80, marketCap: '1,35,000', weekHigh: 145.00 },
      { symbol: 'BANKBARODA', name: 'Bank of Baroda', sector: 'Banking', basePrice: 250.00, baseChange: -0.20, marketCap: '1,30,000', weekHigh: 290.00 },
      { symbol: 'VEDL', name: 'Vedanta', sector: 'Mining', basePrice: 450.00, baseChange: 1.40, marketCap: '1,65,000', weekHigh: 500.00 },
      { symbol: 'CHOLAFIN', name: 'Cholamandalam', sector: 'NBFC', basePrice: 1350.00, baseChange: 0.65, marketCap: '1,12,000', weekHigh: 1500.00 },

      // === TOP 50 MID CAP INDIAN STOCKS ===
      { symbol: 'YESBANK', name: 'Yes Bank', sector: 'Banking', basePrice: 25.40, baseChange: 1.20, marketCap: '78,500', weekHigh: 32.00 },
      { symbol: 'IDFCFIRSTB', name: 'IDFC First Bank', sector: 'Banking', basePrice: 82.15, baseChange: -0.40, marketCap: '58,200', weekHigh: 100.00 },
      { symbol: 'RVNL', name: 'Rail Vikas Nigam', sector: 'Railways', basePrice: 480.00, baseChange: 2.50, marketCap: '1,00,000', weekHigh: 600.00 },
      { symbol: 'IREDA', name: 'IREDA', sector: 'Finance', basePrice: 220.50, baseChange: 1.15, marketCap: '60,000', weekHigh: 310.00 },
      { symbol: 'TATAELXSI', name: 'Tata Elxsi', sector: 'IT Services', basePrice: 7200.00, baseChange: -0.80, marketCap: '45,000', weekHigh: 9200.00 },
      { symbol: 'MAZDOCK', name: 'Mazagon Dock', sector: 'Defense', basePrice: 4200.00, baseChange: 3.50, marketCap: '85,000', weekHigh: 5800.00 },
      { symbol: 'COCHINSHIP', name: 'Cochin Shipyard', sector: 'Defense', basePrice: 1500.00, baseChange: 2.80, marketCap: '40,000', weekHigh: 2900.00 },
      { symbol: 'NHPC', name: 'NHPC', sector: 'Power', basePrice: 95.00, baseChange: 0.45, marketCap: '95,000', weekHigh: 118.00 },
      { symbol: 'SJVN', name: 'SJVN', sector: 'Power', basePrice: 135.00, baseChange: 1.20, marketCap: '53,000', weekHigh: 170.00 },
      { symbol: 'POLYCAB', name: 'Polycab India', sector: 'Cables', basePrice: 6500.00, baseChange: 0.75, marketCap: '98,000', weekHigh: 7500.00 },
      { symbol: 'KEI', name: 'KEI Industries', sector: 'Cables', basePrice: 4200.00, baseChange: 1.10, marketCap: '38,000', weekHigh: 4800.00 },
      { symbol: 'PERSISTENT', name: 'Persistent Sys', sector: 'IT Services', basePrice: 4800.00, baseChange: 0.95, marketCap: '72,000', weekHigh: 5500.00 },
      { symbol: 'MPHASIS', name: 'Mphasis', sector: 'IT Services', basePrice: 2800.00, baseChange: -0.30, marketCap: '52,000', weekHigh: 3100.00 },
      { symbol: 'MAXHEALTH', name: 'Max Healthcare', sector: 'Healthcare', basePrice: 850.00, baseChange: 0.50, marketCap: '82,000', weekHigh: 950.00 },
      { symbol: 'LUPIN', name: 'Lupin', sector: 'Pharma', basePrice: 1900.00, baseChange: 0.65, marketCap: '86,000', weekHigh: 2200.00 },
      { symbol: 'AUROPHARMA', name: 'Aurobindo Pharma', sector: 'Pharma', basePrice: 1400.00, baseChange: 0.40, marketCap: '82,000', weekHigh: 1550.00 },
      { symbol: 'GLAND', name: 'Gland Pharma', sector: 'Pharma', basePrice: 1700.00, baseChange: -1.20, marketCap: '28,000', weekHigh: 2100.00 },
      { symbol: 'VOLTAS', name: 'Voltas', sector: 'Consumer Durables', basePrice: 1600.00, baseChange: 0.85, marketCap: '53,000', weekHigh: 1850.00 },
      { symbol: 'BLUESTARCO', name: 'Blue Star', sector: 'Consumer Durables', basePrice: 1550.00, baseChange: 1.10, marketCap: '32,000', weekHigh: 1700.00 },
      { symbol: 'DIXON', name: 'Dixon Tech', sector: 'Electronics', basePrice: 12500.00, baseChange: 2.45, marketCap: '75,000', weekHigh: 15000.00 },
      { symbol: 'CONCOR', name: 'CONCOR', sector: 'Logistics', basePrice: 900.00, baseChange: -0.15, marketCap: '55,000', weekHigh: 1100.00 },
      { symbol: 'DELHIVERY', name: 'Delhivery', sector: 'Logistics', basePrice: 400.00, baseChange: -0.80, marketCap: '30,000', weekHigh: 480.00 },
      { symbol: 'BHEL', name: 'BHEL', sector: 'Engineering', basePrice: 280.00, baseChange: 1.50, marketCap: '98,000', weekHigh: 335.00 },
      { symbol: 'CUMMINSIND', name: 'Cummins India', sector: 'Engineering', basePrice: 3500.00, baseChange: 0.40, marketCap: '97,000', weekHigh: 4000.00 },
      { symbol: 'JSWENERGY', name: 'JSW Energy', sector: 'Power', basePrice: 700.00, baseChange: 0.90, marketCap: '1,20,000', weekHigh: 750.00 },
      { symbol: 'OIL', name: 'Oil India', sector: 'Oil & Gas', basePrice: 550.00, baseChange: 1.25, marketCap: '60,000', weekHigh: 760.00 },
      { symbol: 'PETRONET', name: 'Petronet LNG', sector: 'Oil & Gas', basePrice: 310.00, baseChange: -0.45, marketCap: '46,000', weekHigh: 360.00 },
      { symbol: 'BALAMINES', name: 'Balaji Amines', sector: 'Chemicals', basePrice: 2200.00, baseChange: -1.10, marketCap: '7,000', weekHigh: 2800.00 },
      { symbol: 'SRF', name: 'SRF Ltd', sector: 'Chemicals', basePrice: 2300.00, baseChange: 0.35, marketCap: '68,000', weekHigh: 2600.00 },
      { symbol: 'TATACOMM', name: 'Tata Comm', sector: 'Telecom', basePrice: 1850.00, baseChange: -0.20, marketCap: '52,000', weekHigh: 2100.00 },
      { symbol: 'ITI', name: 'ITI Ltd', sector: 'Telecom', basePrice: 280.00, baseChange: 4.50, marketCap: '27,000', weekHigh: 380.00 },
      { symbol: 'OBEROIRLTY', name: 'Oberoi Realty', sector: 'Real Estate', basePrice: 1800.00, baseChange: 0.70, marketCap: '65,000', weekHigh: 2000.00 },
      { symbol: 'PHOENIXLTD', name: 'Phoenix Mills', sector: 'Real Estate', basePrice: 1600.00, baseChange: 1.15, marketCap: '57,000', weekHigh: 1800.00 },
      { symbol: 'PAGEIND', name: 'Page Industries', sector: 'Textiles', basePrice: 42000.00, baseChange: -0.40, marketCap: '47,000', weekHigh: 46000.00 },
      { symbol: 'KPRMILL', name: 'KPR Mill', sector: 'Textiles', basePrice: 900.00, baseChange: 0.25, marketCap: '30,000', weekHigh: 1000.00 },
      { symbol: 'NYKAA', name: 'FSN E-Commerce', sector: 'Internet', basePrice: 185.00, baseChange: 0.60, marketCap: '53,000', weekHigh: 230.00 },
      { symbol: 'POLICYBZR', name: 'PB Fintech', sector: 'Internet', basePrice: 1600.00, baseChange: 1.10, marketCap: '72,000', weekHigh: 1800.00 },
      { symbol: 'MRF', name: 'MRF', sector: 'Tyres', basePrice: 135000.00, baseChange: -0.10, marketCap: '57,000', weekHigh: 151000.00 },
      { symbol: 'BALKRISIND', name: 'Balkrishna Ind', sector: 'Tyres', basePrice: 2900.00, baseChange: 0.35, marketCap: '56,000', weekHigh: 3300.00 },
      { symbol: 'APOLLOTYRE', name: 'Apollo Tyres', sector: 'Tyres', basePrice: 500.00, baseChange: -0.45, marketCap: '32,000', weekHigh: 560.00 },
      { symbol: 'AUBANK', name: 'AU Small Finance', sector: 'Banking', basePrice: 650.00, baseChange: -0.80, marketCap: '48,000', weekHigh: 730.00 },
      { symbol: 'FEDERALBNK', name: 'Federal Bank', sector: 'Banking', basePrice: 190.00, baseChange: 0.25, marketCap: '46,000', weekHigh: 210.00 },
      { symbol: 'ASHOKLEY', name: 'Ashok Leyland', sector: 'Automobile', basePrice: 220.00, baseChange: 0.65, marketCap: '65,000', weekHigh: 260.00 },
      { symbol: 'ESCORTS', name: 'Escorts Kubota', sector: 'Automobile', basePrice: 3800.00, baseChange: -0.20, marketCap: '49,000', weekHigh: 4400.00 },
      { symbol: 'UBL', name: 'United Breweries', sector: 'Beverages', basePrice: 1950.00, baseChange: 0.40, marketCap: '51,000', weekHigh: 2200.00 },
      { symbol: 'TATAINVEST', name: 'Tata Investment', sector: 'Finance', basePrice: 6800.00, baseChange: 1.50, marketCap: '34,000', weekHigh: 9800.00 },
      { symbol: 'POONAWALLA', name: 'Poonawalla Fin', sector: 'NBFC', basePrice: 380.00, baseChange: -1.10, marketCap: '29,000', weekHigh: 520.00 },
      { symbol: 'LICHSGFIN', name: 'LIC Housing Fin', sector: 'Finance', basePrice: 620.00, baseChange: 0.20, marketCap: '34,000', weekHigh: 800.00 },
      { symbol: 'ABCAPITAL', name: 'Aditya Birla Cap', sector: 'Finance', basePrice: 210.00, baseChange: 0.45, marketCap: '55,000', weekHigh: 250.00 },

      // === TOP 50 SMALL CAP INDIAN STOCKS ===
      { symbol: 'SUZLON', name: 'Suzlon Energy', sector: 'Renewable', basePrice: 65.20, baseChange: -1.10, marketCap: '88,000', weekHigh: 86.00 },
      { symbol: 'JWL', name: 'Jupiter Wagons', sector: 'Railways', basePrice: 510.00, baseChange: 1.50, marketCap: '21,000', weekHigh: 700.00 },
      { symbol: 'TEXRAIL', name: 'Texmaco Rail', sector: 'Railways', basePrice: 210.00, baseChange: 2.10, marketCap: '8,500', weekHigh: 300.00 },
      { symbol: 'NBCC', name: 'NBCC India', sector: 'Construction', basePrice: 90.00, baseChange: 0.45, marketCap: '16,200', weekHigh: 200.00 },
      { symbol: 'HUDCO', name: 'HUDCO', sector: 'Finance', basePrice: 220.00, baseChange: 1.15, marketCap: '44,000', weekHigh: 350.00 },
      { symbol: 'RITES', name: 'RITES Ltd', sector: 'Railways', basePrice: 300.00, baseChange: 0.60, marketCap: '14,500', weekHigh: 410.00 },
      { symbol: 'IRCON', name: 'IRCON Intl', sector: 'Construction', basePrice: 230.00, baseChange: 1.80, marketCap: '21,500', weekHigh: 350.00 },
      { symbol: 'IFCI', name: 'IFCI Ltd', sector: 'Finance', basePrice: 65.00, baseChange: 3.20, marketCap: '17,000', weekHigh: 90.00 },
      { symbol: 'PPLPHARMA', name: 'Piramal Pharma', sector: 'Pharma', basePrice: 250.00, baseChange: 0.90, marketCap: '33,000', weekHigh: 310.00 },
      { symbol: 'EASEMYTRIP', name: 'Easy Trip Planners', sector: 'Online Travel', basePrice: 35.00, baseChange: -0.40, marketCap: '6,200', weekHigh: 54.00 },
      { symbol: 'GENUSPOWER', name: 'Genus Power', sector: 'Electricals', basePrice: 400.00, baseChange: 1.55, marketCap: '12,000', weekHigh: 480.00 },
      { symbol: 'PATELENG', name: 'Patel Engineering', sector: 'Construction', basePrice: 55.00, baseChange: 0.85, marketCap: '4,600', weekHigh: 79.00 },
      { symbol: 'PCJEWELLER', name: 'PC Jeweller', sector: 'Jewellery', basePrice: 150.00, baseChange: 4.95, marketCap: '7,000', weekHigh: 180.00 },
      { symbol: 'SOUTHBANK', name: 'South Indian Bank', sector: 'Banking', basePrice: 24.50, baseChange: -0.20, marketCap: '6,400', weekHigh: 39.00 },
      { symbol: 'UCOBANK', name: 'UCO Bank', sector: 'Banking', basePrice: 45.00, baseChange: 0.10, marketCap: '54,000', weekHigh: 70.00 },
      { symbol: 'IOB', name: 'Indian Overseas', sector: 'Banking', basePrice: 58.00, baseChange: -0.15, marketCap: '1,10,000', weekHigh: 84.00 },
      { symbol: 'MANAPPURAM', name: 'Manappuram Fin', sector: 'Finance', basePrice: 160.00, baseChange: -2.10, marketCap: '13,500', weekHigh: 230.00 },
      { symbol: 'MGL', name: 'Mahanagar Gas', sector: 'Gas', basePrice: 1450.00, baseChange: 0.40, marketCap: '14,000', weekHigh: 1900.00 },
      { symbol: 'CASTROLIND', name: 'Castrol India', sector: 'Oil', basePrice: 210.00, baseChange: 0.25, marketCap: '20,000', weekHigh: 275.00 },
      { symbol: 'RPOWER', name: 'Reliance Power', sector: 'Power', basePrice: 35.00, baseChange: 1.45, marketCap: '14,000', weekHigh: 54.00 },
      { symbol: 'RTNPOWER', name: 'RattanIndia Power', sector: 'Power', basePrice: 14.50, baseChange: 0.80, marketCap: '7,800', weekHigh: 21.00 },
      { symbol: 'INFIBEAM', name: 'Infibeam Avenues', sector: 'Fintech', basePrice: 28.00, baseChange: -0.35, marketCap: '7,800', weekHigh: 42.00 },
      { symbol: 'RENUKA', name: 'Shree Renuka Sugars', sector: 'Sugar', basePrice: 42.00, baseChange: -0.10, marketCap: '8,900', weekHigh: 55.00 },
      { symbol: 'EIDPARRY', name: 'EID Parry', sector: 'Sugar/Agri', basePrice: 800.00, baseChange: 0.55, marketCap: '14,200', weekHigh: 900.00 },
      { symbol: 'TATACOFFEE', name: 'Tata Coffee', sector: 'Tea/Coffee', basePrice: 350.00, baseChange: 0.20, marketCap: '6,500', weekHigh: 400.00 },
      { symbol: 'HBLPOWER', name: 'HBL Power', sector: 'Electricals', basePrice: 600.00, baseChange: 1.10, marketCap: '16,600', weekHigh: 710.00 },
      { symbol: 'GRAVITA', name: 'Gravita India', sector: 'Recycling', basePrice: 2100.00, baseChange: 0.95, marketCap: '14,500', weekHigh: 2600.00 },
      { symbol: 'RAILTEL', name: 'Railtel Corp', sector: 'Telecom', basePrice: 400.00, baseChange: 1.25, marketCap: '12,800', weekHigh: 615.00 },
      { symbol: 'ZENSARTECH', name: 'Zensar Tech', sector: 'IT Services', basePrice: 750.00, baseChange: 0.40, marketCap: '17,000', weekHigh: 850.00 },
      { symbol: 'KPITTECH', name: 'KPIT Tech', sector: 'IT/Auto', basePrice: 1400.00, baseChange: -0.65, marketCap: '38,000', weekHigh: 1900.00 },
      { symbol: 'TANLA', name: 'Tanla Platforms', sector: 'Cloud Comm', basePrice: 850.00, baseChange: -1.20, marketCap: '11,400', weekHigh: 1100.00 },
      { symbol: 'NAZARA', name: 'Nazara Tech', sector: 'Gaming', basePrice: 950.00, baseChange: 0.35, marketCap: '7,300', weekHigh: 1100.00 },
      { symbol: 'HFCL', name: 'HFCL Ltd', sector: 'Telecom', basePrice: 120.00, baseChange: 1.10, marketCap: '17,400', weekHigh: 170.00 },
      { symbol: 'PRINCEPIPE', name: 'Prince Pipes', sector: 'Pipes', basePrice: 500.00, baseChange: -0.40, marketCap: '5,500', weekHigh: 780.00 },
      { symbol: 'SUPREMEIND', name: 'Supreme Ind', sector: 'Plastics', basePrice: 4500.00, baseChange: 0.15, marketCap: '57,000', weekHigh: 6300.00 },
      { symbol: 'BSOFT', name: 'Birlasoft', sector: 'IT Services', basePrice: 600.00, baseChange: 0.25, marketCap: '16,500', weekHigh: 850.00 },
      { symbol: 'HAPPYFORGE', name: 'Happy Forgings', sector: 'Auto Parts', basePrice: 1100.00, baseChange: 0.70, marketCap: '10,400', weekHigh: 1300.00 },
      { symbol: 'CAMS', name: 'CAMS Ltd', sector: 'Finance', basePrice: 4400.00, baseChange: 1.45, marketCap: '21,500', weekHigh: 4900.00 },
      { symbol: 'CDSL', name: 'CDSL', sector: 'Finance', basePrice: 1500.00, baseChange: 2.10, marketCap: '31,500', weekHigh: 1750.00 },
      { symbol: 'KAYNES', name: 'Kaynes Tech', sector: 'Electronics', basePrice: 5500.00, baseChange: 1.15, marketCap: '35,000', weekHigh: 6000.00 },
      { symbol: 'SULA', name: 'Sula Vineyards', sector: 'Alcohol', basePrice: 450.00, baseChange: -0.10, marketCap: '3,800', weekHigh: 699.00 },
      { symbol: 'NETWEB', name: 'Netweb Tech', sector: 'IT/Server', basePrice: 2800.00, baseChange: 1.95, marketCap: '15,600', weekHigh: 3100.00 },
      { symbol: 'AETHER', name: 'Aether Ind', sector: 'Chemicals', basePrice: 900.00, baseChange: -0.50, marketCap: '11,500', weekHigh: 1100.00 },
      { symbol: 'TMB', name: 'Tamilnad Merc', sector: 'Banking', basePrice: 480.00, baseChange: 0.15, marketCap: '7,600', weekHigh: 580.00 },
      { symbol: 'KARURVYSYA', name: 'Karur Vysya', sector: 'Banking', basePrice: 210.00, baseChange: 0.45, marketCap: '16,800', weekHigh: 235.00 },
      { symbol: 'GRSE', name: 'Garden Reach', sector: 'Defense', basePrice: 1400.00, baseChange: 2.25, marketCap: '16,000', weekHigh: 2800.00 },
      { symbol: 'BDL', name: 'Bharat Dynamics', sector: 'Defense', basePrice: 1100.00, baseChange: 1.40, marketCap: '40,000', weekHigh: 1650.00 },
      { symbol: 'DATA-PATTERNS', name: 'Data Patterns', sector: 'Defense', basePrice: 2500.00, baseChange: 0.85, marketCap: '14,000', weekHigh: 3600.00 },
      { symbol: 'MTARTECH', name: 'MTAR Tech', sector: 'Defense/Energy', basePrice: 1800.00, baseChange: -0.30, marketCap: '5,500', weekHigh: 2900.00 },
      { symbol: 'SANGHVIMOV', name: 'Sanghvi Movers', sector: 'Infra', basePrice: 800.00, baseChange: 0.50, marketCap: '3,500', weekHigh: 1500.00 },

      // === TOP 50 CRYPTO COINS ===
      { symbol: 'BTC', name: 'Bitcoin', sector: 'Blockchain', basePrice: 95500.00, baseChange: 1.25, marketCap: '1.8T', weekHigh: 99000.00 },
      { symbol: 'ETH', name: 'Ethereum', sector: 'Smart Contract', basePrice: 3450.00, baseChange: 0.85, marketCap: '415B', weekHigh: 4000.00 },
      { symbol: 'SOL', name: 'Solana', sector: 'Smart Contract', basePrice: 240.00, baseChange: 3.50, marketCap: '110B', weekHigh: 260.00 },
      { symbol: 'BNB', name: 'Binance Coin', sector: 'Exchange', basePrice: 620.00, baseChange: -0.20, marketCap: '95B', weekHigh: 720.00 },
      { symbol: 'XRP', name: 'Ripple', sector: 'Payments', basePrice: 2.50, baseChange: 15.20, marketCap: '140B', weekHigh: 2.90 },
      { symbol: 'ADA', name: 'Cardano', sector: 'Blockchain', basePrice: 1.10, baseChange: 5.40, marketCap: '38B', weekHigh: 1.30 },
      { symbol: 'DOGE', name: 'Dogecoin', sector: 'Meme', basePrice: 0.38, baseChange: -2.10, marketCap: '55B', weekHigh: 0.45 },
      { symbol: 'AVAX', name: 'Avalanche', sector: 'Smart Contract', basePrice: 45.00, baseChange: 1.15, marketCap: '18B', weekHigh: 60.00 },
      { symbol: 'DOT', name: 'Polkadot', sector: 'Interoperability', basePrice: 9.50, baseChange: 0.65, marketCap: '14B', weekHigh: 12.00 },
      { symbol: 'TRX', name: 'TRON', sector: 'Blockchain', basePrice: 0.22, baseChange: 0.10, marketCap: '19B', weekHigh: 0.25 },
      { symbol: 'LINK', name: 'Chainlink', sector: 'Oracle', basePrice: 22.00, baseChange: 1.45, marketCap: '14B', weekHigh: 28.00 },
      { symbol: 'MATIC', name: 'Polygon', sector: 'Layer 2', basePrice: 0.60, baseChange: 0.80, marketCap: '6B', weekHigh: 1.20 },
      { symbol: 'SHIB', name: 'Shiba Inu', sector: 'Meme', basePrice: 0.00003, baseChange: -1.50, marketCap: '18B', weekHigh: 0.00004 },
      { symbol: 'LTC', name: 'Litecoin', sector: 'Payments', basePrice: 120.00, baseChange: 2.20, marketCap: '9B', weekHigh: 140.00 },
      { symbol: 'BCH', name: 'Bitcoin Cash', sector: 'Payments', basePrice: 550.00, baseChange: 1.10, marketCap: '11B', weekHigh: 700.00 },
      { symbol: 'NEAR', name: 'Near Protocol', sector: 'Blockchain', basePrice: 7.50, baseChange: 3.10, marketCap: '8B', weekHigh: 9.00 },
      { symbol: 'ICP', name: 'Internet Computer', sector: 'Cloud', basePrice: 12.00, baseChange: 0.40, marketCap: '5B', weekHigh: 20.00 },
      { symbol: 'FIL', name: 'Filecoin', sector: 'Storage', basePrice: 6.50, baseChange: -0.50, marketCap: '3B', weekHigh: 11.00 },
      { symbol: 'UNI', name: 'Uniswap', sector: 'DEX', basePrice: 12.50, baseChange: 4.20, marketCap: '7B', weekHigh: 16.00 },
      { symbol: 'PEPE', name: 'Pepe', sector: 'Meme', basePrice: 0.00002, baseChange: 12.50, marketCap: '8B', weekHigh: 0.00003 },
      { symbol: 'STX', name: 'Stacks', sector: 'Bitcoin Layer', basePrice: 2.20, baseChange: 1.80, marketCap: '3B', weekHigh: 3.80 },
      { symbol: 'APT', name: 'Aptos', sector: 'Blockchain', basePrice: 13.00, baseChange: 0.90, marketCap: '6B', weekHigh: 19.00 },
      { symbol: 'SUI', name: 'Sui', sector: 'Blockchain', basePrice: 3.80, baseChange: 5.60, marketCap: '10B', weekHigh: 4.10 },
      { symbol: 'OP', name: 'Optimism', sector: 'Layer 2', basePrice: 2.50, baseChange: 2.10, marketCap: '3B', weekHigh: 4.80 },
      { symbol: 'ARB', name: 'Arbitrum', sector: 'Layer 2', basePrice: 0.95, baseChange: 1.10, marketCap: '4B', weekHigh: 2.40 },
      { symbol: 'AAVE', name: 'Aave', sector: 'Lending', basePrice: 220.00, baseChange: 3.40, marketCap: '3B', weekHigh: 280.00 },
      { symbol: 'MKR', name: 'Maker', sector: 'DeFi', basePrice: 1800.00, baseChange: 0.20, marketCap: '2B', weekHigh: 4000.00 },
      { symbol: 'RNDR', name: 'Render', sector: 'AI/Computing', basePrice: 8.50, baseChange: 4.50, marketCap: '3B', weekHigh: 13.00 },
      { symbol: 'GRT', name: 'The Graph', sector: 'Indexing', basePrice: 0.35, baseChange: 1.10, marketCap: '3B', weekHigh: 0.50 },
      { symbol: 'TAO', name: 'Bittensor', sector: 'AI', basePrice: 600.00, baseChange: 2.80, marketCap: '4B', weekHigh: 750.00 },
      { symbol: 'FET', name: 'Fetch.ai', sector: 'AI', basePrice: 1.80, baseChange: 3.10, marketCap: '4B', weekHigh: 3.40 },
      { symbol: 'JUP', name: 'Jupiter', sector: 'Solana Ecosystem', basePrice: 1.20, baseChange: 2.50, marketCap: '1B', weekHigh: 1.80 },
      { symbol: 'FLOKI', name: 'Floki', sector: 'Meme', basePrice: 0.00025, baseChange: 8.10, marketCap: '2B', weekHigh: 0.00035 },
      { symbol: 'BONK', name: 'Bonk', sector: 'Meme', basePrice: 0.00005, baseChange: 6.40, marketCap: '3B', weekHigh: 0.00006 },
      { symbol: 'TIA', name: 'Celestia', sector: 'Modular', basePrice: 8.50, baseChange: 0.50, marketCap: '2B', weekHigh: 20.00 },
      { symbol: 'WIF', name: 'Dogwifhat', sector: 'Meme', basePrice: 3.50, baseChange: 10.20, marketCap: '3B', weekHigh: 4.80 },
      { symbol: 'INJ', name: 'Injective', sector: 'DeFi', basePrice: 28.00, baseChange: 1.10, marketCap: '2B', weekHigh: 52.00 },
      { symbol: 'THETA', name: 'Theta Network', sector: 'Video', basePrice: 1.80, baseChange: 0.40, marketCap: '2B', weekHigh: 3.80 },
      { symbol: 'VET', name: 'VeChain', sector: 'Supply Chain', basePrice: 0.04, baseChange: 2.15, marketCap: '3B', weekHigh: 0.06 },
      { symbol: 'FTM', name: 'Fantom', sector: 'Blockchain', basePrice: 1.10, baseChange: 5.20, marketCap: '3B', weekHigh: 1.30 },
      { symbol: 'SEI', name: 'Sei', sector: 'DeFi', basePrice: 0.65, baseChange: 3.40, marketCap: '2B', weekHigh: 1.10 },
      { symbol: 'KAS', name: 'Kaspa', sector: 'Blockchain', basePrice: 0.18, baseChange: 1.10, marketCap: '4B', weekHigh: 0.22 },
      { symbol: 'XLM', name: 'Stellar', sector: 'Payments', basePrice: 0.55, baseChange: 15.40, marketCap: '16B', weekHigh: 0.65 },
      { symbol: 'HBAR', name: 'Hedera', sector: 'Blockchain', basePrice: 0.35, baseChange: 12.10, marketCap: '12B', weekHigh: 0.42 },
      { symbol: 'LDO', name: 'Lido', sector: 'Liquid Staking', basePrice: 1.50, baseChange: 0.80, marketCap: '1B', weekHigh: 4.00 },
      { symbol: 'PYTH', name: 'Pyth Network', sector: 'Oracle', basePrice: 0.50, baseChange: 2.10, marketCap: '1B', weekHigh: 1.10 },
      { symbol: 'ENA', name: 'Ethena', sector: 'Stablecoin', basePrice: 0.85, baseChange: 5.40, marketCap: '2B', weekHigh: 1.50 },
      { symbol: 'IMX', name: 'Immutable', sector: 'Gaming', basePrice: 1.90, baseChange: 0.30, marketCap: '3B', weekHigh: 3.50 },
      { symbol: 'BEAM', name: 'Beam', sector: 'Gaming', basePrice: 0.02, baseChange: 1.10, marketCap: '1B', weekHigh: 0.04 },
      { symbol: 'EGLD', name: 'MultiversX', sector: 'Blockchain', basePrice: 45.00, baseChange: 0.90, marketCap: '1B', weekHigh: 75.00 },

      // === TOP 50 FOREX PAIRS ===
      { symbol: 'USDINR', name: 'USD/INR', sector: 'Currency', basePrice: 84.45, baseChange: 0.05, marketCap: 'N/A', weekHigh: 84.60 },
      { symbol: 'EURUSD', name: 'EUR/USD', sector: 'Currency', basePrice: 1.05, baseChange: -0.12, marketCap: 'N/A', weekHigh: 1.10 },
      { symbol: 'GBPUSD', name: 'GBP/USD', sector: 'Currency', basePrice: 1.26, baseChange: 0.08, marketCap: 'N/A', weekHigh: 1.30 },
      { symbol: 'USDJPY', name: 'USD/JPY', sector: 'Currency', basePrice: 150.20, baseChange: 0.45, marketCap: 'N/A', weekHigh: 155.00 },
      { symbol: 'AUDUSD', name: 'AUD/USD', sector: 'Currency', basePrice: 0.65, baseChange: -0.25, marketCap: 'N/A', weekHigh: 0.68 },
      { symbol: 'USDCAD', name: 'USD/CAD', sector: 'Currency', basePrice: 1.40, baseChange: 0.10, marketCap: 'N/A', weekHigh: 1.42 },
      { symbol: 'USDCHF', name: 'USD/CHF', sector: 'Currency', basePrice: 0.88, baseChange: -0.05, marketCap: 'N/A', weekHigh: 0.92 },
      { symbol: 'NZDUSD', name: 'NZD/USD', sector: 'Currency', basePrice: 0.59, baseChange: -0.15, marketCap: 'N/A', weekHigh: 0.62 },
      { symbol: 'EURGBP', name: 'EUR/GBP', sector: 'Currency', basePrice: 0.83, baseChange: -0.10, marketCap: 'N/A', weekHigh: 0.86 },
      { symbol: 'EURJPY', name: 'EUR/JPY', sector: 'Currency', basePrice: 158.40, baseChange: 0.30, marketCap: 'N/A', weekHigh: 164.00 },
      { symbol: 'GBPJPY', name: 'GBP/JPY', sector: 'Currency', basePrice: 190.10, baseChange: 0.50, marketCap: 'N/A', weekHigh: 198.00 },
      { symbol: 'EURCHF', name: 'EUR/CHF', sector: 'Currency', basePrice: 0.93, baseChange: -0.02, marketCap: 'N/A', weekHigh: 0.98 },
      { symbol: 'AUDJPY', name: 'AUD/JPY', sector: 'Currency', basePrice: 98.50, baseChange: 0.15, marketCap: 'N/A', weekHigh: 102.00 },
      { symbol: 'EURAUD', name: 'EUR/AUD', sector: 'Currency', basePrice: 1.62, baseChange: 0.12, marketCap: 'N/A', weekHigh: 1.68 },
      { symbol: 'GBPAUD', name: 'GBP/AUD', sector: 'Currency', basePrice: 1.94, baseChange: 0.25, marketCap: 'N/A', weekHigh: 1.98 },
      { symbol: 'USDSGD', name: 'USD/SGD', sector: 'Currency', basePrice: 1.34, baseChange: 0.05, marketCap: 'N/A', weekHigh: 1.36 },
      { symbol: 'USDHKD', name: 'USD/HKD', sector: 'Currency', basePrice: 7.78, baseChange: 0.01, marketCap: 'N/A', weekHigh: 7.85 },
      { symbol: 'USDCNH', name: 'USD/CNH', sector: 'Currency', basePrice: 7.25, baseChange: 0.08, marketCap: 'N/A', weekHigh: 7.30 },
      { symbol: 'USDZAR', name: 'USD/ZAR', sector: 'Currency', basePrice: 18.20, baseChange: 0.45, marketCap: 'N/A', weekHigh: 19.50 },
      { symbol: 'USDMXN', name: 'USD/MXN', sector: 'Currency', basePrice: 20.30, baseChange: 0.60, marketCap: 'N/A', weekHigh: 21.00 },
      { symbol: 'USDTHB', name: 'USD/THB', sector: 'Currency', basePrice: 34.50, baseChange: 0.10, marketCap: 'N/A', weekHigh: 36.00 },
      { symbol: 'USDTRY', name: 'USD/TRY', sector: 'Currency', basePrice: 34.80, baseChange: 0.05, marketCap: 'N/A', weekHigh: 36.00 },
      { symbol: 'EURCAD', name: 'EUR/CAD', sector: 'Currency', basePrice: 1.48, baseChange: -0.05, marketCap: 'N/A', weekHigh: 1.52 },
      { symbol: 'GBPCAD', name: 'GBP/CAD', sector: 'Currency', basePrice: 1.76, baseChange: 0.10, marketCap: 'N/A', weekHigh: 1.82 },
      { symbol: 'AUDCAD', name: 'AUD/CAD', sector: 'Currency', basePrice: 0.92, baseChange: -0.15, marketCap: 'N/A', weekHigh: 0.96 },
      { symbol: 'NZDCAD', name: 'NZD/CAD', sector: 'Currency', basePrice: 0.83, baseChange: -0.20, marketCap: 'N/A', weekHigh: 0.88 },
      { symbol: 'CHFJPY', name: 'CHF/JPY', sector: 'Currency', basePrice: 171.20, baseChange: 0.55, marketCap: 'N/A', weekHigh: 176.00 },
      { symbol: 'AUDNZD', name: 'AUD/NZD', sector: 'Currency', basePrice: 1.09, baseChange: 0.05, marketCap: 'N/A', weekHigh: 1.12 },
      { symbol: 'EURNZD', name: 'EUR/NZD', sector: 'Currency', basePrice: 1.77, baseChange: 0.10, marketCap: 'N/A', weekHigh: 1.84 },
      { symbol: 'GBPNZD', name: 'GBP/NZD', sector: 'Currency', basePrice: 2.12, baseChange: 0.15, marketCap: 'N/A', weekHigh: 2.20 },
      { symbol: 'CADJPY', name: 'CAD/JPY', sector: 'Currency', basePrice: 107.50, baseChange: 0.35, marketCap: 'N/A', weekHigh: 112.00 },
      { symbol: 'NZDJPY', name: 'NZD/JPY', sector: 'Currency', basePrice: 88.40, baseChange: 0.25, marketCap: 'N/A', weekHigh: 94.00 },
      { symbol: 'AUDCHF', name: 'AUD/CHF', sector: 'Currency', basePrice: 0.58, baseChange: -0.10, marketCap: 'N/A', weekHigh: 0.62 },
      { symbol: 'EURSEK', name: 'EUR/SEK', sector: 'Currency', basePrice: 11.45, baseChange: 0.05, marketCap: 'N/A', weekHigh: 11.80 },
      { symbol: 'EURNOK', name: 'EUR/NOK', sector: 'Currency', basePrice: 11.80, baseChange: 0.08, marketCap: 'N/A', weekHigh: 12.20 },
      { symbol: 'USDSEK', name: 'USD/SEK', sector: 'Currency', basePrice: 10.90, baseChange: 0.15, marketCap: 'N/A', weekHigh: 11.30 },
      { symbol: 'USDNOK', name: 'USD/NOK', sector: 'Currency', basePrice: 11.20, baseChange: 0.20, marketCap: 'N/A', weekHigh: 11.60 },
      { symbol: 'USDDKK', name: 'USD/DKK', sector: 'Currency', basePrice: 7.05, baseChange: 0.02, marketCap: 'N/A', weekHigh: 7.20 },
      { symbol: 'USDSGD', name: 'USD/SGD', sector: 'Currency', basePrice: 1.35, baseChange: 0.03, marketCap: 'N/A', weekHigh: 1.38 },
      { symbol: 'USDPLN', name: 'USD/PLN', sector: 'Currency', basePrice: 4.10, baseChange: 0.25, marketCap: 'N/A', weekHigh: 4.30 },
      { symbol: 'GBPSGD', name: 'GBP/SGD', sector: 'Currency', basePrice: 1.69, baseChange: 0.12, marketCap: 'N/A', weekHigh: 1.75 },
      { symbol: 'EURSGD', name: 'EUR/SGD', sector: 'Currency', basePrice: 1.42, baseChange: -0.05, marketCap: 'N/A', weekHigh: 1.48 },
      { symbol: 'USDHUF', name: 'USD/HUF', sector: 'Currency', basePrice: 380.00, baseChange: 0.45, marketCap: 'N/A', weekHigh: 405.00 },
      { symbol: 'USDCZK', name: 'USD/CZK', sector: 'Currency', basePrice: 23.80, baseChange: 0.15, marketCap: 'N/A', weekHigh: 24.50 },
      { symbol: 'USDILS', name: 'USD/ILS', sector: 'Currency', basePrice: 3.75, baseChange: -0.10, marketCap: 'N/A', weekHigh: 3.90 },
      { symbol: 'USDARARS', name: 'USD/SAR', sector: 'Currency', basePrice: 3.75, baseChange: 0.00, marketCap: 'N/A', weekHigh: 3.76 },
      { symbol: 'USDAED', name: 'USD/AED', sector: 'Currency', basePrice: 3.67, baseChange: 0.00, marketCap: 'N/A', weekHigh: 3.68 },
      { symbol: 'XAUUSD', name: 'Gold/USD', sector: 'Commodity', basePrice: 2650.00, baseChange: 0.45, marketCap: 'N/A', weekHigh: 2790.00 },
      { symbol: 'XAGUSD', name: 'Silver/USD', sector: 'Commodity', basePrice: 31.20, baseChange: 1.10, marketCap: 'N/A', weekHigh: 35.00 },
      { symbol: 'USDOLLAR', name: 'DXY Index', sector: 'Index', basePrice: 106.50, baseChange: 0.15, marketCap: 'N/A', weekHigh: 108.00 }
    ];

    return stocks.map((stock, idx) => {
      const aiScore = (85 + Math.random() * 15).toFixed(1);
      const riskScore = (3 + Math.random() * 4).toFixed(1);
      const sentimentScore = (70 + Math.random() * 30).toFixed(1);
      const quantumProbability = (Math.random() * 100).toFixed(1);
      const neuralStrength = (60 + Math.random() * 40).toFixed(1);
      
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
        resistance: (stock.basePrice * 1.05).toFixed(2),
        quantumProbability,
        neuralStrength,
        blockchainConfidence: (70 + Math.random() * 30).toFixed(1),
        timeSeriesAnomaly: Math.random() > 0.8 ? 'Detected' : 'Normal',
        fractalDimension: (1.2 + Math.random() * 0.8).toFixed(2),
        entropy: (Math.random() * 10).toFixed(2),
        chaosIndex: (Math.random() * 100).toFixed(1)
      };
    });
  }, []);

  const [assets, setAssets] = useState(() => generateAdvancedData());
  const [performanceStats] = useState({
    dailyProfit: '+2.4%',
    weeklyProfit: '+8.7%',
    winRate: '76.2%',
    sharpeRatio: '2.1',
    totalTrades: '1,247',
    profitFactor: '2.8',
    alpha: '1.24',
    beta: '0.87',
    maxDrawdown: '-8.4%',
    sortinoRatio: '3.2'
  });

  // Chart Data for Visualization
  const chartData = useMemo(() => {
    return Array.from({length: 20}, (_, i) => ({
      time: `${i}:00`,
      price: 1000 + Math.sin(i * 0.5) * 100 + Math.random() * 50,
      volume: Math.random() * 1000,
      sentiment: Math.random() * 100
    }));
  }, []);

  const radarData = useMemo(() => [
    { subject: 'Technical', A: 86, B: 70 },
    { subject: 'Sentiment', A: 92, B: 65 },
    { subject: 'Volume', A: 78, B: 85 },
    { subject: 'Momentum', A: 95, B: 72 },
    { subject: 'Volatility', A: 68, B: 90 },
    { subject: 'Trend', A: 88, B: 75 },
  ], []);

  const pieData = useMemo(() => [
    { name: 'Stocks', value: 40 },
    { name: 'Crypto', value: 25 },
    { name: 'Forex', value: 20 },
    { name: 'Commodities', value: 15 },
  ], []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Use useMemo for filtered assets
  const filteredAssets = useMemo(() => {
    return assets
      .filter(asset => selectedSector === 'All' || asset.sector === selectedSector)
      .filter(asset => {
        if (riskFilter === 'All') return true;
        if (riskFilter === 'Low') return parseFloat(asset.riskScore) <= 4;
        if (riskFilter === 'Medium') return parseFloat(asset.riskScore) > 4 && parseFloat(asset.riskScore) <= 6;
        if (riskFilter === 'High') return parseFloat(asset.riskScore) > 6;
        if (riskFilter === 'Quantum') return parseFloat(asset.quantumProbability) > 70;
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
          case 'Quantum Probability': return parseFloat(b.quantumProbability) - parseFloat(a.quantumProbability);
          case 'Neural Strength': return parseFloat(b.neuralStrength) - parseFloat(a.neuralStrength);
          default: return a.rank - b.rank;
        }
      });
  }, [assets, selectedSector, riskFilter, searchQuery, sortBy]);

useEffect(() => {
  const timer = setInterval(() => setCurrentTime(new Date()), 300000); // 5 minutes = 300,000ms
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
      
      // Simulate cyber attacks occasionally
      if (Math.random() > 0.95) {
        setCyberAttackDetected(true);
        setTimeout(() => setCyberAttackDetected(false), 11000);
      }
      
      // Simulate blockchain sync
      setBlockchainSync(prev => {
        if (prev < 100) return prev + 0.1;
        return 100;
      });
    }, 21000);
    
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
    decliners: '876',
    quantumIndex: '42.6',
    chaosFactor: '23.4',
    entropyLevel: '67.8'
  }), []);

  const sessions = useMemo(() => [
    { name: 'Asian KZ', active: false, time: '6:30-9:30 AM IST', priority: 3, volatility: 'Medium', volume: 'Low' },
    { name: 'London KZ', active: true, time: '12:30-3:30 PM IST', priority: 5, volatility: 'High', volume: 'High' },
    { name: 'NY KZ', active: true, time: '5:30-8:30 PM IST', priority: 5, volatility: 'High', volume: 'Very High' },
    { name: 'Silver Bullet', active: false, time: '8:30-9:30 PM IST', priority: 4, volatility: 'Low', volume: 'Medium' },
    { name: 'Quantum Session', active: quantumMode, time: 'All Day', priority: 6, volatility: 'Extreme', volume: 'Quantum' }
  ], [quantumMode]);

  const marketStats = useMemo(() => ({
    totalAssets: assets.length,
    strongSignals: assets.filter(a => a.signal.includes('STRONG')).length,
    averageAccuracy: '87.3%',
    activeSession: 'London + NY Overlap',
    marketRegime: quantumMode ? 'QUANTUM FLUX' : 'TRENDING',
    totalMarketCap: '45.2T',
    advancingStocks: Math.floor(assets.length * 0.65),
    decliningStocks: Math.floor(assets.length * 0.35),
    totalVolume: '₹4.2T',
    putCallRatio: '0.68',
    quantumEntanglement: `${quantumEntanglement}%`,
    neuralActivity: neuralActivity.length,
    aiPredictions: '1,247'
  }), [assets, quantumMode, quantumEntanglement, neuralActivity.length]);

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
    link.download = `quantum-trading-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    const newAlert = {
      id: Date.now(),
      message: `Quantum data exported successfully!`,
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
    
    const newAlert = {
      id: Date.now(),
      message: `Quantum data refreshed successfully`,
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

  const activateQuantumMode = () => {
    setQuantumMode(!quantumMode);
    
    const newAlert = {
      id: Date.now(),
      message: quantumMode ? `Quantum Mode Deactivated` : `🚀 Quantum Trading Mode Activated!`,
      type: 'success',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const activateNeuralNetwork = () => {
    setNeuralNetworkMode(!neuralNetworkMode);
    
    const newAlert = {
      id: Date.now(),
      message: neuralNetworkMode ? `Neural Network Deactivated` : `🧠 Neural Network Activated!`,
      type: 'info',
      time: new Date().toLocaleTimeString()
    };
    setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  const openWormhole = () => {
    setWormholeOpen(true);
    setTimeTravelMode(true);
    
    setTimeout(() => {
      setWormholeOpen(false);
      setTimeTravelMode(false);
      setParallelUniverse(prev => prev + 1);
      
      const newAlert = {
        id: Date.now(),
        message: `🌀 Entered Parallel Universe #${parallelUniverse + 1}`,
        type: 'warning',
        time: new Date().toLocaleTimeString()
      };
      setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
    }, 3000);
  };

  // Quantum Bits Component
  const QuantumBits = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      {quantumBits.map((bit, i) => (
        <div
          key={bit.id}
          className="absolute w-2 h-2 rounded-full bg-cyan-400 opacity-70 animate-pulse"
          style={{
            left: `${bit.x}vw`,
            top: `${bit.y}vh`,
            transform: `rotate(${bit.spin}deg)`,
            animationDelay: `${i * 0.1}s`
          }}
        >
          <div className="text-[8px] text-cyan-300 absolute -top-4">{bit.state}</div>
        </div>
      ))}
    </div>
  );

  // Neural Network Visualization
  const NeuralNetworkViz = () => (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-full bg-purple-500"
          style={{
            left: `${(i * 5) % 100}%`,
            animation: `neuralPulse ${2 + Math.random() * 3}s infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px w-full bg-blue-500"
          style={{
            top: `${(i * 7) % 100}%`,
            animation: `neuralPulse ${3 + Math.random() * 2}s infinite`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
    </div>
  );

  // System Status Component
  const SystemStatus = () => (
    <div className={`flex items-center space-x-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-3 py-2 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
      <div className="flex items-center space-x-2" title="Connection Status">
        {connectionStatus === 'connected' ? (
          <Wifi className="w-4 h-4 text-emerald-400" />
        ) : (
          <WifiOff className="w-4 h-4 text-red-400" />
        )}
        <span className="text-xs">{connectionStatus === 'connected' ? 'Online' : 'Offline'}</span>
      </div>
      <div className="flex items-center space-x-2" title="CPU Usage">
        <Cpu className="w-4 h-4 text-blue-400" />
        <span className="text-xs">{cpuUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2" title="Memory Usage">
        <Database className="w-4 h-4 text-purple-400" />
        <span className="text-xs">{memoryUsage.toFixed(0)}%</span>
      </div>
      <div className="flex items-center space-x-2" title="Battery">
        {isCharging ? (
          <BatteryCharging className="w-4 h-4 text-green-400" />
        ) : (
          <Battery className="w-4 h-4 text-yellow-400" />
        )}
        <span className="text-xs">{batteryLevel.toFixed(0)}%</span>
      </div>
      {quantumMode && (
        <div className="flex items-center space-x-2" title="Quantum Entanglement">
          <Atom className="w-4 h-4 text-cyan-400" />
          <span className="text-xs">{quantumEntanglement}%</span>
        </div>
      )}
    </div>
  );

  // AI Assistant Component
  const AiAssistant = () => (
    <div className={`fixed bottom-4 left-4 z-40 ${aiAssistantActive ? 'block' : 'hidden'}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-purple-500' : 'border-purple-200'} shadow-xl max-w-sm`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <BrainCircuit className="w-5 h-5 text-purple-400 mr-2" />
            <span className="font-bold">Quantum AI Assistant</span>
          </div>
          <button onClick={() => setAiAssistantActive(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-300 mb-3">
          {aiInsights[0]?.text || "Analyzing market patterns..."}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={refreshData}
            className="text-xs px-2 py-1 bg-purple-600 rounded hover:bg-purple-700"
          >
            Refresh Analysis
          </button>
          <button 
            onClick={() => setVoiceCommands(!voiceCommands)}
            className="text-xs px-2 py-1 bg-blue-600 rounded hover:bg-blue-700"
          >
            {voiceCommands ? 'Mute' : 'Voice'}
          </button>
        </div>
      </div>
    </div>
  );

  // Cyber Attack Alert
  const CyberAttackAlert = () => (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${cyberAttackDetected ? 'block' : 'hidden'}`}>
      <div className="bg-red-900 border border-red-700 rounded-lg p-3 animate-pulse shadow-lg">
        <div className="flex items-center">
          <Siren className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
          <span className="font-bold text-red-300">🚨 CYBER ATTACK DETECTED!</span>
          <Siren className="w-5 h-5 text-red-400 ml-2 animate-pulse" />
        </div>
        <div className="text-sm text-red-200 mt-1">
          Quantum firewall activated. Threat neutralized.
        </div>
      </div>
    </div>
  );

  // Wormhole Effect
  const WormholeEffect = () => (
    <div className={`fixed inset-0 z-50 ${wormholeOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `wormhole ${1 + Math.random()}s infinite`,
              animationDelay: `${i * 0.01}s`
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-white animate-pulse">
            🌀 ENTERING WORMHOLE...
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <>
      {/* Quantum Effects */}
      {quantumMode && <QuantumBits />}
      {neuralNetworkMode && <NeuralNetworkViz />}
      
      {/* Cyber Attack Alert */}
      <CyberAttackAlert />
      
      {/* Wormhole Effect */}
      <WormholeEffect />
      
      {/* AI Assistant */}
      <AiAssistant />

      {/* System Status Bar */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></div>
            <span className="text-sm">Quantum Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <ThermometerSun className="w-4 h-4 text-orange-400" />
            <span className="text-sm">Market Temp: {marketTemperature.toFixed(1)}°</span>
          </div>
          <span className="text-sm text-gray-400">Last update: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        <SystemStatus />
      </div>

      {/* Quantum Control Panel */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-cyan-500' : 'border-cyan-200'} relative z-10`}>
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              🔮 QUANTUM CONTROL PANEL
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={activateQuantumMode}
              className={`px-4 py-2 rounded-lg ${quantumMode ? 'bg-cyan-700' : 'bg-cyan-600 hover:bg-cyan-700'} text-white font-medium flex items-center`}
            >
              <Atom className="w-4 h-4 mr-2" />
              {quantumMode ? 'Quantum Active' : 'Activate Quantum'}
            </button>
            <button
              onClick={activateNeuralNetwork}
              className={`px-4 py-2 rounded-lg ${neuralNetworkMode ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium flex items-center`}
            >
              <BrainCircuit className="w-4 h-4 mr-2" />
              {neuralNetworkMode ? 'Neural Active' : 'Neural Network'}
            </button>
            <button
              onClick={() => setCyberpunkMode(!cyberpunkMode)}
              className={`px-4 py-2 rounded-lg ${cyberpunkMode ? 'bg-pink-700' : 'bg-pink-600 hover:bg-pink-700'} text-white font-medium flex items-center`}
            >
              <SatelliteDish className="w-4 h-4 mr-2" />
              Cyberpunk
            </button>
            <button
              onClick={openWormhole}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium flex items-center"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Open Wormhole
            </button>
            <button
              onClick={() => setCryptoMining(!cryptoMining)}
              className={`px-4 py-2 rounded-lg ${cryptoMining ? 'bg-yellow-700' : 'bg-yellow-600 hover:bg-yellow-700'} text-white font-medium flex items-center`}
            >
              <Bitcoin className="w-4 h-4 mr-2" />
              {cryptoMining ? 'Mining...' : 'Crypto Mine'}
            </button>
          </div>
        </div>
        
        {/* Quantum Stats */}
        {quantumMode && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-cyan-900 bg-opacity-30' : 'bg-cyan-50'} border border-cyan-500`}>
              <div className="text-xs text-cyan-300">Quantum Entanglement</div>
              <div className="text-lg font-bold">{quantumEntanglement}%</div>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900 bg-opacity-30' : 'bg-purple-50'} border border-purple-500`}>
              <div className="text-xs text-purple-300">Neural Activity</div>
              <div className="text-lg font-bold">{neuralActivity.length}</div>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900 bg-opacity-30' : 'bg-green-50'} border border-green-500`}>
              <div className="text-xs text-green-300">Blockchain Sync</div>
              <div className="text-lg font-bold">{blockchainSync.toFixed(1)}%</div>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-900 bg-opacity-30' : 'bg-red-50'} border border-red-500`}>
              <div className="text-xs text-red-300">Parallel Universes</div>
              <div className="text-lg font-bold">#{parallelUniverse}</div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Key Stats with Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 relative z-10">
        {/* Market Overview with Chart */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'}`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold flex items-center">
              <Globe className="mr-2 text-emerald-400" /> Market Overview
            </h3>
            <div className="flex space-x-1">
              {['1D', '1W', '1M', '3M', 'Quantum'].map((tf) => (
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
          <div className="h-40 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="time" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {Object.entries(marketSentiment).slice(0, 4).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{key}</span>
                <span className={`px-2 py-1 rounded text-xs ${value.includes('+') ? 'bg-emerald-600' : value.includes('-') ? 'bg-red-600' : 'bg-emerald-800'}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Radar Chart for Analysis */}
<div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-5 border ${darkMode ? 'border-purple-500/50' : 'border-purple-200'} shadow-sm hover:shadow-md transition-shadow duration-300`}>
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-bold text-lg flex items-center">
      <Radar className="mr-2 text-purple-400" size={20} /> 
      <span className={darkMode ? 'text-gray-100' : 'text-gray-800'}>Skill Analysis Radar</span>
    </h3>
    <div className="text-xs text-gray-500 flex items-center">
      <div className="flex items-center mr-3">
        <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
        <span>Current</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-emerald-500 mr-1"></div>
        <span>Average</span>
      </div>
    </div>
  </div>
  
  <div className="h-52 relative">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart 
        data={radarData}
        margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
      >
        <PolarGrid 
          stroke={darkMode ? "#4b5563" : "#e5e7eb"} 
          strokeWidth={0.5}
          radialLines={false}
        />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ 
            fill: darkMode ? "#d1d5db" : "#4b5563", 
            fontSize: 12,
            fontWeight: 500 
          }}
          tickLine={false}
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 100]}
          tick={{ 
            fill: darkMode ? "#9ca3af" : "#6b7280", 
            fontSize: 10 
          }}
          stroke={darkMode ? "#4b5563" : "#e5e7eb"}
          tickCount={5}
        />
        <RechartsRadar 
          name="Current" 
          dataKey="A" 
          stroke="#8b5cf6" 
          strokeWidth={2}
          fill="url(#currentGradient)" 
          fillOpacity={0.4}
        />
        <RechartsRadar 
          name="Average" 
          dataKey="B" 
          stroke="#10b981" 
          strokeWidth={1.5}
          strokeDasharray="3 3"
          fill="url(#averageGradient)" 
          fillOpacity={0.2}
        />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.6}/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="averageGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity={0.4}/>
            <stop offset="100%" stopColor="#10b981" stopOpacity={0.05}/>
          </linearGradient>
        </defs>
        
        <Tooltip
          contentStyle={{
            backgroundColor: darkMode ? '#374151' : '#ffffff',
            border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
          labelStyle={{ 
            color: darkMode ? '#f3f4f6' : '#111827',
            fontWeight: 600,
            marginBottom: '4px'
          }}
          formatter={(value) => [`${value}%`, 'Score']}
        />
      </RadarChart>
    </ResponsiveContainer>
    
    {/* Center label */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
      <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Skill Score
      </div>
    </div>
  </div>
  
  {/* Stats summary */}
  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-3 text-sm">
    <div className="text-center">
      <div className="font-semibold text-gray-700 dark:text-gray-300">Current Avg</div>
      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
        {Math.round(radarData.reduce((acc, item) => acc + item.A, 0) / radarData.length)}%
      </div>
    </div>
    <div className="text-center">
      <div className="font-semibold text-gray-700 dark:text-gray-300">Benchmark Avg</div>
      <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
        {Math.round(radarData.reduce((acc, item) => acc + item.B, 0) / radarData.length)}%
      </div>
    </div>
  </div>
</div>

        {/* Portfolio Distribution */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 border ${darkMode ? 'border-blue-500' : 'border-blue-200'}`}>
          <h3 className="font-bold mb-3 flex items-center">
            <PieChart className="mr-2 text-blue-400" /> Portfolio Distribution
          </h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPie>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Insights Stream */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-purple-500' : 'border-purple-200'} relative z-10`}>
        <h3 className="font-bold mb-3 flex items-center">
          <BrainCircuit className="mr-2 text-purple-400 animate-pulse" /> Quantum AI Insights Stream
        </h3>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 animate-marquee">
            {aiInsights.map((insight, idx) => (
              <div 
                key={insight.id} 
                className={`flex-shrink-0 p-3 rounded-lg ${darkMode ? 'bg-purple-900 bg-opacity-30' : 'bg-purple-50'} border border-purple-500 min-w-[300px]`}
              >
                <div className="flex items-center mb-2">
                  <Brain className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-sm text-purple-300">{insight.time}</span>
                </div>
                <p className="text-sm">{insight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trading Sessions with Quantum Effects */}
      <div className={`mb-6 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} relative z-10`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center">
            <Clock className="mr-2 text-emerald-400" /> {quantumMode ? 'Quantum Trading Sessions' : 'Trading Sessions'}
          </h2>
          <div className="flex items-center space-x-2">
            <button 
              onClick={refreshData}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} text-emerald-400 hover:text-emerald-300`}
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-400">Live Quantum Feed</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {sessions.map((session, idx) => (
            <div 
              key={idx} 
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                session.active 
                  ? quantumMode 
                    ? 'border-cyan-500 bg-cyan-900 bg-opacity-30 animate-pulse' 
                    : 'border-emerald-500 bg-emerald-900 bg-opacity-30'
                  : 'border-gray-600 bg-gray-700 bg-opacity-30'
              } hover:scale-[1.02] cursor-pointer relative overflow-hidden`}
              onClick={() => alert(`Session Details: ${session.name}\nTime: ${session.time}\nPriority: ${session.priority}/5`)}
            >
              {session.name === 'Quantum Session' && quantumMode && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 animate-pulse"></div>
              )}
              <div className="flex items-center justify-between mb-2 relative z-10">
                <div>
                  <span className="font-bold">{session.name}</span>
                  <div className="flex items-center mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded mr-2 ${
                      session.active 
                        ? quantumMode 
                          ? 'bg-cyan-500 animate-pulse' 
                          : 'bg-emerald-500'
                        : 'bg-gray-600'
                    }`}>
                      {session.active ? 'ACTIVE' : 'CLOSED'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{session.priority}/5</div>
                  <div className="text-xs text-gray-400">Priority</div>
                </div>
              </div>
              <div className="text-sm text-gray-300 relative z-10">{session.time}</div>
              <div className="flex justify-between text-xs text-gray-400 mt-2 relative z-10">
                <span>📊 {session.volume}</span>
                <span>⚡ {session.volatility}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Controls with Quantum Features */}
      <div className="mb-6 flex flex-wrap gap-3 items-center relative z-10">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder={quantumMode ? "Quantum search symbols..." : "Search symbols or companies..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} focus:outline-none focus:ring-2 ${quantumMode ? 'focus:ring-cyan-500' : 'focus:ring-emerald-500'}`}
            onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                    }
                    if (e.key === 'Escape') {
                      setSearchQuery('');
                    }
                  }}
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
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} focus:outline-none focus:ring-2 ${quantumMode ? 'focus:ring-cyan-500' : 'focus:ring-emerald-500'}`}
        >
          {['Stocks', 'Crypto', 'Forex', 'Futures', 'Options', 'Quantum Assets'].map(market => (
            <option key={market} value={market}>{market}</option>
          ))}
        </select>

        <select 
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} focus:outline-none focus:ring-2 ${quantumMode ? 'focus:ring-cyan-500' : 'focus:ring-emerald-500'}`}
        >
          {sectors.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>

        <select 
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} focus:outline-none focus:ring-2 ${quantumMode ? 'focus:ring-cyan-500' : 'focus:ring-emerald-500'}`}
        >
          {['All', 'Low', 'Medium', 'High', 'Quantum'].map(risk => (
            <option key={risk} value={risk}>
              {risk === 'Quantum' ? '⚛️ Quantum Risk' : risk === 'All' ? 'All Risk' : risk === 'Low' ? 'Low Risk (≤4)' : risk === 'Medium' ? 'Medium Risk (4-6)' : 'High Risk (>6)'}
            </option>
          ))}
        </select>

        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} focus:outline-none focus:ring-2 ${quantumMode ? 'focus:ring-cyan-500' : 'focus:ring-emerald-500'}`}
        >
          {['Total Score', 'AI Score', 'Risk Score', 'Volume Profile', 'Price Change', 'Market Cap', 'Quantum Probability', 'Neural Strength'].map(sort => (
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
          className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} flex items-center`}
        >
          {gridView ? 'List View' : 'Grid View'}
        </button>
      </div>

      {/* Enhanced Assets Table with Quantum Effects */}
      {gridView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 relative z-10">
          {filteredAssets.slice(0, 12).map((asset, idx) => (
            <div 
              key={idx} 
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden group`}
              onClick={() => toggleDetails(idx)}
            >
              {quantumMode && parseFloat(asset.quantumProbability) > 70 && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-10 animate-pulse"></div>
              )}
              
              <div className="flex justify-between items-start mb-3 relative z-10">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-bold ${idx < 3 ? 'text-yellow-400' : idx < 7 ? 'text-emerald-400' : 'text-gray-300'}`}>
                      #{asset.rank}
                    </span>
                    <h3 className="font-bold text-emerald-400">{asset.symbol}</h3>
                    {parseFloat(asset.quantumProbability) > 80 && (
                      <span className="text-xs px-1 py-0.5 bg-cyan-600 rounded">⚛️</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{asset.name}</p>
                  <span className="text-xs px-2 py-1 bg-gray-700 rounded mt-1 inline-block">{asset.sector}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    quickAddToWatchlist(asset.symbol);
                  }}
                  className={`p-1 ${watchlist.includes(asset.symbol) ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-300'} relative z-20`}
                >
                  <Star className={`w-5 h-5 ${watchlist.includes(asset.symbol) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="space-y-3 relative z-10">
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
                  <span className="text-gray-400">Quantum Prob</span>
                  <span className="font-bold text-cyan-400">{asset.quantumProbability}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Risk</span>
                  <span className={`font-bold ${parseFloat(asset.riskScore) < 4 ? 'text-emerald-400' : parseFloat(asset.riskScore) < 6 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {asset.riskScore}/10
                  </span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700 relative z-10">
                <span className={`px-3 py-1 rounded text-sm font-semibold ${
                  asset.signal.includes('STRONG') ? 'bg-emerald-600' : 
                  asset.signal.includes('BUY') ? 'bg-emerald-700' : 'bg-yellow-600'
                }`}>
                  {asset.signal}
                </span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white'} backdrop-blur-sm rounded-lg border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} overflow-hidden mb-6 relative z-10`}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className={`${darkMode ? quantumMode ? 'bg-cyan-900 bg-opacity-50' : 'bg-emerald-900 bg-opacity-50' : quantumMode ? 'bg-cyan-50' : 'bg-emerald-50'}`}>
                <tr>
                  <th className="p-3 text-left">Rank</th>
                  <th className="p-3 text-left">Symbol</th>
                  <th className="p-3 text-left">Price (₹)</th>
                  <th className="p-3 text-left">Change</th>
                  <th className="p-3 text-left">Total Score</th>
                  <th className="p-3 text-left">AI Score</th>
                  <th className="p-3 text-left">Quantum %</th>
                  <th className="p-3 text-left">Signal</th>
                  <th className="p-3 text-left">Risk</th>
                  <th className="p-3 text-left">Watch</th>
                  <th className="p-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.slice(0, 21).map((asset, idx) => (
                  <React.Fragment key={idx}>
                    <tr 
                      className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors cursor-pointer group`}
                      onClick={() => toggleDetails(idx)}
                    >
                      <td className="p-3">
                        <span className={`font-bold ${idx < 3 ? 'text-yellow-400' : idx < 7 ? 'text-emerald-400' : ''}`}>
                          #{asset.rank}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="font-bold text-emerald-400">{asset.symbol}</div>
                          {parseFloat(asset.quantumProbability) > 80 && (
                            <Atom className="w-3 h-3 text-cyan-400 ml-1" />
                          )}
                        </div>
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
                        <div className="flex items-center">
                          <Atom className="w-4 h-4 mr-1 text-cyan-400" />
                          <span className="font-semibold">{asset.quantumProbability}%</span>
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
                      <td colSpan="11" className={`p-6 ${darkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-gray-50'} transition-all duration-300`}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div>
                            <h4 className="font-bold mb-3 text-emerald-400">📊 Advanced Metrics</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Quantum Probability:</span>
                                <span className="font-semibold text-cyan-400">{asset.quantumProbability}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Neural Strength:</span>
                                <span className="font-semibold text-purple-400">{asset.neuralStrength}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Blockchain Confidence:</span>
                                <span className="font-semibold">{asset.blockchainConfidence}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Fractal Dimension:</span>
                                <span className="font-semibold">{asset.fractalDimension}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Entropy:</span>
                                <span className="font-semibold">{asset.entropy}</span>
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
                          <div>
                            <h4 className="font-bold mb-3 text-cyan-400">⚛️ Quantum Analysis</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Time Series Anomaly:</span>
                                <span className={`font-semibold ${asset.timeSeriesAnomaly === 'Detected' ? 'text-red-400' : 'text-emerald-400'}`}>
                                  {asset.timeSeriesAnomaly}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Chaos Index:</span>
                                <span className="font-semibold">{asset.chaosIndex}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Market Cap:</span>
                                <span className="font-semibold">{asset.marketCapCr}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">52W High:</span>
                                <span className="font-semibold">{formatIndianPrice(asset.weekHigh)}</span>
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
                            onClick={() => alert(`Added ${asset.symbol} to quantum trade watch`)}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-600 to-purple-600 rounded hover:from-cyan-700 hover:to-purple-700"
                          >
                            Quantum Track
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

  const WatchlistView = () => {
    const watchlistAssets = assets.filter(asset => watchlist.includes(asset.symbol));
    
    return (
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} relative z-10`}>
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
            {watchlistAssets.map((asset, idx) => (
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
  };

  const AnalysisView = () => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? 'border-emerald-500' : 'border-emerald-200'} relative z-10`}>
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
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'} relative z-10`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Cog className="mr-3 text-emerald-400" /> {quantumMode ? '⚛️ Quantum Settings' : 'Settings'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Quantum Interface</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Quantum Mode</p>
                  <p className="text-sm text-gray-400">Activate quantum computing interface</p>
                </div>
                <button
                  onClick={activateQuantumMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${quantumMode ? 'bg-cyan-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${quantumMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Neural Network</p>
                  <p className="text-sm text-gray-400">AI-powered market analysis</p>
                </div>
                <button
                  onClick={activateNeuralNetwork}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${neuralNetworkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${neuralNetworkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cyberpunk Mode</p>
                  <p className="text-sm text-gray-400">Futuristic neon interface</p>
                </div>
                <button
                  onClick={() => setCyberpunkMode(!cyberpunkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${cyberpunkMode ? 'bg-pink-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${cyberpunkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Security & Privacy</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Biometric Authentication</p>
                  <p className="text-sm text-gray-400">Fingerprint/Face ID login</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={biometricAuth}
                  onChange={(e) => setBiometricAuth(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Web Monitoring</p>
                  <p className="text-sm text-gray-400">Monitor for data leaks</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={darkWebMonitoring}
                  onChange={(e) => setDarkWebMonitoring(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Voice Commands</p>
                  <p className="text-sm text-gray-400">Control via voice</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={voiceCommands}
                  onChange={(e) => setVoiceCommands(e.target.checked)}
                  className="h-5 w-5 text-emerald-600 rounded" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Quantum Features</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Time Travel Mode</p>
                  <p className="text-sm text-gray-400">Analyze past market data</p>
                </div>
                <button
                  onClick={() => setTimeTravelMode(!timeTravelMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${timeTravelMode ? 'bg-blue-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${timeTravelMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Satellite View</p>
                  <p className="text-sm text-gray-400">Global market monitoring</p>
                </div>
                <button
                  onClick={() => setSatelliteView(!satelliteView)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${satelliteView ? 'bg-green-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${satelliteView ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Crypto Mining</p>
                  <p className="text-sm text-gray-400">Background cryptocurrency mining</p>
                </div>
                <button
                  onClick={() => setCryptoMining(!cryptoMining)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${cryptoMining ? 'bg-yellow-600' : 'bg-gray-300'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${cryptoMining ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div>
                <p className="font-medium mb-2">Trading Bots Active</p>
                <div className="flex items-center space-x-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    value={tradingBotsActive}
                    onChange={(e) => setTradingBotsActive(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-sm">{tradingBotsActive}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Data Export</h3>
            <div className="space-y-3">
              <button
                onClick={exportData}
                className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'} text-white font-medium flex items-center justify-center`}
              >
                <Download className="w-5 h-5 mr-2" />
                Export Quantum Data
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  refreshData();
                  alert('Quantum cache cleared!');
                }}
                className={`w-full py-3 px-4 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium flex items-center justify-center`}
              >
                <Database className="w-5 h-5 mr-2" />
                Clear Quantum Cache
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-gray-400">Switch theme</p>
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
                  {['emerald', 'cyan', 'purple', 'pink', 'blue', 'red'].map(color => (
                    <button
                      key={color}
                      onClick={() => setThemeColor(color)}
                      className={`w-8 h-8 rounded-full ${themeColor === color ? 'ring-2 ring-white' : ''}`}
                      style={{ backgroundColor: getColorValue(color) }}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Market Temperature</p>
                <div className="flex items-center space-x-2">
                  <ThermometerSun className="w-5 h-5 text-orange-400" />
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 via-green-400 to-red-400 h-2 rounded-full"
                      style={{ width: `${marketTemperature}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{marketTemperature.toFixed(1)}°</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">System Information</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>🔮 Quantum Version: 2.0.0</p>
              <p>🧠 Neural Network: {neuralNetworkMode ? 'Active' : 'Inactive'}</p>
              <p>⚛️ Entanglement: {quantumEntanglement}%</p>
              <p>📡 Blockchain Sync: {blockchainSync.toFixed(1)}%</p>
              <p>🌀 Parallel Universes: {parallelUniverse}</p>
              <p>🕰️ Time Travel: {timeTravelMode ? 'Enabled' : 'Disabled'}</p>
              <p>🎯 Prediction Accuracy: {predictionAccuracy}%</p>
              <p className="pt-2 text-xs">Made in India 🇮🇳 • Quantum Powered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getColorValue = (color) => {
    const colors = {
      emerald: '#10b981',
      cyan: '#06b6d4',
      purple: '#8b5cf6',
      pink: '#ec4899',
      blue: '#3b82f6',
      red: '#ef4444'
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
    <div 
      ref={mainRef} 
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 font-sans relative overflow-hidden`}
      style={{
        background: cyberpunkMode 
          ? 'linear-gradient(45deg, #000 0%, #1a0033 50%, #000 100%)'
          : quantumMode
          ? 'linear-gradient(135deg, #000428 0%, #004e92 100%)'
          : darkMode
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes wormhole {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

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
      <div className={`border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 relative z-20 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden mr-3"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                {quantumMode ? '⚛️ Quantum Analyzer v.2.0' : 'Ecoplus Analyzer v.1169'}
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                {quantumMode ? 'Quantum-Powered Trading Intelligence' : 'AI-Powered Trading Intelligence'} | Design by ParagArtbook
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className={`hidden md:block ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg px-4 py-2 border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}>
              <div className="text-lg font-mono text-emerald-400">{currentTime.toLocaleTimeString('en-IN')}</div>
              <div className="text-xs text-gray-400">
                {currentTime.toLocaleDateString('en-IN', { 
                  weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
                })}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setAiAssistantActive(!aiAssistantActive)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-purple-500' : 'border-purple-200'}`}
                title="AI Assistant"
              >
                <BrainCircuit className="w-5 h-5 text-purple-400" />
              </button>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={toggleFullscreen}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? quantumMode ? 'border-cyan-500' : 'border-emerald-500' : quantumMode ? 'border-cyan-200' : 'border-emerald-200'}`}
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
                  ? quantumMode 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white' 
                    : 'bg-emerald-600 text-white'
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
                  ? quantumMode 
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white' 
                    : 'bg-emerald-600 text-white'
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
      <div className="p-4 relative z-10">
        {renderView()}
      </div>

      {/* Footer */}
      <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} p-4 relative z-20 backdrop-blur-sm bg-opacity-90 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center space-x-4 flex-wrap">
              {quantumMode ? (
                <>
                  <span className="flex items-center"><Atom className="w-3 h-3 mr-1" /> Quantum Live</span>
                  <span>•</span>
                  <span className="flex items-center"><BrainCircuit className="w-3 h-3 mr-1" /> AI Analysis</span>
                  <span>•</span>
                  <span>🌀 Parallel Universe #{parallelUniverse}</span>
                  <span>•</span>
                  <span>🇮🇳 Made in India</span>
                </>
              ) : (
                <>
                  <span>⚡ Live Data</span>
                  <span>•</span>
                  <span>🧠 AI Analysis</span>
                  <span>•</span>
                  <span>🇮🇳 Made in India</span>
                </>
              )}
            </div>
            <p className="mt-1">
              {filteredAssets.length} Assets filtered | ⭐ {watchlist.length} in watchlist | 
              {quantumMode ? ` ⚛️ ${quantumEntanglement}% entanglement` : ` 🎯 ${marketStats.strongSignals} strong signals`}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={refreshData}
              className={`px-4 py-2 rounded-lg ${quantumMode ? 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-medium flex items-center`}
            >
              <RefreshCw className="w-4 h-4 mr-2" /> {quantumMode ? 'Quantum Refresh' : 'Refresh Data'}
            </button>
            <div className="text-xs text-gray-400">
              {quantumMode ? 'Quantum Time' : 'Updated'}: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}
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

      {/* Floating AI Assistant Button */}
      {!aiAssistantActive && (
        <button
          onClick={() => setAiAssistantActive(true)}
          className="fixed bottom-4 left-4 z-30 p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:scale-110 transition-transform"
          title="Open AI Assistant"
        >
          <BrainCircuit className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;
