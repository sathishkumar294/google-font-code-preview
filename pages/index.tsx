import { Container, Spacer } from "@nextui-org/react";
import Head from "next/head";
import FontInput from "../components/font-input";
import IntellijIDE from "../components/intellij/intellij";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container
      fluid
      justify="center"
      alignItems="flex-start"
      style={{ padding: "32px" }}
    >
      <FontInput></FontInput>
      <Spacer y={2}></Spacer>
      <IntellijIDE></IntellijIDE>
    </Container>
  );
}
