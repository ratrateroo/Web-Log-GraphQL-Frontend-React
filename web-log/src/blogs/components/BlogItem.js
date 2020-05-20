import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import './BlogItem.css';

const BlogItem = props => {
    const [showMap, setShowMap] = useState(false);

    const opemMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    return 
    <React.Fragment>
        <Modal show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="blog-item__modal-content"
        footerClass="blog-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}>
            <div className="map-container">
                <h2>The Map</h2>
            </div>
        </Modal>
        <li className="blog-item">
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
                    <Button inverse onClick={opemMapHandler}>View</Button>
                    <Button to={`/blogs/${props.id}`}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            </Card>
        </li>
    </React.Fragment>
};

export default BlogItem;