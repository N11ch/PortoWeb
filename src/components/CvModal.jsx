import React from 'react';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* Clean Single Card Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-white text-black rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Simple Monochrome Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-neutral-200 bg-neutral-50 print:hidden">
          <div className="font-mono text-xs sm:text-sm font-medium tracking-wider uppercase text-neutral-800">
            Curriculum Vitae
          </div>

          <div className="flex items-center gap-2">
            {/* Direct PDF Download */}
            <a
              href="/Nicholas_Kenji_Angesti_CV.pdf"
              download="Nicholas_Kenji_Angesti_CV.pdf"
              className="px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-all flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              <span>Download PDF</span>
            </a>

            {/* Print to PDF */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-medium uppercase tracking-wider border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 transition-all"
              title="Cetak atau Simpan sebagai PDF"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              <span>Cetak / PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="px-2.5 py-1.5 rounded-lg border border-neutral-300 font-mono font-medium text-xs text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all"
            >
              Tutup &times;
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area - Pure Black & White (No Bold) */}
        <div 
          id="printable-cv"
          className="p-6 sm:p-10 overflow-y-auto bg-white text-neutral-900 font-sans font-normal print:p-0 print:overflow-visible"
        >
          {/* Header: Nama Paling Atas */}
          <header className="text-left">
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-black uppercase font-mono">
              Nicholas Kenji Angesti
            </h1>
            <p className="text-xs sm:text-sm text-neutral-700 mt-1 font-mono tracking-wide">
              Computer Science Student | Aspiring Software Engineer
            </p>

            {/* Contact Details */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600 mt-2 font-mono">
              <span>Email: nicholas.aang89@gmail.com</span>
              <span>|</span>
              <span>Web: <a href="https://nicholaskenji.com" target="_blank" rel="noreferrer" className="text-black underline">nicholaskenji.com</a></span>
              <span>|</span>
              <span>GitHub: <a href="https://github.com/N11ch" target="_blank" rel="noreferrer" className="text-black underline">github.com/N11ch</a></span>
              <span>|</span>
              <span>LinkedIn: <a href="https://www.linkedin.com/in/nicholas-kenji-angesti-77575532b/" target="_blank" rel="noreferrer" className="text-black underline">nicholas-kenji-angesti</a></span>
            </div>
          </header>

          {/* Strip 1 */}
          <hr className="border-t border-black my-4" />

          {/* Profil Singkat */}
          <section className="text-left">
            <h2 className="text-xs font-medium font-mono tracking-wider uppercase text-black mb-1.5">
              Profil Singkat
            </h2>
            <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700 text-justify">
              Mahasiswa jurusan Computer Science di Universitas Bina Nusantara dengan ketertarikan mendalam pada eksplorasi dan pengembangan aplikasi Mobile (Flutter, Kotlin) serta Full-Stack Web (React, Next.js, TypeScript, Tailwind CSS). Berfokus pada pemahaman fundamental ilmu komputer, struktur data, dan penulisan kode yang bersih (clean code), dengan ambisi utama berkarier dan bertumbuh menjadi seorang Software Engineer yang adaptif dan solutif.
            </p>
          </section>

          {/* Strip 2 */}
          <hr className="border-t border-black my-4" />

          {/* Pendidikan */}
          <section className="text-left">
            <h2 className="text-xs font-medium font-mono tracking-wider uppercase text-black mb-2.5">
              Pendidikan
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-medium text-black">
                    Universitas Bina Nusantara (BINUS University)
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    2024 &ndash; Sekarang (Semester 5)
                  </span>
                </div>
                <p className="text-xs text-neutral-800">
                  S1 Computer Science | Perkiraan Lulus: 2028
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Mempelajari dasar-dasar Ilmu Komputer, Algoritma &amp; Struktur Data, Pemrograman C, dan Rekayasa Perangkat Lunak.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-medium text-black">
                    SMA Mardi Yuana Depok
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    Lulus 2024
                  </span>
                </div>
                <p className="text-xs text-neutral-700">
                  Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)
                </p>
              </div>
            </div>
          </section>

          {/* Strip 3 */}
          <hr className="border-t border-black my-4" />

          {/* Proyek & Peran */}
          <section className="text-left">
            <h2 className="text-xs font-medium font-mono tracking-wider uppercase text-black mb-2.5">
              Proyek &amp; Peran Pengembangan
            </h2>

            <div className="space-y-3.5">
              {/* Proyek 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-medium text-black">
                    Genshin Import &ndash; Mobile E-Commerce &amp; Inventory App
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    Solo Project
                  </span>
                </div>
                <p className="text-xs text-neutral-800 mt-0.5">
                  Peran: Solo Full-Stack Developer | Tech: Flutter, Node.js, Express, MySQL, GitHub OAuth, JWT
                </p>
                <ul className="list-disc list-outside ml-4 mt-1 text-xs text-neutral-600 space-y-0.5">
                  <li>Merancang dan membangun arsitektur Feature-First di Flutter dengan 10+ layar fungsional (Katalog, Detail, Top-up, Keranjang, Checkout, dan Admin).</li>
                  <li>Mengembangkan backend RESTful API dengan Express.js serta manajemen database relasional MySQL untuk otentikasi pengguna dan pemrosesan pesanan.</li>
                  <li>Mengimplementasikan validasi saldo koin secara otomatis dan antarmuka admin untuk operasi CRUD item.</li>
                </ul>
              </div>

              {/* Proyek 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-medium text-black">
                    Lern &ndash; Educational &amp; Collaborative Mobile Platform
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    Group Project (Tim 4 Orang)
                  </span>
                </div>
                <p className="text-xs text-neutral-800 mt-0.5">
                  Peran: Mobile Developer (Kontribusi 45%) | Tech: Flutter, NestJS, TypeScript, Prisma ORM, PostgreSQL (Supabase)
                </p>
                <ul className="list-disc list-outside ml-4 mt-1 text-xs text-neutral-600 space-y-0.5">
                  <li>Mengembangkan modul antarmuka mobile Flutter untuk alur otentikasi, modul siswa, modul guru, dan pesan/chat.</li>
                  <li>Mengintegrasikan AuthService dan state management JWT dengan endpoint API backend modular NestJS.</li>
                  <li>Berkolaborasi bersama tim dalam mendefinisikan skema database PostgreSQL menggunakan Prisma ORM pada Supabase.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Strip 4 */}
          <hr className="border-t border-black my-4" />

          {/* Kemampuan Utama */}
          <section className="text-left">
            <h2 className="text-xs font-medium font-mono tracking-wider uppercase text-black mb-2">
              Kemampuan Utama
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
              <div>
                <span className="text-black block font-mono">Mobile Development:</span>
                <span className="text-neutral-700">Flutter, Dart, Kotlin (Android Native)</span>
              </div>
              <div>
                <span className="text-black block font-mono">Frontend &amp; Web:</span>
                <span className="text-neutral-700">React 19, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript</span>
              </div>
              <div>
                <span className="text-black block font-mono">Backend &amp; Database:</span>
                <span className="text-neutral-700">Node.js, Express, NestJS, Prisma ORM, MySQL, PostgreSQL, Supabase</span>
              </div>
              <div>
                <span className="text-black block font-mono">Fundamentals &amp; Tools:</span>
                <span className="text-neutral-700">Bahasa C, Algoritma &amp; Struktur Data, Git, GitHub, RESTful APIs</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
