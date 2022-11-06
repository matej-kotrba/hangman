import type { NextPage } from "next";
import ContextWrapper from "../contexts/context";
import Stickman from "../components/Stickman/Stickman";
import StickmanTitle from "../components/Stickman/StickmanTitle";
import Keyboard from "../components/Keyboard/Keyboard";
import Notification from "../components/notification/Notification";

const Home: NextPage = () => {
  return (
    <ContextWrapper>
      <>
        <Notification />
        <Stickman />
        <StickmanTitle />
        <Keyboard />
      </>
    </ContextWrapper>
  );
};

export default Home;
