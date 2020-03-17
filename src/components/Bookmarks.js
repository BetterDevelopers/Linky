import React, { useState, useEffect } from "react";

export default function Bookmarks(props) {
  const data = require("../sampleData.json");
  return (
    <div>
      <h1>Bookmarks</h1>
      <div>
        {data.bookmarkProfile.map(d => (
          <div key={d.id}>
            <h1>Name: {d.name}</h1>
            <h3>ID: {d.id}</h3>
            <h1>Links</h1>
            {d.links.map(l => (
              <div key={l.id}>
                <h2>{l.name}</h2>
                <p>{l.description}</p>
                <p>Category: {l.category}</p>
                <a href={l.url}>{l.url}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
