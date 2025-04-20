import { Suspense } from 'react'
import DynamicMDXRenderer from '@/components/DynamicMDXRenderer'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 font-heading text-3xl">About Green Party Policy</h1>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Our Core Values</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>
            We support a radical transformation of society for the benefit of all and the planet.
          </li>
          <li>
            Well-being is more than economics - it includes health, equity, and ecological
            stability.
          </li>
          <li>The Earth's diversity and resources are finite and must be protected.</li>
          <li>Material security is a right for every person in this and future generations.</li>
          <li>We promote democracy, non-violence, cooperation, and inclusion.</li>
          <li>Political change must include personal, cultural, and structural transformation.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Our Philosophical Basis</h2>
        <p className="mb-3 text-sm">
          The Green Party believes the current system of inequality and unsustainable growth
          threatens the future of life on Earth. We advocate for a cooperative, democratic, and
          sustainable society that meets basic needs, empowers individuals, and values the
          interdependence of people, nature, and communities.
        </p>
        <p className="text-sm">
          True freedom includes material security and meaningful participation. We reject
          consumerism, exploitation, and domination, and instead champion participatory democracy,
          biodiversity, fairness, and sustainability.
        </p>
      </section>
      <section>
        <article className="prose prose-sm max-w-none">
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicMDXRenderer slug="philosophicalBasis" />
          </Suspense>
        </article>
      </section>
    </main>
  )
}
