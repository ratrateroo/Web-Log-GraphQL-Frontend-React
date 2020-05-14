import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './BlogItem.css';

const BlogItem = props => {
    return <li className="blog-item">
        <Card className="blog-item__content">
        <div className="blog-item__image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="blog-item__info">
            <h2>{props.title}</h2>
<h3>{props.address}</h3>
        <p>{props.description}</p>
        </div>
        <div className="blog-item__actions">
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        </Card>
    </li>
};

export default BlogItem;