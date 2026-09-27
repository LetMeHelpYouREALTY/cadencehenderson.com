import { PageHero } from '@/components/cadence/page-hero'
import { SiteImage } from '@/components/cadence/site-image'
import type { Metadata } from 'next'
import { RealScoutOfficeListings } from '@/components/idx/realscout-office-listings'
import { Navigation } from '@/components/cadence/navigation'
import { Footer } from '@/components/cadence/footer'
import { PageAeo } from '@/components/cadence/page-aeo'
import { defaultPageFaqs } from '@/lib/page-aeo'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Coffee, Utensils, Film, Heart } from 'lucide-react'
import { cfImage, SITE_IMAGES } from '@/lib/cloudflare-images'
import Link from 'next/link'

const shoppingCenters = [
  {
    name: 'Galleria at Sunset',
    distance: '5 minutes',
    description:
      'Major shopping mall featuring department stores, specialty retailers, dining, and entertainment options.',
    stores: ['Macy\'s', 'JCPenney', 'Dillard\'s', '140+ stores'],
    image: cfImage(SITE_IMAGES.shopping.galleria, 'card'),
  },
  {
    name: 'District at Green Valley Ranch',
    distance: '10 minutes',
    description:
      'Open-air lifestyle center with upscale shops, restaurants, and a movie theater.',
    stores: ['Whole Foods', 'REI', 'Anthropologie', '40+ stores'],
    image: cfImage(SITE_IMAGES.shopping.district, 'card'),
  },
  {
    name: 'Cadence Marketplace',
    distance: 'Within community',
    description:
      'Neighborhood shopping with grocery stores, restaurants, and essential services.',
    stores: ['Smith\'s', 'CVS', 'Starbucks', '25+ stores'],
    image: cfImage(SITE_IMAGES.shopping.marketplace, 'card'),
  },
]

export const metadata: Metadata = {
  title: 'Shopping & Dining Near Cadence Henderson NV | 89011',
  description:
    'Galleria at Sunset, Cadence Marketplace, Sunset Station & more near Cadence Henderson NV 89011. Grocery, dining, retail and entertainment minutes from your home.',
  alternates: { canonical: 'https://www.cadencehenderson.com/lifestyle/shopping' },
  openGraph: {
    title: 'Shopping & Dining Near Cadence Henderson NV | 89011',
    description: 'Galleria at Sunset, Cadence Marketplace & more near Cadence Henderson NV 89011. Dining, retail and entertainment nearby.',
    url: 'https://www.cadencehenderson.com/lifestyle/shopping',
  },
}

const restaurants = [
  {
    category: 'Fine Dining',
    places: [
      'Echo & Rig',
      'Bottiglia',
      'Hank\'s Fine Steaks',
      'Lucille\'s Smokehouse',
    ],
  },
  {
    category: 'Casual Dining',
    places: [
      'The Cheesecake Factory',
      'BJ\'s Restaurant',
      'Yard House',
      'Brio Italian Grille',
    ],
  },
  {
    category: 'Quick Service',
    places: [
      'Chipotle',
      'Panera Bread',
      'Chick-fil-A',
      'In-N-Out Burger',
    ],
  },
  {
    category: 'Coffee & Cafes',
    places: [
      'Starbucks',
      'Dutch Bros',
      'The Coffee Bean',
      'Local Roasters',
    ],
  },
]

const entertainment = [
  {
    name: 'Regal Cinemas',
    type: 'Movie Theater',
    description: 'Stadium seating, IMAX, and latest releases',
    icon: Film,
  },
  {
    name: 'M Resort Spa Casino',
    type: 'Gaming & Entertainment',
    description: 'Casino, restaurants, and live entertainment',
    icon: ShoppingBag,
  },
  {
    name: 'Las Vegas Strip',
    type: 'World-Class Entertainment',
    description: '20 minutes to endless dining and shows',
    icon: Heart,
  },
]

