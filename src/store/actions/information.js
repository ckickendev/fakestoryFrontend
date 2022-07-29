import { async } from "@firebase/util";

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
  console.log(
    "Fetch post by id",
    `http://localhost:8080/FakeStory/api/admin/post?id=${id}`
  );
  return fetch(`http://localhost:8080/FakeStory/api/admin/post?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchPostFeed = async (user_id, offset) => {
  return fetch(
    `http://localhost:8080/FakeStory/api/filter/postuser?id=${user_id}&offset=${offset}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchPostByUserId = async (user_id) => {
  return fetch(`http://localhost:8080/FakeStory/api/post/user?id=${user_id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllInfo = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/user?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllPostInGroup = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/post/group?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetch9Friends = async (id) => {
  return fetch(
    `http://localhost:8080/FakeStory/FindUserByUserId?id=${id}&number=9`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllNotificationById = async (id) => {
  return fetch(
    `http://localhost:8080/FakeStory/api/admin/notification?id=${id}&number=9`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const checkStatusFriend = async (userId, userCurrentId) => {
  // console.log(`http://localhost:8080/FakeStory/user/relationship?userId=${userId}&userCurrentId=${userCurrentId}`)
  if (userId === userCurrentId) {
    return 0;
  } else {
    return fetch(
      `http://localhost:8080/FakeStory/user/relationship?userId=${userId}&userCurrentId=${userCurrentId}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
};

export const checkFullStatusFriend = async (userId, userCurrentId) => {
  if (userId === userCurrentId) {
    return 0;
  } else {
    return fetch(
      `http://localhost:8080/FakeStory/api/relationship/full/user?userId=${userId}&userCurrentId=${userCurrentId}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
};

export const checkRecieveOrSent = async (userId, userCurrentId) => {
  return fetch(
    `http://localhost:8080/FakeStory/relationship/friend/request?userId=${userId}&userCurrentId=${userCurrentId}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const sendFriendRequest = async (userId, userCurrentId, type) => {
  console.log("userId, userCurrentId, type", userId, userCurrentId, type);
  if (userId === userCurrentId) {
    return 0;
  } else {
    return fetch(
      `http://localhost:8080/FakeStory/addFriendRequest?userId=${userId}&userCurrentId=${userCurrentId}&type=${type}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }
};

export const fetch9Photos = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/photos/userId?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchNumberFriends = async (id, number) => {
  return fetch(
    `http://localhost:8080/FakeStory/FindUserByUserId?id=${id}&number=${number}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchGroupById = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/group?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllMembersByGroupId = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/member/group?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export const fetchAllPeoplesByPageId = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/people/page?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllGroupByUser = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/FindGroupByUserId?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllPagesByUser = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/FindPageByUserId?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchPageInfoById = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/page?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllUserInfo = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/user?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllCommentByPostId = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/comment/postId?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchIsReact = async (user, post) => {
  return fetch(
    `http://localhost:8080/FakeStory/api/react/userId?user=${user}&post=${post}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchGroupByPostId = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/nameGroup/post?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchLikePageInPage = async (userId, pageId) => {
  return fetch(
    `http://localhost:8080/FakeStory/api/rolepage/page?userId=${userId}&pageId=${pageId}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchLastMessage = async (userId) => {
  return fetch(
    `http://localhost:8080/FakeStory/api/messenger/allmess?id=${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchAllMessBetweenTwoPeople = async (userId, oppId) => {
  return fetch(
    `http://localhost:8080/FakeStory/api/admin/messagesbetween?id=${userId}&oppId=${oppId}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
