
import React from 'react';

interface QRCodeGeneratorProps {
  url: string;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url, size = 200 }) => {
  const encodedUrl = encodeURIComponent(url);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedUrl}`;
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <img 
          src={qrCodeUrl} 
          alt="QR Code zur digitalen Speisekarte" 
          width={size} 
          height={size} 
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
