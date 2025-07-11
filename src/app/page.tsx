import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
export default function Home() {
  return (
    <div className="p-6">
      {/* About Section */}
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          About Me{" "}
          <span className="text-sm font-normal text-gray-500">
            (9486 views)
          </span>
        </h1>
        <p className="text-gray-700 leading-relaxed  mb-8">
          Hello, I am <strong>Md Sanim Mia</strong>, a passionate{" "}
          <strong>Full Stack Developer</strong> from Dhaka, Bangladesh,
          dedicated to building scalable web applications and solving real-world
          problems. I leverage a strong command of <strong>Next.js</strong> ,
          <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express.js</strong>, <strong>MongoDB</strong>,{" "}
          <strong>PostgreSQL</strong>, and Prisma. My experience includes
          developing an event planning system, an e-commerce platform, and a
          micro-frontend platform for various services. I've further honed my
          skills through comprehensive{" "}
          <strong>Next Level Web Development</strong> and{" "}
          <strong>Complete Web Development</strong> courses.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardContent className="p-6">
              <Image
                src={"https://www.vshall.me/images/exp1.svg"}
                height={55}
                width={55}
                alt="developer"
              />
              <h3 className="font-semibold text-gray-900 my-2 ">
                Full-Stack Development
              </h3>
              <p className="text-sm text-gray-600">
                Developed end-to-end solutions using React, Node.js, and
                MongoDB.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardContent className="p-6">
              <Image
                src={"https://www.vshall.me/images/exp2.svg"}
                height={55}
                width={55}
                alt="developer"
              />
              <h3 className="font-semibold text-gray-900 my-2">
                Developer Community
              </h3>
              <p className="text-sm text-gray-600">
                I run a developer community platform on daily.dev with over 2
                thousand active members.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardContent className="p-6">
              <Image
                src={"https://www.vshall.me/images/exp3.svg"}
                height={55}
                width={55}
                alt="developer"
              />
              <h3 className="font-semibold text-gray-900 my-2">Freelancer</h3>
              <p className="text-sm text-gray-600">
                Designed intuitive user interfaces and built web solutions for
                various clients.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
            <CardContent className="p-6">
              <Image
                src={"https://www.vshall.me/images/exp4.svg"}
                height={55}
                width={55}
                alt="developer"
              />
              <h3 className="font-semibold text-gray-900 my-2">
                Technical Blogging
              </h3>
              <p className="text-sm text-gray-600">
                I also write technical blogs with over 120k views.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* GitHub Contributions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            GitHub Contributions
          </h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <GitHubCalendar username="md-sanim-mia" />
        </div>
      </div>
    </div>
  );
}
