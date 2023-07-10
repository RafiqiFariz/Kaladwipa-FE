<template>
  <aside
    id="default-sidebar"
    class="fixed top-8 left-5 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div
      class="h-full px-3 py-4 overflow-hidden bg-white dark:bg-gray-800 rounded"
    >
      <ul class="space-y-2 font-medium">
        <li>
          <div
            :class="{
              'bg-red-100': isActive('/settings/profile'),
              'hover:bg-red-300': isActive('/settings/profile'),
              'hover:bg-gray-100': !isActive('/settings/profile'),
            }"
            class="group rounded-lg"
          >
            <a
              href="/settings/profile"
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
            </a>
          </div>
        </li>
        <li>
          <div
            :class="{
              'bg-red-100': isActive('/settings/account'),
              'hover:bg-red-300': isActive('/settings/account'),
              'hover:bg-gray-100': !isActive('/settings/account'),
            }"
            class="group rounded-lg"
          >
            <a
              href="/settings/account"
              class="flex items-center p-2 text-gray-900 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7V2.13C6.518 2.268 6.071 2.514 5.707 2.879L2.879 5.707C2.514 6.071 2.268 6.518 2.13 7H7Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M8.737 13.061C8.852 12.486 9.132 11.962 9.547 11.547L15.664 5.43C16.316 4.778 17.124 4.346 18 4.141V4C18 2.897 17.133 2 16.067 2H9V7C9 8.103 8.103 9 7 9H2V20C2 21.103 2.867 22 3.933 22H16.067C17.133 22 18 21.103 18 20V16.907L16.454 18.453C16.039 18.868 15.515 19.148 14.941 19.263L11.546 19.942C11.354 19.981 11.157 20 10.961 20H10.959C10.169 20 9.426 19.692 8.867 19.133C8.164 18.43 7.862 17.43 8.057 16.458L8.737 13.061Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M10.961 18C11.023 18 11.087 17.994 11.15 17.981L14.549 17.301C14.735 17.264 14.906 17.172 15.04 17.038L21.157 10.921C22.282 9.797 22.282 7.967 21.157 6.843C20.594 6.281 19.856 6 19.117 6C18.379 6 17.64 6.281 17.078 6.844L10.961 12.961C10.827 13.095 10.735 13.266 10.698 13.452L10.018 16.851C9.955 17.166 10.054 17.492 10.281 17.719C10.464 17.901 10.709 18 10.961 18ZM18.438 8.203C18.625 8.016 18.872 7.922 19.118 7.922C19.364 7.922 19.61 8.016 19.798 8.203C20.173 8.578 20.173 9.188 19.798 9.563L19.482 9.879L18.122 8.519L18.438 8.203ZM12.527 14.114L16.763 9.877L18.123 11.237L13.886 15.473L12.187 15.813L12.527 14.114Z"
                  fill="#9CA3AF"
                />
              </svg>
              <span class="ml-3">Akun</span>
            </a>
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
