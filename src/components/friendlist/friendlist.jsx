import css from "./friendlist.module.css";
import FriendListItem from "./friendlistitem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.containerList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem arreyFriend={friend} />
        </li>
      ))}
    </ul>
  );
}
