import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto 링크 생성
    const subject = encodeURIComponent(`${formData.name}님의 메시지`);
    const body = encodeURIComponent(
      `이름: ${formData.name}\n이메일: ${formData.email}\n\n메시지:\n${formData.message}`
    );
    const mailtoLink = `mailto:nhw1008@gmail.com?subject=${subject}&body=${body}`;
    
    // 이메일 앱 열기
    window.location.href = mailtoLink;
    
    toast.success('이메일 앱이 열립니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 dark:text-white mb-4">Contact</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            채용 기회나 조언이 있으시다면 언제든 연락 주세요!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                    <Mail className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white mb-1">이메일</p>
                    <a
                      href="mailto:nhw1008@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                    >
                      nhw1008@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white mb-1">소셜 미디어</p>
                    <div className="space-y-1">
                      <a
                        href="https://github.com/nhw1008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-white mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-white mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-900 dark:text-white mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="메시지를 입력해주세요"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>메시지 보내기</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}