// завдання 1
import Profile from "./profile/profile"
import userData from "./userData.json"

export default function App() {
  return (
    <div>
      <Profile
        image={userData.avatar}
        name = {userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
    </div>
  )
}


//  завдання 2
// export default function AppFriend() {
//   return (
//     <div>
//       <FriendList/>
//     </div>
//   )
// }