
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { useLanguage, Language } from '@/contexts/LanguageContext';
// import { Globe } from 'lucide-react';

// const LanguageSelector = () => {
//   const { language, setLanguage } = useLanguage();

//   const languages = [
//     { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
//     { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳' },
//     { code: 'te' as Language, name: 'తెలుగు', flag: '🇮🇳' }
//   ];

//   return (
//     <div className="flex items-center space-x-2">
//       <Globe className="h-4 w-4 text-gray-600" />
//       <div className="flex space-x-1">
//         {languages.map((lang) => (
//           <Button
//             key={lang.code}
//             variant={language === lang.code ? "default" : "outline"}
//             size="sm"
//             onClick={() => setLanguage(lang.code)}
//             className={`text-xs px-2 py-1 transition-all duration-200 ${
//               language === lang.code 
//                 ? 'bg-coral-500 text-white hover:bg-coral-600' 
//                 : 'hover:bg-coral-50 hover:border-coral-300 hover:text-coral-600'
//             }`}
//           >
//             <span className="mr-1">{lang.flag}</span>
//             {lang.name}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'hi' as Language, name: 'हिंदी', flag: '🇮🇳' },
    { code: 'te' as Language, name: 'తెలుగు', flag: '🇮🇳' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="hover:bg-coral-50 hover:text-coral-600 transition-colors duration-200"
        >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white border border-gray-200 shadow-lg z-50"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center space-x-3 px-3 py-2 cursor-pointer transition-colors duration-200 ${
              language === lang.code 
                ? 'bg-coral-50 text-coral-600' 
                : 'hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
            {language === lang.code && (
              <span className="ml-auto text-coral-500 text-sm">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
