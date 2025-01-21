import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <Link to="/books">
        <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          BookList
        </button>
      </Link>
    </div>
  );
}

function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((response) => {
        setBooks(response.data.items || []);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to load books. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading books...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="p-4 border rounded shadow hover:shadow-md transition"
        >
          <h2 className="font-bold">{book.volumeInfo.title}</h2>
          <p className="text-gray-600">
            {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
          </p>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
            alt={book.volumeInfo.title || "No Image Available"}
            className="my-2"
          />
          <Link to={`/books/${book.id}`}>
            <button className="text-blue-500 hover:underline">
              Lihat Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        setBook(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to load book details. Please try again later.");
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <div>Loading book details...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{book.volumeInfo.title}</h2>
      <p className="text-gray-600">
        {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
      </p>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={book.volumeInfo.title || "No Image Available"}
        className="my-4"
      />
      <p>{book.volumeInfo.description || "No description available."}</p>
      <Link to="/books">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Books
        </button>
      </Link>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/books/:id",
    element: <BookDetail />,
  },
]);

function BookVerse() {
  return <RouterProvider router={router} />;
}

export default BookVerse;