export default function ShoppingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="Shopping & Entertainment"
        subtitle="From everyday essentials to upscale boutiques, Cadence residents enjoy convenient access to premier shopping, dining, and entertainment options throughout Henderson and Las Vegas."
        imageSrc={cfImage(SITE_IMAGES.hero.shopping, 'hero')}
        imageAlt="Shopping and entertainment near Cadence Henderson NV 89011"
        icon={ShoppingBag}
      />

      <RealScoutOfficeListings />

      <section className="border-b border-neutral-200 py-10">
        <div className="container mx-auto px-4">
          <nav
            aria-label="Shopping and nearby destinations"
            className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 text-sm"
          >
            <Link href="/lifestyle/shopping/restaurants" className="font-medium text-primary hover:underline">
              Restaurants
            </Link>
            <Link href="/lifestyle/shopping/entertainment" className="font-medium text-primary hover:underline">
              Entertainment
            </Link>
            <Link href="/lifestyle/shopping/activities" className="font-medium text-primary hover:underline">
              Outdoor activities
            </Link>
          </nav>
        </div>
      </section>

      {/* Shopping Centers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Shopping near Cadence Henderson NV 89011
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shoppingCenters.map((center) => (
              <div
                key={center.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <SiteImage
                    src={center.image}
                    alt={`${center.name} near Cadence Henderson NV 89011`}
                    fill
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-pink-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {center.distance}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {center.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{center.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      Featured Stores:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {center.stores.map((store) => (
                        <span
                          key={store}
                          className="text-xs bg-pink-100 text-pink-900 px-2 py-1 rounded"
                        >
                          {store}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Utensils size={48} className="mx-auto mb-4 text-pink-900" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dining & Restaurants
              </h2>
              <p className="text-xl text-gray-600">
                Hundreds of dining options from quick bites to fine dining
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {restaurants.map((category) => (
                <div
                  key={category.category}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-4 text-center border-b pb-2">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.places.map((place) => (
                      <li
                        key={place}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-pink-900 rounded-full mr-2 mt-1.5" />
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Entertainment & Recreation
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {entertainment.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.name}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                  >
                    <IconComponent
                      size={48}
                      className="mx-auto mb-4 text-pink-900"
                    />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-pink-900 font-medium mb-2">
                      {item.type}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Convenience Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Coffee size={48} className="mx-auto mb-6 text-pink-900" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Everyday Convenience
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Essential services and everyday shopping right in your
              neighborhood
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-3xl mb-2">🏪</div>
                <h3 className="font-bold text-gray-900">Grocery</h3>
                <p className="text-xs text-gray-600">Smith\'s, Whole Foods</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-3xl mb-2">💊</div>
                <h3 className="font-bold text-gray-900">Pharmacy</h3>
                <p className="text-xs text-gray-600">CVS, Walgreens</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-3xl mb-2">⛽</div>
                <h3 className="font-bold text-gray-900">Gas Stations</h3>
                <p className="text-xs text-gray-600">Multiple locations</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-3xl mb-2">🏦</div>
                <h3 className="font-bold text-gray-900">Banks</h3>
                <p className="text-xs text-gray-600">Chase, Wells Fargo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Strip Section */}
      <section className="py-16 bg-cadence-ink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              The Las Vegas Strip - 20 Minutes Away
            </h2>
            <p className="text-xl mb-8">
              World-class shopping, dining, and entertainment at your doorstep.
              From luxury boutiques to celebrity chef restaurants and spectacular
              shows, the best of Las Vegas is just a short drive away.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              Explore Las Vegas
            </Button>
          </div>
        </div>
      </section>

      <PageAeo
        path="/lifestyle/shopping"
        name="Shopping & Dining Near Cadence Henderson NV | 89011"
        description="Galleria at Sunset, Cadence Marketplace, and Henderson dining near Cadence Henderson NV 89011. Grocery, retail, and entertainment 5–10 minutes away."
        faqs={defaultPageFaqs('shopping and dining near Cadence Henderson')}
        breadcrumbs={[
          { name: 'Lifestyle', path: '/lifestyle' },
          { name: 'Shopping near Cadence Henderson NV 89011' },
        ]}
        faqHeading="Cadence Henderson shopping — questions"
      />
      <Footer />
    </div>
  )
}

