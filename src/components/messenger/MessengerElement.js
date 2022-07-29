import { useEffect, useState } from "react";
import { fetchAllInfo } from "../../store/actions/information";
import fetchTime from "../post/fetchTime";

export const LastMessElement = ({ mess, currentId }) => {
  // console.log("current id recieve", currentId);
  const id = currentId === mess.userFrom ? mess.userTo : mess.userFrom;
  const [oppUserInfo, setOppUserInfo] = useState({});
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      setOppUserInfo(data);
    });
  }, [id]);
  return (
    <li>
      <a href={`http://localhost:3000/messenger/${oppUserInfo.id}`}>
        <div className="message-avatar">
          <i className="status-icon status-online"></i>
          <img src={oppUserInfo.avatar} alt="" />
        </div>

        <div className="message-by">
          <div className="message-by-headline">
            <h5>{oppUserInfo.fullname}</h5>
            <span>{fetchTime(mess.dateTime)}</span>
          </div>
          <p>{mess.content}</p>
        </div>
      </a>
    </li>
  );
};

export const BubleMe = ({ message, avatar }) => {
  return (
    <>
      <div className="message-bubble me">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src={avatar}
              alt=""
            />
          </div>
          <div className="message-text">
            <div>{message}</div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export const BubleOpp = ({ message, avatar }) => {
  return (
    <div className="message-bubble">
      <div className="message-bubble-inner">
        <div className="message-avatar">
          <img
            src={avatar}
            alt=""
          />
        </div>
        <div className="message-text">
          <p>{message}</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export const ChatHistory = () => {
  return (
    <div className="message-content-inner">
      <div className="message-bubble me">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021"
              alt=""
            />
          </div>
          <div className="message-text">
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod
              laoreet.
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="message-bubble">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9"
              alt=""
            />
          </div>
          <div className="message-text">
            <p>
              Laoreet. dolore magna imperdiet quod mazim placerat facer possim.
              👍
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="message-bubble me">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021"
              alt=""
            />
          </div>
          <div className="message-text">
            <p>Albuom commodo consequat. 😉</p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="message-bubble me">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021"
              alt=""
            />
          </div>
          <div className="message-text">
            <p>Option congue nihil imperdiet mazim placerat facer possim.</p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="message-bubble">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9"
              alt=""
            />
          </div>
          <div className="message-text">
            <p>
              Nam liber tempor cum soluta nobis eleifend doming id quod mazim
              placerat 😎
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="message-bubble me">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=kKT9dPX7P3gAX_6nekZ&tn=1EWs77YRhzmoYX5L&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8A91q4rkKDvmbM1AXjNMUZOI6mA_FlvdRtD3L62ZN-KA&oe=6255F021"
              alt=""
            />
          </div>
          <div className="message-text">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 🙂</p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="message-bubble">
        <div className="message-bubble-inner">
          <div className="message-avatar">
            <img
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/137557375_2916092331943656_2214375182347264348_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vFiwvOBlVaIAX-WY4Fs&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_9qaow6lAynJ77fQ_qXgtTTCKy09n7AFGm2x5f_BJi2w&oe=625385C9"
              alt=""
            />
          </div>
          <div className="message-text">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};
