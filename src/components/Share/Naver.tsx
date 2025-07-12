// We must declare this component as a Client Component to use usePathname
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // Get the current path from the URL
  const pathname = usePathname();

  // Define the navigation links and their paths
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="mb-8">
      <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
        {navLinks.map((link) => {
          // Determine if the current link is active
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              // Apply conditional Tailwind CSS classes
              className={`
                px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                ${
                  isActive
                    ? "bg-gray-900 text-white" // Active styles (Dark background, white text)
                    : "text-gray-600 hover:text-gray-900" // Inactive styles (Gray text, hover dark gray)
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
