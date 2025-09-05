import { useState, useEffect, useMemo } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Head from 'next/head';
import Header from '../components/Header';
import JerseyCard from '../components/JerseyCard';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchFilter from '../components/SearchFilter';

const credentials = {
  client_email: '****t@****.iam.gserviceaccount.com',
  private_key: '-----BEGIN PRIVATE KEY-----\n****\n-----END PRIVATE KEY-----\n',
};

const sheetId = '****';

export default function Home() {
  const [jerseys, setJerseys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClub, setSelectedClub] = useState('');

  useEffect(() => {
    loadJerseyData();
  }, []);

  const loadJerseyData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const doc = new GoogleSpreadsheet(sheetId);
      await doc.useServiceAccountAuth(credentials);
      await doc.loadInfo();
      
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();
      
      // Transform Google Sheets data to jersey objects
      const jerseyData = rows.map((row, index) => ({
        id: index + 1,
        nama_jersey: row.get('nama_jersey') || row.get('Nama Jersey') || 'Jersey Tanpa Nama',
        klub: row.get('klub') || row.get('Klub') || 'Unknown Club',
        harga: row.get('harga') || row.get('Harga') || '0',
        link_gambar: row.get('link_gambar') || row.get('Link Gambar') || '',
        whatsapp_number: row.get('whatsapp_number') || row.get('WhatsApp') || '6281234567890'
      }));

      setJerseys(jerseyData);
    } catch (err) {
      console.error('Error loading jersey data:', err);
      setError('Gagal memuat data jersey. Silakan coba lagi.');
      
      // Fallback sample data for demo purposes
      setJerseys([
        {
          id: 1,
          nama_jersey: "Jersey Home Manchester United 2024",
          klub: "Manchester United",
          harga: "350000",
          link_gambar: "https://via.placeholder.com/300x400/ED3235/FFFFFF?text=MU+Home",
          whatsapp_number: "6281234567890"
        },
        {
          id: 2,
          nama_jersey: "Jersey Away Barcelona 2024",
          klub: "Barcelona",
          harga: "375000",
          link_gambar: "https://via.placeholder.com/300x400/004D98/FFFFFF?text=Barca+Away",
          whatsapp_number: "6281234567890"
        },
        {
          id: 3,
          nama_jersey: "Jersey Home Real Madrid 2024",
          klub: "Real Madrid",
          harga: "360000",
          link_gambar: "https://via.placeholder.com/300x400/FFFFFF/000000?text=Madrid+Home",
          whatsapp_number: "6281234567890"
        },
        {
          id: 4,
          nama_jersey: "Jersey Home Arsenal 2024",
          klub: "Arsenal",
          harga: "340000",
          link_gambar: "https://via.placeholder.com/300x400/EF0107/FFFFFF?text=Arsenal+Home",
          whatsapp_number: "6281234567890"
        },
        {
          id: 5,
          nama_jersey: "Jersey Third Liverpool 2024",
          klub: "Liverpool",
          harga: "355000",
          link_gambar: "https://via.placeholder.com/300x400/C8102E/FFFFFF?text=LFC+Third",
          whatsapp_number: "6281234567890"
        },
        {
          id: 6,
          nama_jersey: "Jersey Home Chelsea 2024",
          klub: "Chelsea",
          harga: "345000",
          link_gambar: "https://via.placeholder.com/300x400/034694/FFFFFF?text=Chelsea+Home",
          whatsapp_number: "6281234567890"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Get unique clubs for filter
  const clubs = useMemo(() => {
    const uniqueClubs = [...new Set(jerseys.map(jersey => jersey.klub))];
    return uniqueClubs.sort();
  }, [jerseys]);

  // Filter jerseys based on search and club selection
  const filteredJerseys = useMemo(() => {
    return jerseys.filter(jersey => {
      const matchesSearch = !searchTerm || 
        jersey.nama_jersey.toLowerCase().includes(searchTerm.toLowerCase()) ||
        jersey.klub.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesClub = !selectedClub || jersey.klub === selectedClub;
      
      return matchesSearch && matchesClub;
    });
  }, [jerseys, searchTerm, selectedClub]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterByClub = (club) => {
    setSelectedClub(club);
  };

  return (
    <>
      <Head>
        <title>Jersey Elite - Koleksi Jersey Premium & Eksklusif ⚽</title>
        <meta name="description" content="Temukan koleksi jersey sepak bola premium dan eksklusif dari klub-klub ternama dunia. Kualitas terbaik, harga terjangkau, pengiriman cepat ke seluruh Indonesia." />
        <meta name="keywords" content="jersey premium, sepak bola, manchester united, barcelona, real madrid, arsenal, liverpool, chelsea, jersey original" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jersey Elite - Koleksi Jersey Premium Terlengkap" />
        <meta property="og:description" content="Temukan jersey sepak bola premium dari klub-klub ternama dunia. Kualitas terbaik dengan harga terjangkau." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jersey Elite - Koleksi Premium" />
        <meta name="twitter:description" content="Jersey sepak bola premium dari klub ternama dunia" />
        
        {/* WhatsApp Meta Tags */}
        <meta property="whatsapp:title" content="Jersey Elite" />
        <meta property="whatsapp:description" content="Koleksi Jersey Premium & Eksklusif ⚽" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <Header />
        
        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-epl rounded-3xl shadow-epl mb-6">
              <i className="fas fa-tshirt text-3xl text-white"></i>
            </div>
            <h1 className="text-4xl md:text-6xl font-epl-heading font-bold text-brand-text mb-4 tracking-tighter">
              Premier Jersey <span className="text-gradient-epl">Collection</span>
            </h1>
            <p className="text-xl text-brand-muted font-epl-body max-w-2xl mx-auto leading-relaxed">
              Discover your dream jersey from our premium and exclusive collection. 
              Top quality, affordable prices, delivery across Indonesia.
            </p>
            
            {/* Stats - EPL Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-epl-heading font-bold text-brand-purple mb-2 font-sport-numbers">500+</div>
                <div className="text-brand-muted font-epl-body">Jersey Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-epl-heading font-bold text-brand-purple mb-2 font-sport-numbers">50+</div>
                <div className="text-brand-muted font-epl-body">Top Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-epl-heading font-bold text-brand-purple mb-2 font-sport-numbers">10K+</div>
                <div className="text-brand-muted font-epl-body">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-epl-heading font-bold text-brand-purple mb-2 font-sport-numbers">24H</div>
                <div className="text-brand-muted font-epl-body">Express Delivery</div>
              </div>
            </div>
          </div>
          {/* Search and Filter Section */}
          <SearchFilter 
            onSearch={handleSearch}
            onFilterByClub={handleFilterByClub}
            clubs={clubs}
          />

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 shadow-modern">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-red-800 mb-2">Oops! Ada Kendala</h3>
                  <p className="text-red-700 font-display mb-4">{error}</p>
                  <p className="text-red-600 text-sm font-display">
                    Jangan khawatir, kami menampilkan data contoh untuk demo. 
                    Silakan coba lagi dalam beberapa saat.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && <LoadingSpinner />}

          {/* Jersey Catalog Content */}
          {!loading && (
            <>
              {/* Results Header */}
              <div className="flex flex-col lg:flex-row items-center justify-between mb-8 bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-modern border border-white/20">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-2xl font-heading font-bold text-brand-secondary mb-2">
                    <i className="fas fa-tshirt mr-3 text-brand-primary"></i>
                    Jersey Collection
                  </h2>
                  <div className="text-brand-text font-display">
                    <span className="font-bold text-2xl text-brand-primary">{filteredJerseys.length}</span> jersey ditemukan
                    {searchTerm && <span className="text-brand-muted ml-2">untuk "{searchTerm}"</span>}
                    {selectedClub && <span className="text-brand-muted ml-2">di klub "{selectedClub}"</span>}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-brand-muted font-display text-center lg:text-right">
                    <div className="mb-1">💬 Klik "Pesan via WhatsApp" untuk order langsung</div>
                    <div className="text-xs">🚚 Pengiriman ke seluruh Indonesia</div>
                  </div>
                  
                  {/* Sort Options */}
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl font-display text-sm focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all">
                    <option>Urutkan</option>
                    <option>Harga Terendah</option>
                    <option>Harga Tertinggi</option>
                    <option>Terbaru</option>
                    <option>Terpopuler</option>
                  </select>
                </div>
              </div>

              {/* Jersey Cards Grid */}
              {filteredJerseys.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredJerseys.map((jersey, index) => (
                    <div 
                      key={jersey.id} 
                      className="animate-fade-in"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <JerseyCard jersey={jersey} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <div className="max-w-md mx-auto">
                    <div className="w-32 h-32 bg-gradient-light rounded-full flex items-center justify-center mx-auto mb-8">
                      <i className="fas fa-search text-4xl text-brand-muted"></i>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-brand-secondary mb-4">
                      Oops! Tidak Ada Jersey Ditemukan
                    </h3>
                    <p className="text-brand-muted font-display text-lg mb-8 leading-relaxed">
                      Maaf, tidak ada jersey yang cocok dengan pencarian Anda.
                      Coba ubah kata kunci atau filter yang digunakan.
                    </p>
                    
                    {/* Suggestions */}
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
                      <h4 className="font-heading font-bold text-brand-secondary mb-4">Saran untuk Anda:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {['Manchester United', 'Barcelona', 'Real Madrid', 'Arsenal', 'Liverpool', 'Chelsea'].map((suggestion) => (
                          <button
                            key={suggestion}
                            onClick={() => {
                              setSearchTerm(suggestion);
                              onSearch(suggestion);
                            }}
                            className="px-4 py-2 bg-brand-light hover:bg-brand-primary hover:text-white rounded-full text-sm font-display transition-all duration-200 hover:scale-105"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedClub('');
                        }}
                        className="bg-gradient-modern text-white px-8 py-4 rounded-2xl font-bold font-display shadow-modern hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                      >
                        <i className="fas fa-list mr-2"></i>
                        Lihat Semua Jersey
                      </button>
                      <button className="bg-white border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-2xl font-bold font-display hover:bg-brand-primary hover:text-white transition-all duration-300">
                        <i className="fab fa-whatsapp mr-2"></i>
                        Bantuan WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="relative bg-gradient-dark text-white py-16 mt-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white rounded-full animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
              ))}
            </div>
          </div>

          <div className="relative container mx-auto px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-modern rounded-2xl flex items-center justify-center shadow-modern">
                    <i className="fas fa-tshirt text-2xl text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-1">Jersey Elite</h3>
                    <p className="text-gray-300 font-display">Premium Jersey Collection</p>
                  </div>
                </div>
                <p className="text-gray-300 font-display leading-relaxed mb-6 max-w-md">
                  Destinasi terpercaya untuk jersey sepak bola premium dan eksklusif. 
                  Kami menyediakan koleksi terlengkap dengan kualitas terbaik di Indonesia.
                </p>
                
                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-instagram', color: 'hover:text-pink-400' },
                    { icon: 'fab fa-facebook', color: 'hover:text-blue-400' },
                    { icon: 'fab fa-twitter', color: 'hover:text-blue-300' },
                    { icon: 'fab fa-whatsapp', color: 'hover:text-green-400' },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:bg-white/20`}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Home', icon: 'fas fa-home' },
                    { label: 'Katalog Jersey', icon: 'fas fa-tshirt' },
                    { label: 'Jersey Terbaru', icon: 'fas fa-star' },
                    { label: 'Best Seller', icon: 'fas fa-fire' },
                    { label: 'Promo Spesial', icon: 'fas fa-tags' },
                  ].map((link, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 font-display">
                        <i className={`${link.icon} text-sm w-4`}></i>
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-heading font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center">
                      <i className="fab fa-whatsapp text-white"></i>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">WhatsApp</div>
                      <div className="text-sm">+62 812-3456-7890</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">Jam Operasional</div>
                      <div className="text-sm">Senin - Minggu: 08:00 - 22:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center">
                      <i className="fas fa-shipping-fast text-white"></i>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">Pengiriman</div>
                      <div className="text-sm">Seluruh Indonesia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="text-center max-w-2xl mx-auto">
                <h4 className="font-heading font-bold text-2xl mb-4">Dapatkan Update Terbaru</h4>
                <p className="text-gray-300 font-display mb-6">
                  Berlangganan newsletter kami dan dapatkan info jersey terbaru, promo eksklusif, dan penawaran spesial!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Masukkan email Anda..."
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary backdrop-blur-md font-display"
                  />
                  <button className="bg-gradient-modern text-white px-8 py-4 rounded-2xl font-bold font-display shadow-modern hover:shadow-hover transition-all duration-300 transform hover:scale-105">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 pt-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-gray-400 font-display mb-4 md:mb-0">
                  © 2025 Jersey Elite. Made with ❤️ for jersey enthusiasts everywhere.
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-gray-400 text-sm font-display">
                    Powered by <span className="text-white font-semibold">Next.js</span> & <span className="text-white font-semibold">Google Sheets API</span>
                  </div>
                </div>
              </div>
              
              {/* Tech Stack Icons */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                {[
                  { name: 'Next.js', icon: 'fab fa-react' },
                  { name: 'TailwindCSS', icon: 'fab fa-css3-alt' },
                  { name: 'Google Sheets', icon: 'fab fa-google' },
                  { name: 'Vercel', icon: 'fas fa-cloud' },
                ].map((tech, index) => (
                  <div key={index} className="group relative">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                      <i className={`${tech.icon} text-sm text-gray-400 group-hover:text-white`}></i>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-display">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating WhatsApp Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <button className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-modern hover:shadow-hover flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-pulse">
              <i className="fab fa-whatsapp text-2xl"></i>
            </button>
          </div>
        </footer>
      </div>
    </>
  )
}
