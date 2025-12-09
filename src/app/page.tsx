import IrisPattern2 from "@/components/IrisPattern2";
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
    <section className="relative bg-[#e9eff7] overflow-hidden min-h-[400px] md:min-h-[600px]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#8e24aa]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#241773]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[600px] relative">
        {/* Left Half - Image with enhanced overlay */}
        <div className="relative w-full md:w-1/2 h-[250px] md:h-auto overflow-hidden">
          <Image
            src="/eyephoto.jpg"
            alt="Child eye examination"
            fill
            priority
            className="object-cover"
          />
          {/* Multi-layer gradient for smoother transition */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-[#e9eff7]" />
          
          {/* Accent line separator */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8e24aa]/30 to-transparent hidden md:block" />
        </div>

        {/* Right Half - Content */}
        <div className="relative w-full md:w-1/2 bg-[#e9eff7] py-12 md:py-20 lg:py-24 flex items-center">
          {/* Iris Pattern - slightly animated */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] opacity-30 md:opacity-40 pointer-events-none transition-opacity duration-1000 hover:opacity-50">
            <IrisPattern2 />
          </div>

          {/* Content Container */}
          <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full max-w-2xl">
            {/* Eyebrow text */}
            <p className="text-sm md:text-base font-medium text-[#8e24aa] mb-4 tracking-wide uppercase">
              Excellence in Vision Care
            </p>

            {/* Main heading - split for emphasis */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#241773] leading-tight mb-6">
              Advanced Eye Surgery
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-gray-700">
                with modern amenities, expert care, and affordable rates
              </span>
            </h1>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {[
                { icon: '✓', text: 'State-of-the-art surgical equipment' },
                { icon: '✓', text: 'Board-certified ophthalmologists' },
                { icon: '✓', text: 'Compassionate, personalized care' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8e24aa] text-white flex items-center justify-center text-sm font-bold">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-[#8e24aa] text-white rounded-full font-semibold hover:bg-[#7a1f8e] transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                Our impact
                <svg className="ml-2 -mr-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-white text-[#241773] rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-[#241773]/20 hover:border-[#241773]/40 text-sm md:text-base"
              >
                Book appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
           {/* About Us Section */}
      <section className="relative bg-[#e9eff7] py-20 px-6 overflow-hidden">
        {/* Subtle decorative elements matching site style */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#e9eff7] to-transparent opacity-50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#f0e6ff] to-transparent opacity-40 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header matching site style */}
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-4">
              Excellence in Eye Care Since 2000
            </h2>
            <div className="w-20 h-1 bg-[#8e24aa] mx-auto md:mx-0" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left side - Story */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                For over two decades, <span className="font-semibold text-[#241773]">Abid Ali Khan Eye Hospital</span> has stood as a pillar of exceptional ophthalmological care in the heart of Darulshifa, Hyderabad. Established with an unwavering commitment to providing world-class treatment to all members of our community, we have evolved into a center of excellence that seamlessly blends clinical expertise with compassionate patient care.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Our distinguished team of board-certified ophthalmologists and skilled healthcare professionals have successfully served over 50,000 patients, employing state-of-the-art diagnostic equipment and advanced surgical techniques. We pride ourselves on maintaining the highest standards of medical ethics while ensuring that quality eye care remains accessible and affordable to everyone who walks through our doors.
              </p>

              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8e24aa] mb-2">01</div>
                  <p className="text-sm font-semibold text-[#241773]">Clinical Excellence</p>
                </div>
                <div className="text-center border-l border-r border-gray-200">
                  <div className="text-3xl font-bold text-[#8e24aa] mb-2">02</div>
                  <p className="text-sm font-semibold text-[#241773]">Patient Dignity</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8e24aa] mb-2">03</div>
                  <p className="text-sm font-semibold text-[#241773]">Ethical Practice</p>
                </div>
              </div>
            </div>

            {/* Right side - Values matching services card style */}
            <div className="space-y-6">
              <div className="group rounded-xl border border-gray-200 p-7 bg-white shadow hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e0f2fe] ring-2 ring-[#bae6fd] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#241773]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[#241773] group-hover:text-[#6a1b9a] transition-colors duration-300 mb-2">Medical Excellence</h3>
                    <p className="text-base text-gray-600 leading-relaxed">Delivering superior outcomes through continuous education and adoption of advanced ophthalmic procedures.</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-gray-200 p-7 bg-white shadow hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e0f2fe] ring-2 ring-[#bae6fd] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#241773]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[#241773] group-hover:text-[#6a1b9a] transition-colors duration-300 mb-2">Patient-Centered Care</h3>
                    <p className="text-base text-gray-600 leading-relaxed">Ensuring every individual receives personalized attention in a comfortable, respectful environment.</p>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl border border-gray-200 p-7 bg-white shadow hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e0f2fe] ring-2 ring-[#bae6fd] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#241773]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[#241773] group-hover:text-[#6a1b9a] transition-colors duration-300 mb-2">Community Trust</h3>
                    <p className="text-base text-gray-600 leading-relaxed">Building lasting relationships through transparency, integrity, and unwavering commitment to our neighbors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement - styled to match purple sections */}
            {/* Mission Statement */}
          <div className="relative border-t border-b border-gray-200 py-16 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#6a1b9a] uppercase mb-6">Our Mission</p>
            <blockquote className="text-2xl md:text-3xl font-serif font-light text-[#1a1a1a] max-w-4xl mx-auto leading-relaxed italic">
              "To preserve and restore the gift of sight through exceptional medical care, ethical practice, and a steadfast dedication to serving our community with compassion and dignity."
            </blockquote>
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


      <section className="bg-[#241773] text-white py-20 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-6xl font-extrabold text-white">20+</p>
            <p className="text-white/80 mt-3 text-xl">Years of Dedicated Service</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-white">50k+</p>
            <p className="text-white/80 mt-3 text-xl">Happy Patients Treated</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold text-white">4.5★</p>
            <p className="text-white/80 mt-3 text-xl">Average Patient Rating Online</p>
          </div>

        </div>
      </section>

       {/* Enhanced Info Strip */}
      <section className="relative bg-gradient-to-br from-[#f5f8fd] via-[#f8fafd] to-[#f5f8fd] text-gray-800 py-12 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8e24aa]/20 to-transparent" />
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#8e24aa]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#241773]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8e24aa] to-[#7a1f8e] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-[#241773] mb-1.5">Our Location</p>
                  <p className="text-sm font-semibold text-gray-900">Abid Ali Khan Eye Hospital</p>
                  <p className="text-xs text-gray-600 mt-1">Darulshifa, Hyderabad - 500 024 (T.G)</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8e24aa] to-[#7a1f8e] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-[#241773] mb-1.5">Call Us</p>
                  <a href="tel:04024418929" className="text-base font-semibold text-[#8e24aa] hover:text-[#7a1f8e] transition-colors duration-200 hover:underline">
                    040-24418929
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Available during registration hours</p>
                </div>
              </div>
            </div>

            {/* Morning Hours Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8e24aa] to-[#7a1f8e] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-[#241773] mb-1.5">Morning</p>
                  <p className="text-base font-semibold text-gray-900">9:00 AM – 3:00 PM</p>
                  <p className="text-xs text-gray-600 mt-1">Registration hours</p>
                </div>
              </div>
            </div>

            {/* Evening Hours Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8e24aa] to-[#7a1f8e] flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-[#241773] mb-1.5">Evening</p>
                  <p className="text-base font-semibold text-gray-900">5:30 PM – 7:30 PM</p>
                  <p className="text-xs text-gray-600 mt-1">Registration hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick action banner */}
          <div className="mt-10 bg-gradient-to-r from-[#241773] to-[#241773] rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-white font-bold text-lg mb-1">Need an appointment?</p>
                <p className="text-white/80 text-sm">Walk in during registration hours or call us to schedule</p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#241773] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap"
              >
                Contact Us
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
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
            <p className="text-3xl font-semibold text-white">Experienced Eye Care</p>
            <p className="text-white/80 mt-3 text-lg">
              Led by skilled ophthalmologists offering comprehensive diagnosis and treatment for all age groups.
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">Community-Focused</p>
            <p className="text-white/80 mt-3 text-lg">
              Serving patients from Darulshifa, Malakpet, and surrounding areas with affordable, ethical care.
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">Trusted By Families</p>
            <p className="text-white/80 mt-3 text-lg">
              Known locally as a dedicated neighbourhood eye hospital for routine and surgical eye needs.
            </p>
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

      {/* Affiliations
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
      </section> */}



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