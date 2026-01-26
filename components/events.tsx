export default function Events() {
  const events = [
    {
      id: 1,
      title: "Knowledge Knockout Quiz",
      date: "02-09-2026",
      description:
        "Knowledge Knockout is a technical quiz event designed to test participants’ knowledge, speed, and coding skills. The event consists of three progressive rounds, starting from basic rapid-fire questions, moving to an interactive buzzer round, and concluding with a challenging coding round. It encourages teamwork, logical thinking, and problem-solving skills among students",

    },
    {
      id: 2,
      title: "Tech Treasure Hunt",
      date: "02-10-2026",
      description:
        "The Lost Legacy is an interactive technical event designed to test participants’ logical thinking, problem-solving skills, and teamwork. The event requires the teams to follow clues across the campus and collect code fragments. At each location, a QR code provides part of a program, while a physical clue leads to the next location. After gathering all code parts, teams compile and execute the program to complete the hunt. The event encourages analytical thinking, collaboration, and quick decision-making in a fun and competitive environmen",
    },
    {
      id: 3,
      title: "Pitch Battle",
      date: "02-09-2026",
      description:
        "Pitch Battle  is an innovation-driven competition where participants present their unique ideas to solve real-world problems. Teams or individuals brainstorm, design, and pitch their concepts within a limited time to a panel of judges. The event encourages creativity, critical thinking, and entrepreneurial skills, providing a platform to transform ideas into impactful solutions through persuasive pitching. ",

    },
    {
      id: 4,
      title: "PLAY FORGE (E-Sports)",
      date: "02-09 & 10-2026",
      description:
        "Esports (short for electronic sports) is competitive video gaming, where players or teams compete against each other in organized tournaments, leagues, or matches—often for prize money, rankings, and titles.",

    },
  ]

  return (
    <section id="events" className="py-20 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Our Events – 2026-27</h2>
          <p className="text-lg text-muted-foreground">
            Join us for exciting competitions, innovation & skill-building events
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Event Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-4">
                      Date: {event.date}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-0 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Event */}
<div className="mt-20 bg-secondary text-secondary-foreground p-12 rounded-lg shadow-xl">
  <div className="max-w-6xl ml-auto text-left">
    <h3 className="text-4xl font-bold mb-4">
      HACKER RANK – META STORM
    </h3>

    <p className="text-lg mb-8 leading-relaxed">
      Built for coders, thinkers & creators
    </p>

    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfPmKgYZRLOl19dOsR3AZUQvZPNNOLsjgIHrH9JpJZK_c88fw/closedform"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
        REGISTER NOW
      </button>
    </a>
  </div>
</div>
      </div>
    </section>
  )
}
