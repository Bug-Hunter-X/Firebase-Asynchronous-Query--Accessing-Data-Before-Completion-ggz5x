The following corrected code snippet addresses the asynchronous nature of Firebase queries, ensuring data is accessed only after the query has completed.

```javascript
const database = firebase.database();
const query = database.ref('users').orderByChild('name').equalTo('John');

query.once('value').then((snapshot) => {
  const users = snapshot.val();
  if (users) {
    console.log(users); // Access users after query completion
  } else {
    console.log('No users found.');
  }
}).catch((error) => {
  console.error('Error fetching users:', error);
});
```

This revised code uses `once('value')` which returns a promise.  The `.then()` block ensures the `users` variable is populated before accessing it, preventing the undefined value error. Error handling is also included using `.catch()`.