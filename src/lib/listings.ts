export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  tag?: string;
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "The Meridian Residence",
    location: "Malibu, California",
    price: 4850000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    tag: "New Listing",
  },
  {
    id: "2",
    title: "Oakwood Manor",
    location: "Aspen, Colorado",
    price: 3200000,
    beds: 4,
    baths: 3,
    sqft: 3600,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    tag: "Featured",
  },
  {
    id: "3",
    title: "The Glass Pavilion",
    location: "Palm Springs, California",
    price: 2750000,
    beds: 3,
    baths: 3,
    sqft: 2900,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: "4",
    title: "Coastal Retreat",
    location: "Monterey, California",
    price: 5100000,
    beds: 6,
    baths: 5,
    sqft: 5100,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    tag: "Exclusive",
  },
  {
    id: "5",
    title: "Willowbrook Estate",
    location: "Woodside, California",
    price: 6750000,
    beds: 7,
    baths: 6,
    sqft: 7200,
    imageUrl: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80",
    tag: "Rare Find",
  },
  {
    id: "6",
    title: "Urban Penthouse",
    location: "San Francisco, California",
    price: 3900000,
    beds: 3,
    baths: 3,
    sqft: 2400,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
