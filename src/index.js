import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const AmazonPage = () => {
  return (
    <>
      <Header />
      <BookList />
    </>
  );
};

const BookList = () => {
  return (
    <section className="books">
      <BookOne />
      <BookTwo />
      <BookThree />
    </section>
  );
};

const BookOne = () => (
  <article className="bookOne">
    <ImageOne />
    <TitleOne />
    <AuthorOne />
  </article>
);
const BookTwo = () => (
  <article className="bookTwo">
    <ImageTwo />
    <TitleTwo />
    <AuthorTwo />
  </article>
);
const BookThree = () => (
  <article className="bookThree">
    <ImageThree />
    <TitleThree />
    <AuthorThree />
  </article>
);

const Header = () => <h2>Amazon Best Sellers Books</h2>;

const ImageOne = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL900_SR900,600_.jpg"
    alt="Hillbilly Elegy: A Memoir of a Family and Culture in Crisis"
  />
);
const ImageTwo = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81PIs7jhL0L._AC_UL600_SR600,400_.jpg"
    alt="Never Lie"
  />
);
const ImageThree = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL600_SR600,400_.jpg"
    alt="The 48 Laws of Power"
  />
);

const TitleOne = () => {
  return <h2>Hillbilly Elegy: A Memoir of a Family and Culture in Crisis</h2>;
};
const TitleTwo = () => {
  return <h2>Never Lie</h2>;
};
const TitleThree = () => {
  return <h2>The 48 Laws of Power</h2>;
};
const AuthorOne = () => <h4>J. D. Vance</h4>;
const AuthorTwo = () => <h4>Freida McFadden</h4>;
const AuthorThree = () => <h4>Robert Greene</h4>;

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AmazonPage />);
