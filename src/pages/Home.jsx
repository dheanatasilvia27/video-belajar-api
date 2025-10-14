import iphoneImg from "../components/1.png";
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="uppercase text-sm tracking-widest text-gray-500">
            Video Learning Platform
          </h3>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Video Belajar
          </h1>
          <p className="text-gray-700 leading-relaxed">
            VideoBelajar adalah platform pembelajaran video berbasis web yang
            memberi pengguna akses ke beragam kursus dan tutorial berbasis
            video. Dengan VideoBelajar, pengguna dapat belajar dengan kecepatan
            dan jadwal mereka sendiri. VideoBelajar menawarkan cara yang
            fleksibel dan nyaman untuk memperoleh keterampilan dan pengetahuan
            baru, sehingga memudahkan pengguna menyesuaikan pembelajaran ke
            dalam kehidupan mereka yang sibuk. VideoBelajar menawarkan berbagai
            kursus dan tutorial, mencakup topik seperti bisnis, teknologi,
            kesehatan dan kesejahteraan, pembelajaran bahasa, dan banyak lagi.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={iphoneImg} alt="tampilan mobile video belajar" className="w-72 md:w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
