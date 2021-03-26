<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-card-title>
        
        </ion-card-title>
        <ion-content >
            <ion-card-content class="bg-img">
                <ion-button class="back-btn">
                <!-- <ion-back-button slot="start"></ion-back-button> -->
                <ion-icon :icon="chevronBackOutline"></ion-icon>
                </ion-button>
                <ion-img :src="logo" id="app-logo"></ion-img> <br>
                <ion-row><h1>Hello <strong>There,</strong></h1></ion-row>
                <br>
               <ion-row>Enter your information below or login with social media account</ion-row>
            </ion-card-content>
               <form action="" @submit="regisDetails()">
                    <ion-card-content>
                    <ion-label id="lable" position="stacked">Name</ion-label>
                    <ion-input class="input" type="text" name="username" placeholder="Ex:strongaapp@support.com" required></ion-input>
                </ion-card-content>
                <ion-card-content>
                    <ion-label id="lable" position="stacked">DOB</ion-label>
                    <ion-input class="input" type="date" name="dob" placeholder="Please Enter DOB" required></ion-input>
                </ion-card-content>
                <ion-card-content>
                    <ion-label id="lable" position="stacked">Email</ion-label>
                    <ion-input class="input" type="email" name="email"
                    placeholder="Ex:strongaapp@support.com"
                    ></ion-input>
                </ion-card-content>
                <ion-card-content>
                    <ion-label id="lable" position="stacked">Phone</ion-label>
                    <ion-input class="input"  type="number" maxlength="10" minlength="13" @input="acceptNumber" name="phone" placeholder="9999999999">
                    <ion-select  interface="popover" value="+91">
                        <ion-select-option value="+91" >+91</ion-select-option>
                        <ion-select-option value="+23" >+23</ion-select-option>
                    </ion-select>
                    </ion-input>
                    
                </ion-card-content>
                <ion-card-content>
                    <ion-label id="lable" position="stacked">Password</ion-label>
                    <ion-input class="input" type="password" name="password" placeholder="**********">
                        <ion-icon slot="end"  :icon="eyeSharp" id="eye"></ion-icon>
                    </ion-input>

                </ion-card-content>
                <ion-card-content>
                    <ion-label id="lable" position="stacked">Confirm Password</ion-label>
                    <ion-input class="input" type="password" name="confirmPW" placeholder="**********">
                        <ion-icon  :icon="eyeSharp" id="eye"></ion-icon>
                    </ion-input>
                </ion-card-content>
                <ion-card-content>
                    <ion-label id="lable" position="stacked">Refer Code</ion-label>
                    <ion-input class="input" type="text" name="r" placeholder="Enter your refferal code"></ion-input>
                </ion-card-content>
               </form>
                <ion-card-content>
                <ion-checkbox checked="false"></ion-checkbox>
                   <ion-lable> I agree to <a href="">terms and conditions</a> </ion-lable>
                </ion-card-content> <br>
                <ion-card-content>
                <ion-button class="signup ion-text-center" type="submit" size="default" >SignUp</ion-button>
                </ion-card-content>
                <ion-item>
                 <ion-footer class="ion-text-center" size="small">
                  Have an account? <a href="">SignIn</a>
                 </ion-footer>
                </ion-item>
        </ion-content>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonRow,
//   IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
//   IonThumbnail,
  IonImg,
//   IonCardContent,
  IonCardTitle,
  IonButton,
  IonIcon,
//   IonBackButton,
//   IonHeader,
//   IonToolbar,
 } from '@ionic/vue'
import { defineComponent } from "vue"
import { chevronBackOutline, eyeSharp } from "ionicons/icons";

export default defineComponent({
    name: 'Register',
    components: {
        IonPage,
        IonRow,
        IonImg,
        // IonThumbnail,
        // IonContent,
        IonItem,
        IonLabel,
        IonInput,
        IonCheckbox,
        // IonCardContent,
        IonCardTitle,
        IonButton,
        IonIcon,
        // IonBackButton,
        // IonHeader,
        // IonToolbar,
    },
    data() {
        return {
            eyeSharp,
            chevronBackOutline,
            logo: require('../../../public/assets/AppLogos/AppLogo.png'),
            value: ''
        }
    },
    methods: {

  },
})
</script>
<style scoped>
#app-logo {
    display: block;
    width: 123px;
    height: 123px;
    position: relative;
    /* top: 30px; */
    left: 35%;
}
.bg-img {
    background-image: url(../../../public/assets/Bg/Bg.png);
}
#eye {
    z-index: 3;
    font-size: large;
}
.signup {
    width:40%;
    /* text-align: center; */
    margin-left: 28%;
}
.input {
    border: 1px solid grey;
    border-radius: 10px;
    padding-top: 9px;
    padding-left: 20px;
    /* text-align: end; */
}
#lable {
    position: relative;
    top: 11px;
    left: 22px;
    background: white;
    z-index: 3;
    padding: 5px;

}
.back-btn {
    background-color: white;
}
/* #card {
    display: block;
} */
</style>
