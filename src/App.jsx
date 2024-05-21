import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/header";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";
import TestMenu from "./components/TestMenu.jsx";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <ProfileCard/>
        <TestMenu />
      </div>
    </>
  );
}

export default App;
