import React from "react";
import Dashboard from "../components/lobby/Dashboard";
import Games from "../components/lobby/Games";
import Text from "../components/lobby/Text";
import Footer from "../components/lobby/Footer";
export default function Lobby() {
  return (
    <div>
      <Dashboard />
      <Games />
      <Text />
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}
