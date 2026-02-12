"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Code2,
  Download,
  Users,
  Code,
  ExternalLink,
  Globe,
  FileText,
  GraduationCap,
  Languages,
  Linkedin,
  Github,
  Mail,
  Trophy,
  Award,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RESUME_DATA = {
  personalInfo: {
    name: "Pranav VM",
    title: "Full Stack Developer & AI Engineer",
    summary:
     "Building scalable web apps and agentic AI systems Full Stack MERN + GenAI enthusiast",
    email: "mailidofpranav@gmail.com",
    phone: "+91 9791280945",
    location: "Coimbatore, India",
    initials: "PV",
  },
  experience: [
    {
      role: "Full Stack Development Intern",
      company: "Infosys Springboard",
      period: "Sep 2025 - Dec 2025",
      description: [
        "Designed a full-stack MERN civic issue reporting platform (Clean Street Project) with JWT-based authentication and role-based access control.",
        "Implemented GPS-based complaint reporting with automated routing logic, reducing location ambiguity by 50-60%.",
        "Built an admin dashboard featuring centralized complaint monitoring, zone-wise analytics, and audit logs.",
        "Enabled community engagement through upvoting and real-time status updates, improving issue prioritization by 35-40%.",
      ],
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSOC)",
      period: "Aug 2025 - Sep 2025",
      description: [
        "Contributed to SimplifAI by implementing RAG-based backend API improvements.",
        "Submitted 6+ pull requests enhancing retrieval workflows and overall code maintainability.",
      ],
    },
    
  ],
leadership: [ {
      role: "Vice President",
      company: "Software Development Club, KPRIET",
      period: "Jul 2024 - May 2025",
      description: [
        "Led technical initiatives and coordinated club activities to foster student development in software engineering.",
      ],
    },
  ],
  projects: [
    {
      title: "StudySnap (AI Educator)",
      type: "GEN AI Full Stack",
      description:
        "Agentic RAG-based study assistant using LangChain and CrewAI that ingests user notes to generate context-aware Q&A, flashcards, and summaries.",
      tech: ["MERN", "LangChain", "CrewAI", "ChromaDB"],
    },
    {
      title: "Placement Management System",
      type: "Full Stack",
      description:
        "Role-based placement platform handling secure routes, CSV data import, and QR code generation, improving admin workflow efficiency by ~30%.",
      tech: ["MERN", "Postgres", "Cloudinary"],
    },
    {
      title: "Smart Parking Solution",
      type: "IoT / CV ",
      description:
        "IoT-enabled parking system using ESP-32 CAM and OpenCV for real-time vehicle detection and occupancy tracking.",
      tech: ["React", "Node.js", "OpenCV", "IoT","Computer"],
    },
  ],
  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      school: "KPR Institute of Engineering and Technology",
      year: "2023 - 2027",
    },
  ],
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "FAST API",
      "JWT"
    ],
    Databases:[
      "SQL", "MySQL", "PostgreSQL", "MongoDB", "Supabase"
    ],
     GenAI:[ "LangChain", "CrewAI", "LangGraph", "MCP", "ChromaDB", "YOLO", "OpenCV", "Vector DB", "Motia"],
    CloudDevops:["AWS (EC2, S3)", "Docker", "GitHub Actions", "CI/CD"],
     tools: [
   "Git", "GitHub", "Postman", "Figma", "Linux"
    ],
  },
  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Professional" },
    { name: "Tamil", level: "Native" },
  ],
  patents: [
    {
      title: "Smart Parking Solution Implementation Methodology",
      status: "Filed",
      year: "2024"
    }
  ],
  achievements: [
    "1st Prize, Code Hunt at ASTRANOVA'25 (CIT)",
    "3rd Prize, Yudham'24 Hackathon for Smart Parking Solution",
    "Winner, Ignitron Hackathon for PII AI-Powered Solution"
  ],
  certifications: [
    {
      title: "HackerRank Problem Solving Intermediate",
      issuer: "HackerRank",
      credentialId: "2df0c1a7c087",
      thumbnail: "/images/HackerRank.jpg",
      url: "https://www.hackerrank.com/certificates/2df0c1a7c087"
    },
    {
      title: "MongoDB Certified Developer, Associate (C100DEV)",
      issuer: "MongoDB",
      credentialId: "5c8a0e38-5474-4f03-acc3-e745e79dcfb0",
      thumbnail: "/images/MongoDB.jpg",
      url: "https://www.credly.com/badges/5c8a0e38-5474-4f03-acc3-e745e79dcfb0/public_url"
    }
  ]
};

