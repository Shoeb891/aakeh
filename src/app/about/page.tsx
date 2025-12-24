export default function about() {
    return(
        <section id="about" className="relative bg-[#e9eff7] py-20 px-6 overflow-hidden">
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
                For over two decades, <span className="font-semibold text-[#241773]">Abid Ali Khan Eye Hospital</span> has stood as a pillar of exceptional ophthalmological care in the heart of Hyderabad. Established with an unwavering commitment to providing world-class treatment to all members of our community, we have evolved into a center of excellence that seamlessly blends clinical expertise with compassionate patient care.
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
              To preserve and restore the gift of sight through exceptional medical care, ethical practice, and a steadfast dedication to serving our community with compassion and dignity.
            </blockquote>
          </div>
        </div>
      </section>
    )
}