import React from "react";
import Default from "../../layouts/default";
import CreateCategory from "../../components/categories/CreateCategory";

export default class Create extends React.Component {
    render() {
        return (
            <Default>
                <div className="sm:max-w-lg mx-auto">
                    <CreateCategory />
                </div>
            </Default>
        );
    }
}
