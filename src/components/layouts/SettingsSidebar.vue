<template>
  <aside
    id="default-sidebar"
    class="fixed z-40 w-64 md:block hidden"
    aria-label="Sidebar"
  >
    <div
      class="px-3 py-4 overflow-hidden bg-white dark:bg-gray-800 rounded"
    >
      <ul class="space-y-2 font-medium">
        <li>
          <div
            :class="{
              'bg-red-100': isActive('/pengaturan/profil'),
              'hover:bg-red-300': isActive('/pengaturan/profil'),
              'hover:bg-gray-100': !isActive('/pengaturan/profil'),
            }"
            class="group rounded-lg"
          >
            <router-link
              to="/pengaturan/profil"
              class="flex items-center p-2 text-gray-900 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M7 9.47368C9.67646 9.47368 11.8462 7.35293 11.8462 4.73684C11.8462 2.12076 9.67646 0 7 0C4.32354 0 2.15385 2.12076 2.15385 4.73684C2.15385 7.35293 4.32354 9.47368 7 9.47368Z"
                  fill="#1F2A37"
                />
                <path
                  d="M8.61539 10.5263H5.38462C3.95705 10.528 2.58845 11.083 1.57901 12.0697C0.569565 13.0564 0.00171 14.3941 0 15.7895V18.9474C0 19.2265 0.113461 19.4943 0.315424 19.6917C0.517386 19.8891 0.791305 20 1.07692 20H12.9231C13.2087 20 13.4826 19.8891 13.6846 19.6917C13.8865 19.4943 14 19.2265 14 18.9474V15.7895C13.9983 14.3941 13.4304 13.0564 12.421 12.0697C11.4116 11.083 10.0429 10.528 8.61539 10.5263Z"
                  fill="#1F2A37"
                />
              </svg>
              <span class="ml-3">Profil</span>
            </router-link>
          </div>
        </li>
        <li>
          <div
            :class="{
              'bg-red-100': isActive('/pengaturan/akun'),
              'hover:bg-red-300': isActive('/pengaturan/akun'),
              'hover:bg-gray-100': !isActive('/pengaturan/akun'),
            }"
            class="group rounded-lg"
          >
            <router-link
              to="/pengaturan/akun"
              class="flex items-center p-2 text-gray-900 dark:text-white dark:hover:bg-gray-700"
            >
              <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
              </svg>
              <span class="ml-3">Akun</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    isActive(routePath) {
      return this.$route.path === routePath;
    },
  },
};
</script>
