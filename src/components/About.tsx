import React from 'react';
import { BookOpen, Code2, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: BookOpen,
      title: '끊임없는 학습',
      description: '새로운 기술을 배우고 적용하는 것을 즐깁니다.',
    },
    {
      icon: Code2,
      title: '문제 해결',
      description: '복잡한 문제를 작은 단위로 나누어 해결합니다.',
    },
    {
      icon: Users,
      title: '협업과 소통',
      description: '팀 프로젝트 경험을 통해 협업의 중요성을 배웠습니다.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            소프트웨어과 졸업 예정이며, 학교 프로젝트와 개인 학습을 통해 풀스택 개발 역량을 쌓아왔습니다. 실무 경험을 통해 더 성장하고 싶습니다.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}