export default function StandardResume() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen py-10 px-4 sm:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50/50'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto max-w-5xl rounded-2xl shadow-xl border overflow-hidden ${
          isDark 
            ? 'bg-gray-800 text-gray-100 border-gray-700' 
            : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className={`rounded-full ${
              isDark
                ? 'bg-gray-700 border-gray-600 text-yellow-400 hover:bg-gray-600'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Header Section */}
        <div className={`relative p-8 md:p-12 border-b ${
          isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            {/* Avatar using Shadcn Component */}
            <div className="relative shrink-0">
              <Avatar className="h-48 w-48 md:h-56 md:w-56 border-4 shadow-2xl border-white">
               <AvatarImage
  src="/images/Profile.jpg"
  alt={RESUME_DATA.personalInfo.name}
/>
                <AvatarFallback className={`text-5xl md:text-6xl font-bold ${
                  isDark ? 'text-gray-400 bg-gray-700' : 'text-slate-400 bg-slate-100'
                }`}>
                  {RESUME_DATA.personalInfo.initials}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-2 ${
                  isDark ? 'text-gray-100' : 'text-slate-900'
                }`}>
                  {RESUME_DATA.personalInfo.name}
                </h1>
                <p className={`text-xl md:text-2xl font-medium tracking-wide ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {RESUME_DATA.personalInfo.title}
                </p>
              </div>

              <p className={`max-w-2xl mx-auto md:mx-0 leading-relaxed text-base md:text-lg ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}>
                {RESUME_DATA.personalInfo.summary}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className={`rounded-full ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.personalInfo.email}`}>
                    <Mail className="h-3.5 w-3.5 mr-2" />
                    {RESUME_DATA.personalInfo.email}
                  </a>
                </Button>
                <Badge
                  variant="outline"
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-gray-200'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <Phone className="h-3.5 w-3.5 mr-2" />
                  {RESUME_DATA.personalInfo.phone}
                </Badge>
                <Badge
                  variant="outline"
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-gray-200'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 mr-2" />
                  {RESUME_DATA.personalInfo.location}
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[160px]">
              <Button
                className={`w-full rounded-full font-medium shadow-lg ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20'
                    : 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/20'
                }`}
                size="lg"
                asChild
              >
                <a href="/Pranav_Vm.pdf" download="Pranav_VM_Resume.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <div className="flex gap-2 justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 rounded-full ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700'
                      : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  asChild
                >
                  <a href="https://www.linkedin.com/in/vm-pranav15/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 rounded-full ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700'
                      : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  asChild
                >
                  <a href="https://github.com/VMPRANAV" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-10 w-10 rounded-full ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700'
                      : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  asChild
                >
                  <a href="https://leetcode.com/mailidofpranav" target="_blank" rel="noopener noreferrer">
                    <Code className="h-5 w-5" />
                    <span className="sr-only">LeetCode</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x ${
          isDark ? 'divide-gray-700' : 'divide-slate-200'
        }`}>
          {/* Main Content Column */}
          <div className="lg:col-span-2 p-8 md:p-10 space-y-10">
            {/* Experience Section */}
            <section aria-labelledby="experience-heading">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2
                  id="experience-heading"
                  className={`text-2xl font-bold tracking-tight ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Work Experience
                </h2>
              </div>

              <div className="space-y-8 relative pl-2">
                {RESUME_DATA.experience.map((job, index) => (
                  <div key={index} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 shadow-md group-hover:scale-125 transition-transform duration-300 ${
                      isDark
                        ? 'border-gray-800 bg-blue-500'
                        : 'border-white bg-blue-600'
                    }`} />

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className={`font-bold text-lg ${
                        isDark ? 'text-gray-100' : 'text-slate-900'
                      }`}>
                        {job.role}
                      </h3>
                      <Badge
                        variant="outline"
                        className={isDark
                          ? 'bg-gray-700 text-gray-200 border-gray-600'
                          : 'bg-slate-50 text-slate-900 border-slate-200'
                        }
                      >
                        {job.period}
                      </Badge>
                    </div>

                    <div className={`flex items-center gap-2 font-semibold text-sm mb-3 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                    </div>

                    <ul className={`list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-slate-600'
                    }`}>
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Projects Section */}
            <section aria-labelledby="projects-heading">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Code2 className="h-5 w-5" />
                </div>
                <h2
                  id="projects-heading"
                  className={`text-2xl font-bold tracking-tight ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Featured Projects
                </h2>
              </div>

              <div className="grid gap-5">
                {RESUME_DATA.projects.map((project, index) => (
                  <Card
                    key={index}
                    className={`group shadow-sm transition-all ${
                      isDark
                        ? 'border-gray-700 bg-gray-800/50 hover:shadow-lg hover:border-blue-700'
                        : 'border-slate-200 bg-white hover:shadow-md hover:border-blue-200'
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-bold text-lg ${
                            isDark ? 'text-gray-100' : 'text-slate-900'
                          }`}>{project.title}</h3>
                          <ExternalLink className={isDark ? 'h-3.5 w-3.5 text-gray-500' : 'h-3.5 w-3.5 text-slate-400'} />
                        </div>
                        <Badge
                          variant={
                            project.type === "Open Source" ||
                            project.type.includes("AI")
                              ? "default"
                              : "outline"
                          }
                          className={
                            project.type === "Open Source" ||
                            project.type.includes("AI")
                              ? isDark
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-slate-900 hover:bg-slate-800 text-white"
                              : isDark
                              ? "text-gray-200 border-gray-600"
                              : "text-slate-950 border-slate-200"
                          }
                        >
                          {project.type}
                        </Badge>
                      </div>
                      <p className={`text-sm mb-4 leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-slate-600'
                      }`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className={isDark
                              ? 'bg-blue-900/30 text-blue-300 border border-blue-800 hover:bg-blue-900/50'
                              : 'bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100'
                            }
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://github.com/VMPRANAV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  <Github className="h-4 w-4" />
                  View more on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Certifications Section */}
            <section aria-labelledby="certifications-heading">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Award className="h-5 w-5" />
                </div>
                <h2
                  id="certifications-heading"
                  className={`text-2xl font-bold tracking-tight ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Certifications
                </h2>
              </div>

              <div className="grid gap-5">
                {RESUME_DATA.certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className={`group shadow-sm transition-all ${
                      isDark
                        ? 'border-gray-700 bg-gray-800/50 hover:shadow-lg hover:border-blue-700'
                        : 'border-slate-200 bg-white hover:shadow-md hover:border-blue-200'
                    }`}
                  >
                    <CardContent className="p-5">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex gap-4">
                          <div className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                            isDark ? 'border-gray-700' : 'border-slate-200'
                          }`}>
                            <img
                              src={cert.thumbnail}
                              alt={cert.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h3 className={`font-bold text-base ${
                                isDark ? 'text-gray-100' : 'text-slate-900'
                              }`}>
                                {cert.title}
                              </h3>
                              <ExternalLink className={`h-3.5 w-3.5 shrink-0 ${
                                isDark ? 'text-gray-500' : 'text-slate-400'
                              }`} />
                            </div>
                            <p className={`text-sm font-medium mb-2 ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                              {cert.issuer}
                            </p>
                            <p className={`text-xs ${
                              isDark ? 'text-gray-400' : 'text-slate-500'
                            }`}>
                              Credential ID: {cert.credentialId}
                            </p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className={`p-8 md:p-10 space-y-10 h-full border-l ${
            isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-slate-50/50 border-slate-200'
          }`}>
            {/* Education */}
            <section aria-labelledby="education-heading">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2
                  id="education-heading"
                  className={`text-lg font-bold tracking-tight uppercase ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-4 border-l-2 ${
                      isDark ? 'border-blue-700' : 'border-blue-200'
                    }`}
                  >
                    <h3 className={`font-bold text-base ${
                      isDark ? 'text-gray-100' : 'text-slate-900'
                    }`}>
                      {edu.degree}
                    </h3>
                    <div className={`text-sm font-medium mb-1 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {edu.school}
                    </div>
                    <div className={`text-xs font-medium uppercase tracking-wider ${
                      isDark ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Skills */}
            <section aria-labelledby="skills-heading">
              <div className="flex items-center gap-3 mb-5">
                <Code2 className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2
                  id="skills-heading"
                  className={`text-lg font-bold tracking-tight uppercase ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Technical Skills
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
                    Frontend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.frontend.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={isDark
                          ? 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                          : 'bg-white border border-slate-200 text-slate-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.backend.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={isDark
                          ? 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                          : 'bg-white border border-slate-200 text-slate-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
                   Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.Databases.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={isDark
                          ? 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                          : 'bg-white border border-slate-200 text-slate-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div></div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
                    AI/GenAI
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.GenAI.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={isDark
                          ? 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                          : 'bg-white border border-slate-200 text-slate-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
                    Cloud & Devops
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.CloudDevops.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={isDark
                          ? 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                          : 'bg-white border border-slate-200 text-slate-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                    isDark ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.skills.tools.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={isDark
                          ? 'bg-gray-700 border border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                          : 'bg-white border border-slate-200 text-slate-950 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors'
                        }
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Languages Section */}
            <section aria-labelledby="languages-heading">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Globe className="h-4 w-4" />
                </div>
                <h2
                  id="languages-heading"
                  className={`text-xl font-bold ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Languages
                </h2>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className={`font-medium ${
                      isDark ? 'text-gray-200' : 'text-slate-700'
                    }`}>
                      {lang.name}
                    </span>
                    <Badge
                      variant="secondary"
                      className={isDark
                        ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }
                    >
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Patents Section */}
            <section aria-labelledby="patents-heading">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <FileText className="h-4 w-4" />
                </div>
                <h2
                  id="patents-heading"
                  className={`text-xl font-bold ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Patents
                </h2>
              </div>
              <div className="space-y-3">
                {RESUME_DATA.patents.map((patent, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <h3 className={`font-semibold text-sm mb-2 ${
                      isDark ? 'text-gray-200' : 'text-slate-800'
                    }`}>
                      {patent.title}
                    </h3>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className={isDark
                          ? 'text-yellow-400 border-yellow-600'
                          : 'text-yellow-700 border-yellow-300'
                        }
                      >
                        {patent.status}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={isDark
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-800'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                        }
                      >
                        {patent.year}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Achievements Section */}
            <section aria-labelledby="achievements-heading">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Trophy className="h-4 w-4" />
                </div>
                <h2
                  id="achievements-heading"
                  className={`text-xl font-bold ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Achievements
                </h2>
              </div>
              <ul className="space-y-3">
                {RESUME_DATA.achievements.map((achievement, index) => (
                  <li key={index} className="flex gap-3">
                    <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${
                      isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`} />
                    <span className={`text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-slate-600'
                    }`}>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator className={isDark ? 'bg-gray-700' : 'bg-slate-200'} />

            {/* Leadership Section */}
            <section aria-labelledby="leadership-heading">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Users className="h-4 w-4" />
                </div>
                <h2
                  id="leadership-heading"
                  className={`text-xl font-bold ${
                    isDark ? 'text-gray-100' : 'text-slate-900'
                  }`}
                >
                  Leadership
                </h2>
              </div>
              <div className="space-y-4">
                {RESUME_DATA.leadership.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <h3 className={`font-bold text-sm mb-1 ${
                      isDark ? 'text-gray-100' : 'text-slate-900'
                    }`}>
                      {item.role}
                    </h3>
                    <p className={`text-xs font-medium mb-2 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {item.company}
                    </p>
                    <p className={`text-xs mb-3 ${
                      isDark ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      {item.period}
                    </p>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex gap-2">
                          <div className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                            isDark ? 'bg-blue-400' : 'bg-blue-600'
                          }`} />
                          <span className={`text-xs leading-relaxed ${
                            isDark ? 'text-gray-300' : 'text-slate-600'
                          }`}>
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
