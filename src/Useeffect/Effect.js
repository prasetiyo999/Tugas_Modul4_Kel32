import { useState, useEffect } from "react";

export default function Index() {
  //Inisialisasi state
  const [show, setShow] = useState(false);
  const [valueInput, setValueInput] = useState({
    Kelompok: "",
    password: "",
  });
  const [data, setData] = useState([]);

  //Efek untuk menampilkan notifikasi ketika dimasukkan nomer kelompok 32
  useEffect(() => {
    if (valueInput.Kelompok == "32") {
      alert(` Selamat Datang Anggota Kelompok: ${valueInput.Kelompok}`);
    }
  }, [valueInput.Kelompok]);

  //Efek untuk memanggil gambar dari API (gambarnya cuma keliatan 600x600)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log("[Data API Gambar Berhasil dipanggil]", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Handler untuk masukan
  const inputHandler = (event, type) => {
    if (type === "kelompok") {
      setValueInput((prevState) => {
        return { ...prevState, Kelompok: event.target.value };
      });
    }
  };

  return (
    <div className="container">
      {/* Membuat kotak inputan dan mendeteksi inputan */}
          <div className="titleWrapper">
            <p className="title">Masukkan Kelompok Anda :</p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                placeholder="Kelompok"
                size="50"
                value={valueInput.Kelompok}
                onChange={(event) => inputHandler(event, "kelompok")}
              />
            </div>
          </div>
        {/* Tombol untuk menampilkan dan menyembunyikan gambar */}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
      </button>
      
      {show && (
        <>
          <p className="title" style={{ marginTop: 40 }}>
          Gambar :
          </p>
          {/* Memanggil maksimal 10 gambar dari API */}
          <ol>
            {data.slice(0, 10).map((value) => (
                  <img
                    key={value.id}
                    alt={value.title}
                    src={value.url}
                    className="Foto"
                  />           
            ))}
          </ol>
        </>
      )} 
    </div>
  );
}
