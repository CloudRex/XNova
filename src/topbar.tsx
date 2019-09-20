import React from "react";
import TopbarLink from "./topbarLink";
import Path from "./path";
import "style/topbar.css";

export default class Topbar extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="topbar">
                <TopbarLink active text="Records" to={Path.Records} />
                <TopbarLink text="Messages" to={Path.Messages} />
                <TopbarLink text="Battles" to={Path.Battles} />
                <TopbarLink text="Search" to={Path.Search} />
                <TopbarLink text="Friends" to={Path.Friends} />
                <TopbarLink text="Simulator" to={Path.Simulator} />
                <TopbarLink text="Configuration" to={Path.Configuration} />
                <TopbarLink text="Exit" to={Path.Exit} />
            </div>
        );
    }
}
