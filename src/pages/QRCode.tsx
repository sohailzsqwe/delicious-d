
import React from 'react';
import Layout from '@/components/Layout';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QRCode: React.FC = () => {
  const { toast } = useToast();
  const menuUrl = window.location.origin + '/menu';
  
  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(menuUrl)}`;
    link.download = 'berlin-doener-menu-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "QR-Code heruntergeladen",
      description: "Der QR-Code wurde erfolgreich heruntergeladen.",
    });
  };
  
  return (
    <Layout>
      <div className="container-custom py-16 mt-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Digitale <span className="text-doner-red">Speisekarte</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Scannen Sie den QR-Code, um unsere Speisekarte auf Ihrem Smartphone anzuzeigen.
          Sie können den QR-Code auch herunterladen und ausdrucken.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center">
            <QRCodeGenerator url={menuUrl} size={300} />
            
            <div className="mt-8">
              <Button 
                onClick={handleDownload}
                className="bg-doner-red hover:bg-doner-red/90 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                QR-Code herunterladen
              </Button>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
            <p className="font-medium mb-2">So verwenden Sie den QR-Code:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Laden Sie den QR-Code herunter oder scannen Sie ihn direkt</li>
              <li>Platzieren Sie ihn auf Tischen oder an sichtbaren Stellen</li>
              <li>Kunden können den Code mit ihrem Smartphone scannen</li>
              <li>Die digitale Speisekarte öffnet sich automatisch im Browser</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QRCode;
