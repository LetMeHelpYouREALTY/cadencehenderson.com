/**
 * HowTo JSON-LD for selling to buy in Cadence Henderson.
 */
export function HowToSellSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to sell your home and buy new construction in Cadence Henderson',
    description:
      'Steps to sell an existing home and purchase a new home in Cadence Henderson NV 89011 with Dr. Jan Duffy.',
    totalTime: 'P60D',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Get a listing consultation',
        text: 'Book a listing consultation with Dr. Jan Duffy to review equity, prep timeline, and Cadence builder inventory.',
        url: 'https://www.cadencehenderson.com/sell-in-cadence',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Align sale and purchase timelines',
        text: 'Coordinate listing dates, builder deposits, and closings so you are not between mortgages longer than necessary.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Tour Cadence villages',
        text: 'Tour Cadence Henderson builders and villages with Dr. Jan Duffy registered as your buyer’s agent before model visits.',
        url: 'https://www.cadencehenderson.com/new-homes',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Negotiate and close',
        text: 'Negotiate upgrades, lot premiums, and closing costs with Cadence builders while your sale proceeds toward the new home.',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
