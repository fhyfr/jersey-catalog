import Image from 'next/image'

export default function JerseyCard({ jersey }) {
  const {
    nama_jersey,
    klub,
    harga,
    link_gambar,
    whatsapp_number = "6281234567890" // Default WhatsApp number
  } = jersey;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = `Halo! Saya tertarik dengan jersey ${nama_jersey} - ${klub}. Apakah masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsapp_number}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-3xl shadow-modern border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-hover hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-72 bg-gradient-light overflow-hidden">
        {link_gambar ? (
          <Image
            src={link_gambar}
            alt={`${nama_jersey} - ${klub}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-light">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-modern">
                <i className="fas fa-tshirt text-3xl text-brand-muted"></i>
              </div>
              <p className="text-brand-muted text-sm font-display">Gambar belum tersedia</p>
            </div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-modern text-white px-3 py-1.5 rounded-full text-xs font-bold font-display shadow-modern backdrop-blur-sm">
            <i className="fas fa-star mr-1"></i>
            PREMIUM
          </span>
        </div>

        {/* Quick View Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-modern hover:bg-white transition-colors duration-200">
            <i className="fas fa-eye text-brand-text"></i>
          </button>
        </div>

        {/* Wishlist Button */}
        <div className="absolute top-16 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 animation-delay-200">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-modern hover:bg-white transition-colors duration-200">
            <i className="far fa-heart text-brand-text hover:text-brand-primary"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Club Badge */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 bg-gradient-modern rounded-full flex items-center justify-center">
            <i className="fas fa-shield-alt text-white text-xs"></i>
          </div>
          <span className="text-brand-primary font-bold text-sm font-display uppercase tracking-wide">
            {klub}
          </span>
        </div>
        
        {/* Jersey Name */}
        <h3 className="text-xl font-bold font-display text-brand-text mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors duration-300">
          {nama_jersey}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-brand-light text-brand-text text-xs px-3 py-1 rounded-full font-display font-medium">
            <i className="fas fa-check-circle text-brand-success mr-1"></i>
            Original
          </span>
          <span className="bg-brand-light text-brand-text text-xs px-3 py-1 rounded-full font-display font-medium">
            <i className="fas fa-shipping-fast text-brand-primary mr-1"></i>
            Fast Delivery
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-2xl font-bold font-display text-brand-secondary">
              {formatPrice(parseInt(harga) || 0)}
            </div>
            <div className="text-brand-muted text-sm line-through">
              {formatPrice((parseInt(harga) || 0) * 1.3)}
            </div>
          </div>
          <div className="text-right">
            <div className="bg-gradient-modern text-white px-3 py-1 rounded-full text-xs font-bold">
              <i className="fas fa-fire mr-1"></i>
              HOT DEAL
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold font-display py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-modern hover:shadow-hover transform hover:scale-105 active:scale-95"
        >
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fab fa-whatsapp text-lg"></i>
          </div>
          <span>Pesan via WhatsApp</span>
          <i className="fas fa-arrow-right text-sm"></i>
        </button>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-brand-muted">
            <span className="flex items-center">
              <i className="fas fa-clock mr-1"></i>
              Ready Stock
            </span>
            <span className="flex items-center">
              <i className="fas fa-users mr-1"></i>
              100+ sold
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
