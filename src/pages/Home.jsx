import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";
import { useState,useEffect } from "react";
import Data from "../helper/Data";

const Home = () => {
  const [gorevler, setGorevler] = useState(Data);

  console.log(gorevler);

  const [buton, setButon] = useState({
    renk: "red",
    yazi: "CLOSE ADD TASK BAR",
  });

  const butonClick = () => {
    if (buton.renk === "red") {
      setButon({ renk: "purple", yazi: "show add task bar" });
    } else {
      setButon({
        renk: "red",
        yazi: "CLOSE ADD TASK BAR",
      });
    }
  };
 
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk }}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header>

      {buton.renk === "red" && 
      
      (
        <GorevEkle gorevler={gorevler} setGorevler={setGorevler} />
      )}

      <GorevleriGoster gorevler={gorevler} setGorevler={setGorevler} />
    </div>
  );
};

export default Home;
