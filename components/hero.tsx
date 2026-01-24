export default function Hero() {
  return (
    <section className="relative min-h-screen bg-secondary text-secondary-foreground flex items-center justify-center overflow-hidden py-20">

      {/* CRASHING STARS – LEFT */}
      {[...Array(15)].map((_, i) => (
        <span
          key={`left-${i}`}
          style={{
            position: "absolute",
            top: `${Math.random() * 40}%`,
            left: "-10px",
            width: "2px",
            height: "2px",
            background: "white",
            opacity: 0.8,
            animation: `crashLeft ${3 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* CRASHING STARS – RIGHT */}
      {[...Array(15)].map((_, i) => (
        <span
          key={`right-${i}`}
          style={{
            position: "absolute",
            top: `${Math.random() * 40}%`,
            right: "-10px",
            width: "2px",
            height: "2px",
            background: "white",
            opacity: 0.8,
            animation: `crashRight ${3 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

        {/* HEADING */}
        <div className="mb-10">
          <h1 className="font-bold leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl">
              HACKER RANK
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-1 opacity-80">
              PRESENTS
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 text-primary">
              “META STORM”
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-light opacity-80">
            {"{"}Advancing the Technologies{"}"}
          </p>
        </div>

        {/* ORBIT SYSTEM */}
        <div
          style={{
            position: "relative",
            width: "360px",
            height: "360px",
            margin: "0 auto",
            color: "white",
          }}
        >
          {/* ORBIT 1 */}
          <div style={{ position: "absolute", inset: 0, border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", inset: 0, animation: "orbit1 14s linear infinite" }}>
            <div style={{ position: "absolute", top: "-6px", left: "50%", width: "10px", height: "10px", background: "white", borderRadius: "50%", transform: "translateX(-50%)" }} />
          </div>

          {/* ORBIT 2 */}
          <div style={{ position: "absolute", inset: 30, border: "1px dashed rgba(255,255,255,0.25)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", inset: 30, animation: "orbit2 22s linear infinite reverse" }}>
            <div style={{ position: "absolute", top: "-6px", left: "50%", width: "8px", height: "8px", background: "white", borderRadius: "50%", transform: "translateX(-50%)" }} />
          </div>

          {/* ORBIT 3 */}
          <div style={{ position: "absolute", inset: 60, border: "1px dashed rgba(255,255,255,0.3)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", inset: 60, animation: "orbit3 30s linear infinite" }}>
            <div style={{ position: "absolute", top: "-5px", left: "50%", width: "6px", height: "6px", background: "white", borderRadius: "50%", transform: "translateX(-50%)" }} />
          </div>

          {/* ROTATING TEXT */}
          <div style={{ position: "absolute", inset: 40, animation: "spinText 26s linear infinite" }}>
            <svg viewBox="0 0 200 200" width="100%" height="100%">
              <defs>
                <path
                  id="textCircle"
                  d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <text fill="white" fontSize="13" letterSpacing="4">
                <textPath href="#textCircle">
                  • HACKER RANK • META STORM • AI • INNOVATION •
                </textPath>
              </text>
            </svg>
          </div>

          {/* CENTER */}
          <div
            style={{
              position: "absolute",
              inset: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            META
            <br />
            STORM
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes orbit1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit2 {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes orbit3 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinText {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes crashLeft {
          from { transform: translate(0, 0); opacity: 1; }
          to { transform: translate(60vw, 40vh); opacity: 0; }
        }

        @keyframes crashRight {
          from { transform: translate(0, 0); opacity: 1; }
          to { transform: translate(-60vw, 40vh); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
