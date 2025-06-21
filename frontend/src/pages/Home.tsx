
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { impactStats, chartData } from '@/data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Heart, Users, Package, MapPin, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const chartsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = [statsRef.current, chartsRef.current, howItWorksRef.current, testimonialsRef.current];
    elements.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: t('impact.womenSupported'), value: impactStats.totalWomenSupported.toLocaleString(), color: 'text-coral-600' },
    { icon: Package, label: t('impact.kitsDistributed'), value: impactStats.kitsDistributed.toLocaleString(), color: 'text-teal-600' },
    { icon: Heart, label: t('impact.ngoPartners'), value: impactStats.ngoPartners.toString(), color: 'text-purple-600' },
    { icon: MapPin, label: t('impact.statesReached'), value: impactStats.statesReached.toString(), color: 'text-blue-600' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Jaipur, Rajasthan',
      text: 'EmPad has changed my life. Now I can attend school every day without worry.',
      rating: 5
    },
    {
      name: 'Meera Patel',
      location: 'Mumbai, Maharashtra', 
      text: 'The hygiene kits are of excellent quality and the education materials are so helpful.',
      rating: 5
    },
    {
      name: 'Sunita Devi',
      location: 'Patna, Bihar',
      text: 'I feel more confident and empowered. Thank you to all the donors who made this possible.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coral-500 via-coral-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                {t('hero.badge')}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')}
                <span className="block text-yellow-300">{t('hero.subtitle')}</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Link to="/donate">
                    <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100 font-semibold px-8 group transition-all duration-300">
                      {t('hero.donateNow')}
                      <Heart className="ml-2 h-5 w-5 group-hover:text-red-500 transition-colors duration-300" />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100 font-semibold px-8 group transition-all duration-300">
                      {t('hero.startDonating')}
                      <Heart className="ml-2 h-5 w-5 group-hover:text-red-500 transition-colors duration-300" />
                    </Button>
                  </Link>
                )}
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-coral-600 px-8 transition-all duration-300">
                    {t('hero.learnMore')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <img 
                  src="https://sheatwork.com/wp-content/uploads/2020/10/rural.jpg" 
                  alt="Women empowerment" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('impact.title')}</h2>
            <p className="text-xl text-gray-600">{t('impact.subtitle')}</p>
          </div>
          
          <div ref={statsRef} className="opacity-0 transition-all duration-500 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <Icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts */}
          <div ref={chartsRef} className="opacity-0 transition-all duration-500 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('charts.monthlyDonations')}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData.monthlyDonations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="donations" 
                      stroke="#e87575" 
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{t('charts.kitDistribution')}</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData.kitDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {chartData.kitDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600">{t('howItWorks.subtitle')}</p>
          </div>
          
          <div ref={howItWorksRef} className="opacity-0 transition-all duration-500 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: t('howItWorks.step1Title'),
                description: t('howItWorks.step1Desc'),
                icon: Package
              },
              {
                step: '2',
                title: t('howItWorks.step2Title'),
                description: t('howItWorks.step2Desc'),
                icon: Heart
              },
              {
                step: '3',
                title: t('howItWorks.step3Title'),
                description: t('howItWorks.step3Desc'),
                icon: MapPin
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Step {item.step}: {item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
          </div>
          
          <div ref={testimonialsRef} className="opacity-0 transition-all duration-500 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl text-white/90 mb-8">
            {t('cta.subtitle')}
          </p>
          {user ? (
            <Link to="/donate">
              <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100 font-semibold px-8 group transition-all duration-300">
                {t('cta.startDonating')}
                <Heart className="ml-2 h-5 w-5 group-hover:text-red-500 transition-colors duration-300" />
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100 font-semibold px-8 group transition-all duration-300">
                {t('cta.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
