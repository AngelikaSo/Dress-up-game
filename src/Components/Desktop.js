import Chat from "./Chat";
import Games from "./Games";
import MyComputer from "./MyComputer";
import Files from "./Files";
import Trash from "./Trash";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="desktop-body">
        <Games />
        <MyComputer />
        <Files />
        <Chat />
        <Trash />
      </div>
      <nav className="desktop-nav">
        <button className="desktop-start">Start</button>
      </nav>
    </div>
  );
};
export default Desktop;
