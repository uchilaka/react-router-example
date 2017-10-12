import React from 'react';

export class HappyPuppy extends React.Component {
    render() {
        return (
            <div>
                <img src="http://i.imgur.com/8PHxu6N.jpg" alt="Happy Puppy" />
            </div>
        )
    }
}

export class SadPuppy extends React.Component {
    render() {
        return (
            <div>
                <img src="/assets/Sad_puppy.png" alt="Sad Puppy" />
            </div>
        )
    }
}