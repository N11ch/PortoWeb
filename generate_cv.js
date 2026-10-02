import fs from 'fs';
import path from 'path';

function createPdf() {
  const contentLines = [];

  const addText = (text, x, y, font, size, r = 0, g = 0, b = 0) => {
    // Escape special characters in text
    const escaped = text
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');
    contentLines.push(`BT /${font} ${size} Tf ${r} ${g} ${b} rg 1 0 0 1 ${x} ${y} Tm (${escaped}) Tj ET`);
  };

  const addLine = (x1, y1, x2, y2, width = 1, r = 0.2, g = 0.2, b = 0.2) => {
    contentLines.push(`${r} ${g} ${b} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
  };

  let y = 800;
  const left = 45;
  const right = 550;

  // Header: Name
  addText('NICHOLAS KENJI ANGESTI', left, y, 'F1', 20, 0.1, 0.15, 0.25);
  y -= 16;
  addText('Computer Science Student | Aspiring Software Engineer', left, y, 'F1', 10, 0.85, 0.45, 0.35);
  y -= 14;
  addText('Email: nicholas.aang89@gmail.com  |  Web: nicholaskenji.com  |  GitHub: github.com/N11ch', left, y, 'F2', 9, 0.3, 0.35, 0.45);
  y -= 12;
  addText('LinkedIn: linkedin.com/in/nicholas-kenji-angesti-77575532b', left, y, 'F2', 9, 0.3, 0.35, 0.45);
  
  // Strip / Divider 1
  y -= 10;
  addLine(left, y, right, y, 1.5, 0.15, 0.2, 0.3);

  // Section 1: Profil Singkat
  y -= 18;
  addText('PROFIL SINGKAT', left, y, 'F1', 11, 0.15, 0.2, 0.3);
  y -= 14;
  addText('Mahasiswa jurusan Computer Science di Universitas Bina Nusantara dengan ketertarikan mendalam', left, y, 'F2', 9.5, 0.25, 0.25, 0.25);
  y -= 12;
  addText('pada pengembangan aplikasi Mobile (Flutter, Kotlin) dan Full-Stack Web (React, Next.js, TypeScript).', left, y, 'F2', 9.5, 0.25, 0.25, 0.25);
  y -= 12;
  addText('Berfokus pada pemahaman komputasi dasar, struktur data, dan penulisan kode yang bersih (clean code)', left, y, 'F2', 9.5, 0.25, 0.25, 0.25);
  y -= 12;
  addText('dengan ambisi utama berkarier dan berkembang menjadi seorang Software Engineer yang adaptif.', left, y, 'F2', 9.5, 0.25, 0.25, 0.25);

  // Strip / Divider 2
  y -= 12;
  addLine(left, y, right, y, 1.5, 0.15, 0.2, 0.3);

  // Section 2: Pendidikan
  y -= 18;
  addText('PENDIDIKAN', left, y, 'F1', 11, 0.15, 0.2, 0.3);
  
  y -= 15;
  addText('Universitas Bina Nusantara (BINUS University)', left, y, 'F1', 10, 0.1, 0.1, 0.1);
  addText('2022 - Sekarang (Semester 5)', 400, y, 'F1', 9, 0.4, 0.4, 0.4);
  y -= 13;
  addText('S1 Computer Science  |  Perkiraan Lulus: 2028', left + 10, y, 'F2', 9.5, 0.3, 0.3, 0.3);
  y -= 11;
  addText('Mempelajari fundamental Ilmu Komputer, Algoritma & Struktur Data, serta Rekayasa Perangkat Lunak.', left + 10, y, 'F2', 9, 0.45, 0.45, 0.45);

  y -= 16;
  addText('SMA Mardi Yuana Depok', left, y, 'F1', 10, 0.1, 0.1, 0.1);
  addText('Lulus 2022', 485, y, 'F1', 9, 0.4, 0.4, 0.4);
  y -= 13;
  addText('Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)', left + 10, y, 'F2', 9.5, 0.3, 0.3, 0.3);

  // Strip / Divider 3
  y -= 12;
  addLine(left, y, right, y, 1.5, 0.15, 0.2, 0.3);

  // Section 3: Proyek & Peran
  y -= 18;
  addText('PROYEK & PENGALAMAN PENGEMBANGAN', left, y, 'F1', 11, 0.15, 0.2, 0.3);

  // Project 1
  y -= 15;
  addText('Genshin Import - Mobile E-Commerce & Inventory App', left, y, 'F1', 10, 0.1, 0.1, 0.1);
  addText('Solo Project', 490, y, 'F1', 9, 0.5, 0.7, 0.6);
  y -= 13;
  addText('Peran: Solo Full-Stack Developer  |  Tech: Flutter, Node.js, Express, MySQL, GitHub OAuth, JWT', left + 10, y, 'F1', 9, 0.85, 0.45, 0.35);
  y -= 12;
  addText('- Merancang arsitektur mobile Feature-First di Flutter dengan 10+ halaman fungsional.', left + 10, y, 'F2', 9, 0.3, 0.3, 0.3);
  y -= 11;
  addText('- Membangun REST API dengan Express.js dan database relasional MySQL untuk otentikasi & transaksi.', left + 10, y, 'F2', 9, 0.3, 0.3, 0.3);
  y -= 11;
  addText('- Mengimplementasikan validasi saldo koin real-time dan panel inventaris admin untuk manajemen katalog.', left + 10, y, 'F2', 9, 0.3, 0.3, 0.3);

  // Project 2
  y -= 16;
  addText('Lern - Educational & Collaborative Mobile Platform', left, y, 'F1', 10, 0.1, 0.1, 0.1);
  addText('Team Project (4 Orang)', 445, y, 'F1', 9, 0.9, 0.65, 0.35);
  y -= 13;
  addText('Peran: Mobile Developer (Kontribusi 45%)  |  Tech: Flutter, NestJS, TypeScript, Prisma, PostgreSQL', left + 10, y, 'F1', 9, 0.85, 0.45, 0.35);
  y -= 12;
  addText('- Mengembangkan modul client Flutter untuk autentikasi pengguna, antarmuka siswa, guru, dan pesan (chat).', left + 10, y, 'F2', 9, 0.3, 0.3, 0.3);
  y -= 11;
  addText('- Mengintegrasikan AuthService, manajemen sesi JWT AuthState, dan koneksi API backend modular NestJS.', left + 10, y, 'F2', 9, 0.3, 0.3, 0.3);
  y -= 11;
  addText('- Bekerja sama dalam tim mengelola skema database PostgreSQL di Supabase menggunakan Prisma ORM.', left + 10, y, 'F2', 9, 0.3, 0.3, 0.3);

  // Strip / Divider 4
  y -= 12;
  addLine(left, y, right, y, 1.5, 0.15, 0.2, 0.3);

  // Section 4: Kemampuan Utama
  y -= 18;
  addText('KEMAMPUAN UTAMA', left, y, 'F1', 11, 0.15, 0.2, 0.3);
  y -= 15;
  addText('Mobile Development:', left + 10, y, 'F1', 9.5, 0.2, 0.2, 0.2);
  addText('Flutter, Dart, Kotlin (Android Native)', left + 140, y, 'F2', 9.5, 0.3, 0.3, 0.3);
  y -= 13;
  addText('Frontend & Web:', left + 10, y, 'F1', 9.5, 0.2, 0.2, 0.2);
  addText('React 19, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)', left + 140, y, 'F2', 9.5, 0.3, 0.3, 0.3);
  y -= 13;
  addText('Backend & Database:', left + 10, y, 'F1', 9.5, 0.2, 0.2, 0.2);
  addText('Node.js, Express, NestJS, Prisma ORM, MySQL, PostgreSQL, Supabase, REST APIs', left + 140, y, 'F2', 9.5, 0.3, 0.3, 0.3);
  y -= 13;
  addText('Core & Developer Tools:', left + 10, y, 'F1', 9.5, 0.2, 0.2, 0.2);
  addText('Bahasa Pemrograman C, Struktur Data & Algoritma, Git, GitHub, Vite, Postman', left + 140, y, 'F2', 9.5, 0.3, 0.3, 0.3);

  const streamContent = contentLines.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj`);
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`);
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`);

  let offset = 9; // length of "%PDF-1.4\n"
  const offsets = [];
  let body = '%PDF-1.4\n';

  for (let i = 0; i < objects.length; i++) {
    offsets.push(offset);
    body += objects[i] + '\n';
    offset = Buffer.byteLength(body, 'utf-8');
  }

  const xrefOffset = offset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  const fullPdf = body + xref + trailer;

  const targetPath = path.resolve('public', 'Nicholas_Kenji_Angesti_CV.pdf');
  fs.writeFileSync(targetPath, fullPdf, 'utf-8');
  console.log('Successfully generated:', targetPath);
}

createPdf();
