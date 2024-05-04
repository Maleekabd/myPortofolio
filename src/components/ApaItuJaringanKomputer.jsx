import React, { useEffect, useState } from "react";
import { materi } from "./ComputerNetwork";

const ApaItuJaringanKomputer = () => {
  const [getCurrentPath, setGetCurrentPath] = useState(false);

  useEffect(() => {
    const getPath = location.pathname;
    setGetCurrentPath(getPath.split('/')[2]);
  }, []);

  return (
    <div className=" m-10 flex flex-row flex-wrap">
      <div className="text-justify leading-7 w-8/12">
        <h1 className="text-xl font-bold">{"Apa itu Jaringan Komputer ?"}</h1>
        <p>
          Jaringan komputer adalah kumpulan perangkat keras dan perangkat lunak
          yang terhubung satu sama lain untuk saling berbagi data, sumber daya,
          dan layanan. Ini memungkinkan komunikasi dan pertukaran informasi
          antara perangkat seperti komputer, server, printer, dan perangkat
          lainnya, baik secara lokal (di dalam satu gedung atau area geografis
          yang terbatas) maupun secara global melalui internet. beberapa
          komponen penting dari jaringan komputer:
          <ul>
            <li>
              <strong>1. Node atau Host: </strong>Ini adalah perangkat
              individual dalam jaringan, seperti komputer, laptop, printer, atau
              server, yang memiliki alamat unik dan dapat berkomunikasi dengan
              perangkat lain dalam jaringan.
            </li>
            <li>
              <strong>2. Media Transmisi: </strong>
              Ini adalah media yang digunakan untuk mentransmisikan data antara
              node dalam jaringan. Ini bisa berupa kabel tembaga, serat optik,
              atau gelombang radio dalam jaringan nirkabel.
            </li>
            <li>
              <strong>3. Perangkat Jaringan: </strong>Ini mencakup perangkat
              keras seperti router, switch, dan hub yang digunakan untuk
              mengarahkan dan mengatur lalu lintas data dalam jaringan.
            </li>
            <li>
              <strong>4. Protokol: </strong>
              Protokol adalah aturan dan standar yang mengatur bagaimana data
              dikirimkan, diterima, dan diproses dalam jaringan. Contoh protokol
              termasuk TCP/IP (Transmission Control Protocol/Internet Protocol),
              UDP (User Datagram Protocol), dan HTTP (Hypertext Transfer
              Protocol).{" "}
            </li>
            <li>
              <strong>5. Topologi: </strong> Ini merujuk pada pola atau struktur
              fisik jaringan, seperti topologi bintang, bus, cincin, atau mesh.
              Setiap topologi memiliki kelebihan dan kelemahan masing-masing
              tergantung pada kebutuhan dan keandalan jaringan.
            </li>
            <li>
              <strong>6. Sistem Addressing: </strong> Setiap node dalam jaringan
              memiliki alamat yang unik, seperti alamat IP dalam jaringan TCP/IP
              atau alamat MAC (Media Access Control) dalam jaringan Ethernet.
            </li>
          </ul>
          <br />
          Jaringan komputer memungkinkan berbagai fungsi, termasuk: - Berbagi
          Sumber Daya: Misalnya, printer bersama, file sharing, dan akses
          bersama ke perangkat penyimpanan. - Komunikasi: Melalui email,
          obrolan, atau video konferensi. - Akses ke Sumber Daya Jarak Jauh:
          Misalnya, akses ke server atau data dari lokasi yang berbeda melalui
          internet. - Kolaborasi: Melalui aplikasi dan platform kolaboratif
          online. Dengan kata lain, jaringan komputer adalah fondasi dari dunia
          digital modern, memungkinkan berbagai jenis komunikasi, kolaborasi,
          dan akses ke informasi di seluruh dunia.
        </p>
      </div>
      <div className="p-5 w-4/12 ">
        <h1 className="text-center text-xl font-bold">Artikel Terkait</h1>
        {materi.map((konten) =>
          getCurrentPath ===  konten.path ? (
            <div className="text-violet-400 underline underline-offset-2">{konten.name}</div>
          ) : (
            <div>{konten.name}</div>
          )
        )}
      </div>
    </div>
  );
};

export default ApaItuJaringanKomputer;
