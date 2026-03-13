import { Description } from "@radix-ui/react-toast"
import { title } from "process"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      date: "17-09-2026",
      description:
        "",

    },

    {
      id: 2,
      title: "UI/UX Design",
      date:"03-11-2026",
      Description:"content.............."
    },
      {
      id: 3,
      title: "Videography&photography",
      date:"17-11-2026",
      Description:"content.............."
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
      HACKER RANK – CreateX 2026
    </h3>

    <p className="text-lg mb-8 leading-relaxed">
      Built for coders, thinkers & creators
    </p>

    <a
      href="https://forms.gle/DE1pjp7mCxhgar3T7"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
         Register Here
      </button>
    </a>
  </div>
</div>
      </div>
    </section>
  )
}
