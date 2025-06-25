CREATE DATABASE booknote;

CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    isbn BIGINT UNIQUE,
    author TEXT,
    thought TEXT,
    date DATE,
    rating INTEGER
);

INSERT INTO book (title, isbn, author, thought, date, rating)
VALUES (
    'The Hobbit',
    9780547928227,
    'J.R.R. Tolkien',
    'An adventurous and timeless fantasy classic.',
    '2025-06-24',
    5
);

INSERT INTO book (title, isbn, author, thought, date, rating)
VALUES (
    'Atomic Habits',
    9780735211292,
    'James Clear',
    'A practical and motivating guide to building better habits, one step at a time.',
    '2025-06-01',
    4
);

