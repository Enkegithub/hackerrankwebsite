export default function StudentBranch() {
  return (
    
    <section id="student-branch" className="py-20 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">GNIT HACKER RANK CLUB</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Student Branch Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Logo */}
          <div className="flex justify-center md:order-1">
            <div className="w-48 h-48 bg-secondary rounded-lg flex items-center justify-center">
              <img src="/logo2.png"alt="Hacker Rank Logo"className="w-32 h-32 object-contain"/>
            </div>
          </div>

          {/* Content */}
          <div className="md:order-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Hacker Rank Club is a student-driven technical community dedicated to nurturing a strong culture of coding, problem-solving, and competitive programming among students.
               The club serves as a collaborative platform where learners can enhance their programming skills through hands-on practice, real-world problem solving, and continuous learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              The club regularly organizes coding contests, workshops, hackathons, technical quizzes, code-debugging sessions, and peer learning activities to help students strengthen their logical thinking and analytical abilities.
               These activities are designed to bridge the gap between academic knowledge and industry expectations, enabling students to gain practical exposure to modern tools and technologies.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
