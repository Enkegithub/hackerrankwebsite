export default function Events() {
  const events = [
    { id: 1, title: 'Knowledge Knockout Quiz', date: '2026' },
    { id: 2, title: 'Tech Treasure Hunt', date: '2026' },
    { id: 3, title: 'Pitchbattle', date: '2026' },
    { id: 4, title: 'PLAY FORGE', date: '2026' },
  ]

  return (
    <section id="events" className="py-20 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Our Events - 2026-27</h2>
          <p className="text-lg text-muted-foreground">Join us for exciting workshops and competitions</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>

          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Event Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-base text-muted-foreground mb-4">Date: {event.date}</p>
                    <p className="text-base text-muted-foreground">Event description goes here with more details about what this event entails and the activities involved.</p>
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
          <h3 className="text-4xl font-bold mb-4">HACKER RANK META STORM</h3>
          <p className="text-lg mb-8 leading-relaxed">
            Built for coders, thinkers & creators
          </p>
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfPmKgYZRLOl19dOsR3AZUQvZPNNOLsjgIHrH9JpJZK_c88fw/closedform"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
    REGISTER NOW
  </button>
</a>

        </div>
      </div>
    </section>
  )
}
