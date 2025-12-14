import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface SkillCategory {
  title: string;
  skills: string[];
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "PHP",
        "REST API",
        "JWT",
        "Web Crawling",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "AWS",
        "Git/GitHub",
        "Docker",
        "Postman",
        "Figma",
        "Supabase",
        "Firebase",
      ],
    },
    {
      title: "Learning",
      skills: ["Kafka", "GraphQL", "Next.js", "Flutter"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            학습하고 프로젝트에 적용한 기술들입니다
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}