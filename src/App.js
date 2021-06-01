import "./App.css";
import CampPage from "./components/campPage";
import CopyRight from "./components/copyright";
import DownloadPage from "./components/downloadPage";
import Header from "./components/header";
import PhoneVideo from "./components/phoneVideo";

function App() {
  return (
    <main className="App">
      <Header></Header>
      <DownloadPage></DownloadPage>
      <PhoneVideo></PhoneVideo>
      <CampPage></CampPage>
      <DownloadPage></DownloadPage>
      <CopyRight></CopyRight>
    </main>
  );
}

export default App;
