export const FETCHFRIENDS = "FETCHFRIENDS";
export const FETCHPOSTS = "FETCHPOSTS";
export const FETCHBASICINFO = "FETCHBASICINFO";
export const FETCHALLGROUPBYUSER = "FETCHALLGROUPBYUSER";
export const FETCHALLPAGEBYUSER = "FETCHALLPAGEBYUSER";

export const fetchFriends = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/friend?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const fetchPost = async (id) => {
    return fetch(`http://localhost:8080/FakeStory/api/admin/post?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export const fetchAllInfo = async (id) => {
    return fetch(`http://localhost:8080/FakeStory/api/admin/user?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export const fetchAllGroupByUser = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/FindGroupByUserId?id=${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  });
}
