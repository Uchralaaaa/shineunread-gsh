import React, { useState, useEffect } from 'react';
import { Search, Menu, User, Eye, MessageCircle, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function UnreadToday() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left */}
            <div className="flex items-center space-x-6">
              <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <div className="text-2xl font-bold text-slate-800">UNREAD</div>
                <sup className="text-xs text-slate-400 font-medium">TM</sup>
              </div>
            </div>

            {/* Center Search */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Хайлт хийх"
                  className="w-full pl-12 pr-4 py-3 bg-slate-100/60 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all placeholder-slate-400"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500 hidden md:block">Дараагийн нийтлэл</span>
              <span className="text-sm font-semibold bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors cursor-pointer">#RANDOM</span>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-sm">
                Өнөөдөр орно
              </button>
              <div className="flex space-x-2">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social, i) => (
                  <div key={i} className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl overflow-hidden h-[500px] shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-2xl rotate-45"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
            
            <div className="relative z-10 p-12 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <div className="text-white">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    ШИНЭ
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    ШИНЭЧЛЭГДЛЭЭ<br />
                    <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      МЭДҮҮШТЭЙ
                    </span>
                  </h1>
                  <h2 className="text-2xl font-semibold mb-8 text-blue-100 leading-relaxed">
                    ТАНЫГ ХЯЗГААРГҮЙД ХӨТЛӨХ<br />
                    UNIVERSE КАРТ
                  </h2>
                  <div className="flex items-center space-x-6 text-sm text-blue-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-0.5">
                        <div className="w-full h-full bg-white rounded-full"></div>
                      </div>
                      <span className="font-medium">Purevdorj Adiyasuren</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>5 сарын 22, 2025</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>5 мин</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">Universe</div>
                        <div className="text-blue-200 text-lg">card</div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        {[0,1,2,3].map(i => (
                          <div key={i} className={`h-14 rounded-xl ${i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-red-400' : i === 2 ? 'bg-green-400' : 'bg-purple-400'}`}></div>
                        ))}
                      </div>
                      <div className="text-white/80 text-sm">VISA</div>
                    </div>
                    <div className="text-right text-white/60 text-xs">
                      1800-1616 • www.golomtbank.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Talent Summit */}
            <div className="group relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 rounded-3xl p-10 text-white overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-white/30 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-purple-200">talent</span>
                  <span className="text-sm font-medium text-purple-200">summit</span>
                </div>
                <div className="text-6xl font-black mb-8 leading-none">2025</div>
                <div className="text-xl font-semibold mb-12 leading-relaxed">
                  ТОП ТАЛЕНТЫГ ТОХИРСОН<br />
                  КОМПАНИТАЙ НЬ ХОЛБОХ
                </div>
                <div className="flex justify-end">
                  <div className="text-right">
                    <div className="text-3xl font-bold">2025.05.24</div>
                    <div className="text-purple-200 text-sm mt-1">Энэ сарын эцэст</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dev Summit */}
            <div className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-orange-600 rounded-3xl p-10 text-white overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl">
              <div className="absolute top-8 right-8">
                <div className="text-orange-400 text-right leading-tight">
                  <div className="text-2xl font-bold">dev</div>
                  <div className="text-2xl font-bold">summit</div>
                  <div className="text-lg font-semibold">2025</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="text-2xl font-bold mb-2">Монголын технологийн</div>
                  <div className="text-2xl font-bold mb-2">салбарын хамгийн</div>
                  <div className="text-2xl font-bold mb-8 text-orange-300">том цугларалт</div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    <span className="font-medium">Боркшоо: 5/24</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    <span className="font-medium">Үндсэн арга хэмжээ: 5/25</span>
                  </div>
                </div>
                <div className="inline-flex items-center bg-slate-700/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                  <User className="w-4 h-4 mr-2 text-orange-400" />
                  <span>devsummit.dev</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Article */}
        <section className="mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/50 hover:shadow-lg transition-all duration-500">
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-0.5">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-lg">Purevdorj Adiyasuren</div>
                <div className="text-slate-500 flex items-center space-x-3 text-sm">
                  <span>5 сарын 22, 2025</span>
                  <span>•</span>
                  <span>3 мин</span>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Мэдүүштэй
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                  Тасалбарын худалдааны шинэ эрин:<br />
                  Tix.shoppy.mn
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Цахим тасалбарын худалдааны шинэ платформ нээгдэж, хэрэглэгчдэд илүү хялбар, найдвартай үйлчилгээ үзүүлэх болно.
                </p>
              </div>
              <div className="ml-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editor's Choice */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Редакцын сонгол</h2>
            <div className="flex space-x-3">
              <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Нийгмийн хамгааллын шинэ бодлого", time: "4 мин", views: "5274", comments: "0", gradient: "from-blue-400 to-cyan-500" },
              { title: "АЙН РЭНД ДҮРГҮЙ ДҮ БИДНЭЭС БА АРВАН УЛИС", time: "6 мин", views: "1", comments: "1", gradient: "from-green-400 to-emerald-500" },
              { title: "Спортын салбарын хөгжлийн стратеги", time: "8 мин", views: "4955", comments: "0", gradient: "from-purple-400 to-pink-500" },
              { title: "Tapa компанийн дижитал шилжилт", time: "3 мин", views: "8054", comments: "1", gradient: "from-orange-400 to-red-500" },
              { title: "Залуучуудын боловсролын шинэчлэл", time: "12 мин", views: "7368", comments: "0", gradient: "from-indigo-400 to-purple-500" }
            ].map((article, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-slate-300/50 transition-all duration-500 hover:-translate-y-1">
                <div className={`h-36 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-slate-700">
                    {article.time}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-800 text-sm mb-4 line-clamp-3 leading-relaxed group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span className="font-semibold">{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span className="font-semibold">{article.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}