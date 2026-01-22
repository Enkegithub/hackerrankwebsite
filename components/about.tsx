export default function About() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IEEE Logo Placeholder */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="w-72 h-72 bg-gradient-to-br from-primary via-primary/70 to-primary/30 rounded-lg flex items-center justify-center shadow-xl">
              <div className="text-center text-primary-foreground">
                <div className="text-6xl font-bold mb-2">GNIT</div>
                <div className="text-sm font-semibold opacity-80">Department of Computer</div>
                <div className="text-sm font-semibold opacity-80">Science & Engineering</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-balance">
             Department Of Computer Science & Engineering
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Department of Computer Science & Engineering (CSE) at GNIT was established in 2008.
               The department offers B.Tech (180 intake) and M.Tech (18 intake) programs, supported by a team of highly qualified faculty members.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             The department is committed to delivering quality technical and research-oriented education, fostering innovation, confidence, and entrepreneurial skills among students.
              With strong industry–institute interaction, modern laboratories, and continuous academic improvement, CSE prepares students to meet global technological challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Students actively participate in national and international events, and many are successfully placed in reputed organizations.
              The department is NBA accredited.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
