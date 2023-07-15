<template>
  <nav class="w-full md:h-[90px] p-4 md:p-6 bg-white flex-col justify-center items-center inline-flex z-10 shadow"
       ref="navbar">
    <div class="w-full justify-center items-center gap-4 inline-flex">
      <router-link className="md:w-2/12" to="/">
        <img :src="logo" alt="logo"/>
      </router-link>
      <div class="grow shrink basis-0 h-6 justify-start items-center gap-8 md:flex hidden w-full">
        <div class="flex-col justify-center items-start inline-flex">
          <router-link to="/jelajahi">
            <div
                class="text-center text-gray-900 text-base font-medium leading-normal"
                :class="{[activeClass] : isActive('jelajahi.index')}"
            >
              Jelajahi
            </div>
          </router-link>
        </div>
        <div class="flex-col justify-center items-start inline-flex">
          <router-link to="/toko">
            <div
                class="text-center text-gray-900 text-base font-medium leading-normal"
                :class="{[activeClass] : isActive('toko.index')}"
            >
              Toko
            </div>
          </router-link>
        </div>
        <div></div>
      </div>
      <form class="flex items-center w-full">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-[18px] h-[18px] text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="simple-search"
                 class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full pl-10 p-2.5"
                 placeholder="Cari apapun..." required/>
        </div>
      </form>
      <div class="justify-end items-center flex w-1/4">
        <div class="justify-start items-center gap-5 flex">
          <div class="w-6 h-6 relative md:flex hidden" ref="dropdownUpload">
            <div v-if="showUploadDropdown"
                 class="absolute top-7 right-4 z-50 my-1 text-base list-none border border-gray-100 bg-white rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                 id="user-dropdown">
              <div class="px-2 py-1 whitespace-nowrap">
                <router-link to="/upload-karya"
                             class="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  <svg class="w-[14px] h-[14px]" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                        fill="#9CA3AF"
                    />
                  </svg>

                  <span class="ml-1 text-sm">Unggah Karya Baru</span>
                </router-link>
              </div>
              <div class="px-2 py-1 whitespace-nowrap">
                <router-link to="/upload-produk"
                             class="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                    <path fill="currentColor"
                          d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"/>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"/>
                  </svg>

                  <span class="ml-1 text-sm">Buat Produk Baru</span>
                </router-link>
              </div>
            </div>
            <button type="button" id="upload-button" @click="toggleUploadDropdown">
              <svg class="lg:w-6 lg:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="m14.707 4.793-4-4a1 1 0 0 0-1.416 0l-4 4a1 1 0 1 0 1.416 1.414L9 3.914V12.5a1 1 0 0 0 2 0V3.914l2.293 2.293a1 1 0 0 0 1.414-1.414Z"/>
                <path
                    d="M18 12h-5v.5a3 3 0 0 1-6 0V12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
            </button>
          </div>
          <div class="lg:w-6 lg:h-6 w-4 h-4 relative md:flex hidden">
            <svg class="lg:w-6 lg:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path
                  d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
            </svg>
          </div>
          <div class="lg:w-6 lg:h-6 w-4 h-4 relative  md:flex hidden">
            <router-link to="/keranjang">
              <svg class="lg:w-6 lg:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path
                    d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
              </svg>
            </router-link>
          </div>
          <div class="lg:w-full md:w-8 w-full" ref="dropdownUser">
            <button type="button"
                    class="flex mr-3 text-sm md:bg-gray-800 rounded-full md:mr-0 md:focus:ring-4 md:focus:ring-gray-300 mr-auto"
                    id="user-menu-button" aria-expanded="false" @click="toggleNavbarDropdown">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full md:block hidden" src="/resources/icon.png" alt="user photo"/>
              <!-- hamburger icon -->
              <svg class="w-6 h-6 md:hidden block text-gray-800 dark:text-white" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <!-- dropdown menu -->
            <div v-if="showNavbarDropdown"
                 class="absolute top-12 right-8 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                 id="user-dropdown"
            >
              <div class="px-4 py-3 flex gap-2 justify-center items-center">
                <img class="w-8 h-8 rounded-full md:hidden block" src="/resources/icon.png" alt="user photo"/>
                <div>
                  <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span class="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <router-link to="/profil"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Profil
                  </router-link>
                </li>
                <li class="md:hidden block">
                  <router-link to="/jelajahi"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Jelajahi
                  </router-link>
                </li>
                <li class="md:hidden block">
                  <router-link to="/toko"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Toko
                  </router-link>
                </li>
                <li>
                  <router-link to="/pengaturan/profil"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Pengaturan
                    Akun
                  </router-link>
                </li>
                <li>
                  <router-link to="/afiliasi"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Afiliasi
                  </router-link>
                </li>
                <li>
                  <router-link to="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b border-gray-300">
                    Penghasilan
                  </router-link>
                </li>
                <li class="md:hidden block">
                  <router-link to="/upload-karya"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <svg class="w-[14px] h-[14px] dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path
                          d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                          fill="#9CA3AF"
                      />
                    </svg>
                    <span class="ml-1 text-md">Unggah Karya Baru</span>
                  </router-link>
                </li>
                <li class="md:hidden block">
                  <router-link to="/upload-produk"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b border-gray-300">
                    <svg class="w-[14px] h-[14px]" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                      <path fill="#9CA3AF"
                            d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"/>
                      <path stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"
                      />
                    </svg>
                    <span class="ml-1 text-md">Unggah Produk Baru</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/wishlist"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.5227 2.84191C13.1714 1.52991 12.1374 0.495915 10.8261 0.144581C9.5414 -0.198085 8.17674 0.149914 7.0014 1.10258C6.14407 0.401914 5.19407 0.0225813 4.22407 -8.53367e-05C3.17007 -0.014752 2.18674 0.371248 1.4454 1.11191C0.0514029 2.50591 -0.252597 5.02325 1.86207 7.13791L6.52874 11.8046C6.65874 11.9346 6.8294 11.9999 7.00007 11.9999C7.17074 11.9999 7.3414 11.9346 7.4714 11.8046L12.1381 7.13791C13.4087 5.86725 13.9134 4.30125 13.5227 2.84191Z"
                          fill="#9CA3AF"/>
                    </svg>
                    <span class="ml-1 text-md">Wishlistku</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b border-gray-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_656_18365)">
                        <path
                            d="M2 2V15.5C1.99994 15.5868 2.02248 15.6722 2.06542 15.7476C2.10836 15.8231 2.17022 15.8861 2.24489 15.9304C2.31957 15.9747 2.40449 15.9988 2.4913 16.0003C2.57812 16.0018 2.66383 15.9807 2.74 15.939L8 13.069L13.26 15.939C13.3362 15.9807 13.4219 16.0018 13.5087 16.0003C13.5955 15.9988 13.6804 15.9747 13.7551 15.9304C13.8298 15.8861 13.8916 15.8231 13.9346 15.7476C13.9775 15.6722 14.0001 15.5868 14 15.5V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2Z"
                            fill="#9CA3AF"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_656_18365">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span class="ml-1 text-md">Koleksiku</span>
                  </router-link>
                </li>
                <li class="md:hidden block">
                  <router-link to="#"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <svg class="lg:w-6 lg:h-6 w-4 h-4" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                      <path
                          d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"
                          fill="#9CA3AF"
                      />
                    </svg>
                    <span class="ml-1 text-md">Notifikasi</span>
                  </router-link>
                </li>
                <li class="md:hidden block">
                  <router-link to="/keranjang"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white border-b border-gray-300">
                    <svg class="lg:w-6 lg:h-6 w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path
                          d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
                          fill="#9CA3AF"
                      />
                    </svg>
                    <span class="ml-1 text-md">Keranjang</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import {IonHeader} from "@ionic/vue";

