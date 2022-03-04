import React from 'react'
import "../css/Page.css";

function Page() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="ui-block">
                        <div className="top-header top-header-favorit">
                            <div className="top-header-thumb">
                                <img src="img/top-header2.jpg" alt="nature"/>
                                <div className="top-header-author">
                                    <div className="author-thumb">
                                        <img src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.18169-9/26220229_2415095798502382_611176174792646765_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aQwmC359U0cAX9suw2K&_nc_ht=scontent.fdad1-3.fna&oh=00_AT8a7jLm3IDn8l9s56dCX8cANTUuaAKQiUGKVm5uy9nTHg&oe=624490F1" alt="author"/>
                                    </div>
                                    <div className="author-content">
                                        <a href="/" className="h3 author-name">Green Goo Rock</a>
                                        <div className="country">Rock Band  |  San Francisco, CA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-section">
                                <div className="row">
                                    <div className="col col-xl-8 m-auto col-lg-8 col-md-12">
                                        <ul className="profile-menu">
                                            <li>
                                                <a href="/" className="active">Timeline</a>
                                            </li>
                                            <li>
                                                <a href="/">About</a>
                                            </li>
                                            <li>
                                                <a href="/">Photos</a>
                                            </li>
                                            <li>
                                                <a href="/">Videos</a>
                                            </li>
                                            <li>
                                                <a href="/">Statistics</a>
                                            </li>
                                            <li>
                                                <a href="/">Events</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="control-block-button">
                                    <a href="/" className="btn btn-control bg-primary">
                                        <svg className="olymp-star-icon"><use href="svg-icons/sprites/icons.svg/olymp-star-icon"></use></svg>
                                    </a>

                                    <a href="/" className="btn btn-control bg-purple">
                                        <svg className="olymp-chat---messages-icon"><use href="svg-icons/sprites/icons.svg/olymp-chat---messages-icon"></use></svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-sm-12 col-12">
                    <div id="newsfeed-items-grid">
                        <div className="ui-block">
                             {/* POSTTTTTT */}
                            
                            <article className="hentry post">
                            
                                <div className="post__author author vcard inline-items">
                                    <img src="img/avatar5-sm.jpg" alt="author"/>
                            
                                    <div className="author-date">
                                        <a className="h6 post__author-name fn" href="/">Green Goo Rock</a>
                                        <div className="post__date">
                                            <time className="published" datetime="2017-03-24T18:18">
                                                4 hours ago
                                            </time>
                                        </div>
                                    </div>
                            
                                    <div className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Edit Post</a>
                                            </li>
                                            <li>
                                                <a href="/">Delete Post</a>
                                            </li>
                                            <li>
                                                <a href="/">Turn Off Notifications</a>
                                            </li>
                                            <li>
                                                <a href="/">Select as Featured</a>
                                            </li>
                                        </ul>
                                    </div>
                            
                                </div>
                            
                                <p>Hi guys! We just wanted to let everyone know that we are currently recording
                                    our new album “News of the Goo”. We’ll be playing one of our new songs this Friday at 8pm in
                                    our Fake Street 320 recording studio, come and join us!
                                </p>
                            
                                <div className="post-additional-info inline-items">
                            
                                    <a href="/" className="post-add-icon inline-items">
                                        <svg className="olymp-heart-icon"><use href="svg-icons/sprites/icons.svg/olymp-heart-icon"></use></svg>
                                        <span>36</span>
                                    </a>
                            
                                    <ul className="friends-harmonic">
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic9.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic10.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic11.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                    </ul>
                            
                                    <div className="names-people-likes">
                                        <a href="/">You</a>, <a href="/">Elaine</a> and
                                        <br/>34 more liked this
                                    </div>
                            
                            
                                    <div className="comments-shared">
                                        <a href="/" className="post-add-icon inline-items">
                                            <svg className="olymp-speech-balloon-icon"><use href="svg-icons/sprites/icons.svg/olymp-speech-balloon-icon"></use></svg>
                                            <span>17</span>
                                        </a>
                            
                                        <a href="/" className="post-add-icon inline-items">
                                            <svg className="olymp-share-icon"><use href="svg-icons/sprites/icons.svg/olymp-share-icon"></use></svg>
                                            <span>24</span>
                                        </a>
                                    </div>
                            
                            
                                </div>
                            
                                <div className="control-block-button post-control-button">
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-like-post-icon"><use href="svg-icons/sprites/icons.svg/olymp-like-post-icon"></use></svg>
                                    </a>
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-comments-post-icon"><use href="svg-icons/sprites/icons.svg/olymp-comments-post-icon"></use></svg>
                                    </a>
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-share-icon"><use href="svg-icons/sprites/icons.svg/olymp-share-icon"></use></svg>
                                    </a>
                            
                                </div>
                            
                            </article>
                            
                            {/* ENDDDD POSTTTT */}

                            
                            {/* COMMENTSSSS */}
                            
                            <ul className="comments-list">
                                <li className="comment-item">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/avatar2-sm.jpg" alt="author"/>
                            
                                        <div className="author-date">
                                            <a className="h6 post__author-name fn" href="/">Nicholas Grissom</a>
                                            <div className="post__date">
                                                <time className="published" datetime="2017-03-24T18:18">
                                                    28 mins ago
                                                </time>
                                            </div>
                                        </div>
                            
                                        <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                            
                                    </div>
                            
                                    <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                            
                                    <a href="/" className="post-add-icon inline-items">
                                        <svg className="olymp-heart-icon"><use href="svg-icons/sprites/icons.svg/olymp-heart-icon"></use></svg>
                                        <span>6</span>
                                    </a>
                                    <a href="/" className="reply">Reply</a>
                                </li>
                                <li className="comment-item">
                                    <div className="post__author author vcard inline-items">
                                        <img src="img/avatar19-sm.jpg" alt="author"/>
                            
                                        <div className="author-date">
                                            <a className="h6 post__author-name fn" href="/">Jimmy Elricson</a>
                                            <div className="post__date">
                                                <time className="published" datetime="2017-03-24T18:18">
                                                    2 hours ago
                                                </time>
                                            </div>
                                        </div>
                            
                                        <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                            
                                    </div>
                            
                                    <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                                        quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                    </p>
                            
                                    <a href="/" className="post-add-icon inline-items">
                                        <svg className="olymp-heart-icon"><use href="svg-icons/sprites/icons.svg/olymp-heart-icon"></use></svg>
                                        <span>8</span>
                                    </a>
                                    <a href="/" className="reply">Reply</a>
                                </li>
                            </ul>
                            
                            {/* ENDDĐ COMMENT */}

                            <a href="/" className="more-comments">View more comments <span>+</span></a>

                            
                            {/* COMMENT FORMMMMMM */}
                            
                            <form className="comment-form inline-items">
                            
                                <div className="post__author author vcard inline-items">
                                    <img src="img/author-page.jpg" alt="author"/>
                            
                                    <div className="form-group with-icon-right ">
                                        <textarea className="form-control" placeholder=""></textarea>
                                        <div className="add-options-message">
                                            <a href="/" className="options-message" data-toggle="modal" data-target="/update-header-photo">
                                                <svg className="olymp-camera-icon">
                                                    <use href="svg-icons/sprites/icons.svg/olymp-camera-icon"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                                <button className="btn btn-md-2 btn-primary">Post Comment</button>
                            
                                <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>
                            
                            </form>
                            
                            {/* END COMMENT FORMMMMMM */}
                        </div>

                        <div className="ui-block">
                        
                            {/* POSTTTT */}
                            
                            <article className="hentry post has-post-thumbnail">
                            
                                <div className="post__author author vcard inline-items">
                                    <img src="img/avatar5-sm.jpg" alt="author"/>
                            
                                    <div className="author-date">
                                        <a className="h6 post__author-name fn" href="/">Green Goo Rock</a>
                                        <div className="post__date">
                                            <time className="published" datetime="2017-03-24T18:18">
                                                March 8 at 6:42pm
                                            </time>
                                        </div>
                                    </div>
                            
                                    <div className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Edit Post</a>
                                            </li>
                                            <li>
                                                <a href="/">Delete Post</a>
                                            </li>
                                            <li>
                                                <a href="/">Turn Off Notifications</a>
                                            </li>
                                            <li>
                                                <a href="/">Select as Featured</a>
                                            </li>
                                        </ul>
                                    </div>
                            
                                </div>
                            
                                <p>Hey guys! We are gona be playing this Saturday of <a href="/">The Marina Bar</a> for their new Mystic Deer Party.
                                    If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!
                                </p>
                            
                                <div className="post-thumb">
                                    <img src="img/post__thumb1.jpg" alt=""/>
                                </div>
                            
                                <div className="post-additional-info inline-items">
                            
                                    <a href="/" className="post-add-icon inline-items">
                                        <svg className="olymp-heart-icon"><use href="svg-icons/sprites/icons.svg/olymp-heart-icon"></use></svg>
                                        <span>49</span>
                                    </a>
                            
                                    <ul className="friends-harmonic">
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic9.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic10.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic11.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                    </ul>
                            
                                    <div className="names-people-likes">
                                        <a href="/">Jimmy</a>, <a href="/">Andrea</a> and
                                        <br/>47 more liked this
                                    </div>
                            
                            
                                    <div className="comments-shared">
                                        <a href="/" className="post-add-icon inline-items">
                                            <svg className="olymp-speech-balloon-icon"><use href="svg-icons/sprites/icons.svg/olymp-speech-balloon-icon"></use></svg>
                                            <span>264</span>
                                        </a>
                            
                                        <a href="/" className="post-add-icon inline-items">
                                            <svg className="olymp-share-icon"><use href="svg-icons/sprites/icons.svg/olymp-share-icon"></use></svg>
                                            <span>37</span>
                                        </a>
                                    </div>
                            
                            
                                </div>
                            
                                <div className="control-block-button post-control-button">
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-like-post-icon"><use href="svg-icons/sprites/icons.svg/olymp-like-post-icon"></use></svg>
                                    </a>
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-comments-post-icon"><use href="svg-icons/sprites/icons.svg/olymp-comments-post-icon"></use></svg>
                                    </a>
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-share-icon"><use href="svg-icons/sprites/icons.svg/olymp-share-icon"></use></svg>
                                    </a>
                            
                                </div>
                            
                            </article>
                            
                            {/* END POSTTTTTTTTTTTT */}
                        </div>

                        <div className="ui-block">
                            
                            {/* POSTTTTTTT */}
                            
                            <article className="hentry post video">
                            
                                <div className="post__author author vcard inline-items">
                                    <img src="img/avatar5-sm.jpg" alt="author"/>
                            
                                    <div className="author-date">
                                        <a className="h6 post__author-name fn" href="/">Gren Goo Rock</a> shared a <a href="/">link</a>
                                        <div className="post__date">
                                            <time className="published" datetime="2017-03-24T18:18">
                                                March 4 at 2:05pm
                                            </time>
                                        </div>
                                    </div>
                            
                                    <div className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Edit Post</a>
                                            </li>
                                            <li>
                                                <a href="/">Delete Post</a>
                                            </li>
                                            <li>
                                                <a href="/">Turn Off Notifications</a>
                                            </li>
                                            <li>
                                                <a href="/">Select as Featured</a>
                                            </li>
                                        </ul>
                                    </div>
                            
                                </div>
                            
                                <p>Hey <a href="/">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p>
                            
                                <div className="post-video">
                                    <div className="video-thumb">
                                        <img src="img/video-youtube.jpg" alt=""/>
                                        <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video">
                                            <svg className="olymp-play-icon"><use href="svg-icons/sprites/icons.svg/olymp-play-icon"></use></svg>
                                        </a>
                                    </div>
                            
                                    <div className="video-content">
                                        <a href="/" className="h4 title">Killer Queen - Archiduke</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua...
                                        </p>
                                        <a href="/" className="link-site">YOUTUBE.COM</a>
                                    </div>
                                </div>
                            
                                <div className="post-additional-info inline-items">
                            
                                    <a href="/" className="post-add-icon inline-items">
                                        <svg className="olymp-heart-icon"><use href="svg-icons/sprites/icons.svg/olymp-heart-icon"></use></svg>
                                        <span>18</span>
                                    </a>
                            
                                    <ul className="friends-harmonic">
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic9.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic10.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img src="img/friend-harmonic11.jpg" alt="friend"/>
                                            </a>
                                        </li>
                                    </ul>
                            
                                    <div className="names-people-likes">
                                        <a href="/">Jenny</a>, <a href="/">Robert</a> and
                                        <br/>18 more liked this
                                    </div>
                            
                                    <div className="comments-shared">
                                        <a href="/" className="post-add-icon inline-items">
                                            <svg className="olymp-speech-balloon-icon"><use href="svg-icons/sprites/icons.svg/olymp-speech-balloon-icon"></use></svg>
                                            <span>0</span>
                                        </a>
                            
                                        <a href="/" className="post-add-icon inline-items">
                                            <svg className="olymp-share-icon"><use href="svg-icons/sprites/icons.svg/olymp-share-icon"></use></svg>
                                            <span>16</span>
                                        </a>
                                    </div>
                            
                            
                                </div>
                            
                                <div className="control-block-button post-control-button">
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-like-post-icon"><use href="svg-icons/sprites/icons.svg/olymp-like-post-icon"></use></svg>
                                    </a>
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-comments-post-icon"><use href="svg-icons/sprites/icons.svg/olymp-comments-post-icon"></use></svg>
                                    </a>
                            
                                    <a href="/" className="btn btn-control">
                                        <svg className="olymp-share-icon"><use href="svg-icons/sprites/icons.svg/olymp-share-icon"></use></svg>
                                    </a>
                            
                                </div>
                            
                            </article>
                            
                            {/* ENDDDD POSTTTT */}			
                        </div>
                    </div>
                    <a id="load-more-button" href="/" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>

                </div>

                <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Page Intro</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>
                        <div className="ui-block-content">
                            
                            {/* W-PERSONAL-INFOOOOO */}
                            
                            <ul className="widget w-personal-info item-block">
                                <li>
                                    <span className="text">We are Rock Band from Los Angeles, now based in San Francisco, come and listen to us play!</span>
                                </li>
                                <li>
                                    <span className="title">Created:</span>
                                    <span className="text">September 17th, 2013</span>
                                </li>
                                <li>
                                    <span className="title">Based in:</span>
                                    <span className="text">San Francisco, California</span>
                                </li>
                                <li>
                                    <span className="title">Contact:</span>
                                    <a href="/" className="text">greengoo_gigs@youmail.com</a>
                                </li>
                                <li>
                                    <span className="title">Website:</span>
                                    <a href="/" className="text">www.ggrock.com</a>
                                </li>
                                <li>
                                    <span className="title">Favourites:</span>
                                    <a href="/" className="text">5630 </a>
                                </li>
                            </ul>
                            
                            {/* ENDDD W-PERSONAL-INFOOOOO */}
                            {/* W-SOCIALS */}
                            
                            <div className="widget w-socials">
                                <h6 className="title">Other Social Networks:</h6>
                                <a href="/" className="social-item bg-facebook">
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    Facebook
                                </a>
                                <a href="/" className="social-item bg-twitter">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                    Twitter
                                </a>
                                <a href="/" className="social-item bg-dribbble">
                                    <i className="fab fa-dribbble" aria-hidden="true"></i>
                                    Dribbble
                                </a>
                            </div>
                            
                            
                            {/* ENDD W-SOCIALS */}
                        </div>
                    </div>

                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Location</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>

                        
                        {/* <!-- Contacts --> */}
                        
                        <div className="widget w-contacts">
                            {/* <!-- Leaflet map --> */}
                        
                            <div className="section">
                                <div id="map"></div>
                            </div>
                        
                            {/* <!-- End Leaflet map --> */}
                        
                            <ul>
                                <li>
                                    <span className="title">Address:</span>
                                    <span className="text">Fake Street 320, San Francisco California, USA.</span>
                                </li>
                                <li>
                                    <span className="title">Working Hours:</span>
                                    <span className="text">Mon-Fri 9:00am to 6:00pm Weekends 10:00am to 8:00pm</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* <!-- ... end Contacts --> */}			
                    </div>

                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Faved this Page</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>
                        <div className="ui-block-content">
                            
                            {/* <!-- W-Faved-Page --> */}
                            
                            <ul className="widget w-faved-page">
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page1.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page2.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page3.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page4.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page5.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page6.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page7.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page8.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page9.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page7.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page10.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page11.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page7.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="img/faved-page12.jpg" alt="user"/>
                                    </a>
                                </li>
                                <li className="all-users">
                                    <a href="/">+5k</a>
                                </li>
                            </ul>
                            
                            {/* <!-- ... end W-Faved-Page --> */}				
                        </div>
                    </div>


                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Twitter Feed</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>

                        
                        {/* <!-- W-Twitter --> */}
                        
                        <ul className="widget w-twitter">
                            <li className="twitter-item">
                                <div className="author-folder">
                                    <img src="img/twitter-avatar.png" alt="avatar"/>
                                    <div className="author">
                                        <a href="/" className="author-name">Green Goo Rock</a>
                                        <a href="/" className="group">@greengoo_rock</a>
                                        <span className="verified"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <p>This Friday at 8pm we’ll be playing a song of our new album, come and join us! <a href="/" className="link-post">/NewsoftheGoo</a></p>
                                <span className="post__date">
                                                    <time className="published" datetime="2017-03-24T18:18">
                                                        4 hours ago
                                                    </time>
                                                </span>
                            </li>
                            <li className="twitter-item">
                                <div className="author-folder">
                                    <img src="img/twitter-avatar.png" alt="avatar"/>
                                    <div className="author">
                                        <a href="/" className="author-name">Green Goo Rock</a>
                                        <a href="/" className="group">@greengoo_rock</a>
                                        <span className="verified"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <p>Tickets for the Marina Party are now available on <a href="/" className="link-post">www.ggrock.com</a></p>
                                <span className="post__date">
                                                    <time className="published" datetime="2017-03-24T18:18">
                                                        Yesterday
                                                    </time>
                                                </span>
                            </li>
                            <li className="twitter-item">
                                <div className="author-folder">
                                    <img src="img/twitter-avatar.png" alt="avatar"/>
                                    <div className="author">
                                        <a href="/" className="author-name">Green Goo Rock</a>
                                        <a href="/" className="group">@greengoo_rock</a>
                                        <span className="verified"><i className="fa fa-check" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <p>We had a great time playing in Italy. Thanks a lot to the incredible fans! <a href="/" className="link-post">/GGinRome /PisaArena </a></p>
                                <span className="post__date">
                                    <time className="published" datetime="2017-03-24T18:18">
                                        5 days ago
                                    </time>
                                </span>
                            </li>
                        </ul>
                        
                        {/* <!-- ... end W-Twitter --> */}			
                    </div>
                </div>

                <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Last Photos</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>
                        <div className="ui-block-content">
                            
                            {/* <!-- W-Latest-Photo --> */}
                            
                            <ul className="widget w-last-photo js-zoom-gallery">
                                <li>
                                    <a href="img/last-photo1-large.jpg">
                                        <img src="img/last-photo1-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-photo2-large.jpg">
                                        <img src="img/last-photo2-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-photo3-large.jpg">
                                        <img src="img/last-photo3-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-photo4-large.jpg">
                                        <img src="img/last-photo4-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-phot11-large.jpg">
                                        <img src="img/last-phot11-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-phot12-large.jpg">
                                        <img src="img/last-phot12-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-photo7-large.jpg">
                                        <img src="img/last-photo7-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-photo8-large.jpg">
                                        <img src="img/last-photo8-large.jpg" alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a href="img/last-photo9-large.jpg">
                                        <img src="img/last-photo9-large.jpg" alt=""/>
                                    </a>
                                </li>
                            </ul>
                            
                            {/* <!-- ... end W-Latest-Photo --> */}				
                            
                        </div>
                    </div>

                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Green Goo’s Playlist</h6>
                            <a href="/" className="more">
                                <span className="c-green">
                                    <svg className="olymp-remove-playlist-icon"><use href="svg-icons/sprites/icons.svg/olymp-remove-playlist-icon"></use></svg>
                                </span>
                            </a>
                        </div>

                        {/* <!-- W-Playlist --> */}
                        
                        <ol className="widget w-playlist">
                            <li className="js-open-popup" data-popup-target=".playlist-popup">
                                <div className="playlist-thumb">
                                    <img src="img/playlist6.jpg" alt="thumb-composition"/>
                                    <div className="overlay"></div>
                                    <a href="/" className="play-icon">
                                        <svg className="olymp-music-play-icon-big">
                                            <use href="svg-icons/sprites/icons-music.svg/olymp-music-play-icon-big"></use>
                                        </svg>
                                    </a>
                                </div>
                        
                                <div className="composition">
                                    <a href="/" className="composition-name">The Past Starts Slow...</a>
                                    <a href="/" className="composition-author">System of a Revenge</a>
                                </div>
                        
                                <div className="composition-time">
                                    <time className="published" datetime="2017-03-24T18:18">3:22</time>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use>
                                        </svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Add Song to Player</a>
                                            </li>
                                            <li>
                                                <a href="/">Add Playlist to Player</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </li>
                        
                            <li className="js-open-popup" data-popup-target=".playlist-popup">
                                <div className="playlist-thumb">
                                    <img src="img/playlist7.jpg" alt="thumb-composition"/>
                                    <div className="overlay"></div>
                                    <a href="/" className="play-icon">
                                        <svg className="olymp-music-play-icon-big">
                                            <use href="svg-icons/sprites/icons-music.svg/olymp-music-play-icon-big"></use>
                                        </svg>
                                    </a>
                                </div>
                        
                                <div className="composition">
                                    <a href="/" className="composition-name">The Pretender</a>
                                    <a href="/" className="composition-author">Kung Fighters</a>
                                </div>
                        
                                <div className="composition-time">
                                    <time className="published" datetime="2017-03-24T18:18">5:48</time>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use>
                                        </svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Add Song to Player</a>
                                            </li>
                                            <li>
                                                <a href="/">Add Playlist to Player</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </li>
                            <li className="js-open-popup" data-popup-target=".playlist-popup">
                                <div className="playlist-thumb">
                                    <img src="img/playlist8.jpg" alt="thumb-composition"/>
                                    <div className="overlay"></div>
                                    <a href="/" className="play-icon">
                                        <svg className="olymp-music-play-icon-big">
                                            <use href="svg-icons/sprites/icons-music.svg/olymp-music-play-icon-big"></use>
                                        </svg>
                                    </a>
                                </div>
                        
                                <div className="composition">
                                    <a href="/" className="composition-name">Blood Brothers</a>
                                    <a href="/" className="composition-author">Iron Maid</a>
                                </div>
                        
                                <div className="composition-time">
                                    <time className="published" datetime="2017-03-24T18:18">3:06</time>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use>
                                        </svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Add Song to Player</a>
                                            </li>
                                            <li>
                                                <a href="/">Add Playlist to Player</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </li>
                            <li className="js-open-popup" data-popup-target=".playlist-popup">
                                <div className="playlist-thumb">
                                    <img src="img/playlist9.jpg" alt="thumb-composition"/>
                                    <div className="overlay"></div>
                                    <a href="/" className="play-icon">
                                        <svg className="olymp-music-play-icon-big">
                                            <use href="svg-icons/sprites/icons-music.svg/olymp-music-play-icon-big"></use>
                                        </svg>
                                    </a>
                                </div>
                        
                                <div className="composition">
                                    <a href="/" className="composition-name">Seven Nation Army</a>
                                    <a href="/" className="composition-author">The Black Stripes</a>
                                </div>
                        
                                <div className="composition-time">
                                    <time className="published" datetime="2017-03-24T18:18">6:17</time>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use>
                                        </svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Add Song to Player</a>
                                            </li>
                                            <li>
                                                <a href="/">Add Playlist to Player</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </li>
                            <li className="js-open-popup" data-popup-target=".playlist-popup">
                                <div className="playlist-thumb">
                                    <img src="img/playlist10.jpg" alt="thumb-composition"/>
                                    <div className="overlay"></div>
                                    <a href="/" className="play-icon">
                                        <svg className="olymp-music-play-icon-big">
                                            <use href="svg-icons/sprites/icons-music.svg/olymp-music-play-icon-big"></use>
                                        </svg>
                                    </a>
                                </div>
                        
                                <div className="composition">
                                    <a href="/" className="composition-name">Killer Queen</a>
                                    <a href="/" className="composition-author">Archiduke</a>
                                </div>
                        
                                <div className="composition-time">
                                    <time className="published" datetime="2017-03-24T18:18">5:40</time>
                                    <div className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use>
                                        </svg>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/">Add Song to Player</a>
                                            </li>
                                            <li>
                                                <a href="/">Add Playlist to Player</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        
                            </li>
                        </ol>
                        
                        {/* <!-- .. end W-Playlist --> */}
                    </div>

                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Green Goo's Poll</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>
                        <div className="ui-block-content">
                            {/* <!-- W-Pool --> */}
                            
                            <ul className="widget w-pool">
                                <li>
                                    <p>If you had to choose, which actor do you prefer to be the next Darkman? </p>
                                </li>
                                <li>
                                    <div className="skills-item">
                                        <div className="skills-item-info">
                                            <span className="skills-item-title">
                                                <span className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios"/>
                                                        Thomas Bale
                                                    </label>
                                                </span>
                                            </span>
                                            <span className="skills-item-count">
                                                <span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="62" data-from="0"></span>
                                                <span className="units">62%</span>
                                            </span>
                                        </div>
                                        <div className="skills-item-meter">
                                            <span className="skills-item-meter-active bg-primary" style={{width: "62%"}}></span>
                                        </div>
                            
                                        <div className="counter-friends">12 friends voted for this</div>
                            
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic1.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic2.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic3.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic4.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic5.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic6.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic9.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="all-users">+3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            
                                <li>
                                    <div className="skills-item">
                                        <div className="skills-item-info">
                                            <span className="skills-item-title">
                                                <span className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios"/>
                                                        Ben Robertson
                                                    </label>
                                                </span>
                                            </span>
                                            <span className="skills-item-count">
                                                <span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="27" data-from="0"></span>
                                                <span className="units">27%</span>
                                            </span>
                                        </div>
                                        <div className="skills-item-meter">
                                            <span className="skills-item-meter-active bg-primary" style={{width: "27%"}}></span>
                                        </div>
                                        <div className="counter-friends">7 friends voted for this</div>
                            
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic9.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic10.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic11.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic12.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic13.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            
                                <li>
                                    <div className="skills-item">
                                        <div className="skills-item-info">
                                            <span className="skills-item-title">
                                                <span className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios"/>
                                                        Michael Streiton
                                                    </label>
                                                </span>
                                            </span>
                                            <span className="skills-item-count">
                                                <span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="11" data-from="0"></span>
                                                <span className="units">11%</span>
                                            </span>
                                        </div>
                                        <div className="skills-item-meter">
                                            <span className="skills-item-meter-active bg-primary" style={{width: "11%"}}></span>
                                        </div>
                            
                                        <div className="counter-friends">2 people voted for this</div>
                            
                                        <ul className="friends-harmonic">
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic14.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <img src="img/friend-harmonic15.jpg" alt="friend"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            
                            {/* <!-- .. end W-Pool --> */}
                            <a href="/" className="btn btn-md-2 btn-border-think custom-color c-grey full-width">Vote Now!</a>
                        </div>
                    </div>

                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Last Videos</h6>
                            <a href="/" className="more"><svg className="olymp-three-dots-icon"><use href="svg-icons/sprites/icons.svg/olymp-three-dots-icon"></use></svg></a>
                        </div>
                        <div className="ui-block-content">
                            {/* <!-- W-Latest-Video --> */}
                            
                            <ul className="widget w-last-video">
                                <li>
                                    <a href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858" className="play-video play-video--small">
                                        <svg className="olymp-play-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-play-icon"></use>
                                        </svg>
                                    </a>
                                    <img src="img/video8.jpg" alt="video"/>
                                    <div className="video-content">
                                        <div className="title">System of a Revenge - Hypnotize...</div>
                                        <time className="published" datetime="2017-03-24T18:18">3:25</time>
                                    </div>
                                    <div className="overlay"></div>
                                </li>
                                <li>
                                    <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video play-video--small">
                                        <svg className="olymp-play-icon">
                                            <use href="svg-icons/sprites/icons.svg/olymp-play-icon"></use>
                                        </svg>
                                    </a>
                                    <img src="img/video7.jpg" alt="video"/>
                                    <div className="video-content">
                                        <div className="title">Green Goo - Live at Dan’s Arena</div>
                                        <time className="published" datetime="2017-03-24T18:18">5:48</time>
                                    </div>
                                    <div className="overlay"></div>
                                </li>
                            </ul>
                            
                            {/* <!-- .. end W-Latest-Video --> */}				
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Page