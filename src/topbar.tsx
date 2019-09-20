import React from "react";
import TopbarLink from "./topbarLink";
import Path from "./path";

export default class Topbar extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="topbar">
                <TopbarLink to={Path.Home} />
            </div>
        );
    }
}
