import React from 'react';
import user from '../data/user.json';
import Profile from './Profile/Profile';
import data from '../data/data.json';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
