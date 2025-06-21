
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DonationKit } from '@/data/mockData';

interface KitCardProps {
  kit: DonationKit;
  onSelect?: () => void;
  showButton?: boolean;
}

const KitCard: React.FC<KitCardProps> = ({ kit, onSelect, showButton = true }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            src={kit.image}
            alt={kit.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">{kit.name}</h3>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              ₹{kit.price}
            </Badge>
          </div>
          
          <p className="text-gray-600 text-sm">{kit.description}</p>
          
          <div className="bg-coral-50 p-3 rounded-lg">
            <p className="text-coral-800 text-sm font-medium">Impact: {kit.impact}</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">What's included:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {kit.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-coral-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {showButton && (
            <Button 
              onClick={onSelect}
              className="w-full gradient-primary text-white hover:opacity-90"
            >
              Select This Kit
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default KitCard;
