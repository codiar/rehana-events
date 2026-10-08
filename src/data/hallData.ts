import heroHallImage from '../assets/images/rehana-hall-main.jpg';
import buffetImage from '../assets/images/rehana-hospitality-buffet.jpg';
import stageImage from '../assets/images/rehana-wedding-stage.jpg';
import tableDecorImage from '../assets/images/rehana-table-decor.jpg';

export interface PackageItem {
  id: string;
  title: string;
  badge?: string;
  category: 'weddings' | 'graduation' | 'hospitality' | 'custom';
  image: string;
  description: string;
  features: string[];
  priceText: string;
  highlighted?: boolean;
}

export interface AddonItem {
  id: string;
  name: string;
  description: string;
  category: string;
  popular?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'hall' | 'kosha' | 'tables' | 'buffet';
  image: string;
  description?: string;
}

export const businessInfo = {
  name: "قاعة ريحانة للمناسبات",
  subName: "Rehana Events Hall",
  tagline: "خلي يومك الوحيد مميز",
  description: "نستقبلكم في قاعة ريحانة للمناسبات بكربلاء بأرقى الخدمات والديكورات الملكية لتخليد أجمل لحظاتكم.",
  phone: "07708600338",
  whatsapp: "07708600338",
  whatsappNumberInternational: "9647708600338",
  email: "",
  instagramUsername: "rehana_hall_karbala",
  instagramUrl: "https://www.instagram.com/rehana_hall_karbala",
  telegramOrContact: "",
  address: "كربلاء - الشارع الواصل بين تقاطع سيد جودة وفلكة المحافظة (مجاور مفوضية الانتخابات)",
  landmark: "بين تقاطع سيد جودة وفلكة المحافظة - مجاور مفوضية الانتخابات",
  city: "كربلاء المقدسة، العراق",
  workingHours: "يومياً من 9:00 صباحاً حتى 11:00 مساءً (للمعاينة والاستفسارات)",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D9%83%D8%B1%D8%A8%D9%84%D8%A7%D8%A1+%D8%AA%D9%82%D8%A7%D8%B7%D8%B9+%D8%B3%D9%8A%D8%AF+%D8%AC%D9%88%D8%AF%D8%A9+%D9%81%D9%84%D9%83%D8%A9+%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D9%85%D9%81%D9%88%D8%B6%D9%8A%D8%A9+%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%D8%A7%D8%AA",
  codiarTech: {
    name: "شركة كوديار تك",
    instagramUrl: "https://www.instagram.com/codiar_tech",
    creditsText: "تم تطوير الموقع من قبل شركة كوديار تك"
  }
};

export const whyChooseUs = [
  {
    id: "decor",
    title: "تصاميم وديكورات فاخرة",
    description: "أحدث الديكورات الملكية والورود الطبيعية والأقواس العصرية المصممة بعناية فائقة.",
    icon: "sparkles"
  },
  {
    id: "staff",
    title: "كادر خدمة متميز ومتكامل",
    description: "فريق ضيافة محترف متدرب على أعلى معايير اللباقة وحسن الاستقبال للرجال والنساء.",
    icon: "users"
  },
  {
    id: "sound_light",
    title: "أحدث أنظمة الصوت والإضاءة",
    description: "مؤثرات ضوئية ديناميكية وهندسة صوتية متقدمة مع شاشات عرض عملاقة.",
    icon: "volume"
  },
  {
    id: "location",
    title: "موقع حيوي وسهل الوصول",
    description: "موقع استراتيجي وسط كربلاء بين سيد جودة وفلكة المحافظة مع سهولة الوصول ومواقف مريحة.",
    icon: "map-pin"
  }
];

