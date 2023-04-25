import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NpcGen from "./pages/NpcGen";
import ItemCollection from "./pages/ItemCollection";
import ItemGen from "./pages/ItemGen";
import MonsterGen from "./pages/MonsterGen";
import Collections from "./pages/Collections";
import BuildingGen from "./pages/BuildingGen";
import CityGen from "./pages/CityGen";
import GuildGen from "./pages/GuildGen";
import FactionGen from "./pages/FactionGen";
import CultGen from "./pages/CultGen";
import WorldGen from "./pages/WorldGen";
import QuestGen from "./pages/QuestGen";
import VillainGen from "./pages/VillainGen";
import SpellGen from "./pages/SpellGen";
import DungeonGen from "./pages/DungeonGen";
import TrapGen from "./pages/TrapGen";
import PuzzleGen from "./pages/PuzzleGen";
import EncounterGen from "./pages/EncounterGen";
import ClassGen from "./pages/ClassGen";
import RaceGen from "./pages/RaceGen";
import PantheonGen from "./pages/PantheonGen";
import Campaign from "./pages/Campaign";
import ModuleGen from "./pages/ModuleGen";
import NotePage from "./notes/pages/NotePage";
import CollectionPage from "./collections/CollectionPage";
import { useState, useEffect } from "react";
import { SessionContext } from "./config/SessionContext";
import { supabase } from "./config/supabaseClient";
import Navbar from "./components/Navbar";
import ResetPassword from "./pages/ResetPassword";
import style from "./App.module.scss";


function App() {
  const [session, setSession] = useState(null);


  useEffect(() => {
    // Check for session data in cookie or local storage
    const storedSession = localStorage.getItem("session");
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }

    // Listen for changes to session state and update the context and storage
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);

        if (event === "SIGNED_IN") {
          localStorage.setItem("session", JSON.stringify(newSession));
        } else if (event === "SIGNED_OUT") {
          localStorage.removeItem("session");
        }
      }
    );

    // Clean up the listener when the component unmounts
    return () => {
      if (authListener && authListener.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, []);

  const [redirectPath, setRedirectPath] = useState("");

  function updateRedirectPath(path) {
    // console.log(path)
    setRedirectPath(path);
  }

  return (
    <div className={style.appWrapper}>
      <SessionContext.Provider value={session}>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <BrowserRouter>
          <Navbar
            session={session}
            updateRedirectPath={updateRedirectPath}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/dndgeneratev3" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/collectionpage" element={<CollectionPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/npcgen" element={<NpcGen />} />
            <Route path="/itemcollection" element={<ItemCollection />} />
            <Route path="/itemgen" element={<ItemGen />} />
            <Route path="/monstergen" element={<MonsterGen />} />
            <Route path="/buildinggen" element={<BuildingGen />} />
            <Route path="/citygen" element={<CityGen />} />
            <Route path="/guildgen" element={<GuildGen />} />
            <Route path="/factiongen" element={<FactionGen />} />
            <Route path="/cultgen" element={<CultGen />} />
            <Route path="/worldgen" element={<WorldGen />} />
            <Route path="/questgen" element={<QuestGen />} />
            <Route path="/villaingen" element={<VillainGen />} />
            <Route path="/pantheongen" element={<PantheonGen />} />
            <Route path="/spellgen" element={<SpellGen />} />
            <Route path="/dungeongen" element={<DungeonGen />} />
            <Route path="/trapgen" element={<TrapGen />} />
            <Route path="/puzzlegen" element={<PuzzleGen />} />
            <Route path="/encountergen" element={<EncounterGen />} />
            <Route path="/classgen" element={<ClassGen />} />
            <Route path="/racegen" element={<RaceGen />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/modulegen" element={<ModuleGen />} />
            <Route path="/campaign/:id" element={<Campaign />} />
            <Route path="/notes" element={<NotePage />} />
          </Routes>
        </BrowserRouter>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
