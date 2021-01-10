import React from "react";

export default function LibroTapa({ imgPortada }) {
  const url = `http://drive.google.com/uc?export=view&id=${imgPortada}`;

  return (
    <div>
      <img
        src={url}
        className="img-fluid rounded img-thumbnail imagenalto"
            height="130px"
            width="150px"
            alt="Portada"
      />
    </div>
  );
}
