"use client"; // Next.js ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করার জন্য

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Eye, GraduationCap, NotebookText } from "lucide-react";
import { motion, Variants, Transition } from "framer-motion"; // Framer Motion ইম্পোর্ট করা হয়েছে
import SkillsTimeline from "@/components/Skills/Skills";

// ডেটার জন্য TypeScript ইন্টারফেস
interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  points: string[];
}
interface educationData {
  degree: string;
  result: string;
  group: string;
  year_of_passing: string;
  institution: string;
  board: string;
}
const education: educationData[] = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    result: "3.00 (Out of 5.00)",
    group: "Humanity",
    year_of_passing: "2024",
    institution: "Rashtrapati abdul hamid government college",
    board: "Dhaka",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    result: "3.50 (Out of 5.00)",
    group: "Humanity",
    year_of_passing: "2021",
    institution: "Shimla Barshikara High School",
    board: "Dhaka",
  },
];

// অভিজ্ঞতার ডেটা
const experienceData: ExperienceData[] = [
  {
    title: "Even Tora - Event Planner & Participation System",
    company: "(Team Project)",
    duration: "Live Client | Server",
    points: [
      "A web platform for creating, managing, and joining public or private events with secure participation features.",
      "User Registration & JWT Authentication",
      "Invitations: Invite users to events (Pay & Accept for paid).",
      "Participant Management : Approve or reject join requests, Ban users from events.",
      "Participation & Requests: Join Free Public Events, Join Paid Public Events, join Free/ Paid Private Events.",
      "Technology Stack: Next.js, Shaden, TailwindCSS, node.js, Express.js, TypeScript, PostgreSQL, Prisma ORM, JWT, SSLCommerz",
    ],
  },
  {
    title: "RevoCycle - Bicycle E-commerce Platform",
    company: "(Self Project)",
    duration: "Live Client | Server",
    points: [
      "A bicycle e-commerce platform enabling smooth Browse, management, and secure purchases for both users and admins.",
      "Secure Purchase: Safe and convenient payment methods ensuring user confidence.",
      "Product Management: Easily add, update, and delete products.",
      "User-friendly Browse: Easy and fast Browse with filters by bike type, brand, and price.",
      "Admin Dashboard: Powerful admin panel for managing products, orders, and customers efficiently.",
      "Technology Stack: React, Shaden, TailwindCSS, node.js, Express.js, TypeScript, Mongodb, Mongoose, JWT, Stripe Payment",
    ],
  },
  {
    title: "HCSF - Micro-Frontend Architecture Platform",
    company: "(Team Project)",
    duration: "Live Client | Server",
    points: [
      "A micro-frontend platform providing blood donation, library, and tuition services with secure access and admin control.",
      "Blood Management: Users can request blood donations and others can respond by offering blood donations.",
      "Library Section: Students can share, access, and download books and study materials.",
      "Tuition Section:: Students can find tutors and send tuition requests to get help easily.",
      "Admin Dashboard: Powerful admin panel for managing products, orders, and customers efficiently.",
      "Technology Stack: React, Shaden, TailwindCSS, node.js, Express.js, TypeScript, Mongodb, Mongoose, JWT",
    ],
  },
];
// Framer Motion অ্যানিমেশন ভ্যারিয়েন্ট: পয়েন্টের জন্য খুব দ্রুত জুম ইন/আউট
const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.15, 1], // 1x থেকে 1.15x জুম ইন এবং আবার 1x এ ফিরে আসা
    transition: {
      duration: 0.4, // খুব দ্রুত অ্যানিমেশন (0.4 সেকেন্ড)
      ease: "easeInOut",
      repeat: Infinity, // ক্রমাগত চলতে থাকবে
    } as Transition, // TypeScript ত্রুটি এড়াতে টাইপ কাস্ট
  },
};

