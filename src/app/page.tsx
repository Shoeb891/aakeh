import IrisPattern from "@/components/IrisPattern";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    { title: "Computerised Eye Testing", icon: "/file.svg" },
    { title: "Phacoemulsification Cataract Surgery", icon: "/window.svg" },
    { title: "Squint Surgery", icon: "/2.svg" },
    { title: "DCR, DCT, Surgery", icon: "/globe.svg" },
    { title: "Pterygium Surgery", icon: "/file.svg" },
    { title: "Lasik Surgery Evaluation", icon: "/window.svg" },
    { title: "Opticals & Contact Lens", icon: "/2.svg" },
    { title: "Pharmacy", icon: "/globe.svg" },
  ];

  const faqs = [
    {
      q: "Do I need an appointment?",
      a: "Walk-ins for registration are accepted during timings. For surgeries and detailed evaluation, please call to schedule.",
    },
    {
      q: "Do you have opticals and contact lenses?",
      a: "Yes, we have an in-house opticals and contact lens service during working hours.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept cash and most UPI/cards. Please call to confirm specific options.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
    <section className="relative bg-[#e9eff7] overflow-hidden min-h-[400px] md:min-h-[550px]">
  <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[550px]">
    {/* Left Half - Image */}
    <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
      <Image
        src="/eyephoto.jpg"
        alt="Child eye examination"
        fill
        priority
        className="object-cover"
      />
      {/* Gradient overlay transitioning to right side (bottom on mobile) */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-[#e9eff7]" />
    </div>
    
    {/* Right Half - Pattern and Text */}
    <div className="relative w-full md:w-1/2 bg-[#e9eff7] py-10 md:py-16 lg:py-20 flex items-end">
      {/* Iris Pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] opacity-30 md:opacity-40 pointer-events-none">
        <IrisPattern />
      </div>

      {/* Text Content */}
      <div className="relative z-10 px-6 md:px-10 lg:px-14 pb-10 md:pb-12 lg:pb-16 max-w-2xl">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#241773] leading-relaxed">
{"Offering advanced eye surgery with modern amenities, expert care, and affordable rates"}
        </p>
        {/* <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700">Brenda Silverman, patient and supporter</p> */}
        <Link
          href="#"
          className="mt-6 md:mt-8 inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 bg-[#8e24aa] text-white rounded-full font-medium hover:bg-[#7a1f8e] transition-colors duration-200 text-sm md:text-base"
        >
          Our impact
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-10 text-center md:text-left">
      Comprehensive Eye Care Services
    </h2>
    <p className="mt-3 text-xl text-gray-700 mb-12 text-center md:text-left">
      Diagnostics, surgery, opticals, and pharmacy under one roof.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s) => (
        <div key={s.title} className="group rounded-xl border border-gray-200 p-7 bg-white shadow hover:shadow-lg transition-all duration-300">
          <div className="relative h-16 w-16 rounded-full bg-[#e0f2fe] ring-2 ring-[#bae6fd] flex items-center justify-center mb-5">
            <Image src={s.icon} alt="" width={36} height={36} className="opacity-80" />
          </div>
          <h3 className="font-semibold text-2xl text-[#241773] group-hover:text-[#6a1b9a] transition-colors duration-300">{s.title}</h3>
          <p className="text-base text-gray-600 mt-3">Available during regular hospital hours.</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Info Strip */}
      <section className="bg-[#f5f8fd] text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          <div>
            <p className="text-xl font-semibold">Abid Ali Khan Eye Hospital</p>
            <p className="text-base text-gray-600 mt-2">DARULSHIFA, HYDERABAD - 500 024 (T.G)</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Phone</p>
            <a href="tel:04024418929" className="text-base text-gray-600 mt-2 hover:underline">040-24418929</a>
          </div>
          <div>
            <p className="text-xl font-semibold">Morning Registration</p>
            <p className="text-base text-gray-600 mt-2">9:00 AM – 3:00 PM</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Evening Registration</p>
            <p className="text-base text-gray-600 mt-2">5:30 PM – 7:30 PM</p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-[#f5f8fd] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-12 text-center">
            Meet Our Experienced Ophthalmologists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-56 w-full">
                  <Image src="/hero-eye.jpg" alt="Doctor" fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <p className="font-bold text-xl text-[#241773]">Dr. [Doctor Name {i}]</p>
                  <p className="text-base text-gray-600 mt-2">Specialization: Cataract, LASIK, General Eye Care</p>
                  <Link href="#" className="text-base text-[#6a1b9a] hover:underline mt-4 inline-block">View Profile &raquo;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#241773] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-6xl font-extrabold text-[#8e24aa]">25+</p>
            <p className="text-white/80 mt-3 text-xl">Years of Dedicated Service</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-[#8e24aa]">100k+</p>
            <p className="text-white/80 mt-3 text-xl">Happy Patients Treated</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-[#8e24aa]">10k+</p>
            <p className="text-white/80 mt-3 text-xl">Successful Surgeries Performed</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-12 text-center">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              quote: "The care I received here was exceptional, leading to a quick and comfortable recovery.",
              author: "Patient A, Hyderabad"
            },
            {
              quote: "A truly clean and welcoming facility with incredibly helpful and compassionate staff.",
              author: "Patient B, Hyderabad"
            },
            {
              quote: "Highly experienced doctors and modern equipment gave me confidence in my treatment.",
              author: "Patient C, Hyderabad"
            },
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 p-7 bg-white shadow hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 text-lg italic">“{testimonial.quote}”</p>
                <p className="mt-5 text-base font-semibold text-gray-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Hours */}
      <section className="bg-[#f5f8fd] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-8">Locate Us & Visit</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                title="Map to Abid Ali Khan Eye Hospital"
                src="https://www.google.com/maps?q=Abid+Ali+Khan+Eye+Hospital+Darulshifa+Hyderabad&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-8">Our Hours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow">
                <p className="text-base text-gray-500">Morning Registration</p>
                <p className="font-bold text-xl text-[#241773] mt-2">9:00 AM – 3:00 PM</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow">
                <p className="text-base text-gray-500">Evening Registration</p>
                <p className="font-bold text-xl text-[#241773] mt-2">5:30 PM – 7:30 PM</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow col-span-full">
                <p className="text-base text-gray-500">Contact Us</p>
                <a href="tel:04024418929" className="font-bold text-xl text-[#241773] hover:underline decoration-[#6a1b9a] underline-offset-4 mt-2 block">04024418929</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#241773] mb-10 text-center">Our Trusted Affiliations</h2>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-80">
            {[
              { src: "/logo.png", w: 140, h: 50, alt: "Affiliation Logo 1" },
              { src: "/vercel.svg", w: 140, h: 50, alt: "Affiliation Logo 2" },
              { src: "/1.svg", w: 140, h: 50, alt: "Affiliation Logo 3" },
            ].map((l, i) => (
              <Image key={i} src={l.src} alt={l.alt} width={l.w} height={l.h} className="grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#241773] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl bg-white/10 p-6 open:bg-white/20 transition-all duration-300 cursor-pointer">
                <summary className="select-none font-semibold text-xl hover:text-white/90 focus:outline-none">
                  {f.q}
                </summary>
                <p className="mt-4 text-gray-200 text-lg leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: "Abid Ali Khan Eye Hospital",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Darulshifa",
              addressLocality: "Hyderabad",
              postalCode: "500024",
              addressRegion: "TG",
              addressCountry: "IN",
            },
            telephone: "+91-40-24418929",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                ],
                opens: "09:00",
                closes: "15:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                ],
                opens: "17:30",
                closes: "19:30",
              },
            ],
          }),
        }}
      />
    </main>
  );
}