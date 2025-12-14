import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({
  title = '남현우 | 주니어 풀스택 개발자 포트폴리오',
  description = '백엔드, 클라우드, CI/CD에 관심 있는 2026년 졸업 예정 주니어 개발자 남현우의 포트폴리오입니다. React, TypeScript, Node.js, AWS 등의 기술 스택을 다룹니다.',
  keywords = 'Frontend Developer, Backend Developer, Fullstack Developer, React, TypeScript, Node.js, AWS, Cloud, CI/CD, 웹개발자, 프론트엔드, 백엔드, 풀스택, 포트폴리오',
  ogImage = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop',
}: SEOProps) {
  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="남현우" />
      
      {/* Open Graph 메타 태그 (소셜 미디어 공유) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="남현우 포트폴리오" />
      
      {/* Twitter 카드 메타 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* 파비콘 */}
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      
      {/* 추가 메타 태그 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://nhw1008.github.io" />
    </Helmet>
  );
}
