import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#131820] text-white pt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 pb-10 border-b border-gray-700">
          <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
            <a href="mailto:info@aakeh.org" className="text-xl md:text-2xl hover:text-gray-200">info@aakeh.org</a>
            <div className="flex gap-5 text-2xl md:text-3xl mt-3">
              <a href="#" aria-label="Twitter" className="hover:text-gray-200"><FaTwitter /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-200"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-200"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-200"><FaLinkedinIn /></a>
            </div>
            <p className="text-base md:text-lg mt-3">Abid Ali Khan Eye Hospital, Darulshifa, Hyderabad - 500024 (T.G)</p>
            <p className="text-base md:text-lg">Telephone: <a href="tel:04024418929" className="hover:text-gray-200">040-24418929</a></p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/1w.svg" // Using 1.svg for consistency as a placeholder logo
              alt="Abid Ali Khan Eye Hospital Logo"
              width={360}
              height={90}
              className="w-56 h-auto md:w-70 opacity-90"
            />
          </div>
        </div>

        {/* Middle Navigation */}
        <div className="pt-10 pb-10 border-b border-gray-700">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-base md:text-lg">
            <li><Link href="/about" className="hover:text-gray-200">About us</Link></li>
            <li><Link href="/services" className="hover:text-gray-200">Services</Link></li>
            <li><Link href="/location" className="hover:text-gray-200">Location</Link></li>
            <li><Link href="/contact" className="hover:text-gray-200">Contact us</Link></li>
            <li><Link href="#" className="hover:text-gray-200">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-gray-200">Terms and Conditions</Link></li>
            <li><Link href="#" className="hover:text-gray-200">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Bottom Copyright */}
       <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-base md:text-lg text-white/80">
  <p className="text-center md:text-left">
    &copy; {new Date().getFullYear()} Abid Ali Khan Eye Hospital. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
}
