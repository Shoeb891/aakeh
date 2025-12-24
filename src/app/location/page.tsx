import Link from "next/link";

export default function location(){
    const parkingInfo = [
    { icon: "🚗", title: "Street Parking", desc: "Available on nearby streets" },
    { icon: "🏢", title: "Parking Area", desc: "Dedicated hospital parking" },
    { icon: "♿", title: "Accessible", desc: "Wheelchair-friendly access" },
  ];

  const transportOptions = [
    { 
      mode: "Bus", 
      icon: "🚌", 
      routes: "Routes: 2, 8, 86K, 95, 113M",
      stop: "Nearest Stop: Darulshifa"
    },
    { 
      mode: "Auto/Taxi", 
      icon: "🛺", 
      routes: "Available 24/7",
      stop: "Direct drop-off at hospital"
    },
    { 
      mode: "Metro", 
      icon: "🚇", 
      routes: "Red Line",
      stop: "Charminar Station (2.5 km away)"
    },
  ];


  const hours = [
    { day: "Monday - Saturday", morning: "9:00 AM - 3:00 PM", evening: "5:30 PM - 7:30 PM" },
    { day: "Sunday", morning: "Closed", evening: "Closed" },
  ];

  const landmarks = [
    "Near Osmania General Hospital",
    "Close to Darulshifa Chowrasta",
    "5 minutes from High Court",
    "Walking distance from City Bus Station"
  ];

  return (
    <main className="min-h-screen bg-[#f5f8fd]">
      {/* Hero Section */}
      <section className="relative text-blue-950 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Visit Us</h1>
          <p className="text-xl md:text-2xl text-blue-950 max-w-3xl mx-auto">
            Conveniently located in the heart of Hyderabad. Easy to reach and accessible to all.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-[#f5f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[500px]">
                <iframe
                  title="Map to Abid Ali Khan Eye Hospital"
                  src="https://www.google.com/maps?q=Abid+Ali+Khan+Eye+Hospital+Darulshifa+Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-xl text-[#241773] mb-4">Quick Navigation</h3>
                <a 
                  href="https://maps.google.com/?q=Abid+Ali+Khan+Eye+Hospital+Darulshifa+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#8e24aa] text-white text-center py-3 rounded-lg font-medium hover:bg-[#7a1f8e] transition-colors duration-200 mb-3"
                >
                  Open in Google Maps
                </a>
                <a 
                  href="tel:04024418929"
                  className="block w-full bg-white border-2 border-[#8e24aa] text-[#8e24aa] text-center py-3 rounded-lg font-medium hover:bg-[#8e24aa] hover:text-white transition-colors duration-200"
                >
                  Call for Directions
                </a>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-xl text-[#241773] mb-4">Nearby Landmarks</h3>
                <ul className="space-y-3">
                  {landmarks.map((landmark, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#8e24aa] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
     

      {/* Hours & Transport */}
      <section className="py-20 px-6 bg-[#f5f8fd]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Operating Hours */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#241773] mb-8">
                Operating Hours
              </h2>
              <div className="space-y-4">
                {hours.map((schedule, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-200 p-6 bg-white shadow-lg">
                    <p className="font-semibold text-xl text-[#241773] mb-4">{schedule.day}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Morning Registration</span>
                        <span className="font-semibold text-[#241773]">{schedule.morning}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Evening Registration</span>
                        <span className="font-semibold text-[#241773]">{schedule.evening}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-[#241773] to-[#6a1b9a] p-6 text-white">
                <p className="text-sm font-semibold mb-2">📞 For Emergencies</p>
                <p className="text-base">Please call ahead for urgent care outside regular hours</p>
              </div>
            </div>

            {/* How to Reach */}
            
          </div>
        </div>
      </section>

      {/* Address Card */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 border-[#241773] p-10 md:p-14 text-center bg-gradient-to-br from-[#f5f8fd] to-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#241773] mb-6">
              Abid Ali Khan Eye Hospital
            </h2>
            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p className="font-medium">DARULSHIFA, HYDERABAD - 500 024</p>
              <p className="font-medium">Telangana, India</p>
              <div className="pt-4 border-t border-gray-300 max-w-md mx-auto">
                <p className="mb-2"><span className="font-semibold text-[#241773]">Phone:</span> 040-24418929</p>
                <p><span className="font-semibold text-[#241773]">Email:</span> info@aakeyehospital.com</p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-[#8e24aa] text-white rounded-full font-medium hover:bg-[#7a1f8e] transition-colors duration-200"
            >
              Back to Home
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  )
}