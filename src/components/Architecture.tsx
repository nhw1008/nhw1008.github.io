import React from 'react';
import { Server, Database, Cloud, Lock, Zap, Globe, Code2, Workflow } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Architecture() {
  const { ref, isVisible } = useScrollAnimation();
  const architectureFeatures = [
    {
      icon: Server,
      title: '웹 개발 기초',
      description: 'HTTP, RESTful API 설계 원칙 이해',
    },
    {
      icon: Database,
      title: 'Database',
      description: 'SQL/NoSQL 데이터베이스 설계 및 쿼리 작성',
    },
    {
      icon: Cloud,
      title: 'Deployment',
      description: 'Docker를 활용한 컨테이너화 및 배포 경험',
    },
    {
      icon: Lock,
      title: 'Authentication',
      description: 'JWT 기반 인증 시스템 구현 경험',
    },
    {
      icon: Zap,
      title: 'Git & Version Control',
      description: 'Git을 활용한 버전 관리 및 협업',
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: '모바일/태블릿/데스크톱 반응형 웹 구현',
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">Technical Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            프로젝트를 통해 학습하고 경험한 기술적 역량들입니다
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {architectureFeatures.map((feature, index) => (
            <div
              key={index}
              className={`p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md hover:scale-105 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 dark:text-white mb-6 text-center">현재 집중하고 있는 것</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <Server className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
              <div className="text-2xl text-gray-900 dark:text-white mb-2">Backend</div>
              <p className="text-gray-600 dark:text-gray-400">Node.js, Express, REST API</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <Cloud className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
              <div className="text-2xl text-gray-900 dark:text-white mb-2">Cloud</div>
              <p className="text-gray-600 dark:text-gray-400">AWS, Docker, 인프라 구축</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <Workflow className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
              <div className="text-2xl text-gray-900 dark:text-white mb-2">CI/CD</div>
              <p className="text-gray-600 dark:text-gray-400">자동화 배포 & DevOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}