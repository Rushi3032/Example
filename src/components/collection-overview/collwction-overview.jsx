import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Collection from "../preview-collection.component/preview-collection.component";
import {selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.css";


const CollectionsOverview =({collections})=>(
    <div className='collections-overview'> {
        collections.map(({id, ...otherCollectionProps})=>(<Collection key={id}{...otherCollectionProps}/>))}</div>
    
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
   });

export default connect(mapStateToProps)(CollectionsOverview);