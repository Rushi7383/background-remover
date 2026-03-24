"use client";

import { useState, useRef } from "react";
import { removeBackground } from "@imgly/background-removal";
import { 
  Download, Loader2, Sparkles, ShieldCheck, Zap, 
  UploadCloud, Image as ImageIcon, Trash2, ArrowRight,
  CheckCircle2, Star, Target, Cpu, Clock, MousePointerClick
} from "lucide-react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setResult(null);
    setLoading(true);

    try {
      // 🟢 High Quality Extraction Processing
      const blob = await removeBackground(imageUrl);
      setResult(URL.createObjectURL(blob));
    } catch (error) {
      alert("Error processing image. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center pb-20 overflow-hidden">
      
      {/* 🟢 HERO SECTION */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-24 pb-12 text-center animate-in fade-in slide-in-from-top-10 duration-1000 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/20 blur-[100px] rounded-full -z-10"></div>

        <div className="inline-flex items-center justify-center gap-2 bg-white px-6 py-2 rounded-full border border-indigo-900/10 shadow-sm mb-8">
           <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
           <span className="text-xs font-bold uppercase tracking-widest text-[#002B5B]">Ultra HD Engine Active</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#002B5B] mb-8 tracking-tighter leading-[1.1]">
          Free Background <br /> Remover
        </h1>
        <p className="text-slate-600 font-bold mb-8 text-xl max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="flex items-center gap-2"><Sparkles className="text-yellow-500" size={20} /> 100% Free</span>
          <span className="text-slate-300">•</span>
          <span>Unlimited HD</span>
          <span className="text-slate-300">•</span>
          <span>Browser Based</span>
        </p>
      </section>

      {/* 🟡 ADVERTISEMENT SLOT: TOP LEADERBOARD (728x90) */}
      <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center mb-10 overflow-hidden relative group">
         <span className="text-slate-400 font-black tracking-widest uppercase text-xs">Advertisement (728x90)</span>
         {/* AdSense Code Will Go Here */}
      </div>

      {/* 🟢 MAIN WORKSPACE WITH SIDEBAR ADS */}
      <section className="w-full max-w-[1440px] mx-auto px-6 mb-16 flex flex-col xl:flex-row items-start justify-center gap-8">
        
        {/* 🟡 ADVERTISEMENT SLOT: LEFT SKYSCRAPER (160x600) - Hidden on mobile */}
        <div className="hidden xl:flex w-[160px] h-[600px] bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-xl items-center justify-center sticky top-32">
           <span className="text-slate-400 font-black tracking-widest uppercase text-xs text-center px-2 rotate-[-90deg]">Advertisement Space</span>
        </div>

        {/* 🟢 CORE TOOL AREA */}
        <div className="flex-1 w-full max-w-[1000px]">
          {!image && !loading && (
            <div className="flex flex-col items-center justify-center mt-4 bg-white p-16 rounded-[40px] shadow-xl border border-indigo-900/5">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="group bg-blue-600 hover:bg-blue-700 text-white font-black py-6 px-16 rounded-full shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-2 flex items-center gap-4 text-2xl uppercase tracking-widest"
              >
                <UploadCloud size={32} className="group-hover:-translate-y-1 transition-transform" /> Browse Image...
              </button>
              <p className="mt-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Supports JPG, PNG, WEBP up to 15MB</p>
              <p className="mt-2 text-xs font-semibold text-emerald-600">Original High-Quality Resolution Maintained</p>
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
            </div>
          )}

          {loading && !result && (
            <div className="flex flex-col items-center justify-center gap-6 text-blue-600 font-black mt-4 bg-white p-20 rounded-[40px] shadow-xl border border-indigo-900/5">
              <Loader2 className="animate-spin" size={64} />
              <p className="text-2xl uppercase tracking-tight">Extracting HD Pixels...</p>
              <p className="text-sm font-bold text-slate-400 text-center max-w-sm">Please wait while our AI engine calculates precise boundaries for high-quality output.</p>
            </div>
          )}

          {image && (
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-indigo-900/5 relative overflow-hidden animate-in zoom-in-95 duration-700">
              
              {/* Original Image */}
              <div className="flex-1 w-full flex flex-col items-center gap-4">
                <span className="text-slate-800 font-black flex items-center gap-2 text-sm md:text-lg uppercase tracking-widest">
                  <ImageIcon size={20} className="text-slate-400" /> Original 
                </span>
                <div className="w-full bg-slate-100/80 rounded-3xl overflow-hidden shadow-inner border border-slate-200 flex items-center justify-center p-4 relative h-[300px] md:h-[400px]">
                  <img src={image} alt="Original" className="max-h-full rounded-2xl object-contain shadow-sm" />
                </div>
                {!loading && (
                   <button 
                     onClick={() => {setImage(null); setResult(null);}} 
                     className="text-xs md:text-sm text-red-500 font-black hover:bg-red-50 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 mt-2 uppercase tracking-widest"
                   >
                     <Trash2 size={18} /> Clear & Upload New
                   </button>
                )}
              </div>

              {/* Transparent Result */}
              <div className="flex-1 w-full flex flex-col items-center gap-4">
                <span className="text-emerald-600 font-black flex items-center gap-2 text-sm md:text-lg uppercase tracking-widest">
                  <Sparkles size={20} /> HD Result
                </span>
                <div className="w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_checkerboard.png')] bg-repeat rounded-3xl overflow-hidden shadow-lg border-[3px] border-emerald-500 flex items-center justify-center p-4 h-[300px] md:h-[400px] relative transition-all duration-500">
                  {result ? (
                    <img src={result} alt="Result" className="max-h-full rounded-2xl object-contain drop-shadow-2xl animate-in zoom-in duration-700" />
                  ) : (
                    loading && <Loader2 className="animate-spin text-emerald-500" size={64} />
                  )}
                </div>
                
                {/* Download Button */}
                {result && (
                  <div className="mt-2 animate-in slide-in-from-bottom-4 duration-500 w-full flex justify-center">
                    <a 
                      href={result} 
                      download="hd_transparent_image.png"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 md:px-12 rounded-full shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 text-base md:text-lg uppercase tracking-widest w-full justify-center md:w-auto text-center"
                    >
                      <Download size={24} /> Download HD PNG
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 🟡 ADVERTISEMENT SLOT: RIGHT SKYSCRAPER (160x600) - Hidden on mobile */}
        <div className="hidden xl:flex w-[160px] h-[600px] bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-xl items-center justify-center sticky top-32">
           <span className="text-slate-400 font-black tracking-widest uppercase text-xs text-center px-2 rotate-[90deg]">Advertisement Space</span>
        </div>

      </section>

      {/* 🟡 ADVERTISEMENT SLOT: BOTTOM LEADERBOARD (728x90) */}
      <div className="w-full max-w-[728px] mx-auto h-[90px] bg-slate-200/50 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center mb-20 overflow-hidden">
         <span className="text-slate-400 font-black tracking-widest uppercase text-xs">Advertisement (728x90)</span>
      </div>

      {/* 🟢 LONG SEO & VALUE PROPOSITION */}
      <section id="features" className="w-full max-w-[1200px] mx-auto px-6 pt-10 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#002B5B] mb-6 tracking-tighter">Enterprise Features, <span className="text-blue-600">Free Forever.</span></h2>
          <p className="text-slate-600 font-bold max-w-2xl mx-auto text-lg">We provide professional-grade, high-quality image processing tools right in your browser.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Target size={32} className="text-blue-600"/>, title: "Pixel Perfect HD", desc: "Our AI is trained to preserve your image's original high quality. Edges are crisp and precise." },
            { icon: <ShieldCheck size={32} className="text-emerald-600"/>, title: "100% Private", desc: "Images never leave your RAM. All processing is done locally on your device's GPU/CPU." },
            { icon: <Zap size={32} className="text-purple-600"/>, title: "Zero Latency", desc: "No waiting in cloud server queues. Processing happens instantly within seconds." },
            { icon: <CheckCircle2 size={32} className="text-orange-600"/>, title: "Lossless Output", desc: "Unlike paid tools, we do not downgrade your image quality. Download full HD PNGs." },
            { icon: <Cpu size={32} className="text-pink-600"/>, title: "Advanced WASM", desc: "Built with cutting-edge WebAssembly technology to harness the full power of your hardware." },
            { icon: <MousePointerClick size={32} className="text-cyan-600"/>, title: "Extremely Easy", desc: "No complex Photoshop masks required. Just drag, drop, and download the result." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-indigo-900/5 hover:-translate-y-2 group">
              <div className="bg-[#f4f0ff] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                 {feature.icon}
              </div>
              <h3 className="font-black text-xl mb-3 text-[#002B5B]">{feature.title}</h3>
              <p className="text-slate-500 font-bold leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 HOW IT WORKS SECTION */}
      <section id="how-it-works" className="w-full bg-[#002B5B] text-white py-32 mt-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-20 tracking-tighter">Remove Backgrounds in 3 Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2"></div>

            {[
              { num: "01", title: "Upload High-Res Image", desc: "Select any high-contrast photo from your device. We support JPG, PNG, and WEBP formats up to 15MB." },
              { num: "02", title: "AI Magic Extraction", desc: "Our neural network analyzes the image, identifies the main subject, and perfectly masks the background without losing quality." },
              { num: "03", title: "Save Lossless PNG", desc: "Instantly download your transparent image in full high-definition quality without any watermarks." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-black mb-8 border-8 border-[#002B5B] shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h3>
                <p className="text-blue-200 font-medium leading-relaxed max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟢 DETAILED FAQ SECTION */}
      <section className="w-full max-w-[1000px] mx-auto px-6 pt-32">
        <h2 className="text-4xl font-black mb-16 text-center text-[#002B5B] tracking-tighter">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {[
            { q: "Is BgRemover completely free for commercial use?", a: "Yes! You can use our tool for personal, educational, and commercial projects entirely for free. There are no hidden fees or attribution requirements." },
            { q: "Why doesn't my image get uploaded to a server?", a: "We utilize Client-Side AI (WASM). When you upload an image, the processing happens using your computer's RAM and CPU, which guarantees 100% privacy and blazing fast speeds." },
            { q: "Do you reduce the quality of the downloaded image?", a: "No! This is our biggest feature. Paid tools often charge you to download 'HD' versions. We process and export your image at the exact same high resolution as the original file you uploaded." },
            { q: "Can I use this for my E-commerce store?", a: "Absolutely. Thousands of sellers use our tool to create clean, high-quality transparent product shots for Amazon, Shopify, WooCommerce, and eBay." }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-indigo-900/5 hover:border-blue-300 transition-all duration-300 group">
              <h4 className="font-black text-xl text-[#002B5B] flex items-start gap-4 mb-4">
                <span className="text-blue-600 mt-1"><CheckCircle2 size={24} /></span>
                {faq.q}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed pl-10 text-lg">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 FINAL CALL TO ACTION */}
      <section className="w-full max-w-[1000px] mx-auto px-6 py-32 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-16 md:p-24 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter relative z-10">Ready to create stunning visuals?</h2>
          <p className="text-blue-100 font-bold text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Stop wasting time with manual selection tools. Automate your workflow today.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-700 px-12 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl relative z-10 uppercase tracking-widest"
          >
            Upload High-Res Image
          </button>
        </div>
      </section>

    </div>
  );
}