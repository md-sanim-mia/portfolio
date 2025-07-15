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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar - Same as other pages */}
      <div className="w-64 bg-white shadow-sm p-6 flex flex-col">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Vishal Yadav"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Vishal Yadav
          </h2>
          <p className="text-sm text-gray-600 mb-2">Fullstack Developer</p>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 text-xs px-2 py-1"
          >
            ★ Available
          </Badge>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                EMAIL
              </p>
              <p className="text-sm text-gray-900">vishvy@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                PHONE
              </p>
              <p className="text-sm text-gray-900">8668279388</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                LOCATION
              </p>
              <p className="text-sm text-gray-900">Nashik, India</p>
            </div>
          </div>
        </div>

        {/* Skills Icons */}
        <div className="mt-auto mb-6">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">Task</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">Planning</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <Palette className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">Design</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <Rocket className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">Deploy</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <TestTube className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">Testing</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <Code className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600">Develop</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Github className="w-4 h-4 text-gray-600" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Linkedin className="w-4 h-4 text-gray-600" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-gray-600" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Moon className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        {/* Time */}
        <div className="text-center">
          <p className="text-sm text-gray-600 font-medium">{"07/15/2025"}</p>
        </div>
      </div>
    </div>
  );
}
