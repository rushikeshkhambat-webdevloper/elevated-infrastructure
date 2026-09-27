const HERO_IMG = "https://i.ibb.co/HDrSFQyF/Whats-App-Image-2026-09-26-at-22-42-05-1.jpg";
const ABOUT_IMG = "https://i.ibb.co/39BsLZP3/Whats-App-Image-2026-09-26-at-22-42-06-1.jpg";
const PROJECT_3_IMG = "https://i.ibb.co/Jj8j5NyQ/Whats-App-Image-2026-09-26-at-22-42-06-2.jpg";
const PROJECT_4_IMG = "https://i.ibb.co/d4tRgF8k/Whats-App-Image-2026-09-26-at-22-42-06.jpg";
const PROJECT_5_IMG = "https://i.ibb.co/d0mch0GN/Whats-App-Image-2026-09-26-at-22-42-38.jpg";
const INTERIOR_PLACEHOLDER = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";
const INTERIOR_PLACEHOLDER_2 = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80";
const INTERIOR_PLACEHOLDER_3 = "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80";

export const projects = [
  {
    id: "modern-villa-waluj",
    title: "Modern Villa, Waluj",
    titleMr: "मॉडर्न व्हिला, वाळूज",
    category: "Residential",
    categoryMr: "निवासी",
    location: "Waluj, Chh. Sambhajinagar",
    locationMr: "वाळूज, छ. संभाजीनगर",
    year: "2025",
    area: "3,200 sq.ft.",
    client: "Private Residence",
    clientMr: "खाजगी निवासस्थान",
    description:
      "A contemporary villa designed with clean geometric massing, large glazed openings, and a warm stone-and-render facade. The brief called for a home that felt monumental from the street yet intimate inside — achieved through a double-height entry, deep overhangs for shade, and a material palette of natural stone, timber screens, and matte render.",
    descriptionMr:
      "स्वच्छ भूमितीय मांडणी, मोठ्या काचेच्या खिडक्या आणि उबदार दगड-रेंडर दर्शनी भागासह डिझाइन केलेला समकालीन व्हिला. रस्त्यावरून भव्य पण आतून आपुलकीचा अनुभव देणारे घर हवे होते — दुहेरी उंचीचे प्रवेशद्वार, सावलीसाठी खोल छज्जे आणि नैसर्गिक दगड, लाकडी पडदे व मॅट रेंडरच्या साहित्य पॅलेटद्वारे साध्य केले.",
    coverImage: HERO_IMG,
    gallery: [HERO_IMG, ABOUT_IMG, INTERIOR_PLACEHOLDER],
  },
  {
    id: "duplex-bungalow-cidco",
    title: "Duplex Bungalow, CIDCO",
    titleMr: "डुप्लेक्स बंगला, सिडको",
    category: "Residential",
    categoryMr: "निवासी",
    location: "CIDCO, Chh. Sambhajinagar",
    locationMr: "सिडको, छ. संभाजीनगर",
    year: "2024",
    area: "2,800 sq.ft.",
    client: "Private Residence",
    clientMr: "खाजगी निवासस्थान",
    description:
      "A duplex bungalow planned around a central courtyard that draws light and cross-ventilation into every room. The upper floor cantilevers gently over the entrance, framed in a warm timber-tone cladding that contrasts against a cream render base — a quiet, confident street presence.",
    descriptionMr:
      "मध्यवर्ती अंगणाभोवती रचलेला डुप्लेक्स बंगला जो प्रत्येक खोलीत प्रकाश आणि हवा खेळती ठेवतो. वरचा मजला प्रवेशद्वारावर हलकेच पुढे आलेला असून, उबदार लाकडी टोनच्या क्लॅडिंगने क्रीम रेंडर बेसच्या विरोधात उठून दिसतो — रस्त्यावर एक शांत, आत्मविश्वासपूर्ण उपस्थिती.",
    coverImage: ABOUT_IMG,
    gallery: [ABOUT_IMG, HERO_IMG, INTERIOR_PLACEHOLDER_2],
  },
  {
    id: "contemporary-home-waluj",
    title: "Contemporary Home, Waluj",
    titleMr: "समकालीन घर, वाळूज",
    category: "Residential",
    categoryMr: "निवासी",
    location: "Waluj, Chh. Sambhajinagar",
    locationMr: "वाळूज, छ. संभाजीनगर",
    year: "2024",
    area: "2,400 sq.ft.",
    client: "Private Residence",
    clientMr: "खाजगी निवासस्थान",
    description:
      "A compact contemporary home that maximises a narrow plot through vertical stacking and a folded roof form. Full-height windows on the south face bring in natural light while deep fins control heat gain — a response to both budget and climate.",
    descriptionMr:
      "अरुंद भूखंडाचा जास्तीत जास्त वापर करणारे कॉम्पॅक्ट समकालीन घर, उभ्या रचनेद्वारे आणि दुमडलेल्या छताच्या आकाराद्वारे. दक्षिण बाजूला पूर्ण उंचीच्या खिडक्या नैसर्गिक प्रकाश आणतात तर खोल फिन्स उष्णता नियंत्रित करतात — बजेट आणि हवामान दोन्हीचा विचार करून.",
    coverImage: PROJECT_3_IMG,
    gallery: [PROJECT_3_IMG, HERO_IMG, INTERIOR_PLACEHOLDER_3],
  },
  {
    id: "commercial-complex-midc-waluj",
    title: "Commercial Complex, MIDC Waluj",
    titleMr: "व्यावसायिक संकुल, MIDC वाळूज",
    category: "Commercial",
    categoryMr: "व्यावसायिक",
    location: "MIDC Waluj, Chh. Sambhajinagar",
    locationMr: "MIDC वाळूज, छ. संभाजीनगर",
    year: "2023",
    area: "12,500 sq.ft.",
    client: "Commercial Developer",
    clientMr: "व्यावसायिक विकसक",
    description:
      "A ground-plus-three commercial complex with a modular retail podium and offices above. The structural grid was optimised for column-free retail frontage, with a glazed curtain wall system that gives the building a confident presence along the MIDC road.",
    descriptionMr:
      "मॉड्युलर रिटेल पोडियम आणि वरती कार्यालये असलेले ग्राउंड-प्लस-तीन व्यावसायिक संकुल. रिटेल दर्शनी भाग खांबविरहित ठेवण्यासाठी स्ट्रक्चरल ग्रिड ऑप्टिमाइझ केले, तसेच काचेच्या पडदा भिंत प्रणालीमुळे इमारतीला MIDC रस्त्यावर ठळक उपस्थिती मिळते.",
    coverImage: PROJECT_4_IMG,
    gallery: [PROJECT_4_IMG, PROJECT_5_IMG, INTERIOR_PLACEHOLDER],
  },
  {
    id: "retail-showroom-cidco",
    title: "Retail Showroom, CIDCO",
    titleMr: "रिटेल शोरूम, सिडको",
    category: "Commercial",
    categoryMr: "व्यावसायिक",
    location: "CIDCO, Chh. Sambhajinagar",
    locationMr: "सिडको, छ. संभाजीनगर",
    year: "2023",
    area: "4,600 sq.ft.",
    client: "Retail Client",
    clientMr: "रिटेल ग्राहक",
    description:
      "A double-height showroom designed for maximum display flexibility, with a fully glazed frontage and a structural steel mezzanine for back-of-house storage. Lighting and RCC planning were coordinated closely so ceiling services stayed invisible on the showroom floor.",
    descriptionMr:
      "जास्तीत जास्त डिस्प्ले लवचिकतेसाठी डिझाइन केलेले दुहेरी उंचीचे शोरूम, पूर्ण काचेच्या दर्शनी भागासह आणि साठवणुकीसाठी स्ट्रक्चरल स्टील मेझानाइन. शोरूमच्या मजल्यावर छतावरील सेवा अदृश्य राहाव्यात यासाठी लाइटिंग आणि RCC नियोजन काळजीपूर्वक समन्वयित केले.",
    coverImage: PROJECT_5_IMG,
    gallery: [PROJECT_5_IMG, PROJECT_4_IMG, INTERIOR_PLACEHOLDER_2],
  },
  {
    id: "modern-apartment-interior",
    title: "Modern Apartment Interior",
    titleMr: "मॉडर्न अपार्टमेंट इंटेरियर",
    category: "Interior",
    categoryMr: "इंटेरियर",
    location: "Chh. Sambhajinagar",
    locationMr: "छ. संभाजीनगर",
    year: "2025",
    area: "1,450 sq.ft.",
    client: "Private Residence",
    clientMr: "खाजगी निवासस्थान",
    description:
      "A full interior fit-out for a 3BHK apartment — modular kitchen, false ceilings with cove lighting, and custom wardrobes throughout. The palette stays warm and neutral, letting textured wall panels and brass accents carry the personality of each room.",
    descriptionMr:
      "3BHK अपार्टमेंटसाठी संपूर्ण इंटेरियर फिट-आउट — मॉड्युलर किचन, कोव्ह लाइटिंगसह खोटी छत आणि संपूर्ण कस्टम वॉर्डरोब. पॅलेट उबदार आणि न्यूट्रल ठेवली असून, टेक्सचर्ड वॉल पॅनेल्स आणि ब्रास अॅक्सेंट्स प्रत्येक खोलीचे व्यक्तिमत्त्व उठवतात.",
    coverImage: INTERIOR_PLACEHOLDER,
    gallery: [INTERIOR_PLACEHOLDER, INTERIOR_PLACEHOLDER_2, INTERIOR_PLACEHOLDER_3],
  },
];
