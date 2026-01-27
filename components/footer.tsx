import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"


export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-bold mb-3">HACKER RANK CLUB</h3>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              A student-driven technical community fostering coding culture,
              innovation, and industry-ready skills at GNIT.
            </p>
<div className="flex gap-4">
  <a
    href="https://www.instagram.com/hackerrank.cse"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-secondary hover:scale-110 transition"
    aria-label="Instagram"
  >
    <Instagram size={20} />
  </a>

  <a
    href="https://www.linkedin.com/company/hackerrank-club-cse-gnit/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-secondary hover:scale-110 transition"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>
</div>

          </div>

          {/* Coordinators */}
          <div>
            {/* <h3 className="text-xl font-bold mb-6">Coordinators</h3> */}

            <div className="space-y-5 text-sm">
              <div>
                <p className="font-semibold uppercase tracking-wide">
                  Coordinator
                </p>
                <p className="mt-1 font-semibold">Dr. B. Santhosh Kumar</p>
                <p className="opacity-80">HOD, CSE – GNIT</p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-wide">
                  Faculty Coordinators
                </p>
                <p>
                  <span className="font-semibold">Mrs. B. Ranjitha</span>
                  <span className="opacity-80"> · Asst. Professor, CSE</span>
                </p>
                <p>
                  <span className="font-semibold">Mr. K. Vigneshwar</span>
                  <span className="opacity-80"> · Asst. Professor, CSE</span>
                </p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-wide">
                  Student Coordinators
                </p>
                <p className="mt-1">
                  <span className="font-semibold">Newton Adhikari</span>
                  <span className="opacity-80"> · +91 93983 50151</span>
                </p>
                <p>
                  <span className="font-semibold">Kishore Voodi</span>
                  <span className="opacity-80"> · +91 82470 51922</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} />
                <div className="opacity-90">
                  <p className="font-semibold">
                    Guru Nanak Institute of Technology
                  </p>
                  <p>Department of Computer Science & Engineering</p>
                  <p>Ibrahimpatnam, Hyderabad – 501506</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} />
                <p>+91 6356355608</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} />
                <p>hackerrank.csegnit@gniindia.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/30 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>© 2026 Hacker Rank Club – GNIT. All rights reserved.</p>
          <p>
            Designed & Developed by – {" "}
            <span className="font-semibold">Nitesh Kushwaha</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
