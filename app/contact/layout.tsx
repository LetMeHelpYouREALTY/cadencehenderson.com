import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/components/cadence/contact-info'
import { PageGraphSchema } from '@/components/schema/page-graph'
import { CONTACT_FAQS } from '@/lib/page-aeo'

const CONTACT_TITLE = `Contact ${CONTACT_INFO.siteName} | ${CONTACT_INFO.phone}`
const CONTACT_DESCRIPTION = `Schedule a Cadence Henderson home tour. Call ${CONTACT_INFO.phone} or visit ${CONTACT_INFO.welcomeCenter}. Open 7 days 10AM–6PM. Licensed REALTOR® on-site.`

export const metadata: Metadata = {
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: 'https://www.cadencehenderson.com/contact' },
  openGraph: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    url: 'https://www.cadencehenderson.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageGraphSchema
        path="/contact"
        name={CONTACT_TITLE}
        description={CONTACT_DESCRIPTION}
        faqs={CONTACT_FAQS}
        breadcrumbs={[{ name: 'Contact Dr. Jan Duffy in Cadence Henderson NV 89011' }]}
      />
      {children}
    </>
  )
}
