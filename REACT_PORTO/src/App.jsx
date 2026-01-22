import DataImage from "./data"
import {listTools, listProyek} from "./data"

function App() {
  return (
    <>
    {/* HERO SECTION */}
    <div className="hero grid md:grid-cols-2 items-center pt-20 xl:gap-10 gap-8 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s order-2 md:order-1">
        <div className="flex items-center gap-3 mb-8 bg-stone-900/80 border border-stone-700 w-fit p-4 rounded-3xl shadow-lg shadow-emerald-900/20">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 h-10 object-cover rounded-full ring-2 ring-emerald-500" loading="lazy"/>
          <q className="text-stone-300 italic">Mengubah data menjadi cerita, dan logika menjadi karya.😂</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6 text-stone-100">
            Hi, saya <span className="text-emerald-400">Abdur</span>
        </h1>
        <p className="text-lg/loose mb-8 text-stone-400">
           Mahasiswa Matematika yang antusias dalam Data Science & Analytics. Saya senang memecahkan masalah kompleks dengan pendekatan statistik dan menyajikannya melalui visualisasi desain yang menarik.
        </p>
        <div className="flex items-center sm:gap-4 gap-3">
          <a href="/CV.pdf" download="CV.pdf" className="bg-emerald-600 px-6 py-4 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-700/30 flex items-center gap-2 text-white font-medium group">
           Download CV <i className="ri-download-fill ri-lg group-hover:translate-y-1 transition-transform"></i>
          </a>
          <a href="#project" className="bg-stone-800 px-6 py-4 rounded-full border border-stone-700 hover:bg-stone-700 hover:border-stone-600 transition-all duration-300 text-stone-200">
            Lihat Project <i className="ri-arrow-down-line ri-lg ml-1"></i>
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-[400px] md:w-[500px] rounded-[2rem] shadow-2xl shadow-emerald-900/20 border-4 border-stone-800 animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
      </div>
    </div>


    {/* TENTANG SECTION */}
    <div className="Tentang mt-40 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-10 bg-stone-900 border border-stone-800 rounded-3xl shadow-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="image" className="w-16 rounded-2xl mb-8 sm:hidden shadow-md" loading="lazy" />
        <p className="text-xl/loose mb-12 text-stone-300 font-light">
          Hi, perkenalkan saya Abdur Rochman Azis. Saat ini saya adalah mahasiswa aktif jurusan Matematika semester 5 di Universitas Jenderal Soedirman. Saya memiliki ketertarikan mendalam pada pengolahan data dan pemodelan matematika. Selain berkutat dengan angka, saya juga menikmati proses kreatif dalam membuat desain visual yang sederhana namun komunikatif.
        </p>
        <div className="flex items-center justify-between border-t border-stone-800 pt-8">
          <img src={DataImage.HeroImage} alt="image" className="w-16 rounded-2xl sm:block hidden shadow-lg ring-2 ring-stone-700" loading="lazy"/>
          <div className="flex items-center gap-12 sm:gap-16">
            <div className="text-right sm:text-left">
              <h1 className="text-5xl mb-2 font-bold text-stone-100">
                5<span className="text-emerald-500">+</span>
              </h1>
              <p className="text-sm uppercase tracking-wider text-stone-500 font-semibold">Project selesai</p>
            </div>
            <div className="text-right sm:text-left">
              <h1 className="text-5xl mb-2 font-bold text-stone-100">
                2<span className="text-emerald-500">+</span>
              </h1>
              <p className="text-sm uppercase tracking-wider text-stone-500 font-semibold">Tahun pengalaman</p>
            </div>
          </div>
        </div>
      </div>
   

      {/* TOOLS SECTION */}
      <div className="Tools mt-40">
        <div className="flex flex-col items-center mb-12 text-center">
             <h1 className="text-4xl font-bold mb-4 text-emerald-50" data-aos="fade-up">Tools yang digunakan</h1>
             <div className="h-1 w-20 bg-emerald-600 rounded-full mb-4" data-aos="fade-up" data-aos-delay="100"></div>
             <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 w-full text-stone-400" data-aos="fade-up" data-aos-delay="200">
                Berikut ini adalah beberapa tools yang biasa saya pakai untuk membuat website atau desain
             </p>
        </div>

        <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {listTools.map((tool) => (
            <div className="flex items-center gap-4 p-4 border border-stone-800 bg-stone-900/50 rounded-2xl hover:bg-stone-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <div className="bg-stone-800 p-3 rounded-xl group-hover:bg-emerald-900/30 transition-colors">
                  <img src={tool.gambar} alt="Tools image" className="w-10"/>
              </div>
              <div>
                <h4 className="font-bold text-stone-200 group-hover:text-emerald-400 transition-colors">{tool.nama}</h4>
                <p className="text-xs text-stone-500 uppercase tracking-wide">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    {/* PROJECT SECTION */}
    <div className="project mt-40 py-10" id="project">
      <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-2 text-stone-100" data-aos="fade-up">Selected Projects</h1>
          <p className="text-stone-500" data-aos="fade-up" data-aos-delay="100">Karya yang telah saya kerjakan dengan penuh dedikasi.</p>
      </div>
      <div className="Project-box grid lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1">
        {listProyek.map(proyek =>(
          <div className="group bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 flex flex-col" key={proyek.id} data-aos="fade-up" data-aos-delay={proyek.dad} data-aos-once="true">
            <div className="overflow-hidden h-52 w-full relative">
                <img src={proyek.gambar} alt="Proyek Data Analyst Abdur Rochman Azis - Analisis Tenaga Kerja Banyumas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-80"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h1 className="text-2xl font-bold mb-3 text-emerald-100 group-hover:text-emerald-400 transition-colors">{proyek.nama}</h1>
              <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-1">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {proyek.tools.map((tool, index) =>(
                  <span className="py-1 px-3 text-xs font-medium border border-stone-700 bg-stone-800 text-emerald-200/80 rounded-full" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a href={proyek.link || "#"} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-stone-800 border border-stone-700 text-stone-300 py-3 rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 font-medium">
                    Lihat website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    {/* KONTAK SECTION */}
    <div className="kontak mt-40 mb-20 sm:p-10 p-4" id="kontak">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-stone-900 to-stone-800 p-8 sm:p-14 rounded-[3rem] border border-stone-800 shadow-2xl relative overflow-hidden" data-aos="fade-up">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-600/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
            <h1 className="text-4xl mb-3 font-bold text-center text-stone-100">Mulai Kolaborasi</h1>
            <p className="text-stone-400 text-center mb-12">Mari terhubung dan buat sesuatu yang luar biasa.</p>
            <form action="https://formsubmit.co/abdure040818@gmail.com" method="POST" className="space-y-6" autoComplete="off">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-stone-400 ml-2">Nama lengkap</label>
                    <input type="text" name="nama" placeholder="Siapa nama Anda?" className="bg-stone-950/50 border border-stone-700 p-4 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-stone-200 placeholder-stone-600" required/>
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-stone-400 ml-2">Email</label>
                    <input type="email" name="email" placeholder="Alamat email Anda" className="bg-stone-950/50 border border-stone-700 p-4 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-stone-200 placeholder-stone-600" required/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="text-sm font-semibold text-stone-400 ml-2">Pesan</label>
                <textarea name="pesan" id="pesan" cols="30" rows="6" placeholder="Tuliskan pesan atau detail project..." className="bg-stone-950/50 border border-stone-700 p-4 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-stone-200 placeholder-stone-600 resize-none" required ></textarea>
                </div>
                <div className="text-center pt-4">
                <button type="submit" className="bg-emerald-600 text-white px-10 py-4 rounded-2xl w-full sm:w-auto font-bold text-lg hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/40 hover:-translate-y-1 transition-all duration-300">
                    Kirim Pesan
                </button>
                </div>
            </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default App