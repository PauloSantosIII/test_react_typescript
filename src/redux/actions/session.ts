import axios from 'axios';
import jwtDecode from 'jwt-decode';

const userInfo: any = (token: string, currentUser: any) => ({
  type: 'USER_INFO',
  token,
  currentUser,
});

export const requestUserInfo = (token: string) => (dispatch: any) => {
  const decoded: { sub: string } = jwtDecode(token);
  const url = `https://capstone-q2.herokuapp.com/users/${decoded.sub}`;

  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      dispatch(userInfo(token, res.data));
      localStorage.setItem('currentUser', JSON.stringify(res.data));
    });
};
