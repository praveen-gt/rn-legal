'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { practiceAreas } from '@/lib/data/practice-areas'

export default function FeaturedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const featuredAreas = practiceAreas.slice(0, 6)

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
      },
    }),
    hover: {
      y: -10,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[var(--foreground)] text-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Our Practice Areas
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive legal services across multiple practice areas to serve our clients' diverse needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover="hover"
              custom={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white rounded-lg overflow-hidden shadow-card transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={area.imageSrc}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif text-primary mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.shortDescription}</p>
                <Link 
                  href={`/practice-areas/${area.slug}`} 
                  className="text-accent font-medium hover:underline flex items-center"
                >
                  Learn More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{ 
                      transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)' 
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {/* <Link 
            href="/practice-areas" 
            className="inline-block bg-primary hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            View All Practice Areas
          </Link> */}
          <Link
         href="/practice-areas"
         className="bg-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-600)] text-[var(--color-primary-DEFAULT)] font-bold py-3 px-6 rounded-md text-center transition-all duration-300"
       >
         View All Practice Areas
       </Link>
        </div>
      </div>
    </section>

//     <section className="py-16 sm:py-20 md:py-24 bg-[var(--background)] text-[var(--foreground)]">
//   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary-500)] mb-4">
//         Our Practice Areas
//       </h2>
//       <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//         We offer comprehensive legal services across multiple practice areas to serve our clients' diverse needs.
//       </p>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {featuredAreas.map((area, index) => (
//         <motion.div
//           key={area.id}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           whileHover="hover"
//           custom={index}
//           variants={cardVariants}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//           className="bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-300"
//         >
//           <div className="relative h-48">
//             <Image
//               src={area.imageSrc}
//               alt={area.title}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 33vw"
//             />
//           </div>
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">{area.title}</h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-4">{area.shortDescription}</p>
//             <Link
//               href={`/practice-areas/${area.slug}`}
//               className="text-[var(--color-accent-DEFAULT)] font-medium hover:underline flex items-center"
//             >
//               Learn More
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 ml-1 transition-transform duration-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 style={{
//                   transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
//                 }}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>
//         </motion.div>
//       ))}
//     </div>

//     <div className="text-center mt-12">
//       <Link
//         href="/practice-areas"
//         className="inline-block bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
//       >
//         View All Practice Areas
//       </Link>
//     </div>
//   </div>
// </section>

  )
}

// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { practiceAreas } from '@/lib/data/practice-areas'

// export default function FeaturedServices() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   const featuredAreas = practiceAreas.slice(0, 6)

// const cardVariants = {
//   initial: { opacity: 0, y: 30, scale: 0.95 },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: 0.05 * index,
//       duration: 0.2,
//       ease: 'easeInOut',
//     },
//   }),
//   hover: {
//     scale: 1.02,
//     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
//     transition: {
//       duration: 0.05, // Faster, snappier
//       ease: 'easeInOut',
//     },
//   },
// }


//   return (
//     <section className="py-16 sm:py-20 md:py-24 bg-[var(--background)] text-[var(--foreground)]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary-500)] mb-4">
//             Our Practice Areas
//           </h2>
//           <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//             We offer comprehensive legal services across multiple practice areas to serve our clients' diverse needs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuredAreas.map((area, index) => (
//             <motion.div
//               key={area.id}
//               initial="initial"
//               whileInView="animate"
//               whileHover="hover"
//               viewport={{ once: true, amount: 0.3 }}
//               custom={index}
//               variants={cardVariants}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-300 transform-gpu will-change-transform"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={area.imageSrc}
//                   alt={area.title}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-[var(--color-primary-600)] mb-2">{area.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">{area.shortDescription}</p>
//                 <Link
//                   href={`/practice-areas/${area.slug}`}
//                   className="text-[var(--color-accent-DEFAULT)] font-medium hover:underline flex items-center"
//                 >
//                   Learn More
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 ml-1 transition-transform duration-300"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     style={{
//                       transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
//                     }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="text-center mt-14">
//           <Link
//             href="/practice-areas"
//             className="inline-block bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
//           >
//             View All Practice Areas
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
