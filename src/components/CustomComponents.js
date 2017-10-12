import React from 'react';
import { withRouter } from 'react-router-dom';

class HomeComponent extends React.Component {
    goTo(path) {
        console.info('Path requested: %s; Props -> %o', path, this.props);
        const { history } = this.props;
        // programatically navigate
        history.push(path);
    }
    render() {
        console.info('Props -> %o', this.props);
        return (
            <div>
                <h1>This is Home</h1>
                <button onClick={() => this.goTo('/about')}>About</button>
                <div style={{ padding: "50px 25px" }}>
                    <a href="#/about">Use a hyperlink to go to About</a>
                </div>
            </div>
        )
    }
}
export const Home = withRouter(HomeComponent);

const AboutComponent = (props) => {
    return (
        <div>
            <h1>This is About</h1>
        </div>
    )
}
export const About = withRouter(AboutComponent);