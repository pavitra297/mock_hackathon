
export interface DonationKit {
  id: string;
  name: string;
  description: string;
  price: number;
  impact: string;
  image: string;
  items: string[];
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  beneficiaries: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Donation {
  id: string;
  kitId: string;
  kitName: string;
  amount: number;
  date: string;
  status: 'payment_complete' | 'shipped_to_ngo' | 'delivered';
  trackingNumber: string;
  ngoName: string;
  beneficiaryLocation: string;
}

export const donationKits: DonationKit[] = [
  {
    id: '1',
    name: 'Basic Hygiene Kit',
    description: '5 high-quality sanitary pads + educational pamphlet',
    price: 150,
    impact: 'Supports 1 woman for 1 cycle',
    image: '/api/placeholder/300/200',
    items: ['5 Biodegradable Pads', 'Educational Pamphlet', 'Disposal Bag']
  },
  {
    id: '2',
    name: 'Monthly Hygiene Pack',
    description: 'Complete monthly supply with hygiene essentials',
    price: 400,
    impact: 'Supports 1 woman for 1 month',
    image: '/api/placeholder/300/200',
    items: ['20 Biodegradable Pads', 'Intimate Wash', 'Educational Material', 'Disposal Bags']
  },
  {
    id: '3',
    name: 'Complete Care Kit',
    description: 'Comprehensive kit with pads, soap, and hygiene products',
    price: 750,
    impact: 'Supports 1 woman for 3 months',
    image: '/api/placeholder/300/200',
    items: ['60 Biodegradable Pads', 'Intimate Wash', 'Antibacterial Soap', 'Cotton Underwear', 'Educational Booklet', 'Disposal Container']
  }
];

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Rural Schools Initiative',
    description: 'Providing menstrual hygiene education and products to rural school girls across Rajasthan',
    image: '/api/placeholder/400/250',
    date: '2024-02-15',
    location: 'Rajasthan, India',
    beneficiaries: 2500,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Urban Slum Outreach',
    description: 'Supporting women in urban slums with monthly hygiene kits and awareness programs',
    image: '/api/placeholder/400/250',
    date: '2024-03-20',
    location: 'Mumbai, Maharashtra',
    beneficiaries: 1800,
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'Tribal Women Empowerment',
    description: 'Empowering tribal women with sustainable menstrual hygiene solutions',
    image: '/api/placeholder/400/250',
    date: '2024-04-10',
    location: 'Jharkhand, India',
    beneficiaries: 1200,
    status: 'upcoming'
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    kitId: '2',
    kitName: 'Monthly Hygiene Pack',
    amount: 400,
    date: '2024-01-15',
    status: 'delivered',
    trackingNumber: 'EMP001',
    ngoName: 'Women Welfare Foundation',
    beneficiaryLocation: 'Jaipur, Rajasthan'
  },
  {
    id: '2',
    kitId: '1',
    kitName: 'Basic Hygiene Kit',
    amount: 150,
    date: '2024-02-01',
    status: 'shipped_to_ngo',
    trackingNumber: 'EMP002',
    ngoName: 'Rural Health Initiative',
    beneficiaryLocation: 'Udaipur, Rajasthan'
  },
  {
    id: '3',
    kitId: '3',
    kitName: 'Complete Care Kit',
    amount: 750,
    date: '2024-02-10',
    status: 'payment_complete',
    trackingNumber: 'EMP003',
    ngoName: 'Health for All NGO',
    beneficiaryLocation: 'Jodhpur, Rajasthan'
  }
];

export const impactStats = {
  totalWomenSupported: 15420,
  kitsDistributed: 8750,
  ngoPartners: 45,
  statesReached: 12
};

export const chartData = {
  monthlyDonations: [
    { month: 'Jan', donations: 1200 },
    { month: 'Feb', donations: 1800 },
    { month: 'Mar', donations: 2400 },
    { month: 'Apr', donations: 2100 },
    { month: 'May', donations: 2800 },
    { month: 'Jun', donations: 3200 }
  ],
  kitDistribution: [
    { name: 'Basic Kit', value: 45, color: '#e87575' },
    { name: 'Monthly Pack', value: 35, color: '#14b8a6' },
    { name: 'Complete Kit', value: 20, color: '#f19b9b' }
  ],
  impactByState: [
    { state: 'Rajasthan', women: 3500 },
    { state: 'Maharashtra', women: 2800 },
    { state: 'Uttar Pradesh', women: 2200 },
    { state: 'Bihar', women: 1900 },
    { state: 'Jharkhand', women: 1600 }
  ]
};
