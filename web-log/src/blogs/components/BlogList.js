import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import './BlogList.css'

const BlogList = props => {
    if (props.items.length === 0) {
        return <div className="blog-list center">
            <Card>
                <h2>No Blogs Found.</h2>
                <button>Share a Blog</button>
            </Card>
        </div>
    }
};

export default BlogList;