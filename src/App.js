import React from 'react'
import FreshChat from 'react-freshchat'

class App extends React.Component {
  // ...
  render() {
    return <div>
      <FreshChat
        token='301abe17-bd46-49cc-af1f-5945434f3312'
        email="user@email.com"
        first_name="..."
        onInit={widget => {
          /* Use `widget` instead of `window.fcWidget`
            widget.user.setProperties({
              email: user.email,
              first_name: user.firstName,
              last_name: user.lastName,
              phone: user.phoneNumber,
            })
          */
        }}
      />
    </div>
  }
}
export default App;