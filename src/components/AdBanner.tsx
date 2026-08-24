'use client';

import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  slot = '9831133808',
  className = '',
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
          (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      }
    } catch {
      // 忽略 AdSense 重複載入錯誤
    }
  }, []);

  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '24px auto',
        padding: '0 16px',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '90px',
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4011130961445948"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
