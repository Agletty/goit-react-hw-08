import TitleDocument from "../../components/TitleDocument";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <TitleDocument>Home</TitleDocument>

      <div className={style.container}>
        <h1 className={style.title}>
          Task manager welcome page{" "}
          {/* <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span> */}
        </h1>
      </div>
    </>
  );
}
