<template>
        <div v-show="welcomePage">
            <div class="presentation">
                <img class="presentation__background" src="my-app/src/assets/icon.png" alt="logo Groupomania en arrière-plan"/>
                <h1 class="presentation__title">Groupomania Network</h1>
            </div>

            <div>
                <p class="welcome">Bienvenue sur le réseau Groupomania. Accédez à une nouvelle dimension dans vos échange entre collègues</p>
                <div class="signin" v-show="signInEntry">
                    <p>Inscrivez vous dès maintenant</p>
                    <button v-show="signInButton" @click="showSignIn = true, signUpEntry = false, signInButton= false">Créez un compte</button>
                    <div v-show="showSignIn">
                        <form action="" method="get" class="signInForm" v-on:submit.prevent= "welcomePage = false">
                            <div class="signInForm">
                                <label for="email">Entrez votre email</label>
                                <input type="email" name="email" id="email" required>
                            </div>
                            <div class="signInForm">
                                <label for="password">Entrez votre mot de passe</label>
                                <input type="password" name="password" id="password" required>
                            </div>
                            <div class="signInForm">
                                <input type="submit" value="Inscription" >
                            </div>
                        </form>
                    </div>
                </div>
                <div class="signup" v-show="signUpEntry">
                    <p>Déjà membre ?</p>
                    <button v-show="signUpButton" @click = "showSignUp=true, signInEntry=false, signUpButton=false">Connectez-vous</button>
                    <div v-show="showSignUp">
                        <form action="" method="get" class="signInForm" v-on:submit.prevent ="welcomePage = false">
                            <div class="signInForm">
                                <label for="email">Entrez votre email</label>
                                <input type="email" name="email" id="email" required>
                            </div>
                            <div class="signInForm">
                                <label for="password">Entrez votre mot de passe</label>
                                <input type="password" name="password" id="password" required>
                            </div>
                            <div class="signInForm">
                                <input type="submit" value="Connexion">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  data() {
        return{
        welcomePage: true,
        signInEntry: true,
        signUpEntry: true,
        signInButton: true,
        signUpButton: true,
        showSignIn: false,
        showSignUp: false,
        }
    }
}
</script>