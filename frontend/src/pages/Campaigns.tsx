
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { campaigns } from '@/data/mockData';
import { MapPin, Users, Calendar } from 'lucide-react';

const Campaigns = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'Ongoing';
      case 'upcoming':
        return 'Upcoming';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Campaigns</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing and completed campaigns across India. Each campaign represents 
              our commitment to empowering women through menstrual health awareness and support.
            </p>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge className={getStatusColor(campaign.status)}>
                    {getStatusText(campaign.status)}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {new Date(campaign.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{campaign.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{campaign.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-coral-500" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-teal-500" />
                    <span>{campaign.beneficiaries.toLocaleString()} women supported</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                    <span>Campaign Date: {new Date(campaign.date).toLocaleDateString('en-IN')}</span>
                  </div>
                </div>

                {campaign.status === 'completed' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      ✅ Successfully reached {campaign.beneficiaries.toLocaleString()} women
                    </p>
                  </div>
                )}

                {campaign.status === 'ongoing' && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-sm font-medium">
                      🚀 Currently serving communities in {campaign.location}
                    </p>
                  </div>
                )}

                {campaign.status === 'upcoming' && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800 text-sm font-medium">
                      📅 Starting soon - Help us prepare for {campaign.beneficiaries.toLocaleString()} women
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Campaign Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-coral-600">
                {campaigns.reduce((total, campaign) => total + campaign.beneficiaries, 0).toLocaleString()}
              </p>
              <p className="text-gray-600">Total Women Reached</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-600">{campaigns.length}</p>
              <p className="text-gray-600">Total Campaigns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {campaigns.filter(c => c.status === 'completed').length}
              </p>
              <p className="text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                {new Set(campaigns.map(c => c.location.split(',')[1]?.trim())).size}
              </p>
              <p className="text-gray-600">States Covered</p>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Educational Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Breaking Menstrual Taboos in Rural India',
                excerpt: 'How education and awareness are changing perspectives on menstrual health in rural communities.',
                date: '2024-03-15',
                readTime: '5 min read'
              },
              {
                title: 'The Economic Impact of Period Poverty',
                excerpt: 'Understanding how lack of menstrual hygiene products affects women\'s economic opportunities.',
                date: '2024-03-10',
                readTime: '7 min read'
              },
              {
                title: 'Sustainable Menstrual Health Solutions',
                excerpt: 'Exploring eco-friendly alternatives and their benefits for both women and the environment.',
                date: '2024-03-05',
                readTime: '6 min read'
              },
              {
                title: 'Workplace Menstrual Health Policies',
                excerpt: 'How progressive workplace policies are supporting women\'s health and productivity.',
                date: '2024-02-28',
                readTime: '4 min read'
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString('en-IN')}
                    </span>
                    <Badge variant="secondary">{article.readTime}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
