import fs from 'fs';
import path from 'path';

function createPdf() {
  const contentLines = [];

  // Strictly monochrome regular weight (no bold)
  const addText = (text, x, y, font, size, gray = 0) => {
    const escaped = text
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');
    contentLines.push(`BT /${font} ${size} Tf ${gray} ${gray} ${gray} rg 1 0 0 1 ${x} ${y} Tm (${escaped}) Tj ET`);
  };

  const addLine = (x1, y1, x2, y2, width = 1, gray = 0) => {
    contentLines.push(`${gray} ${gray} ${gray} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
  };

  let y = 800;
  const left = 45;
  const right = 550;

  // Header: Nama Paling Atas (Regular Helvetica F2, clean size)
  addText('NICHOLAS KENJI ANGESTI', left, y, 'F2', 17, 0);
  y -= 15;
  addText('Computer Science Student | Aspiring Software Engineer', left, y, 'F2', 10, 0.2);
  y -= 13;
  addText('Email: nicholas.aang89@gmail.com  |  Web: nicholaskenji.com  |  GitHub: github.com/N11ch', left, y, 'F2', 9, 0.3);
  y -= 12;
  addText('LinkedIn: linkedin.com/in/nicholas-kenji-angesti-77575532b', left, y, 'F2', 9, 0.3);
  
  // Strip 1: Solid Black Line
  y -= 10;
  addLine(left, y, right, y, 1, 0);

  // Section 1: Profil Singkat
  y -= 16;
  addText('PROFIL SINGKAT', left, y, 'F2', 10, 0);
  y -= 13;
  addText('Mahasiswa jurusan Computer Science di Universitas Bina Nusantara dengan ketertarikan mendalam', left, y, 'F2', 9.5, 0.15);
  y -= 12;
  addText('pada pengembangan aplikasi Mobile (Flutter, Kotlin) dan Full-Stack Web (React, Next.js, TypeScript).', left, y, 'F2', 9.5, 0.15);
  y -= 12;
  addText('Berfokus pada pemahaman fundamental komputasi, algoritma & struktur data, serta penulisan kode yang', left, y, 'F2', 9.5, 0.15);
  y -= 12;
  addText('bersih (clean code) dengan ambisi utama berkarier dan bertumbuh menjadi Software Engineer yang adaptif.', left, y, 'F2', 9.5, 0.15);

  // Strip 2: Solid Black Line
  y -= 11;
  addLine(left, y, right, y, 1, 0);

  // Section 2: Pendidikan (Dari 2024, Tanpa Bold)
  y -= 16;
  addText('PENDIDIKAN', left, y, 'F2', 10, 0);
  
  y -= 14;
  addText('Universitas Bina Nusantara (BINUS University)', left, y, 'F2', 10, 0);
  addText('2024 - Sekarang (Semester 5)', 410, y, 'F2', 9, 0.25);
  y -= 12;
  addText('S1 Computer Science  |  Perkiraan Lulus: 2028', left + 8, y, 'F2', 9.5, 0.2);
  y -= 11;
  addText('Fokus pada fundamental Ilmu Komputer, Struktur Data, Pemrograman C, dan Rekayasa Perangkat Lunak.', left + 8, y, 'F2', 9, 0.3);

  y -= 15;
  addText('SMA Mardi Yuana Depok', left, y, 'F2', 10, 0);
  addText('Lulus 2022', 495, y, 'F2', 9, 0.25);
  y -= 12;
  addText('Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)', left + 8, y, 'F2', 9.5, 0.2);

  // Strip 3: Solid Black Line
  y -= 11;
  addLine(left, y, right, y, 1, 0);

  // Section 3: Proyek & Peran (Tanpa Bold)
  y -= 16;
  addText('PROYEK & PERAN PENGEMBANGAN', left, y, 'F2', 10, 0);

  // Proyek 1
  y -= 14;
  addText('Genshin Import - Mobile E-Commerce & Inventory App', left, y, 'F2', 10, 0);
  addText('Solo Project', 490, y, 'F2', 9, 0.25);
  y -= 12;
  addText('Peran: Solo Full-Stack Developer  |  Tech: Flutter, Node.js, Express, MySQL, GitHub OAuth, JWT', left + 8, y, 'F2', 9, 0.2);
  y -= 11;
  addText('- Merancang arsitektur mobile Feature-First di Flutter dengan 10+ halaman fungsional.', left + 8, y, 'F2', 9, 0.15);
  y -= 11;
  addText('- Membangun REST API backend dengan Express.js dan database MySQL untuk otentikasi serta transaksi.', left + 8, y, 'F2', 9, 0.15);
  y -= 11;
  addText('- Mengimplementasikan validasi saldo koin otomatis dan antarmuka admin untuk manajemen katalog item.', left + 8, y, 'F2', 9, 0.15);

  // Proyek 2
  y -= 15;
  addText('Lern - Educational & Collaborative Mobile Platform', left, y, 'F2', 10, 0);
  addText('Group Project (Tim 4 Orang)', 425, y, 'F2', 9, 0.25);
  y -= 12;
  addText('Peran: Mobile Developer (Kontribusi 45%)  |  Tech: Flutter, NestJS, TypeScript, Prisma, PostgreSQL', left + 8, y, 'F2', 9, 0.2);
  y -= 11;
  addText('- Mengembangkan modul client Flutter untuk autentikasi pengguna, antarmuka siswa, guru, dan pesan/chat.', left + 8, y, 'F2', 9, 0.15);
  y -= 11;
  addText('- Mengintegrasikan AuthService, manajemen sesi JWT, dan koneksi API backend modular NestJS.', left + 8, y, 'F2', 9, 0.15);
  y -= 11;
  addText('- Bekerja sama dalam tim mengelola skema database PostgreSQL pada Supabase menggunakan Prisma ORM.', left + 8, y, 'F2', 9, 0.15);

  // Strip 4: Solid Black Line
  y -= 11;
  addLine(left, y, right, y, 1, 0);

  // Section 4: Kemampuan Utama (Tanpa Bold)
  y -= 16;
  addText('KEMAMPUAN UTAMA', left, y, 'F2', 10, 0);
  y -= 14;
  addText('Mobile Development:', left + 8, y, 'F2', 9.5, 0);
  addText('Flutter, Dart, Kotlin (Android Native)', left + 140, y, 'F2', 9.5, 0.15);
  y -= 12;
  addText('Frontend & Web:', left + 8, y, 'F2', 9.5, 0);
  addText('React 19, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript', left + 140, y, 'F2', 9.5, 0.15);
  y -= 12;
  addText('Backend & Database:', left + 8, y, 'F2', 9.5, 0);
  addText('Node.js, Express, NestJS, Prisma ORM, MySQL, PostgreSQL, Supabase, REST APIs', left + 140, y, 'F2', 9.5, 0.15);
  y -= 12;
  addText('Fundamentals & Tools:', left + 8, y, 'F2', 9.5, 0);
  addText('Bahasa Pemrograman C, Algoritma & Struktur Data, Git, GitHub, RESTful API Design', left + 140, y, 'F2', 9.5, 0.15);

  const streamContent = contentLines.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F2 4 0 R >> >> >>\nendobj`);
  objects.push(`4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`);
  objects.push(`5 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);

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
  console.log('Successfully generated clean regular (no bold) PDF:', targetPath);
}

createPdf();
