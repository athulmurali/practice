import React, { useState, useEffect } from "react";

const cardStyle = {
  maxWidth: "200px",
  border: "0.1rem solid",
  borderRadius: "2rem",
  backgroundImage: "linear-gradient(to right, black 0%, gray 100%)",
  alignItems: "center",
  minWidth: "200px",
};
const cardTitleStyle = {
  fontSize: "medium",
};
const cardBodyStyle = {
  display: "flex",
  justifyConent: "space-between",
  fontSize: "small",
};
const Card = ({ title, body, style, titleStyle, bodyStyle }) => {
  return (
    <div style={style || cardStyle}>
      <div style={titleStyle || cardTitleStyle}>{title}</div>
      <div style={bodyStyle || cardBodyStyle}>{body}</div>
    </div>
  );
};

const CardPage = () => {
  const [cards, setCards] = useState([]);

  async function fetchCards() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchResp = await fetch(url);
    const cardsResult = await fetchResp.json();
    const firstN = 10 + 1;
    setCards(cardsResult.slice(0, firstN));
  }
  useEffect(() => fetchCards, []);
  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        overflowY: "hidden",
        gap: "2rem",
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
        background: "gray",
      }}
    >
      {cards.map(({ title, body, style, id }) => (
        <Card title={title} body={body} style={style} key={id} />
      ))}
    </div>
  );
};

export default CardPage;
