import React, { Fragment, useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading ? "Cargando.." : "Cargado.."}
      {
        <div className="card-grid">
          {data.map((img) => {
            return <GifGridItem key={img.id} {...img}></GifGridItem>;
          })}
        </div>
      }
    </Fragment>
  );
};
