import type { NextPage } from "next";
import ContextWrapper from "../contexts/context";
import Stickman from "../components/Stickman/Stickman";
import StickmanTitle from "../components/Stickman/StickmanTitle";
import Keyboard from "../components/Keyboard/Keyboard";
import Notification from "../components/notification/Notification";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <ContextWrapper>
      <>
        <Head>
          <title>Hangman</title>
        </Head>
        <Notification />
        <Stickman />
        <StickmanTitle />
        <Keyboard />
      </>
    </ContextWrapper>
  );
};

export default Home;
