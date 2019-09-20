import React from "react";
import {Link} from "react-router-dom";
import "style/topbarLink.css";

type Props = {
    readonly text: string;

    readonly to: string;

    readonly active?: boolean;
};

export default class TopbarLink extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <Link data-active={this.props.active} to={this.props.to} className="topbar-link">
                {this.props.text}
            </Link>
        );
    }
}
