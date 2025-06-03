"use client";

import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
// import { Testimonial } from "@/types/Testimonial";
import ScrollReveal from "../ui/animations/ScrollReveal";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

// const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
//   return (
//     <motion.div
//       key={testimonial.id}
//       className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <div className="flex flex-1 flex-col">
//         <div className="flex items-center mb-6">
//           <div className="mr-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 text-primary"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
//             </svg>
//           </div>
//           <div>
//             <p className="text-gray-600 italic text-lg mb-3">{testimonial.text}</p>
//           </div>
//         </div>
//         <div className="mt-auto pt-4 border-t border-gray-100">
//           <p className="font-semibold text-gray-800">{testimonial.name}</p>
//           <p className="text-gray-500 text-sm">{testimonial.company}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const Testimonials = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const testimonialsPerPage = 3;
  // const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  
  // const currentTestimonials = testimonials.slice(
  //   currentPage * testimonialsPerPage,
  //   (currentPage + 1) * testimonialsPerPage
  // );

  return (
    <ScrollReveal>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from some of our satisfied clients
              about their experiences working with Vidhi Mantra Legal Consultants.
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <AnimatePresence mode="wait">
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                  index={index} 
                />
              ))}
            </AnimatePresence>
          </div>
          
          {pageCount > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? "bg-primary w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )} */}

           <InfiniteMovingCards items={testimonials} speed="slow" />
          
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block bg-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-600)] text-[var(--color-primary-DEFAULT)] font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Discuss Your Case
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Testimonials;