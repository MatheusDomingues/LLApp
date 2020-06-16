import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 80px;
`;

export const Img = styled.Image`
  width: 370px;
  height: 230px;
`;

export const Content = styled.View`
  margin-top: 50px;
  height: 80px;
  width: 300px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const TextInput = styled.TextInput`
  background-color: #e7e7e7;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const Buttons = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const ButtonLogin = styled.Text`
  background-color: #FF6363;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 50px;
  width: 300px;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  padding-top: 12px;
`;

export const ButtonSignup = styled.Text`
  text-align: right;
  height: 50px;
  width: 300px;
  font-weight: bold;
  font-size: 14px;
  padding: 12px 10px 0 0;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: underline;
`;

export const Pages = styled.View`
  flex-direction: row;
  width: 100px;
  margin-top: 125px;
  justify-content: space-between;
  align-self: center;
`;

export const Page1 = styled.Text`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FCC3C3;
`;

export const Page2 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FF6363;
`;

export const Page3 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FCC3C3;
`;

export const Page4 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FCC3C3;
`;

export const Page5 = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #FCC3C3;
`;