
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { donationKits } from '@/data/mockData';
import KitCard from '@/components/KitCard';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft, CreditCard, Heart, Shield, Truck } from 'lucide-react';

const Donate = () => {
  const { user } = useAuth();
  const [selectedKit, setSelectedKit] = useState<string | null>(null);
  const [step, setStep] = useState<'select' | 'confirm' | 'payment'>('select');

  const handleKitSelect = (kitId: string) => {
    setSelectedKit(kitId);
    setStep('confirm');
  };

  const handleConfirm = () => {
    setStep('payment');
  };

  const handlePayment = () => {
    // Mock payment processing
    toast({
      title: "Payment Successful!",
      description: "Your donation has been processed. Thank you for your support!",
    });
    
    // Reset form
    setSelectedKit(null);
    setStep('select');
  };

  const selectedKitData = selectedKit ? donationKits.find(kit => kit.id === selectedKit) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          {step !== 'select' && (
            <Button
              variant="ghost"
              onClick={() => {
                if (step === 'payment') setStep('confirm');
                else setStep('select');
              }}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          )}
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a hygiene kit that fits your budget and help empower women across India. 
              Every donation makes a real difference in someone's life.
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[
              { step: 'select', label: 'Select Kit', completed: step !== 'select' },
              { step: 'confirm', label: 'Confirm Details', completed: step === 'payment' },
              { step: 'payment', label: 'Payment', completed: false }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step === item.step ? 'bg-coral-500 text-white' : 
                    item.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}
                `}>
                  {item.completed ? '✓' : index + 1}
                </div>
                <span className={`ml-2 text-sm ${
                  step === item.step ? 'text-coral-600 font-medium' : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
                {index < 2 && <div className="w-8 h-0.5 bg-gray-300 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Kit Selection */}
        {step === 'select' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {donationKits.map((kit) => (
                <KitCard
                  key={kit.id}
                  kit={kit}
                  onSelect={() => handleKitSelect(kit.id)}
                />
              ))}
            </div>

            {/* Impact Information */}
            <Card className="bg-gradient-to-r from-coral-50 to-teal-50">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Your Donation Matters</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-coral-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">Dignity & Health</h3>
                      <p className="text-sm text-gray-600">
                        Ensures women can manage their periods with dignity and maintain their health
                      </p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-teal-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">Education Continuity</h3>
                      <p className="text-sm text-gray-600">
                        Keeps girls in school and prevents absenteeism during menstruation
                      </p>
                    </div>
                    <div className="text-center">
                      <Truck className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">Direct Impact</h3>
                      <p className="text-sm text-gray-600">
                        100% of your donation goes directly to purchasing and distributing kits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Confirmation */}
        {step === 'confirm' && selectedKitData && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Confirm Your Donation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={selectedKitData.image}
                    alt={selectedKitData.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{selectedKitData.name}</h3>
                    <p className="text-gray-600 text-sm">{selectedKitData.description}</p>
                    <Badge className="mt-2 bg-teal-100 text-teal-800">
                      ₹{selectedKitData.price}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Donation Details</h4>
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Kit Price:</span>
                      <span className="font-medium">₹{selectedKitData.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Processing Fee:</span>
                      <span className="font-medium">₹0</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total Amount:</span>
                        <span className="font-bold text-lg text-coral-600">₹{selectedKitData.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-coral-50 p-4 rounded-lg">
                  <h4 className="font-medium text-coral-900 mb-2">Your Impact</h4>
                  <p className="text-coral-800 text-sm">{selectedKitData.impact}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Donor Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Donor: {user?.name}</p>
                    <p className="text-sm text-gray-600">Email: {user?.email}</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep('select')}
                    className="flex-1"
                  >
                    Change Kit
                  </Button>
                  <Button
                    onClick={handleConfirm}
                    className="flex-1 gradient-primary text-white"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 'payment' && selectedKitData && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Order Summary</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{selectedKitData.name}</span>
                    <span className="font-semibold">₹{selectedKitData.price}</span>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Payment Method</h4>
                  
                  {/* Mock Payment Interface */}
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <input type="radio" id="card" name="payment" defaultChecked />
                        <label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Credit/Debit Card</span>
                            <div className="flex space-x-2">
                              <img src="/api/placeholder/30/20" alt="Visa" className="h-5" />
                              <img src="/api/placeholder/30/20" alt="Mastercard" className="h-5" />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <input type="radio" id="upi" name="payment" />
                        <label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">UPI</span>
                            <div className="flex space-x-2">
                              <img src="/api/placeholder/30/20" alt="UPI" className="h-5" />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <input type="radio" id="netbanking" name="payment" />
                        <label htmlFor="netbanking" className="flex-1 cursor-pointer">
                          <span className="font-medium">Net Banking</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-800">
                      Your payment is secured with 256-bit SSL encryption
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep('confirm')}
                    className="flex-1"
                  >
                    Back to Confirm
                  </Button>
                  <Button
                    onClick={handlePayment}
                    className="flex-1 gradient-primary text-white"
                  >
                    Pay ₹{selectedKitData.price}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
