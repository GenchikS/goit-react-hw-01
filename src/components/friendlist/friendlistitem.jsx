import css from "./friendlist.module.css";

export default function FriendListItem({ arreyFriend: { avatar, name, isOnline } }) {
  return (
    <div className={css.list}>
      <img src={avatar} alt="Avatar" width="55" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.green}>Online</p>
      ) : (
        <p className={css.red}>Offline</p>
      )}
    </div>
  );
}
