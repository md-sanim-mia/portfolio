"use client";

import { Code, Code2, Database, Server, ToolCase, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// ডেটা স্ট্রাকচার (ইমেজ URL সহ)
const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code />,
    items: [
      {
        name: "JavaScript",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Front End Development",
    icon: <Code2 />,
    items: [
      {
        name: "React.js",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React-Router",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
      },
      {
        name: "Redux",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "TailwindCSS",
        iconSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      },
      {
        name: "Material UI",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "Shadcn UI",
        iconSrc: "https://avatars.githubusercontent.com/u/139895814?v=4", // Placeholder
      },
      {
        name: "Ant Design",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
      },
      {
        name: "DaisyUI",
        iconSrc:
          "https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png", // Placeholder
      },
    ],
  },
  {
    category: "Back End Development",
    icon: <Server />,
    items: [
      {
        name: "Node.js",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "JWT Authentication",
        iconSrc:
          "https://w7.pngwing.com/pngs/353/839/png-transparent-jwt-hd-logo.png",
      },
      {
        name: "Prisma ORM",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Mongoose",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
      },
    ],
  },
  {
    category: "Database Management",
    icon: <Database />,
    items: [
      {
        name: "SQL",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "DBMS",
        iconSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScF2GVq-F7oFcffiHKHwvLe_O0hxy1RRbrDQ&s",
      },
    ],
  },
  {
    category: "Tools and Platforms",
    icon: <ToolCase />,
    items: [
      {
        name: "Visual Studio Code",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "GitHub",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Figma",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Stripe Payment Gateway",
        iconSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3MUEQzGNtHBKYxi9hk66XmxbVK0Qa-SfBg&s",
      },
      {
        name: "SSL Commerz",
        iconSrc:
          "https://incevio.com/storage/images/mgV8s7QkbnodO8HTqraMo6L26URURerUw6XFysKK.png",
      },
    ],
  },
];

const SkillsTimeline: React.FC = () => {
  // কাস্টম টাইমলাইন স্টাইল
  const contentStyle = {
    background: "#f9fafb",
    color: "#1f2937",
    boxShadow: "none",
    border: "1px solid #e5e7eb",
  };
  const arrowStyle = { borderRight: "7px solid #f9fafb" };

  return (
    <div className="py-12 bg-muted/20">
      <h2 className="text-4xl font-bold text-center mb-10 text-foreground">
        My Skills
      </h2>

      <VerticalTimeline
        lineColor="#9ca3af"
        layout="1-column-left" // "single-column" এর পরিবর্তে "1-column-left" ব্যবহার করা হয়েছে
      >
        {skillsData.map((skillCategory, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={arrowStyle}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            icon={skillCategory.icon}
          >
            {/* স্কিল ক্যাটাগরির শিরোনাম */}
            <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-600">
              {skillCategory.category}
            </h3>

            {/* স্কিল আইটেমগুলো */}
            <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 text-sm">
              {skillCategory.items.map((skill: any, i) => (
                <div
                  key={i}
                  className="grid text-center items-center justify-center space-x-2 p-2 bg-gray-100 rounded-md shadow-sm text-gray-800"
                >
                  {/* আইকন ইমেজ ব্যবহার করা হয়েছে */}
                  {skill.iconSrc && (
                    <Image
                      src={skill.iconSrc}
                      alt={skill.name}
                      width={90}
                      height={90}
                      className="h-12 w-12 object-contain"
                    />
                  )}
                  <p className="font-medium mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SkillsTimeline;
