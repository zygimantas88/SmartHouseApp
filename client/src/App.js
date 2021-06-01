import './App.css';
import { useState } from 'react';



import LivingRoomTabClosed from './components/RoomTabs/LivingRoom/LivingRoomTabClosed'
import LivingRoomTabExpanded from './components/RoomTabs/LivingRoom/LivingRoomTabExpanded'
import BedRoomTabExpanded from './components/RoomTabs/Bedroom/BedRoomTabExpanded';
import BedRoomTabClosed from './components/RoomTabs/Bedroom/BedRoomTabClosed';
import KitchenTabExpanded from './components/RoomTabs/Kitchen/KitchenTabExpanded';
import KitchenTabClosed from './components/RoomTabs/Kitchen/KitchenTabClosed';
import BathroomTabExpanded from './components/RoomTabs/Bathroom/BathroomTabExpanded'
import BathroomTabClosed from './components/RoomTabs/Bathroom/BathroomTabClosed';
import KidsRoomTabClosed from './components/RoomTabs/KidsRoom/KidsRoomTabClosed';
import KidsRoomTabExpanded from './components/RoomTabs/KidsRoom/KidsRoomTabExpanded';
import LoundryRoomTabClosed from './components/RoomTabs/LoundryRoom/LoundryRoomTabClosed';
import LoundryRoomTabExpanded from './components/RoomTabs/LoundryRoom/LoundryRoomTabExpanded';
import OutsideTabClosed from './components/RoomTabs/Outside/OutsideTabClosed';
import OutsideTabExpanded from './components/RoomTabs/Outside/OutsideTabExpanded';

function App() {

  const [LivingRoomTab, setLivingRoomTab] = useState(false);
  const [BedRoomTab, setBedRoomTab] = useState(false);
  const [KitchenTab, setKitchenTab] = useState(false);
  const [BatroomTab, setBatroomTab] = useState(false);
  const [KidsRoomTab, setKidsRoomTab] = useState(false);
  const [LoundryRoomTab, setLoundryRoomTab] = useState(false);
  const [OutsideTab, setOutsideTab] = useState(false);


  return (
    <div className="App" >
      <div onClick={(e) => {setLivingRoomTab(true)}} >
        {!!LivingRoomTab 
        ? <LivingRoomTabExpanded setLivingRoomTab={setLivingRoomTab} LivingRoomTab={LivingRoomTab}/> 
        : <LivingRoomTabClosed />
        }
      </div>
      <div onClick={() => setKitchenTab(true)}>
        {!!KitchenTab ? <KitchenTabExpanded /> : <KitchenTabClosed />}
      </div>
      <div onClick={() => setBedRoomTab(true)}>
        {!!BedRoomTab ? <BedRoomTabExpanded /> : <BedRoomTabClosed />}
      </div>
      <div onClick={() => setKidsRoomTab(true)}>
        {!!KidsRoomTab ? <KidsRoomTabExpanded /> : <KidsRoomTabClosed />}
      </div>
      <div onClick={() => setBatroomTab(true)}>
        {!!BatroomTab ? <BathroomTabExpanded /> : <BathroomTabClosed />}
      </div>
      <div onClick={() => setLoundryRoomTab(true)}>
        {!!LoundryRoomTab ? <LoundryRoomTabExpanded /> : <LoundryRoomTabClosed />}
      </div>
      <div onClick={() => setOutsideTab(true)}>
        {!!OutsideTab ? <OutsideTabExpanded /> : <OutsideTabClosed />}
      </div>
    </div>
  );
}

export default App;
