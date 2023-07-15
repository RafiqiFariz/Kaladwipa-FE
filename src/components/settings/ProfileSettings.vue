<template>
  <div class="p-4 bg-white rounded items-center mb-4">
    <div class="text-black text-4xl font-medium leading-10 text-center">
      Profil
    </div>
  </div>
  <div class="p-5 h-full bg-white rounded">
    <form>
      <div class="md:flex block">
        <div class="md:w-2/3 w-full">
          <div class="mb-6">
            <label
              for="nama"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Nama *</label
            >
            <input
              type="text"
              id="nama"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700 dark:shadow-sm-light"
              placeholder="Masukkan Nama"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="kutipan"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Kutipan *</label
            >
            <input
              type="text"
              id="kutipan"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700 dark:shadow-sm-light"
              placeholder="Masukkan Kutipan"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="kota"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Kota *</label
            >
            <input
              type="text"
              id="kota"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700 dark:shadow-sm-light"
              placeholder="Masukkan Kota"
              required
            />
          </div>
        </div>
        <div class="md:w-1/3 w-full pl-5">
          <h4 class="font-medium pb-2 m-0">Foto Profil</h4>
          <div
            class="bg-gray-50 flex flex-col items-center pb-5 rounded p-5 shadow mb-5"
          >
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/resources/icon.png"
              alt="Bonnie image"
            />
            <div class="flex mt-4 space-x-3 md:mt-6">
              <button
                type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  class="mr-2"
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40464 4.17962L5.67205 0.751007C5.58515 0.671018 5.48172 0.60778 5.36785 0.565004C5.13957 0.478332 4.8832 0.478332 4.65492 0.565004C4.54105 0.60778 4.43762 0.671018 4.35072 0.751007L0.61813 4.17962C0.529005 4.25869 0.457916 4.35327 0.409011 4.45785C0.360106 4.56242 0.334364 4.6749 0.333287 4.78871C0.332211 4.90252 0.355821 5.01539 0.40274 5.12073C0.449659 5.22607 0.518948 5.32178 0.606564 5.40226C0.69418 5.48274 0.798368 5.54638 0.913048 5.58948C1.02773 5.63258 1.1506 5.65427 1.27451 5.65328C1.39841 5.65229 1.52086 5.62864 1.6347 5.58372C1.74855 5.5388 1.85152 5.4735 1.9376 5.39163L4.07917 3.42618V11.6428C4.07917 11.8702 4.17749 12.0882 4.35248 12.2489C4.52748 12.4097 4.76483 12.5 5.01232 12.5C5.2598 12.5 5.49715 12.4097 5.67215 12.2489C5.84715 12.0882 5.94546 11.8702 5.94546 11.6428V3.42618L8.08517 5.39163C8.26116 5.54777 8.49688 5.63416 8.74155 5.63221C8.98621 5.63026 9.22026 5.54011 9.39327 5.38119C9.56629 5.22227 9.66442 5.00728 9.66655 4.78254C9.66868 4.5578 9.57462 4.34128 9.40464 4.17962V4.17962Z"
                    fill="white"
                  />
                </svg>
                Upload Foto
              </button>
            </div>
          </div>
          <h4 class="font-medium pb-2 m-0">Foto Background</h4>
          <div
            class="bg-gray-50 flex flex-col items-center pb-5 rounded p-4 shadow"
          >
            <img
              class="w-auto h-100 mb-3 shadow-lg"
              src="/resources/throne_room.png"
              alt="Bonnie image"
            />
            <div class="flex mt-4 space-x-3 md:mt-6">
              <button
                type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  class="mr-2"
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40464 4.17962L5.67205 0.751007C5.58515 0.671018 5.48172 0.60778 5.36785 0.565004C5.13957 0.478332 4.8832 0.478332 4.65492 0.565004C4.54105 0.60778 4.43762 0.671018 4.35072 0.751007L0.61813 4.17962C0.529005 4.25869 0.457916 4.35327 0.409011 4.45785C0.360106 4.56242 0.334364 4.6749 0.333287 4.78871C0.332211 4.90252 0.355821 5.01539 0.40274 5.12073C0.449659 5.22607 0.518948 5.32178 0.606564 5.40226C0.69418 5.48274 0.798368 5.54638 0.913048 5.58948C1.02773 5.63258 1.1506 5.65427 1.27451 5.65328C1.39841 5.65229 1.52086 5.62864 1.6347 5.58372C1.74855 5.5388 1.85152 5.4735 1.9376 5.39163L4.07917 3.42618V11.6428C4.07917 11.8702 4.17749 12.0882 4.35248 12.2489C4.52748 12.4097 4.76483 12.5 5.01232 12.5C5.2598 12.5 5.49715 12.4097 5.67215 12.2489C5.84715 12.0882 5.94546 11.8702 5.94546 11.6428V3.42618L8.08517 5.39163C8.26116 5.54777 8.49688 5.63416 8.74155 5.63221C8.98621 5.63026 9.22026 5.54011 9.39327 5.38119C9.56629 5.22227 9.66442 5.00728 9.66655 4.78254C9.66868 4.5578 9.57462 4.34128 9.40464 4.17962V4.17962Z"
                    fill="white"
                  />
                </svg>
                Upload Background
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="md:mt-0 mt-10 md:w-auto w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-700 md:justify-start justify-center"
      >
        Simpan Perubahan
      </button>
    </form>
  </div>
</template>
