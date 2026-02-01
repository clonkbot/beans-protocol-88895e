import { useState, useEffect } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-noise">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212,165,116,0.4) 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div 
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(244,196,48,0.3) 0%, transparent 70%)',
            transform: `translateY(${scrollY * -0.15}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a574] to-[#f4c430] flex items-center justify-center">
                <span className="text-xl">☕</span>
              </div>
              <span className="font-display text-2xl font-bold text-gradient">BEAN$</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-[#e8d4b8] hover:text-[#f4c430] transition-colors text-sm font-medium">How It Works</a>
              <a href="#benefits" className="text-[#e8d4b8] hover:text-[#f4c430] transition-colors text-sm font-medium">Benefits</a>
              <a href="#tokenomics" className="text-[#e8d4b8] hover:text-[#f4c430] transition-colors text-sm font-medium">Tokenomics</a>
            </div>
            <button className="px-5 py-2.5 bg-gradient-to-r from-[#d4a574] to-[#f4c430] text-[#1a0f0a] font-mono font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-[#f4c430]/20 transition-all hover:scale-105">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d1810] border border-[#d4a574]/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
                <span className="font-mono text-xs text-[#d4a574]">PROTOCOL LIVE ON MAINNET</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                Turn Your
                <br />
                <span className="text-gradient">Coffee Waste</span>
                <br />
                Into Profits
              </h1>
              
              <p className="text-lg text-[#e8d4b8]/80 max-w-lg mb-10 leading-relaxed">
                The first DeFi protocol that rewards coffee shops for sustainability. 
                Donate spent espresso pucks and old beans, earn <span className="text-[#f4c430] font-mono font-semibold">$BEAN</span> tokens.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#f4c430] text-[#1a0f0a] font-semibold rounded-xl hover:shadow-xl hover:shadow-[#f4c430]/30 transition-all hover:scale-105 flex items-center gap-3">
                  <span>Start Earning</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="px-8 py-4 border border-[#d4a574]/40 text-[#e8d4b8] font-semibold rounded-xl hover:bg-[#d4a574]/10 transition-all flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Rotating ring */}
                <div className="absolute inset-0 animate-rotate-slow">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#f4c430" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#d4a574" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGradient)" strokeWidth="1" strokeDasharray="20 10" />
                    <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringGradient)" strokeWidth="1" strokeDasharray="10 20" />
                  </svg>
                </div>

                {/* Center coffee cup with token */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Steam particles */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-[#e8d4b8]/40 animate-steam"
                        style={{
                          left: `${40 + i * 15}px`,
                          top: '-20px',
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                    
                    {/* Cup */}
                    <div className="w-40 h-44 relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-36 bg-gradient-to-b from-[#4a2c2a] to-[#2d1810] rounded-b-3xl rounded-t-lg shadow-2xl">
                        <div className="absolute top-2 left-2 right-2 h-8 bg-gradient-to-r from-[#1a0f0a] to-[#2d1810] rounded-lg" />
                        <div className="absolute top-4 left-4 right-4 h-4 bg-gradient-to-br from-[#d4a574]/40 to-transparent rounded" />
                      </div>
                      {/* Handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-16 border-4 border-[#4a2c2a] rounded-r-full" />
                    </div>

                    {/* Floating token */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-float">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f4c430] to-[#d4a574] flex items-center justify-center animate-pulse-glow shadow-xl">
                        <span className="font-mono font-bold text-[#1a0f0a] text-lg">$B</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-12 h-12 rounded-xl bg-[#2d1810] border border-[#d4a574]/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="absolute bottom-20 left-5 w-14 h-14 rounded-xl bg-[#2d1810] border border-[#d4a574]/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-2xl">♻️</span>
                </div>
                <div className="absolute top-20 right-5 w-12 h-12 rounded-xl bg-[#2d1810] border border-[#d4a574]/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">💰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-[#d4a574]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2.4M', label: 'Lbs of Waste Saved', suffix: '+' },
              { value: '1,247', label: 'Partner Cafés', suffix: '' },
              { value: '$8.2M', label: 'Rewards Distributed', suffix: '' },
              { value: '47K', label: 'Token Holders', suffix: '+' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="font-mono text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[#e8d4b8]/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[#f4c430] text-sm tracking-wider">THE PROCESS</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">How It Works</h2>
            <p className="text-[#e8d4b8]/70 max-w-2xl mx-auto text-lg">
              Three simple steps to turn your daily coffee waste into a sustainable revenue stream.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: '☕',
                title: 'Collect Waste',
                description: 'Gather your spent espresso pucks and expired coffee beans in our provided biodegradable containers.',
                color: 'from-[#d4a574]'
              },
              {
                step: '02',
                icon: '🚚',
                title: 'Schedule Pickup',
                description: 'Our carbon-neutral fleet collects your containers weekly. We handle all logistics seamlessly.',
                color: 'from-[#f4c430]'
              },
              {
                step: '03',
                icon: '💎',
                title: 'Earn $BEAN',
                description: 'Receive tokens directly to your wallet based on weight and quality. Stake or trade as you wish.',
                color: 'from-[#4ade80]'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="glass-card rounded-3xl p-8 h-full hover:border-[#d4a574]/40 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d4a574]/10">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} to-transparent flex items-center justify-center text-3xl`}>
                      {item.icon}
                    </div>
                    <span className="font-mono text-[#d4a574]/40 text-5xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[#e8d4b8]/70 leading-relaxed">{item.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-[#d4a574]/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#2d1810]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[#f4c430] text-sm tracking-wider">WHY PARTNER</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
                Benefits for
                <br />
                <span className="text-gradient">Coffee Shops</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: '💵',
                    title: 'New Revenue Stream',
                    description: 'Average partners earn $400-$800/month in $BEAN tokens from waste they previously threw away.'
                  },
                  {
                    icon: '🌍',
                    title: 'Sustainability Badge',
                    description: 'Receive a verified sustainability certification to display and attract eco-conscious customers.'
                  },
                  {
                    icon: '📊',
                    title: 'Impact Dashboard',
                    description: 'Track your environmental impact in real-time: CO2 saved, waste diverted, and community rankings.'
                  },
                  {
                    icon: '🎁',
                    title: 'Customer Rewards',
                    description: 'Offer $BEAN tokens to your customers as loyalty rewards, driving repeat visits.'
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2d1810] border border-[#d4a574]/20 flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-[#f4c430]/40 transition-all">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-[#e8d4b8]/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#f4c430]/20 to-transparent rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-[#e8d4b8]/60 text-sm">Monthly Earnings</p>
                      <p className="font-mono text-4xl font-bold text-[#f4c430]">$642.80</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#4ade80]/20 text-[#4ade80] font-mono text-sm">
                      +24.5%
                    </div>
                  </div>

                  <div className="h-40 flex items-end gap-2 mb-8">
                    {[35, 42, 38, 55, 48, 62, 58, 75, 68, 82, 78, 92].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-[#d4a574] to-[#f4c430] transition-all hover:opacity-80" style={{ height: `${h}%` }} />
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#1a0f0a]/50">
                      <p className="text-[#e8d4b8]/60 text-xs mb-1">Waste Collected</p>
                      <p className="font-mono text-xl font-semibold">847 lbs</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#1a0f0a]/50">
                      <p className="text-[#e8d4b8]/60 text-xs mb-1">CO2 Offset</p>
                      <p className="font-mono text-xl font-semibold">1.2 tons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[#f4c430] text-sm tracking-wider">TOKENOMICS</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">The $BEAN Token</h2>
            <p className="text-[#e8d4b8]/70 max-w-2xl mx-auto text-lg">
              A deflationary utility token with real-world value backing from the circular coffee economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Supply', value: '100M', icon: '📊' },
              { label: 'Circulating', value: '42M', icon: '🔄' },
              { label: 'Staking APY', value: '12.4%', icon: '📈' },
              { label: 'Burn Rate', value: '2%/mo', icon: '🔥' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center hover:border-[#f4c430]/40 transition-all group">
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="font-mono text-3xl font-bold text-[#f4c430] mb-2">{item.value}</div>
                <div className="text-[#e8d4b8]/60 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">Token Distribution</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Community Rewards', pct: 40, color: '#f4c430' },
                    { label: 'Ecosystem Fund', pct: 25, color: '#d4a574' },
                    { label: 'Team & Advisors', pct: 15, color: '#4ade80' },
                    { label: 'Liquidity', pct: 12, color: '#e8d4b8' },
                    { label: 'Marketing', pct: 8, color: '#4a2c2a' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#e8d4b8]/80">{item.label}</span>
                        <span className="font-mono text-[#f4c430]">{item.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[#1a0f0a]">
                        <div 
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {[
                      { pct: 40, color: '#f4c430', offset: 0 },
                      { pct: 25, color: '#d4a574', offset: 40 },
                      { pct: 15, color: '#4ade80', offset: 65 },
                      { pct: 12, color: '#e8d4b8', offset: 80 },
                      { pct: 8, color: '#4a2c2a', offset: 92 },
                    ].map((seg, i) => (
                      <circle
                        key={i}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="20"
                        strokeDasharray={`${seg.pct * 2.51} 251`}
                        strokeDashoffset={`${-seg.offset * 2.51}`}
                        className="transition-all duration-1000"
                      />
                    ))}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-mono text-3xl font-bold text-[#f4c430]">100M</div>
                      <div className="text-[#e8d4b8]/60 text-sm">Total Supply</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4c430]/10 via-transparent to-[#d4a574]/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#f4c430]/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
            
            <div className="relative">
              <span className="text-6xl mb-8 block">☕</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to Brew
                <br />
                <span className="text-gradient">Your Profits?</span>
              </h2>
              <p className="text-[#e8d4b8]/70 text-lg max-w-xl mx-auto mb-10">
                Join 1,200+ coffee shops already earning from their daily waste. 
                Setup takes less than 5 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-5 bg-gradient-to-r from-[#d4a574] to-[#f4c430] text-[#1a0f0a] font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-[#f4c430]/30 transition-all hover:scale-105 flex items-center justify-center gap-3">
                  <span>Partner With Us</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="px-10 py-5 border-2 border-[#d4a574]/40 text-[#e8d4b8] font-semibold text-lg rounded-2xl hover:bg-[#d4a574]/10 transition-all">
                  Read Whitepaper
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-[#e8d4b8]/50 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No minimum commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#4ade80]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#d4a574]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4a574] to-[#f4c430] flex items-center justify-center">
                <span className="text-sm">☕</span>
              </div>
              <span className="font-display text-xl font-bold text-gradient">BEAN$</span>
            </div>
            <div className="flex items-center gap-6">
              {['Twitter', 'Discord', 'Telegram', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-[#e8d4b8]/50 hover:text-[#f4c430] transition-colors text-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-[#d4a574]/10">
            <p className="text-[#e8d4b8]/30 text-xs">
              Requested by @humanbeingET · Built by @clonkbot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;