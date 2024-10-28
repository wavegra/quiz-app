'use client'

import { useEffect } from 'react'

export default function CoupangBanner() {
  useEffect(() => {
    // 기존 스크립트 제거
    const existingScript = document.querySelector('script[src="https://ads-partners.coupang.com/g.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    // 새로운 스크립트 생성 및 추가
    const script = document.createElement('script');
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    document.head.appendChild(script);

    // 스크립트 로드 완료 후 배너 초기화
    script.onload = () => {
      try {
        new window.PartnersCoupang.G({
          id: 816640,
          template: "carousel",
          trackingCode: "AF9442003",
          width: "100%",
          height: "140"
        });
      } catch (error) {
        console.error('쿠팡 배너 초기화 실패:', error);
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="my-6 w-full">
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500">이 포스팅은 쿠팡 파트너스 활동의 일환으로 수수료를 받을 수 있습니다</span>
      </div>
      <div id="coupang-banner-816640" className="w-full" />
    </div>
  );
}
