import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import './BlogItem.css';

const BlogItem = (props) => {
   const auth = useContext(AuthContext);
   const [showMap, setShowMap] = useState(false);
   const [showConfirmModal, setShowConfirmModal] = useState(false);

   const opemMapHandler = () => setShowMap(true);

   const closeMapHandler = () => setShowMap(false);

   const showDeleteWarningHandler = () => {
      setShowConfirmModal(true);
   };

   const cancelDeleteHandler = () => {
      setShowConfirmModal(false);
   };

   const confirmDeleteHandler = () => {
      setShowConfirmModal(false);
   };

   return (
      <React.Fragment>
         <Modal
            show={showMap}
            onCancel={closeMapHandler}
            header={props.address}
            contentClass="blog-item__modal-content"
            footerClass="blog-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>Close</Button>}
         >
            <div className="map-container">
               <h2>The Map</h2>
            </div>
         </Modal>
         <Modal
            show={showConfirmModal}
            onCancel={cancelDeleteHandler}
            header="Are you sure?"
            footerClass="blog-item__modal-actions"
            footer={
               <React.Fragment>
                  <Button inverse onCancel={cancelDeleteHandler}>
                     CANCEL
                  </Button>
                  <Button danger onCancel={confirmDeleteHandler}>
                     DELETE
                  </Button>
               </React.Fragment>
            }
         >
            <p>Do you want to proceed and delete this blog?</p>
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
                  <Button inverse onClick={opemMapHandler}>
                     View
                  </Button>
                  {auth.isLoggedIn && (
                     <Button to={`/blogs/${props.id}`}>Edit</Button>
                  )}
                  {auth.isLoggedIn && (
                     <Button danger onCancel={showDeleteWarningHandler}>
                        Delete
                     </Button>
                  )}
               </div>
            </Card>
         </li>
      </React.Fragment>
   );
};

export default BlogItem;
