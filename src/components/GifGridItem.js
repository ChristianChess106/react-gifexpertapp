import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    /* console.log(id,title); */
    return (
        <div className="card animate__fadeInDown">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
