"use client";

import axios from "axios";

import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState<string>("");
  const [at, setAT] = useState<string>("");

  const test = async (index: number) => {
    const res = await axios.get("/api/test", {
      headers: {
        Authorization: at,
      },
    });
    console.error(index + " 번째 -> ", res.data);
  };

  const handleClick = () => {
    if (at.length > 20)
      for (let i = 1; i <= parseInt(num); i++)
        setTimeout(() => test(i), i * 40);
  };

  return (
    <main>
      <input
        placeholder="횟수"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <input
        placeholder="accessToken"
        type="text"
        value={at}
        onChange={(e) => setAT(e.target.value)}
      />
      <button onClick={handleClick}>실행</button>
    </main>
  );
}
