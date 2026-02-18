const items = [
  'Family Violence · Intervention Orders',
  'Family Law · Divorce & Parenting',
  'Immigration · Visa & Tribunal',
  'Conveyancing · Property Law',
  'Civil Litigation · Disputes',
  'Wills & Estate Planning',
  'Traffic Offences',
  'Consumer Law',
  'Disciplinary Matters',
]

// export function MarqueeSection() {
//   const doubled = [...items, ...items]

//   return (
//     <section className="py-5 bg-navy-950 border-y border-white/8 overflow-hidden relative">
//       {/* Fade edges */}
//       <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
//         style={{ background: 'linear-gradient(to right, #060d1a, transparent)' }} />
//       <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
//         style={{ background: 'linear-gradient(to left, #060d1a, transparent)' }} />

//       <div className="flex animate-marquee">
//         {doubled.map((item, i) => (
//           <div key={i} className="flex items-center gap-5 px-5 shrink-0">
//             <span className="font-body text-xs tracking-[0.18em] uppercase text-white/30 whitespace-nowrap">
//               {item}
//             </span>
//             <span className="w-1.5 h-1.5 rounded-full bg-gold-400/30 shrink-0" />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

export function MarqueeSection() {
  const doubled = [...items, ...items]

  return (
    <section className="py-5 bg-navy-950 border-y border-white/8 overflow-hidden relative">

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, #060d1a, transparent)' }}
      />

      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, #060d1a, transparent)' }}
      />

      {/* Viewport */}
      <div className="flex overflow-hidden">

        {/* Animated track */}
        <div className="flex animate-marquee shrink-0 w-max">

          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-5 px-5 shrink-0">

              <span className="font-body text-xs tracking-[0.18em] uppercase text-white/30 whitespace-nowrap">
                {item}
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-gold-400/30 shrink-0" />

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
