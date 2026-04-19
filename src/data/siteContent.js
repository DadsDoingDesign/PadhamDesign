/**
 * Site Content Management System
 * 
 * This file serves as a central location for managing all website content.
 * Edit this file to update text, images, and other content across the site.
 * In a production environment, this would be replaced with a proper CMS
 * or data fetching from markdown/MDX files.
 */

// Navigation Items
export const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" }
];

// Hero Section Content
export const heroContent = {
  title: "Padham Design",
  subtitle: "Custom Interiors",
  ctaText: "Start A Project",
  ctaLink: "#contact",
  panels: {
    left: {
      image: "/images/interiors/Interior1.jpg",
      alt: "Elegant living room interior design"
    },
    center: {
      image: "/images/interiors/Middle.png",
      alt: "Modern kitchen interior design"
    },
    right: {
      image: "/images/interiors/Right.png",
      alt: "Luxurious bedroom interior design"
    }
  },
  publications: [
    {
      name: "Wine Advisor",
      image: "/images/logos/WinAdvisor.png",
      alt: "Wine Advisor",
      width: 120,
      height: 40
    },
    {
      name: "Hotels Magazine",
      image: "/images/logos/HotelsMag.png",
      alt: "Hotels Magazine",
      width: 120,
      height: 40
    },
    {
      name: "CA Home + Design",
      image: "/images/logos/CAHome+Design.png",
      alt: "CA Home + Design",
      width: 120,
      height: 40
    },
    {
      name: "C Magazine",
      image: "/images/logos/CMag.png",
      alt: "C Magazine",
      width: 120,
      height: 40
    },
    {
      name: "Vogue",
      image: "/images/logos/Vogue.png",
      alt: "Vogue",
      width: 120,
      height: 40
    }
  ]
};

// About Section Content
export const aboutContent = {
  title: "About",
  name: "Carol Padham",
  image: "/images/about/AboutProfile.png",
  alt: "Carol Padham, Interior Designer",
  bio: {
    description: "Her design process is client-focused, starting with the client's vision and involving them closely in every step. Carol's designs are known for their clean lines and thoughtful integration with both architecture and environment, ensuring each space is as functional as it is stylish.",
    experience: "Over 25 years of experience in interior design that combines beauty and practicality. Working extensively in the Bay Area, Carol has collaborated with leading architectural firms on a variety of hospitality and residential projects."
  },
  values: [
    {
      title: "Client-Centered Approach",
      description: "We listen carefully to understand your vision, lifestyle, and needs."
    },
    {
      title: "Attention to Detail",
      description: "Every element is thoughtfully considered, from spatial planning to the finishing touches."
    },
    {
      title: "Sustainable Design",
      description: "We prioritize eco-friendly materials and practices whenever possible."
    }
  ]
};

// Services Section Content
export const servicesContent = {
  title: "Services",
  services: [
    {
      id: "concept-design",
      title: "Concept Design",
      description: "Working with you to individualize style & setting design goals to support your lifestyle",
      image: "/images/services/Services_ConceptDesign.png"
    },
    {
      id: "space-planning",
      title: "Space Planning",
      description: "Creating a layout of your space with furnishing planned to simplify your daily life",
      image: "/images/services/Services_SpacePlanning.png"
    },
    {
      id: "fixtures-finishing",
      title: "Fixtures & Finishing",
      description: "Working within your style to specify furniture, light fixtures, and hardware",
      image: "/images/services/Services_FixturesAndFinished.png"
    },
    {
      id: "material-selection",
      title: "Material Selection",
      description: "Working within your style to specify flooring, tiles, stone, wallcoverings, and paint colors",
      image: "/images/services/Services_MaterialSelection.png"
    },
    {
      id: "project-consultation",
      title: "Project Consultation",
      description: "Working with your established team of architects, contractors, & designers to bring your dreams to life",
      image: "/images/services/Services_ProjectConsultation.png"
    }
  ]
};

// Portfolio Section Content
export const portfolioContent = {
  title: "Portfolio Works"
};

