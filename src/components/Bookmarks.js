import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SampleData from "../sampleData";
import Spinner from "../components/loading/Spinner";
export default function Bookmarks(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(SampleData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Spinner />;
  return (
    <PageWrapper>
      <h1>Bookmarks</h1>
      <div>
        {data.bookmarkProfile.map(d => (
          <div key={d.id}>
            <h1>Links from {d.name}</h1>
            <LinkWrapper>
              {d.links.map(l => (
                <Box key={l.id}>
                  <h2>{l.name}</h2>
                  <p>{l.description}</p>
                  <p>Category: {l.category}</p>
                  <a href={l.url}>{l.url}</a>
                </Box>
              ))}
            </LinkWrapper>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  padding: 10px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
