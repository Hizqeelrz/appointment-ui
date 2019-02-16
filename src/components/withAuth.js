import React from "react";
import AuthService from "./AuthService";
import history from "../history";

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('http://localhost:4000/api/sign_in');
  return class AuthWrapped extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null
      }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/login")
      } else  {
        try {
          const profile = Auth.getProfile()
          this.setState({
            user: profile
          })
        } catch(err) {
          Auth.logOut()
          this.props.history.replace("/login")
        }
      }
    }

    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        )
      } else {
        return null
      }
    }

  }
}