// Framer Motion অ্যানিমেশন ভ্যারিয়েন্ট: প্রতিটি এন্ট্রির জন্য স্ক্রল-ইন ইফেক্ট
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // প্রাথমিকভাবে অদৃশ্য এবং সামান্য নিচে
  visible: {
    opacity: 1,
    y: 0, // তার আসল অবস্থানে স্লাইড করে আসবে
    transition: {
      duration: 0.8, // অ্যানিমেশনের সময়
      ease: "easeOut",
    },
  },
};
const courses = [
  {
    course_title: "Next Level Web Development Course",
    duration: "Oct 2024 - May 2025",
    credential_id: "phl2b4fullstackweb9-25671090",
    certification_link: "Certificate Link",
  },
  {
    course_title: "Complete Web Development Course",
    duration: "Dec 2023 - June 2024",
    credential_id: "phl2b4fullstackweb9-25671090",
    certification_link: "Certificate Link",
  },
];
export default function ResumePage() {
  return (
    <div className="px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-muted/20 ">
        <main className="flex-grow">
          <Card className="shadow-none border-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Resume{" "}
              <span className="text-sm font-normal text-gray-500">
                (9486 views)
              </span>
            </h1>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center text-foreground mb-6">
                  <Briefcase className="h-6 w-6 mr-2 text-primary" />
                  Experience
                </h3>

                {experienceData.map((entry, index) => {
                  const itemRef = useRef<HTMLDivElement>(null);
                  const [isVisible, setIsVisible] = useState(false);

                  // Intersection Observer ব্যবহার করে স্ক্রল-ইন অ্যানিমেশন ট্রিগার করা
                  useEffect(() => {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          setIsVisible(true);
                          observer.unobserve(entry.target); // একবার অ্যানিমেট হলে পর্যবেক্ষণ বন্ধ করুন
                        }
                      },
                      {
                        root: null, // ভিউপোর্টকে রুট হিসেবে ব্যবহার করা হবে
                        rootMargin: "0px", // কোনো মার্জিন ছাড়া
                        threshold: 0.1, // এলিমেন্টের 10% দৃশ্যমান হলে ট্রিগার হবে
                      }
                    );

                    if (itemRef.current) {
                      observer.observe(itemRef.current);
                    }

                    return () => {
                      if (itemRef.current) {
                        observer.unobserve(itemRef.current);
                      }
                    };
                  }, []);

                  return (
                    <motion.div
                      key={index}
                      ref={itemRef} // প্রতিটি এন্ট্রির জন্য রেফারেন্স
                      className="group relative pl-16" // ***পরিবর্তন: pl-16 (64px) - কার্ড এবং লাইনের মধ্যে গ্যাপ বাড়ানো হয়েছে***
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"} // স্ক্রল করে এলে অ্যানিমেট হবে
                      variants={itemVariants}
                    >
                      {/* টাইমলাইন লাইন সেগমেন্ট (প্রতিটি এন্ট্রির জন্য) */}
                      {/* vshall.me এর মতো: লাইনটি এন্ট্রির বাম পাশে থাকবে এবং হোভার করলে নীল হবে */}
                      <div
                        className="absolute left-[32px] top-1 h-full w-[2px]
                                 bg-gray-400 transition-colors duration-300 ease-in-out
                                 group-hover:bg-blue-500" // হোভার করলে নীল হবে
                      />

                      {/* টাইমলাইন ডট - লাইনের ঠিক মাঝখানে বসবে এবং সক্রিয় হলে নীল হবে */}
                      <motion.span
                        className="absolute left-[23px] top-[6px] h-4 w-4 rounded-full border-2 border-background z-10
                                 transition-colors duration-300 ease-in-out" // ***পরিবর্তন: h-5 w-5 (20px) - পয়েন্ট ছোট করা হয়েছে***
                        // পয়েন্টের রঙ: যদি isVisible হয় তবে নীল, অন্যথায় ধূসর
                        style={{
                          backgroundColor: isVisible
                            ? "rgb(59, 130, 246)"
                            : "rgb(156, 163, 175)",
                        }} // Tailwind bg-blue-500 (নীল) বা bg-gray-400 (ধূসর) এর RGB মান
                        // ক্রমাগত জুম ইন/আউট অ্যানিমেশন
                        variants={pulseVariants}
                        animate="pulse"
                      />

                      {/* প্রতিটি অভিজ্ঞতা এন্ট্রির বিষয়বস্তু */}
                      <h4 className="font-semibold text-lg text-foreground">
                        {entry.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {entry.company} ({entry.duration})
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
                        {entry.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                      {/* সেপারেটর - শুধুমাত্র এন্ট্রিগুলোর মাঝখানে, শেষ এন্ট্রির পরে নয় */}
                      {index < experienceData.length - 1 && (
                        <Separator className="bg-muted-foreground/10 mt-6" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      <SkillsTimeline />
      <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-muted/20 ">
        <main className="flex-grow">
          <Card className="shadow-none border-none">
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center text-foreground mb-6">
                  <GraduationCap className="h-6 w-6 mr-2 text-primary" />{" "}
                  {/* আইকন পরিবর্তন করা হয়েছে */}
                  Educational Qualification {/* টাইটেল পরিবর্তন করা হয়েছে */}
                </h3>

                {education.map((entry: any, index: number) => {
                  const itemRef = useRef<HTMLDivElement>(null);
                  const [isVisible, setIsVisible] = useState(false);

                  // Intersection Observer ব্যবহার করে স্ক্রল-ইন অ্যানিমেশন ট্রিগার করা
                  useEffect(() => {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          setIsVisible(true);
                          observer.unobserve(entry.target);
                        }
                      },
                      {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0.1,
                      }
                    );

                    if (itemRef.current) {
                      observer.observe(itemRef.current);
                    }

                    return () => {
                      if (itemRef.current) {
                        observer.unobserve(itemRef.current);
                      }
                    };
                  }, []);

                  return (
                    <motion.div
                      key={index}
                      ref={itemRef}
                      className="group relative pl-16"
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={itemVariants}
                    >
                      {/* টাইমলাইন লাইন সেগমেন্ট */}
                      <div
                        className="absolute left-[32px] top-1 h-full w-[2px]
                                 bg-gray-400 transition-colors duration-300 ease-in-out
                                 group-hover:bg-blue-500"
                      />

                      {/* টাইমলাইন ডট */}
                      <motion.span
                        className="absolute left-[23px] top-[6px] h-4 w-4 rounded-full border-2 border-background z-10
                                 transition-colors duration-300 ease-in-out"
                        style={{
                          backgroundColor: isVisible
                            ? "rgb(59, 130, 246)"
                            : "rgb(156, 163, 175)",
                        }}
                        variants={pulseVariants}
                        animate="pulse"
                      />

                      {/* প্রতিটি শিক্ষাগত এন্ট্রির বিষয়বস্তু */}
                      <h4 className="font-semibold text-lg text-foreground">
                        {entry.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {entry.institution} ({entry.year_of_passing})
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
                        <li>**Result:** {entry.result}</li>
                        <li>**Group:** {entry.group}</li>
                        <li>**Board:** {entry.board}</li>
                      </ul>

                      {/* সেপারেটর - শুধুমাত্র এন্ট্রিগুলোর মাঝখানে */}
                      {index < education.length - 1 && (
                        <Separator className="bg-muted-foreground/10 mt-6" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-muted/20 ">
        <main className="flex-grow">
          <Card className="shadow-none border-none">
            <CardContent className="space-y-8">
              <div className="space-y-6">
                {/* কোর্স এবং সার্টিফিকেশন সেকশনের শিরোনাম */}
                <h3 className="text-2xl font-semibold flex items-center text-foreground mb-6">
                  <NotebookText className="h-6 w-6 mr-2 text-primary" />
                  Certifications and Courses
                </h3>

                {/* কোর্স ডেটা ম্যাপিং */}
                {courses.map((entry: any, index: number) => {
                  const itemRef = useRef<HTMLDivElement>(null);
                  const [isVisible, setIsVisible] = useState(false);

                  // Intersection Observer ব্যবহার করে স্ক্রল-ইন অ্যানিমেশন ট্রিগার করা
                  useEffect(() => {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          setIsVisible(true);
                          observer.unobserve(entry.target);
                        }
                      },
                      {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0.1,
                      }
                    );

                    if (itemRef.current) {
                      observer.observe(itemRef.current);
                    }

                    return () => {
                      if (itemRef.current) {
                        observer.unobserve(itemRef.current);
                      }
                    };
                  }, []);

                  return (
                    <motion.div
                      key={index}
                      ref={itemRef}
                      className="group relative pl-16"
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={itemVariants}
                    >
                      {/* টাইমলাইন লাইন সেগমেন্ট */}
                      <div
                        className="absolute left-[32px] top-1 h-full w-[2px]
                      bg-gray-400 transition-colors duration-300 ease-in-out
                      group-hover:bg-blue-500"
                      />

                      {/* টাইমলাইন ডট */}
                      <motion.span
                        className="absolute left-[23px] top-[6px] h-4 w-4 rounded-full border-2 border-background z-10
                      transition-colors duration-300 ease-in-out"
                        style={{
                          backgroundColor: isVisible
                            ? "rgb(59, 130, 246)"
                            : "rgb(156, 163, 175)",
                        }}
                        variants={pulseVariants}
                        animate="pulse"
                      />

                      {/* কোর্সের বিষয়বস্তু */}
                      <h4 className="font-semibold text-lg text-foreground">
                        {entry.course_title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Duration: {entry.duration}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Credential ID: {entry.credential_id}
                      </p>
                      {entry.certification_link && (
                        <a
                          href={entry.certification_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          View Certificate
                        </a>
                      )}

                      {/* সেপারেটর - শুধুমাত্র এন্ট্রিগুলোর মাঝখানে */}
                      {index < courses.length - 1 && (
                        <Separator className="bg-muted-foreground/10 mt-6" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
