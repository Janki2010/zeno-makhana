import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'da';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.flavours': 'Flavours',
    'nav.webshop': 'Webshop',
    'nav.seeds_to_snack': 'Zeno Makhana – seeds to snack',
    'nav.about_us': 'About Us',
    'nav.find_us': 'Find Us',

    // Hero Section
    'hero.badge': 'Natural • Healthy • Delicious',
    'hero.title_1': 'Taste',
    'hero.title_2': "Nature's",
    'hero.title_3': 'Perfection',
    'hero.description': 'Discover our flavoured Makhana - the perfect healthy snack from nature\'s own pharmacy. Rich in nutrients and amazing in taste.',
    'hero.stat_natural': 'Natural',
    'hero.stat_protein': 'Protein',
    'hero.stat_flavors': 'Flavors',
    'hero.stat_calories': 'Calories',
    'hero.scroll': 'SCROLL',
    'hero.premium_quality': 'Premium Quality',
    'hero.artisan_crafted': 'Artisan Crafted Flavors',

    // What is Makhana
    'makhana.discover': 'Discover',
    'makhana.title': 'What is',
    'makhana.title_highlight': 'Makhana?',
    'makhana.description_1': 'Makhana is made from the seeds of the Euryale ferox plant, which grows in water bodies like ponds.',
    'makhana.description_2': 'These seeds are also known as Lotus seeds, Euryale Ferox, fox nuts or gorgon nut.',
    'makhana.description_3': 'They are harvested, sun-dried and popped — kind of like popcorn, but crunchier and much healthier.',
    'makhana.description_4': 'At Zeno, we roast them and add exciting natural flavours to create the perfect and healthy snack.',
    'makhana.description_5': 'Our makhana goes through a meticulous 8-step traditional process: from harvesting lotus plants in pristine water bodies, collecting the precious seeds, careful cleaning and sun-drying, to the art of popping, sorting, polishing, and finally adding our signature natural flavors. Each step is crafted to preserve the nutritional value while creating the perfect crunch.',
    'makhana.process_harvest': 'Harvest',
    'makhana.process_sundry': 'Sun-Dry',
    'makhana.process_roast': 'Roast',
    'makhana.process_flavor': 'Flavor',
    'makhana.process_title': 'From Farm to Flavor: The Complete Process',
    'makhana.step_harvesting': 'Harvesting',
    'makhana.step_collecting': 'Collecting',
    'makhana.step_cleaning': 'Cleaning',
    'makhana.step_drying': 'Sun-Drying',
    'makhana.step_popping': 'Popping',
    'makhana.step_sorting': 'Sorting',
    'makhana.step_polishing': 'Polishing',
    'makhana.step_flavoring': 'Flavoring',
    'makhana.desc_harvesting': 'Fresh lotus plants from pristine waters',
    'makhana.desc_collecting': 'Precious seeds carefully gathered',
    'makhana.desc_cleaning': 'Thorough washing and preparation',
    'makhana.desc_drying': 'Natural drying under sunlight',
    'makhana.desc_popping': 'Traditional popping technique',
    'makhana.desc_sorting': 'Quality selection process',
    'makhana.desc_polishing': 'Perfect finish and texture',
    'makhana.desc_flavoring': 'Natural signature flavors added',

    // Our Story
    'story.badge': 'Our Story',
    'story.title_1': 'From India',
    'story.title_2': 'to Europe',
    'story.title_3': 'A Mother\'s Promise',
    'story.quote_1': 'The aroma of roasted fox nuts filled the small, sunlit kitchen in Copenhagen, a scent that transported me twenty years back to my mother\'s home in India.',
    'story.description_1': 'I am Richa, an Indian mother and a successful corporate leader. At 40, with two decades of experience navigating the complex world of the global food industry, I am a force to be reckoned with. But whenever I visit superstores, I was missing out the healthy snack options and the racks were full of unhealthy snack options. I was driven by a deep desire to offer something healthy and wholesome to children and the world.',
    'story.description_2': 'I had spent my career developing products for multinational corporations, but something was always missing. The products were often filled with preservatives and artificial flavors, a stark contrast to the pure, simple food I grew up with. This realization hit me hard when I saw my own child reaching for packaged snacks instead of the nutritious snacks she packed. That\'s when the idea for "Zeno" was born.',
    'story.description_3': 'I knew the power of makhana, or fox nuts—a superfood from India, packed with nutrients and naturally light. But I also knew that to make it a global success, I had to make it exciting. For months, my kitchen became my lab. I experimented with flavors inspired by my travels: cheddar cheese from a business trip to France, sweet chili from a family holiday in Mexico, and a cream and onion flavor from eastern Europe, and finally the Himalayan salt and pepper blend that reminds me of my origin.',
    'story.description_4': 'This journey wasn\'t just about launching a brand; it was about connecting my roots to my modern life. I saw a gap in the market for snacks that were both healthy and flavorful, and I was the perfect person to fill it. My 20 years of experience gave me the business acumen, and my maternal instincts gave me the passion. I am not just selling a product; I am sharing a piece of my heritage, a mother\'s promise of good health and great taste, one delicious makhana at a time.',
    'story.founder': '— Richa, Founder & CEO',
    'story.location': 'Copenhagen, Denmark',
    'story.traditional_title': 'Traditional Harvesting',
    'story.traditional_desc': 'Hand-picked lotus seeds from pristine waters using centuries-old techniques',
    'story.modern_title': 'Modern Processing',
    'story.modern_desc': 'State-of-the-art roasting and flavoring technology for perfect taste and texture',
    'story.artisan_title': 'Artisan Flavoring',
    'story.artisan_desc': 'Master chefs craft each flavor blend using premium natural ingredients',

    // Footer
    'footer.description': 'Leading provider of premium Makhana. World-class natural snacking.',
    'footer.products': 'Products',
    'footer.product_cheddar': 'Cheddar Cheese Makhana',
    'footer.product_cream_onion': 'Cream & Onion Makhana',
    'footer.product_salt_pepper': 'Salt & Pepper Makhana',
    'footer.product_sweet_chilli': 'Sweet Chilli Makhana',
    'footer.product_piri_piri': 'Piri Piri Makhana',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Zeno. All rights reserved.',
  },
  da: {
    // Navigation
    'nav.flavours': 'Smagsvarianter',
    'nav.webshop': 'Webshop',
    'nav.seeds_to_snack': 'Zeno Makhana – frø til snack',
    'nav.about_us': 'Om Os',
    'nav.find_us': 'Find Os',

    // Hero Section
    'hero.badge': 'Naturlig • Sund • Lækker',
    'hero.title_1': 'Smag',
    'hero.title_2': 'Naturens',
    'hero.title_3': 'Perfektion',
    'hero.description': 'Opdag vores smagsrige Makhana - det perfekte sunde snack fra naturens eget apotek. Rig på næringsstoffer og fantastisk i smag.',
    'hero.stat_natural': 'Naturlig',
    'hero.stat_protein': 'Protein',
    'hero.stat_flavors': 'Smagsvarianter',
    'hero.stat_calories': 'Kalorier',
    'hero.scroll': 'SCROLL',
    'hero.premium_quality': 'Premium Kvalitet',
    'hero.artisan_crafted': 'Håndværk Smagsvarianter',

    // What is Makhana
    'makhana.discover': 'Opdag',
    'makhana.title': 'Hvad er',
    'makhana.title_highlight': 'Makhana?',
    'makhana.description_1': 'Makhana er lavet af frøene fra Euryale ferox planten, som vokser i vandområder som damme.',
    'makhana.description_2': 'Disse frø er også kendt som lotusfrø, Euryale Ferox, rævnødder eller gorgon nød.',
    'makhana.description_3': 'De høstes, soltørres og poppes - lidt ligesom popcorn, men mere sprøde og meget sundere.',
    'makhana.description_4': 'Hos Zeno rister vi dem og tilsætter spændende naturlige smagsstoffer for at skabe det perfekte og sunde snack.',
    'makhana.description_5': 'Vores makhana gennemgår en omhyggelig 8-trins traditionel proces: fra høst af lotusplanter i uberørte vandområder, indsamling af de værdifulde frø, omhyggelig rengøring og soltørring, til kunsten at poppe, sortere, polere og endelig tilføje vores karakteristiske naturlige smagsstoffer. Hvert trin er udformet til at bevare den ernæringsmæssige værdi, mens der skabes det perfekte crunch.',
    'makhana.process_harvest': 'Høst',
    'makhana.process_sundry': 'Soltør',
    'makhana.process_roast': 'Rist',
    'makhana.process_flavor': 'Smag',
    'makhana.process_title': 'Fra Mark til Smag: Den Komplette Proces',
    'makhana.step_harvesting': 'Høstning',
    'makhana.step_collecting': 'Indsamling',
    'makhana.step_cleaning': 'Rengøring',
    'makhana.step_drying': 'Soltørring',
    'makhana.step_popping': 'Popning',
    'makhana.step_sorting': 'Sortering',
    'makhana.step_polishing': 'Polering',
    'makhana.step_flavoring': 'Smagsætning',
    'makhana.desc_harvesting': 'Friske lotusplanter fra uberørte vande',
    'makhana.desc_collecting': 'Værdifulde frø omhyggeligt indsamlet',
    'makhana.desc_cleaning': 'Grundig vask og forberedelse',
    'makhana.desc_drying': 'Naturlig tørring under sollys',
    'makhana.desc_popping': 'Traditionel popningsteknik',
    'makhana.desc_sorting': 'Kvalitetssorteringsproces',
    'makhana.desc_polishing': 'Perfekt finish og tekstur',
    'makhana.desc_flavoring': 'Naturlige karakteristiske smagsstoffer tilføjet',

    // Our Story
    'story.badge': 'Vores Historie',
    'story.title_1': 'Fra Indien',
    'story.title_2': 'til Europa',
    'story.title_3': 'En Mors Løfte',
    'story.quote_1': 'Aromaen af ristede rævnødder fyldte det lille, sollyse køkken i København, en duft der transporterede mig tyve år tilbage til min mors hjem i Indien.',
    'story.description_1': 'Jeg er Richa, en indisk mor og en succesfuld virksomhedsleder. Som 40-årig, med to årtiers erfaring med at navigere i den komplekse verden af den globale fødevareindustri, er jeg en kraft at regne med. Men hver gang jeg besøger supermarkeder, savnede jeg de sunde snack-muligheder, og hylderne var fulde af usunde snack-muligheder. Jeg blev drevet af et dybt ønske om at tilbyde noget sundt og nærende til børn og verden.',
    'story.description_2': 'Jeg havde brugt min karriere på at udvikle produkter til multinationale virksomheder, men noget manglede altid. Produkterne var ofte fyldt med konserveringsmidler og kunstige smagsstoffer, en skarp kontrast til den rene, enkle mad jeg voksede op med. Denne erkendelse ramte mig hårdt, da jeg så mit eget barn række efter pakkede snacks i stedet for de nærende snacks, hun pakkede. Det var da ideen til "Zeno" blev født.',
    'story.description_3': 'Jeg kendte kraften i makhana, eller rævnødder - en superfood fra Indien, pakket med næringsstoffer og naturligt let. Men jeg vidste også, at for at gøre det til en global succes, måtte jeg gøre det spændende. I måneder blev mit køkken mit laboratorium. Jeg eksperimenterede med smagsvarianter inspireret af mine rejser: cheddar ost fra en forretningsrejse til Frankrig, sød chili fra en familieferie i Mexico, og en fløde og løg smag fra Østeuropa, og endelig Himalaya salt og peber blandingen, der minder mig om min oprindelse.',
    'story.description_4': 'Denne rejse handlede ikke kun om at lancere et brand; det handlede om at forbinde mine rødder med mit moderne liv. Jeg så et hul i markedet for snacks, der var både sunde og smagfulde, og jeg var den perfekte person til at udfylde det. Mine 20 års erfaring gav mig forretningstalentet, og mine moderlige instinkter gav mig passionen. Jeg sælger ikke kun et produkt; jeg deler et stykke af min arv, en mors løfte om god sundhed og fantastisk smag, én lækker makhana ad gangen.',
    'story.founder': '— Richa, Grundlægger & CEO',
    'story.location': 'København, Danmark',
    'story.traditional_title': 'Traditionel Høstning',
    'story.traditional_desc': 'Håndplukkede lotusfrø fra uberørte vande ved hjælp af århundreder gamle teknikker',
    'story.modern_title': 'Moderne Forarbejdning',
    'story.modern_desc': 'State-of-the-art ristning og smagsætningsteknik for perfekt smag og tekstur',
    'story.artisan_title': 'Håndværker Smagsætning',
    'story.artisan_desc': 'Mesterkok skaber hver smagsblanding ved hjælp af premium naturlige ingredienser',

    // Footer
    'footer.description': 'Førende leverandør af premium Makhana. Verdensklasse naturlig snacking.',
    'footer.products': 'Produkter',
    'footer.product_cheddar': 'Cheddar Ost Makhana',
    'footer.product_cream_onion': 'Fløde & Løg Makhana',
    'footer.product_salt_pepper': 'Salt & Peber Makhana',
    'footer.product_sweet_chilli': 'Sød Chili Makhana',
    'footer.product_piri_piri': 'Piri Piri Makhana',
    'footer.contact': 'Kontakt',
    'footer.copyright': '© 2025 Zeno. Alle rettigheder forbeholdes.',
  },
};