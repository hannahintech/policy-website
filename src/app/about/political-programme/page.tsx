export default function ManifestoPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 font-heading text-3xl">Green Party Manifesto</h1>

      {/* Political Programme */}
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Our Political Programme</h2>
        <p className="mb-3 text-sm">
          A system based on inequality and exploitation is threatening the future of our planet. The
          Greens are the only political party in England and Wales committed to fixing this.
        </p>
        <p className="mb-3 text-sm">Traditional parties all set out their plans in the same way:</p>
        <ul className="mb-3 list-disc pl-5 text-sm">
          <li>Section on tinkering on with the current economic system?</li>
          <li>Section on spending more money on nuclear weapons than on international aid?</li>
          <li>Section on how our democracy couldn't possibly evolve any further?</li>
        </ul>
        <p className="text-sm">
          We are not a traditional party. Our policy programme is founded on ten pillars, built from
          policies proposed and voted on by our members. It sets out what Greens are in politics to
          do: to end the system that keeps hurting the environment and all of us who rely on it -
          and to build a better alternative.
        </p>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="mb-2 text-2xl font-semibold">The Green Party's Core Values</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>
            We support a radical transformation of society for the benefit of all, and for the
            planet as a whole.
          </li>
          <li>
            Well-being must consider freedom, health, equality, happiness, and ecological balance -
            not just economics.
          </li>
          <li>Humankind depends on biodiversity; other species are not expendable.</li>
          <li>The Earth's resources are finite - we must build a truly sustainable society.</li>
          <li>Every person deserves basic material security - now and for future generations.</li>
          <li>We must consider the well-being of other nations, species, and generations.</li>
          <li>A just society is democratic, inclusive, and free from discrimination.</li>
          <li>Decisions should be taken as close as possible to those affected.</li>
          <li>
            We seek peaceful, lasting solutions that protect minority voices and future generations.
          </li>
          <li>
            We believe in change through democratic action, lifestyle shifts, and non-violent direct
            action.
          </li>
        </ul>
      </section>
    </main>
  )
}
