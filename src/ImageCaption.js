import React from 'react';

class ImageCaption extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.source || 'http://placekitten.com/g/210/210'} alt=""/>
                <figcaption>
                    {this.props.text}
                </figcaption>
            </figure>
        );
    }
}

export default ImageCaption;