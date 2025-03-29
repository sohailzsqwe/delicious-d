
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollArea } from './ui/scroll-area';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">{children}</main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;
