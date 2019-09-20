import React from "react";
import {Link} from "react-router-dom";

type Props = {
    readonly text: string;

    readonly to: string;
};

export default class TopbarLink extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <Link to={this.props.to} className="topbar-link">
                {this.props.text}
            </Link>
        );
    }
}
