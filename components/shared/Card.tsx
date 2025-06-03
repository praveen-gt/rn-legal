import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../ui/animations/FadeIn";

type CardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "simple" | "featured" | "bordered";
  icon?: React.ReactNode;
  delay?: number;
};

const Card = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
  link,
  linkText = "Learn More",
  className = "",
  children,
  variant = "simple",
  icon,
  delay = 0,
}: CardProps) => {
  // Card variants
  const variantStyles = {
    simple: "bg-white shadow-md hover:shadow-lg",
    featured: "bg-white shadow-lg hover:shadow-xl border-t-4 border-primary",
    bordered: "bg-white border border-gray-200 hover:border-primary",
  };

  const cardContent = (
    <div className={`rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${variantStyles[variant]} ${className}`}>
      {/* Card image if provided */}
      {imageSrc && (
        <div className="relative h-48 md:h-60 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Icon if provided */}
        {icon && <div className="mb-4 text-primary">{icon}</div>}

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>

        {/* Description if provided */}
        {description && <p className="text-gray-600 mb-4">{description}</p>}

        {/* Children content if provided */}
        {children && <div className="mb-4">{children}</div>}

        {/* Link if provided */}
        {link && (
          <div className="mt-auto pt-4">
            <Link 
              href={link}
              className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors duration-300"
            >
              {linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <FadeIn delay={delay}>
      {cardContent}
    </FadeIn>
  );
};

export default Card;