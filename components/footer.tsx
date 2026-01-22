import Link from 'next/link'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id='footer' className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 text-sm opacity-90">Thank you for visiting our site. Follow us here</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Address */}  
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Guru Nanak Institute Of Technology</p>
                  <p className="opacity-90">Department of Computer Science & Engineering </p>
                  <p className="opacity-90">Ibrahimpatnam, R. R. Dist</p>
                  <p className="opacity-90">Hyderabad - 501506, TELANGANA, INDIA</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={20} className="flex-shrink-0" />
                <p>+91-6356355608</p>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={20} className="flex-shrink-0" />
                <p>hackerrank.csegnit@gniindia.org</p>
              </div>
            </div>
          </div>

          {/* Developer Credits */}
          <div>
            <h3 className="text-2xl font-bold mb-6">This website is designed & developed by</h3>
            <p className="text-center font-semibold text-lg">Nitesh Kushwaha</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/30 py-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-90">
          <p>Copyright © 2026 All rights reserved | HACKER RANK</p>
        </div>
      </div>
    </footer>
  )
}
