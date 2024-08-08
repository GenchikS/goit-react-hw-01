import "../profile/profile.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className="container">
        <div >
          <img className="imgContainer" src={image} />
          <p className="titleName">{name}</p>
          <p className="textNameTag">@{tag}</p>
          <p className="textNameLocation">{location}</p>
      </div>
      <ul className="listContainer">
        <li className="list">
          <span className="spanTitle">Followers</span>
          <span className="spanText">{stats.followers}</span>
          </li>
        <li className="list">
          <span className="spanTitle">Views</span>
          <span className="spanText">{stats.views}</span>
          </li>
        <li className="list">
          <span className="spanTitle">Likes</span>
          <span className="spanText">{stats.likes}</span>
          </li>
      </ul>
    </div>
    )
}