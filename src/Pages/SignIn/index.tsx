import "./styles.css";
import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { Auth } from "../../services/firebaseConfig";
import { useState } from "react";

export const SignIn = () => {
  const [user, setUser] = useState<User>({} as User);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(Auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="container__user">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="Foto do Usuário"
            className="user__avatar"
          />
        )}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1 className="container__title">Acesse sua conta</h1>

      <span className="container__span">
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro.
      </span>

      <button className="container__button" onClick={handleGoogleSignIn}>
        <GoogleLogo className="container__svg" weight="bold" />
        Entrar com Google
      </button>
    </div>
  );
};
