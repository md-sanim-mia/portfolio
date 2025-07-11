import {
  Calendar,
  Code,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Palette,
  Phone,
  Rocket,
  TestTube,
  User,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import sanim from "..//..//app/sanim.jpg";
const Sidever = () => {
  return (
    <div className="  ">
      <div className="fixed top-3 bottom-3 z-50 border-gray-300 border  w-full lg:w-[341px] bg-white shadow-lg px-7 py-5 rounded-lg flex flex-col">
        {/* Profile Section */}
        <div className="mb-7 flex lg:gap-2">
          <div className="w-20 h-20 rounded-full mx-auto  overflow-hidden">
            <Image
              src={sanim}
              alt="Sanim Hasan"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[28px] font-bold text-gray-900 ">
              Md Sanim Mia
            </h2>
            <div className="flex items-center gap-1 ">
              <p className=" text-gray-600 ">Full-stack Developer</p>

              <Badge
                variant="secondary"
                className="bg-green-500 p-[3px]  "
              ></Badge>
              <p className="text-[9px]">Available</p>
            </div>
          </div>
        </div>

        {/* Contact Info - Larger spacing */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                EMAIL
              </p>
              <p className="text-base text-gray-900 font-medium">
                hasansanim@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                PHONE
              </p>
              <p className="text-base text-gray-900 font-medium">
                +8801780498329
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                LOCATION
              </p>
              <p className="text-base text-gray-900 font-medium">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Skills Icons - Larger */}
        <div className="space-y-8 grid justify-start mb-6">
          <div className="grid grid-cols-3 gap-7 ">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-1 mx-auto">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Task</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-1 mx-auto">
                <Calendar className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Planning</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-1 mx-auto">
                <Palette className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Design</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-7">
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-1 mx-auto">
                <Code className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Develop</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-1 mx-auto">
                <TestTube className="w-7 h-7 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Testing</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-1 mx-auto">
                <Rocket className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Deploy</p>
            </div>
          </div>
        </div>

        {/* Social Icons - Larger */}
        <div className="flex  space-x-12 mb-7">
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <Github className="w-5 h-5 text-gray-600" />
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <Linkedin className="w-5 h-5 text-gray-600" />
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <Facebook className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidever;
