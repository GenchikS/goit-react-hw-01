import css from "./profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {  //  використана глибока деструктурізація
    return (
    <div className={css.container}>
        <div >
          <img className={css.imgContainer} src={image} />
          <p className={css.titleName}>{name}</p>
          <p className={css.textNameTag}>@{tag}</p>
          <p className={css.textNameLocation}>{location}</p>
      </div>
      <ul className={css.listContainer}>
        <li className={css.list}>
          <span className={css.spanTitle}>Followers</span>
          <span className={css.spanText}>{followers}</span>
          </li>
        <li className={css.list}>
          <span className={css.spanTitle}>Views</span>
            <span className={css.spanText}>{views}</span>
          </li>
        <li className={css.list}>
          <span className={css.spanTitle}>Likes</span>
          <span className={css.spanText}>{likes}</span>
          </li>
      </ul>
    </div>
    )
}