import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { 
  Hexagon, Mail, Globe, ShieldCheck, Zap, Download, Sparkles, 
  MessageCircle, Share2, ArrowRight, CheckCircle2, Heart 
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Background Remover | Fast & Private | BgRemover",
  description: "Remove background from any image instantly for free. 100% private, runs locally in your browser. Download HD transparent PNGs.",
  keywords: ["Background remover", "Remove BG free", "Transparent PNG maker", "AI photo editor", "Image cutout online", "Ecommerce image editor"],
  openGraph: {
    title: "BgRemover - AI Background Eraser",
    description: "Instant, free, and completely private background removal.",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 🟢 Monetag Verification Code Added Here */}
      <head>
        <meta name="monetag" content="5089fd8a142f6ec6dee395534bcf6164" />
      </head>

      {/* 🟢 Light Purple Background matching your theme */}
      <body className={`${inter.className} bg-[#f4f0ff] text-slate-900 flex flex-col min-h-screen antialiased selection:bg-blue-600 selection:text-white`}>
        
        {/* Top Announcement Bar */}
        <div className="w-full bg-[#002B5B] text-white py-2 px-4 text-center">
          <p className="text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 animate-pulse">
            <Sparkles size={14} className="text-yellow-400" /> Free HD Downloads Available Now! No Sign-up Required.
          </p>
        </div>

        {/* Smooth & Clean Header */}
        <header className="w-full pt-6 pb-4 px-6 md:px-10 sticky top-0 z-50 bg-[#f4f0ff]/85 backdrop-blur-xl border-b border-indigo-900/5 transition-all shadow-sm">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-black text-white p-2.5 rounded-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-md">
                <Hexagon size={24} className="fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tight leading-none text-[#002B5B]">BgRemover</span>
                <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">Lightning Fast</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-10 font-bold text-sm text-slate-600">
              <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors flex items-center gap-1">How it Works</Link>
              <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-black hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-blue-600/20">
                START FREE
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Massive Detailed Footer */}
        <footer className="w-full border-t border-indigo-900/10 pt-24 pb-12 mt-20 bg-white/60 backdrop-blur-md">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
              
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#002B5B] text-white p-2 rounded-lg shadow-md">
                    <Hexagon size={20} className="fill-current" />
                  </div>
                  <span className="font-black text-2xl tracking-tight text-[#002B5B]">BgRemover</span>
                </div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 pr-4">
                  We provide the fastest and most secure AI background removal tool on the internet. 100% Free, Unlimited, and Browser Based. Your images never leave your device.
                </p>
                
                {/* 🟢 Safe Social Icons Used Here */}
                <div className="flex gap-3">
                  <a href="mailto:rushikeshmurhekar2@gmail.com" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-black/5 hover:-translate-y-1">
                    <Mail size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-sm border border-black/5 hover:-translate-y-1">
                    <MessageCircle size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-sm border border-black/5 hover:-translate-y-1">
                    <Share2 size={20} />
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="font-black mb-6 text-sm text-[#002B5B] uppercase tracking-widest">Product</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-bold">
                  <li><Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Background Remover</Link></li>
                  <li><Link href="/#how-it-works" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> How it works</Link></li>
                  <li><Link href="/#features" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Core Features</Link></li>
                  <li><Link href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Bulk Processing</Link></li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h4 className="font-black mb-6 text-sm text-[#002B5B] uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-bold">
                  <li><Link href="/privacy" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Contact Us</Link></li>
                  <li><Link href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
                </ul>
              </div>

              <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-indigo-900/10 shadow-sm">
                <h4 className="font-black text-lg mb-2 text-[#002B5B]">Join the Newsletter</h4>
                <p className="text-sm font-medium text-slate-500 mb-6 leading-relaxed">Get the latest updates, design tips, and new features delivered straight to your inbox.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Enter your email" className="w-full bg-[#f4f0ff] border border-indigo-900/10 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  <button className="bg-[#002B5B] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

            </div>

            <div className="pt-8 border-t border-indigo-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <p>© {new Date().getFullYear()} BgRemover. All Rights Reserved.</p>
              <p className="flex items-center gap-2">Built with <Heart size={14} className="text-red-500 fill-current animate-pulse"/> by Rushikesh</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}