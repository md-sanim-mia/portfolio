"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  Palette,
  Rocket,
  TestTube,
  Code,
  Github,
  Linkedin,
  MessageSquare,
  Moon,
  ExternalLink,
} from "lucide-react";

export default function ProjectComponent() {
  const projects = [
    {
      id: 1,
      title: "Manage Easy",
      description: "Your Personal Productivity Suite",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["React.js", "MongoDB", "Tailwind CSS", "Firebase"],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Trackcel",
      description: "Transform Your Data Insights",
      image: "/placeholder.svg?height=200&width=350",
      technologies: [
        "Next.js",
        "Postgres",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
      ],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Vyrn Toast",
      description: "Toast Notification Library",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["Npm", "React.js", "Next.js", "TypeScript"],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Free Tool",
      description: "Collection of Free Development Tools",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Oxy UI",
      description: "Crafting Beautiful UI Components",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Npm"],
      category: "Web design",
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Snippet Vault",
      description: "Secure Your Code Snippets In Your Personal Vault",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk"],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 7,
      title: "CodeSnapx",
      description: "Beautiful Code Screenshots",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 8,
      title: "Blog App",
      description: "Modern Blogging Platform",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      category: "Web development",
      github: "#",
      live: "#",
    },
    {
      id: 9,
      title: "Currency Converter",
      description: "Real-time Currency Exchange Rates",
      image: "/placeholder.svg?height=200&width=350",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
      category: "Web development",
      github: "#",
      live: "#",
    },
  ];

  const getTechBadgeColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React.js": "bg-blue-100 text-blue-800",
      "Next.js": "bg-gray-100 text-gray-800",
      TypeScript: "bg-blue-100 text-blue-800",
      JavaScript: "bg-yellow-100 text-yellow-800",
      "Tailwind CSS": "bg-cyan-100 text-cyan-800",
      MongoDB: "bg-green-100 text-green-800",
      Firebase: "bg-orange-100 text-orange-800",
      Postgres: "bg-blue-100 text-blue-800",
      Prisma: "bg-gray-100 text-gray-800",
      Npm: "bg-red-100 text-red-800",
      Clerk: "bg-purple-100 text-purple-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Left Sidebar - Same as other pages */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Projects{" "}
        <span className="text-sm font-normal text-gray-500">(9486 views)</span>
      </h1>
      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video rounded-t-xl overflow-hidden bg-gray-100">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={350}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className={`text-xs px-2 py-1 ${getTechBadgeColor(tech)}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
