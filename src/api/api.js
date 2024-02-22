import { token } from "./config.js";

const URL = "https://striveschool-api.herokuapp.com/";

export const getBooks = async () => {
  const response = await fetch(URL + `books/`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};

export const getBookComments = async (asin) => {
  const response = await fetch(URL + `api/books/${asin}/comments/`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};

export const addBookComment = async (comment) => {
  const response = await fetch(URL + `api/comments/`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
  return await response.json();
};

export const modifyBookComment = async (commentId, comment) => {
  const response = await fetch(URL + `comments/${commentId}`, {
    method: "PUT",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(comment),
  });
  return await response.json();
};

export const deleteBookComment = async (commentId) => {
  const response = await fetch(URL + `comments/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};
