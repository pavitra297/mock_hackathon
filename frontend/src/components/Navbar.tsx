import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { LogOut, User, Menu, X, Sparkles } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const publicLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/campaigns', label: t('nav.campaigns') },
    { href: '/about', label: t('nav.about') }
  ];

  const userLinks = [
    { href: '/dashboard', label: t('nav.dashboard') },
    { href: '/donate', label: t('nav.donate') },
    { href: '/track', label: t('nav.track') }
  ];

  const adminLinks = [
    { href: '/admin', label: t('nav.admin') }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-coral-500 via-coral-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Sparkles className="h-5 w-5 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-coral-400/30 to-teal-400/30 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-coral-600 to-teal-600 bg-clip-text text-transparent font-playfair">
                EmPad
              </span>
              <span className="text-xs text-gray-500 -mt-1 font-medium">Empowering Women</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {publicLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href) 
                    ? 'text-coral-600 bg-coral-50 shadow-sm' 
                    : 'text-gray-700 hover:text-coral-600 hover:bg-coral-50/50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user && (
              <>
                {userLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.href) 
                        ? 'text-coral-600 bg-coral-50 shadow-sm' 
                        : 'text-gray-700 hover:text-coral-600 hover:bg-coral-50/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {user.role === 'admin' && adminLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.href) 
                        ? 'text-coral-600 bg-coral-50 shadow-sm' 
                        : 'text-gray-700 hover:text-coral-600 hover:bg-coral-50/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* Language Selector and Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="flex items-center space-x-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>{t('nav.logout')}</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="outline" size="sm" className="hover:bg-coral-50 hover:border-coral-300 hover:text-coral-600 transition-colors duration-200">
                    {t('nav.login')}
                  </Button>
                </Link>
                <Link to="/login?register=true">
                  <Button size="sm" className="bg-gradient-to-r from-coral-500 to-teal-500 hover:from-coral-600 hover:to-teal-600 text-white shadow-md hover:shadow-lg transition-all duration-200">
                    {t('cta.getStarted')}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-coral-50"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Language Selector for Mobile */}
            <div className="px-3 py-2 border-b flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{t('nav.language')}</span>
              <LanguageSelector />
            </div>

            {publicLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-coral-600 bg-coral-50'
                    : 'text-gray-700 hover:text-coral-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {user && (
              <>
                {userLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(link.href)
                        ? 'text-coral-600 bg-coral-50'
                        : 'text-gray-700 hover:text-coral-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {user.role === 'admin' && adminLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(link.href)
                        ? 'text-coral-600 bg-coral-50'
                        : 'text-gray-700 hover:text-coral-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="px-3 py-2 border-t">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{user.name}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>{t('nav.logout')}</span>
                  </Button>
                </div>
              </>
            )}

            {!user && (
              <div className="px-3 py-2 border-t space-y-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">{t('nav.login')}</Button>
                </Link>
                <Link to="/login?register=true" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-to-r from-coral-500 to-teal-500 text-white">{t('cta.getStarted')}</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
