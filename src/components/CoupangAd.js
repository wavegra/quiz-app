'use client'

export default function CoupangAd({ href }) {
  return (
    <div className="my-6">
      <div className="text-center mb-4">
        <span className="text-sm text-gray-500">이 포스팅은 쿠팡 파트너스 활동의 일환으로 수수료를 받을 수 있습니다</span>
      </div>
      <iframe 
        src={href}
        width="100%" 
        height="240" 
        frameBorder="0" 
        scrolling="no" 
        referrerPolicy="unsafe-url"
      ></iframe>
    </div>
  );
}
