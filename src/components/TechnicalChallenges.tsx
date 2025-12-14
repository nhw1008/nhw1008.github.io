import React from 'react';
import { AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function TechnicalChallenges() {
  const { ref, isVisible } = useScrollAnimation();

  const challenges = [
    {
      project: 'AI 여행 플래너',
      problem: 'CORS & JSON Parsing 오류',
      description:
        'Flutter 앱에서 Node.js 백엔드 API 호출 시 CORS 정책 오류와 응답 데이터 파싱 실패가 발생했습니다.',
      solution:
        'Express 서버에 cors 미들웨어를 추가하고, API 응답 형식을 표준화했습니다. Content-Type 헤더를 명시적으로 설정하고, 클라이언트 측 에러 핸들링을 개선했습니다.',
      result: 'API 통신이 안정화되었고, 에러 처리 패턴을 학습했습니다.',
      tags: ['Node.js', 'Express', 'Flutter', 'CORS', 'API'],
    },
    {
      project: '영화 예매 웹커뮤니티',
      problem: 'Kobis + KMDB API 통합 및 데이터 생성 최적화',
      description:
        '영화진흥위원회 Kobis API와 한국영화데이터베이스 KMDB API를 각각 호출하여 데이터를 병합하는 과정에서 API 호출 횟수가 많아 속도가 느렸고, 데이터 불일치 문제가 발생했습니다.',
      solution:
        '두 API의 응답을 결합하는 통합 API 엔드포인트를 PHP로 구현했습니다. 영화 코드를 기준으로 데이터를 매칭하고, 응답 데이터를 정규화하여 MySQL DB에 일괄 삽입하는 배치 프로세스를 만들었습니다.',
      result: 'DB 데이터 생성 과정이 자동화되었고, API 호출 횟수가 감소하여 처리 속도가 개선되었습니다. 외부 API 통합 경험을 쌓았습니다.',
      tags: ['PHP', 'REST API', 'MySQL', 'Data Integration', 'API Design'],
    },
    {
      project: '영화 커뮤니티 리메이크',
      problem: 'Supabase RLS 정책 설정',
      description:
        'Row Level Security 설정 미숙으로 인증된 사용자도 데이터 접근이 제한되는 문제가 발생했습니다.',
      solution:
        'RLS 정책을 세밀하게 설정하고, JWT 토큰 기반 사용자 인증 흐름을 정확히 이해한 후 재구성했습니다.',
      result: '보안성을 유지하면서도 원활한 데이터 접근이 가능해졌고, BaaS 보안 개념을 학습했습니다.',
      tags: ['Supabase', 'Authentication', 'Security', 'RLS'],
    },
  ];

  return (
    <section
      id="challenges"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">
            Technical Challenges
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            프로젝트 중 직면한 기술적 문제와 해결 과정입니다
          </p>
        </div>

        <div ref={ref} className="space-y-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 border border-gray-200 dark:border-gray-700 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {challenge.project}
                      </span>
                    </div>
                    <h3 className="text-2xl text-gray-900 dark:text-white">
                      {challenge.problem}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="text-gray-900 dark:text-white">문제: </span>
                          {challenge.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="text-gray-900 dark:text-white">해결: </span>
                          {challenge.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="text-gray-900 dark:text-white">결과: </span>
                          {challenge.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {challenge.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}