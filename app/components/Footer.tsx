export default function Footer() {
  return (
    <footer className="border-t border-slate-900/60 py-10 bg-slate-950 text-center relative z-10">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Alferid Hassen.
      </p>
    </footer>
  );
}