// Publications Section Content
export const publicationsContent = {
  title: "Publications",
  publications: [
    {
      id: "vogue",
      logo: "/images/logos/Vogue.png",
      title: "Why Carmel-by-the-Sea Is the West Coast Destination of the Moment",
      description: '"Interior designers Carol Padham and Marin-Vogue worked with an ocean-inspired palette to create custom furnishings for the guest rooms, which also feature Victoria + Albert bath fixtures."',
      url: "https://www.vogue.com"
    },
    {
      id: "hotels",
      logo: "/images/logos/HotelsMag.png",
      title: "Briefs: Carmel Beach Hotel’s upcoming opening",
      description: '"The interiors have been designed by Carol Padham and Phyllis Martin-Vegue, while lighting director Michael Souter worked on the hotel’s lighting."',
      url: "https://www.hotelsmag.com"
    },
    {
      id: "cahome",
      logo: "/images/logos/CAHome+Design.png",
      title: "Wine Country Agenda: WALT Wines, Trefethen Now, Doug Aitken Install, Meet At La Calenda",
      description: '"Inside, SF interior designer Carol Padham creates a calming, airy design with a selection of owners Kathryn Walt Hall and Craig Hall’s personal art collection, showcasing the Hall’s love of modern with a custom, 3-dimensional tasting bar with Italian porcelain countertop, under faceted LED globes. The renovated 1,500 square foot tasting room is designed with green features by Jarrod Denton of Signum Architecture."',
      url: "https://www.cahomedesign.com"
    },
    {
      id: "cmag",
      logo: "/images/logos/CMag.png",
      title: "Three Charming Guest Houses For Summer",
      description: '"The hotel’s designers, Carol Padham and Phyllis Martin-Vegue, sought inspiration from the pristine white beach, blue-grey hues of the ocean, surrounding cypress trees, and warm tones of Carmel stone, all of which play out throughout the decor. The custom walnut-grained mill-work includes the minibar and headboards running the length of the rooms, each outfitted with woven-back chairs and cafe tables."',
      url: "https://www.cmag.com"
    }
  ]
};

// Contact Section Content
export const contactContent = {
  title: "Get in Touch",
  email: "cpadham@padhamdesign.com",
  phone: "510-406-3621",
  formLabels: {
    name: "Your Name",
    email: "Email Address",
    message: "How Can I Help Improve Your Space?",
    submit: "Submit"
  },
  formPlaceholders: {
    name: "Enter Name",
    email: "Enter Email",
    message: "About your project"
  },
  successMessage: "Thank you for your message. I will get back to you soon.",
  address: {
    street: "2150 Folsom Street, Suite 203",
    city: "San Francisco",
    state: "CA",
    zip: "94110"
  },
  hours: "Monday - Friday: 9am - 5pm",
  thankYouMessage: "Thank you for your message. We'll be in touch shortly."
};

// Footer Content
export const footerContent = {
  copyright: ` Padham Design. All rights reserved.`,
  socialLinks: [
    {
      platform: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/padhamdesign"
    },
    {
      platform: "Pinterest",
      icon: "pinterest",
      url: "https://www.pinterest.com/padhamdesign"
    },
    {
      platform: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/padhamdesign"
    }
  ],
  navLinks: [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "Portfolio",
      url: "/#portfolio"
    },
    {
      text: "Services",
      url: "/#services"
    },
    {
      text: "About",
      url: "/#about"
    },
    {
      text: "Contact",
      url: "/#contact"
    }
  ]
};

// Projects Data for Portfolio
export const projectsData = [
  {
    title: "Carmel Beach Hotel",
    slug: "carmel-beach-hotel",
    featuredImage: "/images/interiors/Interior1.jpg",
    location: "Carmel-by-the-Sea, CA",
    category: "Hospitality",
    description: "A contemporary Northern California beach look informed by Carmel's proximity to the ocean. Classic design that transcends trends, providing warmth and a relaxing coastal atmosphere."
  },
  {
    title: "Walt Tasting Room",
    slug: "walt-tasting-room",
    featuredImage: "/images/interiors/Middle.png",
    location: "Napa, CA",
    category: "Hospitality",
    description: "A wine tasting counter unlike any other, with faceted angles inspired by the 'W' in Walt Wines. Deep blue and gold derived from the wine label carry throughout the 1890s building interiors."
  },
  {
    title: "Bardessono Inn & Spa",
    slug: "bardessono-inn",
    featuredImage: "/images/interiors/Right.png",
    location: "Yountville, CA",
    category: "Hospitality",
    description: "California's first Platinum LEED-certified hotel. Cutting-edge sustainable design with the warmth of Napa Valley's architecture and wine culture."
  },
  {
    title: "Huntington Hotel & Nob Hill Spa",
    slug: "huntington-hotel",
    featuredImage: "/images/interiors/Interior1.jpg",
    location: "San Francisco, CA",
    category: "Hospitality",
    description: "A design concept drawn from San Francisco's cultural diversity — Italianate, Victorian, and Asian influences woven through furnishings, colors, and art across this historic 1924 landmark."
  },
  {
    title: "L'Auberge Carmel",
    slug: "l-auberge-carmel",
    featuredImage: "/images/interiors/Middle.png",
    location: "Carmel-by-the-Sea, CA",
    category: "Hospitality",
    description: "Timeless effortless luxury that honors the hotel's existing character. A seamless integration of classic and contemporary styles, resulting in calming, elegant, worldly interiors."
  }
];
