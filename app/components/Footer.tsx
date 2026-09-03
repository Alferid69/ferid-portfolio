export default function Footer() {
  return (
    <footer className="border-t border-[#232736] py-12 bg-[#090a0f] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          © {new Date().getFullYear()} Alferid Hassen Mohammed. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Addis Ababa, ET</span>
          <span>•</span>
          <span>Next.js • Flutter • TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
