export const ADDPOST = "ADDPOST";

export const addPost = async (data) => {
  return fetch("http://localhost:8080/FakeStory/api/admin/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 0,
      content: data.content,
      image: data.image,
      user: data.user_id,
      react: 0,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export const reactPost = async (data) => {
  return fetch("http://localhost:8080/FakeStory/api/admin/react", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: data.type, user: data.user, post: data.post }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export const addMoreComment = async (data) => {
  // console.log(data);
  return fetch("http://localhost:8080/FakeStory/api/admin/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: data.userid,
      content: data.content,
      post_id: data.post_id,
      rep_id: data.rep_id,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const addReact = async (data) => {
  return fetch("http://localhost:8080/FakeStory/api/admin/react", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: data.type, user: data.user, post: data.post }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const editComment = async (data) => {
  return fetch("http://localhost:8080/FakeStory/api/admin/post", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      content: data.content,
      image: data.image,
      user: data.user,
      react: data.react,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const deletePostById = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/post`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const deleteCommentById = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/comment`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
};
