import { Scale, AlertCircle, ShieldAlert, FileText, CheckCircle2, Gavel } from "lucide-react";

export const metadata = {
  title: "Terms of Service | BgRemover Pro",
  description: "Read the terms of service and usage conditions for BgRemover Pro. By using our free AI background removal tool, you agree to these terms.",
  keywords: ["Terms of Service", "Terms of Use", "User Agreement", "BgRemover Terms"],
};

export default function Terms() {
  return (
    <div className="w-full pb-32 animate-in fade-in duration-1000">
      
      {/* 🟢 Hero Section */}
      <div className="bg-[#002B5B] text-white pt-32 pb-24 px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-blue-500/20 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 shadow-lg border border-blue-400/30">
            <Scale className="text-blue-300" size={48}/>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Terms of Service</h1>
          <p className="text-xl font-medium text-blue-200 max-w-2xl mx-auto">
            Please read these terms carefully before using our background removal tool.
          </p>
          <p className="mt-8 text-sm font-bold tracking-widest uppercase text-blue-400">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 🟢 Terms Summary Cards */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <CheckCircle2 size={28}/>, title: "Free to Use", desc: "Our core tool is free for both personal and commercial projects." },
            { icon: <ShieldAlert size={28}/>, title: "No Abuse", desc: "Do not use automated bots to spam or overload our web interface." },
            { icon: <AlertCircle size={28}/>, title: "Provided As-Is", desc: "We provide this tool without warranties. Use it at your own discretion." }
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
          
          <h2 className="flex items-center gap-3"><FileText className="text-blue-600"/> 1. Acceptance of Terms</h2>
          <p>
            By accessing or using the BgRemover Pro website and AI background removal tool ("Service"), you agree to be bound by these Terms of Service. 
            If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            BgRemover Pro provides a browser-based, client-side Artificial Intelligence tool that allows users to upload images and automatically remove their backgrounds. 
            The processing is done locally on the user's device using WebAssembly (WASM).
          </p>

          <h2>3. User Responsibilities & Acceptable Use</h2>
          <p>
            When using our Service, you agree to the following rules of conduct:
          </p>
          <ul>
            <li><strong>Lawful Content:</strong> You must have the legal right, including necessary copyright permissions, to upload and modify the images you process through our tool.</li>
            <li><strong>No Malicious Use:</strong> You may not use the Service to process images that contain illegal, explicit, or harmful content.</li>
            <li><strong>No Reverse Engineering:</strong> You agree not to reverse engineer, decompile, or attempt to extract the source code or AI models used by our Service.</li>
            <li><strong>Fair Usage:</strong> While the Service is free, you agree not to use automated scripts, bots, or scrapers to bulk-process images in a way that disrupts the experience for other users.</li>
          </ul>

          <h2>4. Intellectual Property Rights</h2>
          <p>
            <strong>Your Images:</strong> We claim absolutely no ownership rights over the images you upload or the resulting images you download. You retain all copyrights and intellectual property rights to your content. Since processing happens locally, we do not even receive a copy of your files.
          </p>
          <p>
            <strong>Our Platform:</strong> The code, design, logos, and AI implementation of BgRemover Pro are the exclusive property of BgRemover. You may not copy or reuse our branding without explicit permission.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. BgRemover makes no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the tool. 
            Because AI is probabilistic, we cannot guarantee that the background removal will be 100% perfect for every image.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall BgRemover, nor its developers or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service or inability to access the Service.
          </p>

          <h2 className="flex items-center gap-3"><Gavel className="text-blue-600"/> 7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Maharashtra, India, without regard to its conflict of law provisions.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <div className="mt-12 p-8 bg-[#f4f0ff] rounded-3xl border border-blue-100 flex items-start gap-4">
            <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-black text-[#002B5B] m-0 mb-2">Need Clarification?</h3>
              <p className="m-0 text-slate-600 text-base">
                If you have any questions about these Terms of Service, please reach out to us at <a href="mailto:rushikeshmurhekar2@gmail.com" className="font-bold">rushikeshmurhekar2@gmail.com</a>.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}