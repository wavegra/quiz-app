'use client'

import { useEffect } from 'react'

export default function TopCoupangBanner() {  // 함수 선언 방식 변경
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    document.head.appendChild(script);

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
        console.error('Top banner initialization failed:', error);
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
      <div id="coupang-banner-top-816640" className="w-full" /> {/* ID 변경 */}
    </div>
  );
}
