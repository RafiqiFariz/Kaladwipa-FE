<template>
  <ion-page>
    <ion-content>
      <div class="flex justify-center items-center h-screen flex-col">
        <div
          class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
        >
          <div class="flex justify-center">
            <router-link to="/"
              ><img src="/resources/logo.png" alt="logo"
            /></router-link>
          </div>
          <h4 class="text-black flex justify-center">Daftar</h4>
          <form class="space-y-6" @submit.prevent="createAccount">
            <div>
              <label
                for="nama"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nama</label
              >
              <input
                type="text"
                name="nama"
                id="nama"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Nama"
                v-model.trim="enteredName"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                v-model.trim="enteredEmail"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                pattern="^(?=.*[a-zA-Z])(?=.*\d).{8,}$"
                title="Minimal terdiri atas 8 karakter. Harus menyertakan huruf dan angka"
                v-model.trim="enteredPassword"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Masuk Sekarang
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Sudah daftar?
              <router-link to="/login"
                ><a class="text-red-600 hover:underline dark:text-red-600"
                  >Masuk</a
                ></router-link
              >
            </div>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
  },
  data() {
    return {
      enteredName: "",
      enteredEmail: "",
      enteredPassword: "",
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    createAccount() {
      if (
        this.enteredName === "" ||
        this.enteredEmail === "" ||
        this.enteredPassword === ""
      ) {
        this.invalidInput = true;
        return;
      }

      this.error = null;
      fetch("https://api.kaladwipa.com/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.enteredName,
          email: this.enteredEmail,
          password: this.enteredPassword,
        }),
      })
        .then((response) => {
          if (response.ok) {
            this.$router.push("/login");
          } else {
            throw new Error("Tidak bisa membuat akun!");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });

      this.enteredName = "";
      this.enteredEmail = "";
      this.enteredPassword = "";
    },
  },
};
</script>
