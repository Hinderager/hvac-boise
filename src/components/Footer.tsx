import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/blogs" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/air-conditioning/ac-repair" className="text-white/80 hover:text-white transition-colors">AC Repair</Link></li>
              <li><Link href="/services/air-conditioning/ac-installation" className="text-white/80 hover:text-white transition-colors">AC Installation</Link></li>
              <li><Link href="/services/heating/heater-repair" className="text-white/80 hover:text-white transition-colors">Heating Repair</Link></li>
              <li><Link href="/services/furnaces/furnace-installation" className="text-white/80 hover:text-white transition-colors">Furnace Installation</Link></li>
              <li><Link href="/resources/maintenance-plans" className="text-white/80 hover:text-white transition-colors">HVAC Maintenance</Link></li>
              <li><Link href="/services/air-conditioning/emergency-ac-repair" className="text-white/80 hover:text-white transition-colors">24/7 Emergency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Service Areas</h4>
            <ul className="space-y-2">
              <li><Link href="/cities-served/boise" className="text-white/80 hover:text-white transition-colors">Boise</Link></li>
              <li><Link href="/cities-served/meridian" className="text-white/80 hover:text-white transition-colors">Meridian</Link></li>
              <li><Link href="/cities-served/nampa" className="text-white/80 hover:text-white transition-colors">Nampa</Link></li>
              <li><Link href="/cities-served/caldwell" className="text-white/80 hover:text-white transition-colors">Caldwell</Link></li>
              <li><Link href="/cities-served/eagle" className="text-white/80 hover:text-white transition-colors">Eagle</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-light-blue">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <a href="tel:2085059352" className="text-white/80 hover:text-white transition-colors font-semibold">(208) 505-9352</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <a href="mailto:info@hvac-boise.com" className="text-white/80 hover:text-white transition-colors">info@hvac-boise.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <p className="text-white/80">Serving the Treasure Valley<br />Boise, ID</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-1" />
                <p className="text-white/80">Mon-Fri: 7am - 7pm<br />24/7 Emergency Service</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center" aria-label="Facebook"><Facebook className="h-5 w-5" aria-hidden="true" /></span>
              <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center" aria-label="Instagram"><Instagram className="h-5 w-5" aria-hidden="true" /></span>
              <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center" aria-label="LinkedIn"><Linkedin className="h-5 w-5" aria-hidden="true" /></span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Boise HVAC Pros. All rights reserved.</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-white/60 text-sm hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
