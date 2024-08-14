import Profile from "./components/profile/profile";
import userData from "./components/profile/userData.json";
import FriendList from "./components/friendlist/friendlist";
import friends from "./components/friendlist/friends.json";
import TransactionHistory from "./components/transaction/transactionhistory";
import transactions from "./components/transaction/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
