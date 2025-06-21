
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { mockDonations } from '@/data/mockData';
import DonationStatusBar from '@/components/DonationStatusBar';
import { Heart, Users, Calendar, TrendingUp, Package, MapPin } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const userDonations = mockDonations.slice(0, 3); // Show last 3 donations

  const stats = [
    {
      icon: Heart,
      label: 'Total Donated',
      value: `₹${user.totalDonated.toLocaleString()}`,
      color: 'text-coral-600',
      bgColor: 'bg-coral-50'
    },
    {
      icon: Users,
      label: 'Women Supported',
      value: user.womenSupported.toString(),
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Calendar,
      label: 'Member Since',
      value: new Date(user.joinDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      label: 'Impact Level',
      value: user.totalDonated > 2000 ? 'Champion' : user.totalDonated > 1000 ? 'Supporter' : 'Starter',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-coral-500 to-teal-500 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
                <p className="text-white/90 text-lg">
                  Thank you for being part of our mission to empower women across India.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link to="/donate">
                  <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100 font-semibold">
                    Donate Now <Heart className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gri
d-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Donations</span>
                <Link to="/track">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {userDonations.map((donation) => (
                <div key={donation.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{donation.kitName}</h4>
                      <p className="text-sm text-gray-600">₹{donation.amount} • {donation.date}</p>
                    </div>
                    <Badge variant={
                      donation.status === 'delivered' ? 'default' :
                      donation.status === 'shipped_to_ngo' ? 'secondary' : 'outline'
                    }>
                      {donation.status === 'delivered' ? 'Delivered' :
                       donation.status === 'shipped_to_ngo' ? 'Shipped' : 'Processing'}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{donation.beneficiaryLocation}</span>
                  </div>
                  <DonationStatusBar status={donation.status} />
                </div>
              ))}

              {userDonations.length === 0 && (
                <div className="text-center py-8">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No donations yet</p>
                  <Link to="/donate">
                    <Button className="gradient-primary text-white">
                      Make Your First Donation
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Impact Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Impact Visualization */}
                <div className="bg-gradient-to-r from-coral-50 to-teal-50 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-coral-600 mb-2">
                      {user.womenSupported}
                    </div>
                    <p className="text-gray-700 font-medium">Women Supported</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Your donations have helped {user.womenSupported} women access menstrual hygiene products
                    </p>
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Achievement Milestones</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        user.totalDonated >= 500 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        ✓
                      </div>
                      <div>
                        <p className="text-sm font-medium">First Donation</p>
                        <p className="text-xs text-gray-600">Donate ₹500</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        user.totalDonated >= 1000 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        ✓
                      </div>
                      <div>
                        <p className="text-sm font-medium">Supporter</p>
                        <p className="text-xs text-gray-600">Donate ₹1,000</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        user.totalDonated >= 2000 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        ✓
                      </div>
                      <div>
                        <p className="text-sm font-medium">Champion</p>
                        <p className="text-xs text-gray-600">Donate ₹2,000</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        user.totalDonated >= 5000 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        ✓
                      </div>
                      <div>
                        <p className="text-sm font-medium">Hero</p>
                        <p className="text-xs text-gray-600">Donate ₹5,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Goal */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">Next Goal</h5>
                  <p className="text-sm text-blue-700">
                    {user.totalDonated < 5000 
                      ? `Donate ₹${(5000 - user.totalDonated).toLocaleString()} more to become a Hero!`
                      : 'You\'ve achieved all milestones! Thank you for your incredible support.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/donate" className="block">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-8 w-8 text-coral-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Make a Donation</h4>
                    <p className="text-sm text-gray-600">Choose from our hygiene kits</p>
                  </div>
                </Link>

                <Link to="/track" className="block">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Package className="h-8 w-8 text-teal-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Track Donations</h4>
                    <p className="text-sm text-gray-600">See your impact in real-time</p>
                  </div>
                </Link>

                <Link to="/campaigns" className="block">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <Users className="h-8 w-8 text-purple-600 mb-2" />
                    <h4 className="font-medium text-gray-900">View Campaigns</h4>
                    <p className="text-sm text-gray-600">See ongoing initiatives</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
