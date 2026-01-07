import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/maple.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/python.jpeg";
import Tools12 from "/assets/tools/c++.png";
import Tools13 from "/assets/tools/visual_studio.png"

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Python",
    ket: "LANGUAGE",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "C++",
    ket: "LANGUAGE",
    dad: "1200",
  },
  {
      id: 13,
    gambar: Tools13,
    nama: "Visual Studio",
    ket: "IDE",
    dad: "1300",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";
import Proyek7 from "/assets/proyek/proyek7.png";
import proyek8 from "/assets/proyek/proyek8.png";

export const listProyek = [
  {
    id: 1,
    gambar: proyek8,
    nama: "Task Adventure CLI",
    desk: "Aplikasi To-Do List berbasis konsol dengan konsep gamifikasi. Selesaikan tugas untuk mengumpulkan koin dan tukarkan dengan self-reward favoritmu agar lebih produktif.",
    tools: ["C++", "CLI", "Gamification"],
    dad: "200",
    link: "https://github.com/abdurrre/Task-Adventure-CLI",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Data Preprocessing Pipeline",
    desk: "Implementasi alur kerja Data Cleaning menggunakan library Pandas. Mencakup deteksi missing values, penanganan duplikasi data, dan validasi struktur dataset Excel sebelum pemodelan statistik.",
    tools: ["Python", "Pandas", "Data Cleaning", "EDA"],
    dad: "300",
    link: "https://github.com/abdurrre/PROJECT-TETRA",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "STUDI INDEPENDEN (BELOM)",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Pemetaan Tenaga Kerja Banyumas: Studi Korespondensi Pendidikan vs Status Kerja",
    desk: "Proyek ini menganalisis data ketenagakerjaan dari 924.757 penduduk di Kabupaten Banyumas untuk memahami pola hubungan antara tingkat pendidikan dan jenis pekerjaan. Tujuannya adalah mengidentifikasi mismatch tenaga kerja dan memberikan dasar kebijakan bagi Dinas Tenaga Kerja setempat.",
    tools: ["IBM SPSS Statistics 25", "Microsoft Excel", "DataAnalysis", "PublicPolicy"],
    dad: "500",
    link: "https://github.com/abdurrre/Pemetaan-Tenaga-Kerja-Banyumas-Studi-Korespondensi-Pendidikan-vs-Status-Kerja",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "SPK Pemilihan Supplier (Fuzzy Tsukamoto)",
    desk: "Sistem pendukung keputusan untuk memilih supplier terbaik berdasarkan kriteria Harga, Kualitas, dan Waktu Pengiriman menggunakan logika Fuzzy Tsukamoto.",
    tools: ["Python", "Fuzzy Logic", "Decision Support System"],
    dad: "600",
    link: "https://github.com/abdurrre/APLIKASI-FUZZY-INFERENCE-SYSTEM-TSUKAMOTO-DALAM-PENCARIAN-SUPPLIER-TERBAIK-PT.-ABDURAMMARIKUN"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Agricultural Optimization: Modeling Coconut Sap Production",
    desk: "Studi kuantitatif untuk memprediksi kapasitas maksimum produksi gula kelapa di Kabupaten Banyumas menggunakan Model Pertumbuhan Logistik. Proyek ini menggunakan Python untuk melakukan Non-linear Least Squares Fitting terhadap data pertanian real-time guna merumuskan strategi ekstensifikasi lahan yang efisien.",
    tools: ["Python (Scipy, NumPy, Matplotlib, Pandas)", "Mathematical Modeling (Logistic Growth)", "Non-linear Regression"],
    dad: "700",
    link: "https://github.com/abdurrre/Agricultural-Optimization-Modeling-Coconut-Sap-Production",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Peduli Sesama Campaign",
    desk: "Inisiatif sosial pembagian sembako untuk keluarga prasejahtera dan lansia di sekitar Universitas Jenderal Soedirman. Bertujuan meringankan beban ekonomi dan memperkuat solidaritas sosial antar warga.",
    tools: ["Graphic Design", "Canva", "Visual Comm"],
    dad: "800",
    link: "https://www.canva.com/design/DAGOwtNa9WA/lfLFOKvW0lzPjmNMFIPyVQ/edit?utm_content=DAGOwtNa9WA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];
