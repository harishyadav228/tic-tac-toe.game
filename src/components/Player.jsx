import { useState } from "react";


export default function Player( {initaName, symbol, isActive, onChangeName}){

  const[ playerName , setPlayerName] = useState(initaName);

  const [isEditing, setIsEditing ] = useState(false);

  function handleEditingClick() {
    setIsEditing((editing)=>!editing);

    if (isEditing){
      onChangeName(symbol,playerName)
      }
    }


  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
    <input type="text" required value={playerName} onChange={handleChange}/>
  );
    //let btnCaption = 'Save';
  }

    return(

        <li className={isActive ? 'active' : undefined}>
           <span className="player">
               {editablePlayerName}
               <span className="player-symbol">{symbol}</span>
           </span>
           <button onClick={handleEditingClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
      
    );
}