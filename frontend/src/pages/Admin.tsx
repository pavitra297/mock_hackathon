import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { mockDonations, campaigns, donationKits } from '@/data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Users, 
  Package, 
  TrendingUp, 
  MapPin, 
  Edit, 
  Save, 
  Plus,
  Eye,
  AlertCircle
} from 'lucide-react';

const Admin = () => {
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    description: '',
    location: '',
    beneficiaries: '',
    date: ''
  });

  const stats = [
    {
      icon: Users,
      label: 'Total Donors',
      value: '1,247',
      change: '+12%',
      color: 'text-coral-600',
      bgColor: 'bg-coral-50'
    },
    {
      icon: Package,
      label: 'Kits Distributed',
      value: '8,750',
      change: '+18%',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: TrendingUp,
      label: 'Monthly Revenue',
      value: '₹4,32,000',
      change: '+24%',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: MapPin,
      label: 'Active NGOs',
      value: '45',
      change: '+5%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const recentDonations = mockDonations.slice(0, 10);

  const updateDonationStatus = (donationId: string, newStatus: string) => {
    console.log(`Updating donation ${donationId} to status: ${newStatus}`);
    // In a real app, this would make an API call
  };

  const chartData = [
    { month: 'Jan', donations: 120, kits: 180 },
    { month: 'Feb', donations: 180, kits: 250 },
    { month: 'Mar', donations: 240, kits: 320 },
    { month: 'Apr', donations: 210, kits: 290 },
    { month: 'May', donations: 280, kits: 380 },
    { month: 'Jun', donations: 320, kits: 420 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage donations, track inventory, and oversee campaign operations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Donor</th>
                        <th className="text-left p-2">Kit</th>
                        <th className="text-left p-2">Amount</th>
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="border-b hover:bg-gray-50">
                          <td className="p-2">
                            <div>
                              <p className="font-medium">Donor #{donation.id}</p>
                              <p className="text-gray-600 text-xs">{donation.trackingNumber}</p>
                            </div>
                          </td>
                          <td className="p-2">{donation.kitName}</td>
                          <td className="p-2 font-medium">₹{donation.amount}</td>
                          <td className="p-2">{donation.date}</td>
                          <td className="p-2">
                            <Badge className={
                              donation.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              donation.status === 'shipped_to_ngo' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }>
                              {donation.status === 'delivered' ? 'Delivered' :
                               donation.status === 'shipped_to_ngo' ? 'Shipped' : 'Processing'}
                            </Badge>
                          </td>
                          <td className="p-2">
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedDonation(donation.id)}
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              <select
                                className="text-xs border rounded px-2 py-1"
                                onChange={(e) => updateDonationStatus(donation.id, e.target.value)}
                                value={donation.status}
                              >
                                <option value="payment_complete">Processing</option>
                                <option value="shipped_to_ngo">Shipped</option>
                                <option value="delivered">Delivered</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Kit Inventory</CardTitle>
                <Button size="sm" className="gradient-primary text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Kit
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {donationKits.map((kit) => (
                    <Card key={kit.id} className="border">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900">{kit.name}</h3>
                          <Badge className="bg-teal-100 text-teal-800">₹{kit.price}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{kit.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">In Stock:</span>
                            <span className="font-medium text-green-600">245 units</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Distributed:</span>
                            <span className="font-medium">1,250 units</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-3">
                          <Edit className="h-3 w-3 mr-2" />
                          Edit Kit
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Existing Campaigns */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {campaigns.slice(0, 3).map((campaign) => (
                    <div key={campaign.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                        <Badge className={
                          campaign.status === 'completed' ? 'bg-green-100 text-green-800' :
                          campaign.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }>
                          {campaign.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{campaign.description}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{campaign.location}</span>
                        <span className="ml-4">{campaign.beneficiaries} beneficiaries</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        <Edit className="h-3 w-3 mr-2" />
                        Edit Campaign
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Create New Campaign */}
              <Card>
                <CardHeader>
                  <CardTitle>Create New Campaign</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Campaign Title</Label>
                    <Input
                      id="title"
                      value={newCampaign.title}
                      onChange={(e) => setNewCampaign({...newCampaign, title: e.target.value})}
                      placeholder="Enter campaign title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newCampaign.description}
                      onChange={(e) => setNewCampaign({...newCampaign, description: e.target.value})}
                      placeholder="Describe the campaign"
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={newCampaign.location}
                      onChange={(e) => setNewCampaign({...newCampaign, location: e.target.value})}
                      placeholder="Campaign location"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="beneficiaries">Beneficiaries</Label>
                      <Input
                        id="beneficiaries"
                        type="number"
                        value={newCampaign.beneficiaries}
                        onChange={(e) => setNewCampaign({...newCampaign, beneficiaries: e.target.value})}
                        placeholder="Expected beneficiaries"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Start Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newCampaign.date}
                        onChange={(e) => setNewCampaign({...newCampaign, date: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Create Campaign
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="donations" fill="#e87575" />
                      <Bar dataKey="kits" fill="#14b8a6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-coral-50 rounded-lg">
                      <span className="text-coral-800 font-medium">Average Donation</span>
                      <span className="text-xl font-bold text-coral-600">₹347</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                      <span className="text-teal-800 font-medium">Conversion Rate</span>
                      <span className="text-xl font-bold text-teal-600">12.4%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-purple-800 font-medium">Repeat Donors</span>
                      <span className="text-xl font-bold text-purple-600">34%</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-800 font-medium">Kit Utilization</span>
                      <span className="text-xl font-bold text-blue-600">89%</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">Recent Alerts</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                        <span className="text-yellow-700">Low stock: Basic Hygiene Kit (15 units left)</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-green-500" />
                        <span className="text-green-700">Monthly target achieved (105%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
