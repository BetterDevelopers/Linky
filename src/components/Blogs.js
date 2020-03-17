import React, { useState, useEffect } from "react";

export default function Blogs(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h1>Hello from the blog page</h1>
      <h3>ID from router: {props.blogID}</h3>
      <div>
        <h1>Fake API data</h1>
        {data.map(d => (
          <div key={d.id}>
            <h2>ID: {d.id}</h2>
            <h2>Title: {d.title}</h2>
            <h4>Body: {d.body}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
