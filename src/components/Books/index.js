import React from 'react';
import BookCard from '../BookCard';

// style
import './BooksStyle.css';

const Books = () => {
  return (
    <div className="books">
      <div className="columns">
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1445998559126-132150395033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Angels and demons"
            bookAuthor="Leonardo Da Vinci"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1559304091-826325d9b20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Angels and demons"
            bookAuthor="Leonardo Da Vinci"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1559366677-eaeffd144238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Angels and demons"
            bookAuthor="Leonardo Da Vinci"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1539351761715-02601e07fadb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="African Child"
            bookAuthor="Chilombo Lombo"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Angels and demons"
            bookAuthor="Leonardo Da Vinci"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Living with books"
            bookAuthor="Daniel Windman"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1539351761715-02601e07fadb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="African Child"
            bookAuthor="Chilombo Lombo"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Angels and demons"
            bookAuthor="Leonardo Da Vinci"
          />
        </div>
        <div className="md-col-4">
          <BookCard
            bookImage="https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            bookTitle="Living with books"
            bookAuthor="Daniel Windman"
          />
        </div>
      </div>
    </div>
  )
}

export default Books;