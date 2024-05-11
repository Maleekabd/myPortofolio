import { useState, useEffect } from "react";
import { materi } from "../../components/ComputerNetwork";
import { Link } from "react-router-dom";

const NetworkLayer = () => {
  const [getCurrentPath, setGetCurrentPath] = useState(null);
  useEffect(() => {
    const getPath = location.pathname;
    setGetCurrentPath(getPath.split("/")[2]);
  }, []);

  return (
    <>
      <div className=" m-10 flex flex-row flex-wrap">
        <div className="text-justify leading-7 w-8/12">
          <h1 className="text-xl font-bold">OSI LAYER DAN TCP/IP</h1>
          <img src="https://4.bp.blogspot.com/-ubn3ZXeTlKU/W87GNIv2fbI/AAAAAAAACSo/CF6McZlYGyEs5k_h9IpVWgraj_Tz-3hpQCLcBGAs/s1600/perbedaan%2Bosi%2Bdan%2Btcpip.png" loading="lazy" className="w-4/6 translate-x-[25%]" alt="https://4.bp.blogspot.com/-ubn3ZXeTlKU/W87GNIv2fbI/AAAAAAAACSo/CF6McZlYGyEs5k_h9IpVWgraj_Tz-3hpQCLcBGAs/s1600/perbedaan%2Bosi%2Bdan%2Btcpip.png"/>
          <p>
            OSI (Open Systems Interconnection) Layer adalah sebuah model
            referensi yang didefinisikan oleh International Organization for
            Standardization (ISO) pada tahun 1984. ISO adalah sebuah organisasi
            internasional independen yang mengembangkan standar internasional di
            berbagai bidang, termasuk teknologi informasi dan komunikasi.
            Sedangkan TCP/IP (Transmission Control Protocol/Internet Protocol)
            adalah sebuah set protokol komunikasi yang dikembangkan oleh
            Departemen Pertahanan Amerika Serikat (Department of Defense, DoD)
            pada tahun 1970-an. Meskipun dikembangkan oleh DoD, TCP/IP kemudian
            menjadi standar terbuka dan menjadi dasar dari internet modern.
            Dikembangkan di dalam lingkup ARPANET (Advanced Research Projects
            Agency Network), proyek riset yang didanai oleh DoD.
          </p>
          <br />
          <h1 className="font-bold text-xl">OSI Layer</h1>
          <p>
            OSI adalah model referensi standar yang digunakan untuk memahami
            bagaimana protokol jaringan berinteraksi satu sama lain. Model ini
            terdiri dari 7 lapisan, dimulai dari lapisan fisik hingga lapisan
            aplikasi. Berikut adalah penjelasan tentang setiap lapisan:
          </p>
          <br />
          <ul className="list-decimal ml-3">
            <li>
              <h2 className="font-bold  text-lg">Physical Layer</h2>
              <ol className="ml-5 list-disc">
                <li>Lapisan terbawah dalam model OSI</li>
                <li>
                  Bertanggung jawab untuk transmisi bit secara fisik melalui
                  media transmisi seperti kabel, serat optik, atau gelombang
                  radio.
                </li>
                <li>
                  Menentukan karakteristik fisik seperti tegangan, kecepatan,
                  dan bentuk gelombang.
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Data Link Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Bertanggung jawab untuk pengiriman data antara dua node yang
                  terhubung dalam jaringan yang sama.
                </li>
                <li>
                  Memecah data menjadi frame dan menambahkan informasi kontrol
                  untuk deteksi dan koreksi kesalahan.
                </li>
                <li>
                  Alamat MAC (Media Access Control) berada di lapisan ini.
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Network Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Menangani routing data dari sumber ke tujuan melalui jaringan
                  yang berbeda.
                </li>
                <li>
                  Menggunakan alamat logis (seperti alamat IP) untuk mengarahkan
                  paket data.
                </li>
                <li>Protokol utama di sini adalah Internet Protocol (IP).</li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Transport Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Menangani pengiriman data akhir ke akhir antara aplikasi.
                </li>
                <li>
                  Memastikan pengiriman yang andal, urutan yang benar, dan
                  kontrol aliran.
                </li>
                <li>
                  Protokol utama di sini adalah TCP (Transmission Control
                  Protocol) dan UDP (User Datagram Protocol).
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Session Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Menangani pembukaan, pemeliharaan, dan penutupan sesi antara
                  aplikasi di dua perangkat.
                </li>
                <li>
                  Menangani sinkronisasi dan pengendalian dialog antara
                  aplikasi.
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Presentation Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Menangani format data yang dipertukarkan antara aplikasi.
                </li>
                <li>
                  Mengatur enkripsi, kompresi, dan konversi antara format data
                  yang berbeda.
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Application Layer</h2>
              <ol className="ml-5 list-disc">
                <li>Lapisan teratas dalam model OSI.</li>
                <li>
                  Menyediakan layanan dan antarmuka yang digunakan oleh aplikasi
                  pengguna.
                </li>
                <li>
                  Contoh protokol di lapisan ini termasuk HTTP (Hypertext
                  Transfer Protocol), FTP (File Transfer Protocol), dan SMTP
                  (Simple Mail Transfer Protocol).
                </li>
              </ol>
            </li>
          </ul>
          <br />
          <br />
          <h1 className="font-bold text-xl">TCP - IP Layer</h1>
          <p>
            TCP/IP adalah kumpulan protokol komunikasi yang digunakan untuk
            menghubungkan jaringan komputer dan perangkat di seluruh dunia. Ini
            adalah model jaringan yang paling umum digunakan di internet dan
            terdiri dari empat lapisan:
          </p>
          <br />
          <ul className="list-decimal ml-3">
            <li>
              <h2 className="font-bold text-lg">Network Interface Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Lapisan terbawah yang berinteraksi langsung dengan perangkat
                  keras jaringan, seperti kartu jaringan (network interface card
                  - NIC).
                </li>
                <li>
                  Bertanggung jawab untuk transmisi fisik data melalui media
                  transmisi seperti kabel atau gelombang radio.
                </li>
                <li>
                  Protokol di lapisan ini berbeda-beda tergantung pada jenis
                  media transmisi yang digunakan.
                </li>
              </ol>
            </li>
            <li>
              <h2 className="text-lg font-bold">Internet Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Bertanggung jawab untuk pengiriman data antara jaringan yang
                  berbeda.
                </li>
                <li>
                  Protokol utama di sini adalah Internet Protocol (IP), yang
                  mengelola alamat logis dan routing data.
                </li>
                <li>
                  Protokol lain di lapisan ini meliputi ICMP (Internet Control
                  Message Protocol) dan ARP (Address Resolution Protocol).
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Transport Layer</h2>
              <ol className="ml-5 list-disc">
                <li>Menangani pengiriman data antara perangkat di jaringan.</li>
                <li>
                  Protokol utama di sini adalah Transmission Control Protocol
                  (TCP) dan User Datagram Protocol (UDP).
                </li>
                <li>
                  TCP memberikan koneksi yang andal dan pengiriman data dalam
                  urutan yang benar, sementara UDP memberikan pengiriman tanpa
                  koneksi yang lebih cepat.
                </li>
              </ol>
            </li>
            <li>
              <h2 className="font-bold text-lg">Application Layer</h2>
              <ol className="ml-5 list-disc">
                <li>
                  Lapisan teratas yang berinteraksi langsung dengan aplikasi
                  pengguna.
                </li>
                <li>
                  Berisi protokol seperti HTTP (Hypertext Transfer Protocol),
                  FTP (File Transfer Protocol), dan SMTP (Simple Mail Transfer
                  Protocol).
                </li>
                <li>
                  Protokol di lapisan ini digunakan untuk berbagai aplikasi yang
                  berbeda.
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <div className="p-5 w-4/12 leading-7">
          <h1 className="text-center text-xl font-bold">Artikel Terkait</h1>
          {materi.map((konten) =>
            getCurrentPath === konten.path ? (
              <Link
                key={konten.id}
                className="text-violet-400 underline underline-offset-2"
              >
                {konten.name}
              </Link>
            ) : (
              <div className="hover:text-violet-400" key={konten.id}>
                <Link to={"/computer-network-projects/" + konten.path}>
                  {konten.name}
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default NetworkLayer;
