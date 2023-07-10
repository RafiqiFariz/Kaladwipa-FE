<template>
    <div class="w-full bg-neutral-100 relative p-8 py-24">
        <div
            class="w-full h-full bg-white rounded-lg shadow border border-gray-200 justify-start items-center inline-flex mb-10">

            <div id="indicators-carousel" class="relative w-full" data-carousel="static">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="block duration-700 ease-in-out" data-carousel-item="active">
                        <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="...">
                    </div>
                    <!-- Item 2 -->
                    <div class="block duration-700 ease-in-out" data-carousel-item>
                        <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="...">
                    </div>
                    <!-- Item 3 -->
                    <div class="block duration-700 ease-in-out" data-carousel-item>
                        <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="...">
                    </div>
                    <!-- Item 4 -->
                    <div class="block duration-700 ease-in-out" data-carousel-item>
                        <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="...">
                    </div>
                    <!-- Item 5 -->
                    <div class="block duration-700 ease-in-out" data-carousel-item>
                        <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="...">
                    </div>
                </div>
                <!-- Slider indicators -->
                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                        data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                        data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                        data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                        data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                        data-carousel-slide-to="4"></button>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div class="w-1/3 h-full self-stretch p-5 flex-col justify-between items-start inline-flex">
                <div class="self-stretch h-full flex-col justify-start items-start gap-3.5 flex">
                    <div class="justify-start items-start gap-3 inline-flex">
                        <img class="w-12 h-12 relative rounded-[100px]" src="https://via.placeholder.com/48x48" />
                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                            <div class="text-zinc-800 text-[16px] font-medium leading-normal">Rian Arimawan {{
                                $route.params.id }}
                            </div>
                            <div class="text-neutral-400 text-[12px] font-normal leading-none">Illustrator •
                                Character Designer</div>
                        </div>
                    </div>
                    <div class="self-stretch h-[280px] flex-col justify-start items-start gap-2 flex">
                        <div class="self-stretch text-gray-900 text-[24px] font-bold leading-loose">Judul Karya
                        </div>
                        <div class="self-stretch text-gray-500 text-[16px] font-normal leading-normal">Lorem
                            ipsum
                            dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                            urna.
                            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                            Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
                            leo,
                            non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
                        </div>
                        <div class="w-40 h-5 justify-start items-center gap-3 inline-flex">
                            <div class="justify-start items-center gap-1 flex">
                                <div class="w-5 h-5 relative">
                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div class="w-5 h-5 relative">
                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div class="w-5 h-5 relative">
                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div class="w-5 h-5 relative">
                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div class="w-5 h-5 relative">
                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path
                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="px-2.5 py-0.5 bg-rose-100 rounded justify-center items-center flex">
                                <div class="text-center text-red-800 text-xs font-medium leading-none">5.0</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="w-full h-3 text-gray-500 text-xs font-normal leading-3">Kategori
                            Produk:
                        </div>
                        <div class="w-full grid grid-cols-3 gap">
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Produk
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Seni
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Tradisional
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Produk
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Seni
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Tradisional
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="w-full h-3 text-gray-500 text-xs font-normal leading-3">
                            Perangkat Lunak::
                        </div>
                        <div class="w-full grid grid-cols-3 gap">
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Produk
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Seni
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Tradisional
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Produk
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Seni
                                    Digital
                                </span>
                            </div>
                            <div class="w-full text-center">
                                <span
                                    class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Tradisional
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="self-stretch justify-start items-start gap-4 inline-flex mt-4 ml-8">
                        <button
                            class="grow shrink basis-0 h-[41px] px-5 py-2.5 bg-red-700 rounded-lg justify-center items-center gap-2 flex">
                            <div class="text-white text-[14px] font-medium leading-tight">Tambah ke keranjang</div>
                        </button>
                        <button
                            class="grow shrink basis-0 h-[41px] px-5 py-2.5 bg-gray-200 rounded-lg justify-center items-center gap-2 flex">
                            <div class="text-black text-[14px] font-medium leading-tight">Beli Langsung</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-8">
            <div
                class="h-full w-[74%] p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-full flex-col justify-start items-start gap-4 flex">
                    <div class="self-stretch p-3 bg-gray-50 rounded-lg justify-start items-center gap-3 inline-flex">
                        <div class="w-6 h-6 relative"></div>
                        <div
                            class="grow shrink basis-0 h-[42px] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-start gap-2.5 flex">
                            <div class="grow shrink basis-0 self-stretch justify-start items-start flex">
                                <div class="grow shrink basis-0 text-gray-500 text-[14px] font-normal leading-tight">
                                    Tinggalkan komentar...</div>
                            </div>
                        </div>
                        <div class="w-6 h-6 relative origin-top-left rotate-90"></div>
                    </div>
                    <div class="w-full h-full relative">
                        <div class="w-full justify-start items-start gap-2.5 inline-flex">
                            <img class="w-8 h-8 relative rounded-lg" src="https://via.placeholder.com/32x32" />
                            <div class="justify-start items-center gap-1.5 flex w-full">
                                <div
                                    class="w-full p-4 bg-gray-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-start gap-2.5 inline-flex">
                                    <div class="flex-col justify-start items-start gap-1.5 flex">
                                        <div class="text-gray-900 text-[14px] font-semibold leading-tight">Bintang
                                            Siregar</div>
                                        <div class="text-gray-500 text-[12px] font-medium leading-none">Digital
                                            Artist
                                        </div>
                                    </div>
                                    <div class="text-gray-900 text-[16px] font-normal leading-normal">Bagus sekali
                                        karyamu, aku sangat menyukainya</div>
                                    <div class="justify-start items-center gap-2.5 inline-flex">
                                        <div class="w-40 h-5 justify-start items-center gap-3 inline-flex">
                                            <div class="justify-start items-center gap-1 flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                        viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                        viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                        viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                        viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                        viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="px-2.5 py-0.5 bg-rose-100 rounded justify-center items-center flex">
                                                <div class="text-center text-red-800 text-xs font-medium leading-none">5.0
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">● 1mg</div>
                                    </div>
                                </div>
                                <div class="w-5 h-5 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-gray-900 text-[16px] font-medium leading-normal">Tampilkan lebih banyak
                        </div>
                        <div class="w-4 h-4 relative"></div>
                    </div>
                </div>
            </div>
            <div class="w-[24%]">
                <div
                    class="w-full h-64 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start inline-flex">
                    <div class="self-stretch p-6 justify-start items-center inline-flex">
                        <div class="grow shrink basis-0 h-7 justify-start items-center flex">
                            <div class="text-gray-900 text-xl font-medium leading-7">Bagikan Link Affliasi</div>
                        </div>
                    </div>
                    <div class="self-stretch h-20 p-6 flex-col justify-start items-start gap-5 flex">
                        <div class="self-stretch text-black text-sm font-normal leading-none">Rekomendasikan produk ini dan
                            dapatkan komisi setidaknya 10%</div>
                    </div>
                    <div class="self-stretch p-6 justify-start items-center inline-flex">
                        <div
                            class="grow shrink basis-0 h-14 px-2.5 py-2 bg-gray-50 rounded--lg border border-gray-300 justify-start items-center flex">
                            <div class="grow shrink basis-0 h-5 justify-start items-start gap-2 flex">
                                <div
                                    class="grow shrink basis-0 self-stretch text-gray-500 text-sm font-normal leading-tight">
                                    https://kaladwipa.my.id/affiliasi/21</div>
                            </div>
                            <button class="px-3 py-2 bg-red-700 rounded-lg justify-center items-center gap-2 flex">
                                <div class="text-white text-sm font-medium leading-tight">Salin</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import image from '../../../resources/throne room.png'
</script>