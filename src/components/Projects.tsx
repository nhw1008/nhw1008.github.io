import React from 'react';
import { Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: '영화 예매/리뷰 웹커뮤니티',
      description:
        '극장 검색, 영화 목록, 회원 관리 기능을 갖춘 영화 커뮤니티 웹서비스입니다. 바닐라 JS와 PHP, MySQL을 사용해 프론트엔드와 백엔드를 직접 설계/구현했습니다.',
      tags: ['JavaScript', 'Node.js', 'PHP', 'MySQL', 'REST API'],
      image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsdGltZSUyMGNoYXQlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjU3MTkyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/nhw1008/PhpCinepals',
    },
    {
      title: '영화 웹커뮤니티 리메이크',
      description:
        '개인 프로젝트로 기존 PHP/MySQL 구조를 React, TypeScript, Tailwind CSS, BaaS로 대체할 수 있는 서버리스 백엔드 아키텍처를 실습했습니다.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtfGVufDF8fHx8MTc2NTcxOTIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/nhw1008/ReactTypeScriptCinepals',
    },
    {
      title: 'AI 여행 플래너 데모',
      description:
        'Flutter로 구현한 모바일 여행 플래너 데모로, Google API와 연동해 목적지 정보를 가져오고 AI 프롬프트를 통해 일정 추천을 제공하는 프로토타입을 제작했습니다.',
      tags: ['Flutter', 'Dart', 'Node.js', 'Express', 'Gemini API', 'Perplexity API', 'Google API'],
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBzZXJ2ZXIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU3MTkyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: 'https://github.com/nhw1008/aitravelagency',
    },
    {
      title: '(Planning) 패션 플랫폼 가격 히스토리 웹사이트',
      description:
        'MCP 표준을 따르는 AI 에이전트 기반 시스템입니다. Next.js와 Node.js 기반의 크롤러/알림 모듈을 AWS Lambda/ECS 위에서 마이크로서비스로 운영하며, 미래형 AI 서비스 아키텍처 구현을 목표로 합니다.',
      tags: ['MCP', 'AI Agentic Architecture', 'Next.js', 'Node.js', 'TypeScript', 'Web Crawling', 'AWS Lambda', 'Microservice', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhfGVufDF8fHx8MTc2NTcxMTY0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            최근 진행한 주요 프로젝트들입니다
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-blue-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-blue-700 transition-colors"
                    >
                      <Github size={20} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}