export const packagesData: PackageItem[] = [
  {
    id: "pkg-royal",
    title: "الباقة الملكية المتكاملة",
    badge: "الأكثر طلباً",
    category: "weddings",
    image: heroHallImage,
    description: "التجربة الأفخم لليلة العمر مع كافة التفاصيل الملكية والديكورات الحصرية المتكاملة.",
    features: [
      "تشمل ديكورات ملكية فاخرة (الورد الطبيعي المنسق)",
      "تشمل ديكورات ملكية فاخرة (الكوشة والأقواس الترحيبية الحديثة)",
      "بوفيه مفتوح أو ضيافة ملكية متنوعة فاخرة لكافة الضيوف",
      "كادر متكامل للخدمة والضيافة الرجالية والنسائية طوال الحفل",
      "أحدث أنظمة الإضاءة والصوت والمؤثرات البصرية المتقدمة",
      "جناح خاص ومستقل للعروسين مع الضيافة الخاصة والاستراحة"
    ],
    priceText: "تواصل لمعرفة السعر",
    highlighted: true
  },
  {
    id: "pkg-rehana-special",
    title: "باقة ريحانة الخاصة",
    badge: "مميزة",
    category: "weddings",
    image: tableDecorImage,
    description: "باقة متوازنة تجمع الأناقة والخدمة الراقية بلمسات فنية متجددة تناسب حفلات الأعراس والخطوبة.",
    features: [
      "تزيين الطاولات والممرات بالورد الطبيعي والاصطناعي بتنسيق ساحر",
      "خدمة ضيافة مستمرة (شاي عراقي مهيّل، قهوة عربية، ماء، عصائر طبيعية)",
      "أنظمة صوتية متطورة ودي جي متخصص ومؤثرات صوتية نقية",
      "كادر تنظيم وإشراف كامل طوال الحفل لضمان انسيابية البرنامج",
      "إضاءات مسرحية دافئة وتوزيع ضوئي احترافي"
    ],
    priceText: "تواصل لمعرفة السعر"
  },
  {
    id: "pkg-graduation",
    title: "باقة حفلات التخرج الأكاديمية",
    badge: "للكليات والجامعات",
    category: "graduation",
    image: stageImage,
    description: "تنظيم متكامل لحفلات التخرج يمنح الطلبة وذويهم تتويجاً مهيباً يليق بجهدهم الأكاديمي.",
    features: [
      "منصة مسرح مجهزة لمسير الخريجين وتوزيع الشهادات والتكريم",
      "أنظمة صوت وميكروفونات لاسلكية لكلمات الحفل والأناشيد الجامعية",
      "شاشات عرض رقمية لبث صور وسير الطلبة وذكريات الدفعة",
      "بوفيه ضيافة تخرج متميز (معجنات، حلويات، عصائر ومشروبات ساخنة)",
      "تنسيقات إضاءة حماسية مع فقرات المؤثرات والشرار البارد"
    ],
    priceText: "تواصل لمعرفة السعر"
  },
  {
    id: "pkg-hospitality-vip",
    title: "باقة الضيافة والبوفيه المفتوح VIP",
    badge: "أعلى جودة",
    category: "hospitality",
    image: buffetImage,
    description: "خدمة طعام وضيافة راقية بأيدي شيفات وكادر ضيافة يقدمون أشهى الأطباق العربية والغربية.",
    features: [
      "تشكيلة أطباق رئيسية مختارة ولحوم طازجة بطهي احترافي",
      "طاولات مقبلات وسلطات شرقية وغربية متنوعة ومبتكرة",
      "بوفيه حلويات فاخرة وعصائر فريش طازجة ومشروبات دافئة",
      "معدات تسخين وأدوات ضيافة كريستالية وفضية فاخرة",
      "كادر ضيافة وخدمة مباشر يرتدي زياً موحداً ولباقة تامة"
    ],
    priceText: "تواصل لمعرفة السعر"
  }
];

export const packageAddons: AddonItem[] = [
  {
    id: "addon-flowers",
    name: "ترقية الورد الطبيعي الهولندي",
    description: "تنسيق خاص من الورد الطبيعي الهولندي الفاخر لممشى العروسين وطاولات الـ VIP.",
    category: "ديكور"
  },
  {
    id: "addon-photo",
    name: "فريق تصوير فوتوغرافي وفيديو احترافي",
    description: "كاميرات سينمائية 4K + درون داخلي + ألبوم حراري فاخر وفيديو تسجيلي مونتاج كامل.",
    category: "توثيق",
    popular: true
  },
  {
    id: "addon-effects",
    name: "حزمة المؤثرات البصرية والمسرحية",
    description: "مدافع دخان أرضي ثقيل لحظة الدخول، نوافير شرار بارد آمنة، وأجهزة إضاءة ليزرية.",
    category: "مؤثرات",
    popular: true
  },
  {
    id: "addon-suite",
    name: "جناح العروسين الملكي VIP",
    description: "تجهيز الجناح المستقل بكامل خدمات الراحة، الضيافة الخاصة، والمرايا التجميلية.",
    category: "خدمات"
  },
  {
    id: "addon-sweets",
    name: "ركن الحلويات الغربية والقهوة المختصة",
    description: "بار ضيافة مباشر يقدم قهوة اسبريسو ومختصة مع تشكيلة ميني تارت وحلويات فرنسية.",
    category: "ضيافة"
  },
  {
    id: "addon-car",
    name: "تزيين سيارة الزفة بالورد الفاخر",
    description: "تنسيق ورد أنيق لسيارة الزفاف مع شرائط حريرية بتصميم يماثل ثيم القاعة.",
    category: "إضافات"
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "المدخل الرئيسي وممشى الورود",
    category: "hall",
    image: heroHallImage,
    description: "ديكور القوس الملكي بالورد الأزرق والأبيض مع كراسي الشيفاري البيضاء الأنيقة"
  },
  {
    id: "gal-2",
    title: "طاولات الضيوف وتنسيقات السناتر",
    category: "tables",
    image: tableDecorImage,
    description: "توزيع هندسي راقٍ مع فازات ذهبية مرتفعة وتنسيقات ورد طبيعي"
  },
  {
    id: "gal-3",
    title: "كوشة العروسين الملكية",
    category: "kosha",
    image: stageImage,
    description: "تصميم كوشة حصري بإضاءة درامية وأقواس زهرية ناعمة"
  },
  {
    id: "gal-4",
    title: "ركن الضيافة العربية والبوفيه",
    category: "buffet",
    image: buffetImage,
    description: "أواني دلة القهوة العربية والضيافة الملكية المتكاملة للزوار"
  }
];
