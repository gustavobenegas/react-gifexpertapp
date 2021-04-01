import React, { Fragment } from "react";

export default function GifGridItem({ id, title, url }) {
  return (
    <Fragment>
      <div className='card animate__animated animate__bounce'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
      </div>
    </Fragment>
  );
}
