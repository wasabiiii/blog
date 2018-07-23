import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({data,tagclass}) => {
    let tag_list = data.map(function (item,index) {
        const link = `/tag/${item}`;
        return <Link to={link} className={"btn btn-xs btn-default "+tagclass} key={index}>{item}</Link>;

    });
    return (
        <span>
            {tag_list}
        </span>
    )
}


export default Tag;