export default {
  components: {
    IonHeader,
  },
  data() {
    return {
      logo: "../../../resources/logo.png",
      showNavbarDropdown: false,
      showUploadDropdown: false,
      activeClass: 'border-b-2 border-solid border-red-700',
    };
  },
  mounted() {
    window.addEventListener("click", this.closeDropdownOnClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
  methods: {
    toggleNavbarDropdown() {
      this.showNavbarDropdown = !this.showNavbarDropdown;
      this.showUploadDropdown = !this.showNavbarDropdown;
    },
    toggleUploadDropdown() {
      this.showUploadDropdown = !this.showUploadDropdown;
      this.showNavbarDropdown = !this.showUploadDropdown;
    },
    closeDropdownOnClickOutside(event) {
      const navbar = this.$refs.navbar;
      const dropdownUpload = this.$refs.dropdownUpload;
      const dropdownUser = this.$refs.dropdownUser;

      if (!navbar.contains(event.target)) {
        this.showUploadDropdown = this.showNavbarDropdown = false;
      }

      if (!dropdownUser?.contains(event.target)) {
        this.showNavbarDropdown = false;
      }

      if (!dropdownUpload.contains(event.target)) {
        this.showUploadDropdown = false;
      }
    },
    isActive(routeName) {
      return this.$route.name === routeName;
    }
  },
};
</script>
