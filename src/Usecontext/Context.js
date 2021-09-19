import { useContext, createContext, useState } from "react";
import "./Context.css";
import Bulan from "./Moon.jpg";
import Matahari from "./Sun.jpg";
//Membuat objek berupa array yang akan dipanggil di context
const themes = {
  light: {
    text: "Gambar Bulan",
    src: Bulan,
  },
  dark: {
    text: "Gambar Matahari",
    src: Matahari,
  },
};

//Membuat context
const ThemeContext = createContext();

//Penggunaan nilai pada array untuk context
export default function Context() {
  const [valueTheme, setValueTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div
        className="contentWrapper"
        style={{ backgroundColor: valueTheme.src }}
      >
        <Content tema={valueTheme} />
        <button
          className="Button"
          onClick={() =>
            setValueTheme(
              valueTheme === themes.light ? themes.dark : themes.light
            )
          }
        >
          {/* Tombol untuk mengubah gambar yang ditampilkan */}
          Ubah Gambar
        </button>
        <div className="fotoItem ">
            <img
            src= {valueTheme.src}
            alt="Gambar"
            className="Foto"
            />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}

//Untuk menampilkan judul gambar sesuai nilai text pada array
function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p className="titleContext" style={{ color: "black" }}>
       {theme.text}
    </p>
  );
}

