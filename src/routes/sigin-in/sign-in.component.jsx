import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn() {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
    );
}

export default SignIn;