import { useState } from "react";
import "./State.css";
import Gambar from "./Moon.jpg";
export default function Index( ) {
    //Inisialisasi useState
    const [ show, setShow] = useState( false);
    const [gambar, setNamaGambar] = useState("");
    return (
        <div className="container">
        {show && (
        <>
            <div className=" inputWrapper">
                {/* Untuk Memanggil Gambar */}
                <div className="fotoItem ">
                    <img
                    src= {Gambar}
                    alt="Gambar"
                    className="Foto"
                    />
                </div>
            </div>
            </>
            )}
            {/* Tombol untuk menampilkan/memanggil gambar */}
            <button className="Button" onClick={( ) => setShow( !show) }>
                {show ? "Sembunyikan Gambar" : "Tampilkan Gambar"}
            </button>
            {/* Tulisan dan input gambar */}
            <div>
                <p className="title">Benda Apa yang ada di gambar di Atas?</p>
                <input
                    className="namaGambar"
                    placeholder="Nama Gambar"
                    size="90"
                    value={gambar}
                    onChange={(event ) => setNamaGambar(event.target.value) }
                />
            </div>
        </div>
    );
}