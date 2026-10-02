import React from 'react';

export default function CvModal({ isOpen, onClose, isDarkMode }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[92vh] rounded-3xl border-3 sm:border-4 flex flex-col overflow-hidden transition-all ${
          isDarkMode 
            ? 'bg-[#1a1c23] border-[#2b2d42] text-white shadow-[10px_10px_0px_#000]' 
            : 'bg-[#f0e9df] border-[#2b2d42] text-[#2b2d42] shadow-[10px_10px_0px_#2b2d42]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b-2 border-[#2b2d42] bg-white/50 backdrop-blur-sm print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e07a5f]" />
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct PDF Download Button */}
            <a
              href="/Nicholas_Kenji_Angesti_CV.pdf"
              download="Nicholas_Kenji_Angesti_CV.pdf"
              className="neo-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider bg-[#81b29a] text-white border-[#2b2d42] hover:bg-[#6f9e87] flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              <span>Download PDF</span>
            </a>

            {/* Print / Save to PDF Button */}
            <button
              onClick={handlePrint}
              className="neo-btn hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider bg-[#f2cc8f] text-[#2b2d42] border-[#2b2d42] hover:bg-[#e4be7f]"
              title="Cetak atau Simpan sebagai PDF"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              <span>Cetak / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 px-3 rounded-xl border-2 font-mono font-bold text-xs bg-[#e07a5f] text-white border-[#2b2d42] shadow-[2px_2px_0px_#2b2d42] hover:bg-[#d6684c]"
            >
              Tutup [X]
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="p-4 sm:p-8 overflow-y-auto flex justify-center bg-slate-200/50 print:p-0 print:bg-white print:overflow-visible">
          
          {/* Printable A4 CV Paper Container */}
          <div 
            id="printable-cv"
            className="w-full max-w-[800px] bg-white text-slate-900 rounded-2xl shadow-xl border-3 border-[#2b2d42] p-6 sm:p-10 font-sans print:shadow-none print:border-none print:p-0 print:rounded-none"
          >
            {/* Header: Nama */}
            <header className="text-left">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase font-mono">
                Nicholas Kenji Angesti
              </h1>
              <p className="text-sm font-bold text-[#e07a5f] mt-1 font-mono uppercase tracking-wide">
                Computer Science Student &bull; Aspiring Software Engineer
              </p>

              {/* Contact Details */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
                <span><strong>Email:</strong> nicholas.aang89@gmail.com</span>
                <span>&bull;</span>
                <span><strong>Web:</strong> <a href="https://nicholaskenji.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nicholaskenji.com</a></span>
                <span>&bull;</span>
                <span><strong>GitHub:</strong> <a href="https://github.com/N11ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/N11ch</a></span>
                <span>&bull;</span>
                <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nicholas-kenji-angesti-77575532b/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nicholas-kenji-angesti</a></span>
              </div>
            </header>

            {/* Strip 1 */}
            <hr className="border-t-2 border-slate-900 my-4" />

            {/* Profil Singkat */}
            <section className="text-left">
              <h2 className="text-xs font-black font-mono tracking-wider uppercase text-slate-900 mb-2">
                Profil Singkat
              </h2>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 text-justify">
                Mahasiswa jurusan <strong>Computer Science</strong> di Universitas Bina Nusantara dengan ketertarikan mendalam pada eksplorasi dan pengembangan aplikasi <strong>Mobile (Flutter, Kotlin)</strong> serta <strong>Full-Stack Web (React, Next.js, TypeScript, Tailwind CSS)</strong>. Berfokus pada pemahaman fundamental ilmu komputer, struktur data, dan penulisan kode yang bersih (<em>clean code</em>), dengan ambisi utama berkarier dan bertumbuh menjadi seorang <strong>Software Engineer</strong> yang adaptif dan solutif.
              </p>
            </section>

            {/* Strip 2 */}
            <hr className="border-t-2 border-slate-900 my-4" />

            {/* Pendidikan */}
            <section className="text-left">
              <h2 className="text-xs font-black font-mono tracking-wider uppercase text-slate-900 mb-3">
                Pendidikan
              </h2>

              <div className="space-y-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-black text-slate-900">
                      Universitas Bina Nusantara (BINUS University)
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-600">
                      2022 &ndash; Sekarang (Semester 5)
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#e07a5f]">
                    S1 Computer Science &bull; Perkiraan Lulus: 2028
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Mempelajari dasar-dasar Ilmu Komputer, Algoritma &amp; Struktur Data, Pemrograman C, dan Rekayasa Perangkat Lunak.
                  </p>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-black text-slate-900">
                      SMA Mardi Yuana Depok
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-600">
                      Lulus 2022
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">
                    Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)
                  </p>
                </div>
              </div>
            </section>

            {/* Strip 3 */}
            <hr className="border-t-2 border-slate-900 my-4" />

            {/* Proyek & Peran */}
            <section className="text-left">
              <h2 className="text-xs font-black font-mono tracking-wider uppercase text-slate-900 mb-3">
                Proyek &amp; Peran Pengembangan
              </h2>

              <div className="space-y-4">
                {/* Proyek 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-black text-slate-900">
                      Genshin Import &ndash; Mobile E-Commerce &amp; Inventory App
                    </h3>
                    <span className="text-[11px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 w-max mt-1 sm:mt-0">
                      Solo Project
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#e07a5f] mt-0.5">
                    Peran: Solo Full-Stack Developer &bull; <span className="text-slate-600 font-normal">Tech: Flutter, Node.js, Express, MySQL, GitHub OAuth, JWT, Provider</span>
                  </p>
                  <ul className="list-disc list-outside ml-4 mt-1.5 text-xs text-slate-700 space-y-1">
                    <li>Merancang dan membangun arsitektur Feature-First pada aplikasi mobile Flutter dengan 10+ layar interaktif (Katalog, Detail, Top-up, Keranjang, Checkout, dan Admin).</li>
                    <li>Mengembangkan backend RESTful API dengan Express.js serta manajemen database relasional MySQL untuk otentikasi pengguna dan pemrosesan pesanan.</li>
                    <li>Mengimplementasikan validasi saldo koin secara otomatis dan panel inventaris admin untuk operasi CRUD item.</li>
                  </ul>
                </div>

                {/* Proyek 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-black text-slate-900">
                      Lern &ndash; Educational &amp; Collaborative Mobile Platform
                    </h3>
                    <span className="text-[11px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300 w-max mt-1 sm:mt-0">
                      Group Project (Tim 4 Orang)
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#e07a5f] mt-0.5">
                    Peran: Mobile Developer (Kontribusi 45%) &bull; <span className="text-slate-600 font-normal">Tech: Flutter, NestJS, TypeScript, Prisma ORM, PostgreSQL (Supabase)</span>
                  </p>
                  <ul className="list-disc list-outside ml-4 mt-1.5 text-xs text-slate-700 space-y-1">
                    <li>Mengembangkan modul antarmuka mobile Flutter untuk alur otentikasi, modul siswa, modul guru, dan fitur pesan/chat.</li>
                    <li>Mengintegrasikan AuthService dan state management JWT dengan endpoint API modular NestJS.</li>
                    <li>Berkolaborasi bersama tim dalam mendefinisikan skema database PostgreSQL menggunakan Prisma ORM pada Supabase.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Strip 4 */}
            <hr className="border-t-2 border-slate-900 my-4" />

            {/* Kemampuan Utama */}
            <section className="text-left">
              <h2 className="text-xs font-black font-mono tracking-wider uppercase text-slate-900 mb-2.5">
                Kemampuan Utama
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block font-mono">Mobile Development:</span>
                  <span className="text-slate-700">Flutter, Dart, Kotlin (Android Native)</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block font-mono">Frontend &amp; Web:</span>
                  <span className="text-slate-700">React 19, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block font-mono">Backend &amp; Database:</span>
                  <span className="text-slate-700">Node.js, Express, NestJS, Prisma ORM, MySQL, PostgreSQL, Supabase</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block font-mono">Fundamentals &amp; Tools:</span>
                  <span className="text-slate-700">Bahasa C, Algoritma &amp; Struktur Data, Git, GitHub, RESTful APIs</span>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
