import React from "react";
import HomeContent from "../components/home/HomeContent";
import Default from "../layouts/default";

export default class Home extends React.Component {
  render() {
    return (
      <Default>
        <div className="sm:max-w-5xl p-10 mx-auto">
          <HomeContent/>
        </div>
      </Default>
    );
  }
}
