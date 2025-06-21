import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description')
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: Target,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description')
    },
    {
      icon: Globe,
      title: t('about.values.accessibility.title'),
      description: t('about.values.accessibility.description')
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Mehta',
      role: 'Founder & CEO',
      bio: 'Public health expert with 15+ years experience in women\'s health initiatives across rural India.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Operations Director',
      bio: 'Supply chain specialist ensuring efficient distribution of hygiene kits to remote areas.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Anita Sharma',
      role: 'Community Outreach Lead',
      bio: 'Social worker dedicated to building relationships with NGO partners and local communities.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Vikram Singh',
      role: 'Technology Lead',
      bio: 'Building digital solutions to track impact and connect donors with beneficiaries.',
      image: '/api/placeholder/200/200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coral-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-coral-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-600">{t('about.values.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.impact.title')}</h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">The Beginning (2020)</h3>
                <p className="text-gray-700">
                  Started with a pilot program in 5 villages in Rajasthan, reaching 200 women with 
                  basic hygiene kits and education sessions. The positive response encouraged us to expand.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scaling Up (2021-2022)</h3>
                <p className="text-gray-700">
                  Partnered with 15 NGOs across 3 states, developed our digital platform, and reached 
                  over 5,000 women. Introduced different kit options to meet varying needs and budgets.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">National Presence (2023-2024)</h3>
                <p className="text-gray-700">
                  Expanded to 12 states with 45 NGO partners, launched our donor tracking system, 
                  and reached over 15,000 women. Introduced educational content in 8 regional languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600">{t('about.team.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-coral-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-coral-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">{t('about.join.title')}</h2>
          <p className="text-xl text-white/90 mb-8">
            {t('about.join.description')}
          </p>
          <div className="space-y-4">
            <p className="text-lg">{t('about.join.ready')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/donate" 
                className="bg-white text-coral-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('cta.startDonating')}
              </a>
              <a 
                href="mailto:partner@empad.org" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {t('about.join.partner')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
