import { ShieldCheck, Lock, EyeOff, ServerOff, FileText, CheckCircle2, Globe } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | BgRemover Pro",
  description: "Read our comprehensive privacy policy. We use client-side WASM AI to ensure your images never leave your device. 100% secure background removal.",
  keywords: ["Privacy Policy", "Secure image editor", "Data protection", "Client-side AI privacy"],
};

export default function Privacy() {
  return (
    <div className="w-full pb-32 animate-in fade-in duration-1000">
      
      {/* 🟢 Hero Section */}
      <div className="bg-[#002B5B] text-white pt-32 pb-24 px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-blue-500/20 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 shadow-lg border border-blue-400/30">
            <ShieldCheck className="text-blue-300" size={48}/>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Privacy Policy</h1>
          <p className="text-xl font-medium text-blue-200 max-w-2xl mx-auto">
            Your privacy isn't just a policy to us—it's built directly into the core of our AI technology.
          </p>
          <p className="mt-8 text-sm font-bold tracking-widest uppercase text-blue-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 🟢 Privacy Features Cards */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ServerOff size={28}/>, title: "No Server Uploads", desc: "Your images never leave your computer. We don't have access to your files." },
            { icon: <Lock size={28}/>, title: "100% Local AI", desc: "Our neural network runs directly inside your browser's memory using WASM." },
            { icon: <EyeOff size={28}/>, title: "Zero Tracking", desc: "We don't track what you edit, save, or download. Total anonymity." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-black/5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#f4f0ff] p-4 rounded-full text-blue-600 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-black text-[#002B5B] mb-3">{feature.title}</h3>
              <p className="text-slate-500 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 Detailed Legal Content */}
      <div className="max-w-[900px] mx-auto px-6 mt-24">
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-black/5 prose prose-lg prose-slate max-w-none prose-headings:text-[#002B5B] prose-headings:font-black prose-a:text-blue-600">
          
          <h2 className="flex items-center gap-3"><FileText className="text-blue-600"/> 1. Introduction</h2>
          <p>
            Welcome to BgRemover ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
            Unlike traditional cloud-based image editors, our platform is engineered from the ground up to operate completely on your device.
          </p>

          <h2>2. How We Process Your Images (Zero-Data Policy)</h2>
          <p>
            The most important aspect of our service is how we handle the photos you upload:
          </p>
          <ul>
            <li><strong>Client-Side Processing:</strong> We use WebAssembly (WASM) and local AI models. When you select an image, the AI model is downloaded to your browser, and the background is removed using your device's CPU/GPU.</li>
            <li><strong>No Data Transmission:</strong> The images you select are <strong>never</strong> transmitted over the internet to our servers.</li>
            <li><strong>No Storage:</strong> Since the files never reach our servers, we cannot view, store, share, sell, or use your images in any way.</li>
          </ul>

          <h2>3. Information We Do Not Collect</h2>
          <p>
            To maintain absolute privacy and offer a frictionless, free tool, we deliberately avoid collecting the following:
          </p>
          <ul>
            <li>Names, Email Addresses, or Phone Numbers (No account creation is required).</li>
            <li>Payment Information or Credit Card Details (The service is 100% free).</li>
            <li>Facial recognition data, biometric identifiers, or metadata from your processed images.</li>
          </ul>

          <h2>4. Analytics and Cookies</h2>
          <p>
            While we do not track your personal identity or your images, we may use basic, anonymized web analytics (such as Vercel Web Analytics) to understand general website traffic. 
            This helps us monitor website performance, count total daily visitors, and detect technical errors. This data is strictly aggregated and cannot be tied back to you as an individual.
          </p>

          <h2 className="flex items-center gap-3"><Globe className="text-blue-600"/> 5. Global Data Rights (GDPR & CCPA)</h2>
          <p>
            Because we do not collect or store any personal data or images, we inherently comply with strict global data protection regulations including the European GDPR and the California Consumer Privacy Act (CCPA). You don't need to request data deletion because we literally have no data to delete.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. 
            Any modifications will be updated on this page with the "Last Updated" date revised accordingly.
          </p>

          <div className="mt-12 p-8 bg-[#f4f0ff] rounded-3xl border border-blue-100 flex items-start gap-4">
            <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-black text-[#002B5B] m-0 mb-2">Have questions about your privacy?</h3>
              <p className="m-0 text-slate-600 text-base">
                If you have any questions or concerns about this privacy policy, please contact our developer directly at <a href="mailto:rushikeshmurhekar2@gmail.com" className="font-bold">rushikeshmurhekar2@gmail.com</a>.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}