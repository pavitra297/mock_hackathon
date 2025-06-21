
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDonations } from '@/data/mockData';
import DonationStatusBar from '@/components/DonationStatusBar';
import { MapPin, Package, Calendar, Heart } from 'lucide-react';

const Track = () => {
  const donations = mockDonations;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped_to_ngo':
        return 'bg-blue-100 text-blue-800';
      case 'payment_complete':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'shipped_to_ngo':
        return 'Shipped to NGO';
      case 'payment_complete':
        return 'Processing';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Donations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the journey of your donations from payment to delivery. See the real impact 
              you're making in women's lives across India.
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-coral-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{donations.length}</p>
              <p className="text-sm text-gray-600">Total Donations</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">
                {donations.filter(d => d.status === 'delivered').length}
              </p>
              <p className="text-sm text-gray-600">Successfully Delivered</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">
                {donations.filter(d => d.status === 'shipped_to_ngo').length}
              </p>
              <p className="text-sm text-gray-600">In Transit</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">
                ₹{donations.reduce((total, d) => total + d.amount, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Total Contributed</p>
            </CardContent>
          </Card>
        </div>

        {/* Donations List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Donation History</h2>
          
          {donations.map((donation) => (
            <Card key={donation.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                  <div>
                    <CardTitle className="text-lg">{donation.kitName}</CardTitle>
                    <p className="text-sm text-gray-600">
                      Tracking ID: {donation.trackingNumber} • Donated on {donation.date}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-teal-100 text-teal-800">
                      ₹{donation.amount}
                    </Badge>
                    <Badge className={getStatusColor(donation.status)}>
                      {getStatusText(donation.status)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Donation Progress */}
                  <DonationStatusBar status={donation.status} />
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Donation Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kit Type:</span>
                          <span className="font-medium">{donation.kitName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Amount:</span>
                          <span className="font-medium">₹{donation.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{donation.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tracking ID:</span>
                          <span className="font-medium">{donation.trackingNumber}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Delivery Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="font-medium">Beneficiary Location</p>
                            <p className="text-gray-600">{donation.beneficiaryLocation}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Package className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div>
                            <p className="font-medium">Partner NGO</p>
                            <p className="text-gray-600">{donation.ngoName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status-specific Information */}
                  {donation.status === 'delivered' && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <h4 className="font-medium text-green-900">Successfully Delivered!</h4>
                      </div>
                      <p className="text-green-800 text-sm">
                        Your hygiene kit has been successfully delivered to a woman in {donation.beneficiaryLocation}. 
                        Thank you for making a difference in her life!
                      </p>
                    </div>
                  )}
                  
                  {donation.status === 'shipped_to_ngo' && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium text-blue-900">On Its Way</h4>
                      </div>
                      <p className="text-blue-800 text-sm">
                        Your kit is currently with our partner NGO "{donation.ngoName}" and will be 
                        distributed to a beneficiary in {donation.beneficiaryLocation} soon.
                      </p>
                    </div>
                  )}
                  
                  {donation.status === 'payment_complete' && (
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-5 w-5 text-yellow-600" />
                        <h4 className="font-medium text-yellow-900">Processing</h4>
                      </div>
                      <p className="text-yellow-800 text-sm">
                        Your payment has been received and we're preparing your kit for shipment to 
                        our partner NGO. You'll receive an update soon!
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {donations.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No donations yet</h3>
              <p className="text-gray-600 mb-6">
                Start making a difference by donating your first hygiene kit.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center px-6 py-3 bg-coral-600 text-white font-medium rounded-lg hover:bg-coral-700 transition-colors"
              >
                <Heart className="h-4 w-4 mr-2" />
                Make Your First Donation
              </a>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Track;
