"use client";
import { Button } from "../components";

export default function Home() {
  return (
    <Button onPress={() => alert("Clicked!")}>
      <Button.Text>Click me!</Button.Text>
    </Button>
  );
}
