import React from 'react';

const Form = () => (
  <>
    <form action="" className="form">
      <div className="title">ADD NEW BOOK</div>
      <div className="input">
        <input type="text" placeholder="Add book title" />
        <input type="text" placeholder="Add book author" />
        <button type="submit" className="submit">Add Book</button>
      </div>
    </form>
  </>
);

export default Form;
