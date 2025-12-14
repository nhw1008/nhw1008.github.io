import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-blue-600 dark:text-blue-400">안녕하세요 👋</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white">
              주니어 풀스택 개발자
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                <TypingAnimation text="남현우" />
              </span>
              입니다
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              2026년 졸업 예정으로, 배움을 즐기고 꾸준히 성장하는 개발자가 되고 싶습니다.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/nhw1008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nhw1008@gmail.com"
              className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-blue-600 text-white rounded-full hover:bg-gray-700 dark:hover:bg-blue-700 transition-all hover:scale-105"
            >
              더 알아보기
              <ArrowDown size={20} />
            </button>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={32} />
        </div>
      </div>
    </section>
  );
}