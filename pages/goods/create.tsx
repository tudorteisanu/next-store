import React from "react";
import Default from "../../layouts/default";
import CreateGood from "../../components/goods/CreateGoods";

export default class Create extends React.Component {
  render() {
    return (

        <Default>
      <div className="sm:max-w-lg mx-auto">
        <CreateGood />
      </div>
        </Default>
    );
  }
}
