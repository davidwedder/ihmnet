import Userfront,{ SignupForm,LoginForm,LogoutButton } from "@userfront/toolkit/react";


Userfront.init("6nzvj8vn");

export function Signup(){
  return <SignupForm theme={{"colors":{"light":"#F93D02","dark":"#e76b18","accent":"#080b13","lightBackground":"#080b13","darkBackground":"#080b13"},"colorScheme":"auto","fontFamily":"Bradley Hand, Brush Script MT, cursive","size":"compact","extras":{"rounded":true,"hideSecuredMessage":true}}} />;
}

export function Login(){
   return <LoginForm theme={{"colors":{"light":"#F93D02","dark":"#e76b18","accent":"#080b13","lightBackground":"#080b13","darkBackground":"#080b13"},"colorScheme":"auto","fontFamily":"Bradley Hand, Brush Script MT, cursive","size":"compact","extras":{"rounded":true,"hideSecuredMessage":true}}} />;
}

export function Logout(){
  return <LogoutButton theme={{"colors":{"light":"#F93D02","dark":"#e76b18","accent":"#080b13","lightBackground":"#080b13","darkBackground":"#080b13"},"colorScheme":"auto","fontFamily":"Bradley Hand, Brush Script MT, cursive","size":"compact","extras":{"rounded":true,"hideSecuredMessage":true}}} />;
}


