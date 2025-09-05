import { useState } from 'react';

export default function SearchFilter({ onSearch, onFilterByClub, clubs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClub, setSelectedClub] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClubFilter = (e) => {
    const value = e.target.value;
    setSelectedClub(value);
    onFilterByClub(value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedClub('');
    onSearch('');
    onFilterByClub('');
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl shadow-modern rounded-3xl p-8 mb-8 border border-white/20">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-heading font-bold text-brand-secondary mb-2">
          Temukan Jersey Impian Anda
        </h2>
        <p className="text-brand-muted font-display">
          Cari dari ribuan koleksi jersey premium dari seluruh dunia
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Search Input */}
        <div className="flex-1 relative group">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10">
            <i className="fas fa-search text-brand-muted group-focus-within:text-brand-primary transition-colors duration-300"></i>
          </div>
          <input
            type="text"
            placeholder="Cari jersey, klub, atau pemain favorit..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-14 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 font-display placeholder:text-brand-muted shadow-inner-light"
          />
          {/* Search suggestion dropdown placeholder */}
          {searchTerm && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-modern border border-gray-100 z-20 overflow-hidden">
              <div className="p-4">
                <div className="text-sm text-brand-muted font-display mb-2">Pencarian populer:</div>
                <div className="flex flex-wrap gap-2">
                  {['Manchester United', 'Barcelona', 'Real Madrid', 'Arsenal'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setSearchTerm(suggestion);
                        onSearch(suggestion);
                      }}
                      className="px-3 py-1 bg-brand-light hover:bg-brand-primary hover:text-white rounded-full text-sm transition-all duration-200 font-display"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Club Filter */}
        <div className="w-full lg:w-72 relative">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10">
            <i className="fas fa-shield-alt text-brand-muted"></i>
          </div>
          <select
            value={selectedClub}
            onChange={handleClubFilter}
            className="w-full pl-14 pr-12 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 font-display text-brand-text shadow-inner-light appearance-none cursor-pointer"
          >
            <option value="">Semua Klub ⚽</option>
            {clubs.map((club) => (
              <option key={club} value={club}>
                {club}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
            <i className="fas fa-chevron-down text-brand-muted"></i>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Filter Button */}
          <button className="w-14 h-14 bg-gradient-modern text-white rounded-2xl flex items-center justify-center shadow-modern hover:shadow-hover transition-all duration-300 transform hover:scale-105">
            <i className="fas fa-filter"></i>
          </button>

          {/* Clear Filters Button */}
          {(searchTerm || selectedClub) && (
            <button
              onClick={clearFilters}
              className="w-14 h-14 bg-gray-500 hover:bg-gray-600 text-white rounded-2xl flex items-center justify-center shadow-modern hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchTerm || selectedClub) && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-display font-semibold text-brand-text">
              Filter aktif:
            </span>
            {searchTerm && (
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-modern text-white shadow-modern">
                <i className="fas fa-search mr-2"></i>
                "{searchTerm}"
                <button
                  onClick={() => {
                    setSearchTerm('');
                    onSearch('');
                  }}
                  className="ml-2 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <i className="fas fa-times text-xs"></i>
                </button>
              </span>
            )}
            {selectedClub && (
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-modern">
                <i className="fas fa-shield-alt mr-2"></i>
                {selectedClub}
                <button
                  onClick={() => {
                    setSelectedClub('');
                    onFilterByClub('');
                  }}
                  className="ml-2 w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-300 transition-colors"
                >
                  <i className="fas fa-times text-xs text-blue-800"></i>
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Quick Filters */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-sm font-display font-semibold text-brand-text mb-3">Filter cepat:</div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Terlaris', icon: 'fas fa-fire', color: 'bg-red-100 text-red-800' },
            { label: 'Harga Rendah', icon: 'fas fa-arrow-down', color: 'bg-green-100 text-green-800' },
            { label: 'Jersey Baru', icon: 'fas fa-star', color: 'bg-yellow-100 text-yellow-800' },
            { label: 'Rating Tinggi', icon: 'fas fa-thumbs-up', color: 'bg-blue-100 text-blue-800' },
          ].map((filter) => (
            <button
              key={filter.label}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${filter.color} shadow-modern`}
            >
              <i className={`${filter.icon} mr-2`}></i>
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
