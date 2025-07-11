"use client"; // Next.js ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করার জন্য

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Eye } from "lucide-react";
import { motion, Variants, Transition } from "framer-motion"; // Framer Motion ইম্পোর্ট করা হয়েছে

// ডেটার জন্য TypeScript ইন্টারফেস
interface ExperienceData {
  title: string;
  company: string;
  duration: string;
  points: string[];
}

// অভিজ্ঞতার ডেটা
const experienceData: ExperienceData[] = [
  {
    title: "Frontend Developer",
    company: "Bharat Tech",
    duration: "Oct 2023 - Present) (Remote",
    points: [
      "Played a key role in designing and developing an HRMS web application, ensuring seamless functionality and an exceptional user experience.",
      "Led the development of 'Recag' from scratch, contributing to the landing page, dashboard, and all sections.",
      "Collaborated with the team to create a robust and user-friendly interface, ensuring a smooth user experience.",
    ],
  },
  {
    title: "Application Engineer",
    company: "Avon Building Solution Pvt Ltd",
    duration: "Jul 2023 — Sep 2023) (Pune",
    points: [
      "Spearheaded networking initiatives and engineered and maintained access control systems, facilitating seamless integration of smart building technologies using TCP/IP and VLANs.",
      "Conducted 4+ on-site device networking and troubleshooting sessions, resolving technical issues and optimizing system commissioning to ensure uninterrupted operations for network devices.",
    ],
  },
  {
    title: "C2TC Training Program",
    company: "Capgemini",
    duration: "Jun 2023 - Jul 2023) (Pune",
    points: [
      "Gained hands-on experience in Java, Spring Boot, Microservices, React, and MySQL database management.",
      "Developed a solid understanding of software development lifecycle and agile methodologies.",
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

export default function ResumePage() {
  return (
    <div className="px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-muted/20 min-h-screen">
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
      <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-muted/20 min-h-screen">
        <main className="flex-grow">
          <Card className="shadow-none border-none">
            <CardContent className="space-y-8">
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
    </div>
  );
}
