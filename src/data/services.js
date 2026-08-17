export const categories = [
  {
    slug: 'hair-services',
    name: 'Hair Services',
    tagline: 'Precision cuts, colour artistry & signature styling',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Signature Haircut & Style', price: 'Rs. 3,500' },
      { name: 'Global Hair Colour', price: 'Rs. 8,500' },
      { name: 'Balayage / Ombré', price: 'Rs. 12,000' },
      { name: 'Keratin Smoothening', price: 'Rs. 15,000' },
      { name: 'Deep Nourish Hair Spa', price: 'Rs. 5,500' },
      { name: 'Bridal Hair Styling', price: 'Rs. 9,000' },
    ],
  },
  {
    slug: 'grooming',
    name: 'Grooming',
    tagline: 'Refined finishing touches for the modern woman',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Classic Manicure', price: 'Rs. 2,200' },
      { name: 'Luxury Pedicure', price: 'Rs. 3,000' },
      { name: 'Gel Polish Overlay', price: 'Rs. 2,800' },
      { name: 'Eyebrow Shaping', price: 'Rs. 1,200' },
      { name: 'Facial Threading', price: 'Rs. 1,500' },
    ],
  },
  {
    slug: 'glam-up',
    name: 'Glam-Up',
    tagline: 'Editorial makeup & finishing for your most radiant self',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Everyday Glam Makeup', price: 'Rs. 4,500' },
      { name: 'Bridal Makeup', price: 'Rs. 18,000' },
      { name: 'Party & Evening Glam', price: 'Rs. 7,500' },
      { name: 'Airbrush Makeup', price: 'Rs. 10,000' },
      { name: 'Saree / Draping Assist', price: 'Rs. 2,500' },
      { name: 'Lash Extensions', price: 'Rs. 6,000' },
    ],
  },
  {
    slug: 'relax-rejuvenate',
    name: 'Relax & Rejuvenate',
    tagline: 'Therapeutic rituals to restore body, skin & spirit',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Signature Aromatherapy Massage', price: 'Rs. 8,000' },
      { name: 'Hot Stone Therapy', price: 'Rs. 10,500' },
      { name: 'Radiance Facial', price: 'Rs. 6,500' },
      { name: 'Gold Anti-Ageing Facial', price: 'Rs. 9,500' },
      { name: 'Body Polish & Wrap', price: 'Rs. 8,500' },
      { name: 'Steam & Sauna Ritual', price: 'Rs. 3,000' },
    ],
  },
  {
    slug: 'waxing',
    name: 'Waxing',
    tagline: 'Silken-smooth precision waxing in a private, gentle setting',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Full Arms', price: 'Rs. 1,800' },
      { name: 'Full Legs', price: 'Rs. 2,500' },
      { name: 'Underarms', price: 'Rs. 800' },
      { name: 'Full Body Wax', price: 'Rs. 7,500' },
      { name: 'Brazilian Wax', price: 'Rs. 3,200' },
      { name: 'Face Wax', price: 'Rs. 1,000' },
    ],
  },
]

export const getCategoryBySlug = (slug) =>
  categories.find((category) => category.slug === slug)
