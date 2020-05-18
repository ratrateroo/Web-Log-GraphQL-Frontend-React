import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
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
            <Button inverse>View</Button>
            <Button to={`/blogs/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
        </div>
        </Card>
    </li>
};

export default BlogItem;