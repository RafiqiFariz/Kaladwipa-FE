<template>
  <div class="p-4 bg-white rounded items-center">
    <h1 class="text-center text-4xl">Pengaturan Akun</h1>
    <form>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email Anda</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
        />
      </div>
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Username Anda</label
        >
        <input
          type="text"
          id="username"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="SyuQyu"
        />
      </div>
      <div class="mb-6">
        <label
          for="password-baru"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password Baru</label
        >
        <input
          type="password"
          id="password-baru"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div class="mb-6">
        <label
          for="repeat-password-baru"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Ulangi Password Baru</label
        >
        <input
          type="password"
          id="repeat-password-baru"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password Lama</label
        >
        <input
          type="password"
          id="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <button
        type="submit"
        class="justify-center mt-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 md:w-auto w-full"
      >
        Simpan Perubahan
        <svg
          class="ml-2"
          width="17"
          height="17"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.6549 3.48816C4.34234 3.80072 4.16675 4.22464 4.16675 4.66667V18L10.0001 15.0833L15.8334 18V4.66667C15.8334 4.22464 15.6578 3.80072 15.3453 3.48816C15.0327 3.17559 14.6088 3 14.1667 3H5.83341C5.39139 3 4.96746 3.17559 4.6549 3.48816Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
  </div>
</template>
