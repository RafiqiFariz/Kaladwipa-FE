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
            <div class="w-96 self-stretch p-5 flex-col justify-between items-start inline-flex">
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
                        <div class="self-stretch text-gray-700 text-[12px] font-medium leading-none">Diposting
                            2h
                            lalu</div>
                    </div>
                    <div class="self-stretch justify-start items-start gap-2 inline-flex mt-4">
                        <div
                            class="grow shrink basis-0 h-[41px] px-5 py-2.5 bg-red-700 rounded-lg justify-center items-center gap-2 flex">
                            <div class="w-4 h-4 relative"></div>
                            <div class="text-white text-[14px] font-medium leading-tight">Suka</div>
                        </div>
                        <div
                            class="grow shrink basis-0 h-[41px] px-5 py-2.5 bg-gray-200 rounded-lg justify-center items-center gap-2 flex">
                            <div class="w-4 h-4 relative"></div>
                            <div class="text-black text-[14px] font-medium leading-tight">Simpan</div>
                        </div>
                        <div
                            class="grow shrink basis-0 h-[41px] px-5 py-2.5 bg-gray-200 rounded-lg justify-center items-center gap-2 flex">
                            <div class="w-4 h-4 relative"></div>
                            <div class="text-black text-[14px] font-medium leading-tight">Bagikan</div>
                        </div>
                    </div>
                </div>
                <div class="self-stretch justify-center items-center gap-8 inline-flex mt-5">
                    <div class="grow shrink basis-0 h-[21px] justify-start items-center gap-3 flex">
                        <div class="w-4 h-4 relative"></div>
                        <div class="text-black text-[14px] font-normal leading-tight">1k</div>
                    </div>
                    <div class="grow shrink basis-0 h-[21px] justify-start items-center gap-3 flex">
                        <div class="w-4 h-4 relative"></div>
                        <div class="text-black text-[14px] font-normal leading-tight">2,1k</div>
                    </div>
                    <div class="grow shrink basis-0 h-[21px] justify-start items-center gap-3 flex">
                        <div class="w-4 h-4 relative"></div>
                        <div class="text-black text-[14px] font-normal leading-tight">100</div>
                    </div>
                    <div class="grow shrink basis-0 h-[21px] justify-start items-center gap-3 flex">
                        <div class="w-4 h-4 relative"></div>
                        <div class="text-black text-[14px] font-normal leading-tight">50</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-8">
            <div
                class="h-full w-[74%] p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start inline-flex bg-neutral-100">
                <div class="self-stretch h-[423px] flex-col justify-start items-start gap-4 flex">
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
                    <div class="w-[460px] h-[301px] relative">
                        <div class="w-[460px] left-0 top-0 absolute justify-start items-start gap-2.5 inline-flex">
                            <img class="w-8 h-8 relative rounded-[100px]" src="https://via.placeholder.com/32x32" />
                            <div class="justify-start items-center gap-1.5 flex">
                                <div
                                    class="p-4 bg-gray-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-start gap-2.5 inline-flex">
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
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">2 Suka
                                        </div>
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">Balas</div>
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">1mg</div>
                                    </div>
                                </div>
                                <div class="w-5 h-5 relative"></div>
                            </div>
                        </div>
                        <div
                            class="w-[460px] left-[42px] top-[158px] absolute justify-start items-start gap-2.5 inline-flex">
                            <img class="w-8 h-8 relative rounded-[100px]" src="https://via.placeholder.com/32x32" />
                            <div class="grow shrink basis-0 h-[143px] justify-start items-center gap-1.5 flex">
                                <div
                                    class="grow shrink basis-0 p-4 bg-gray-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-start gap-2.5 inline-flex">
                                    <div class="flex-col justify-start items-start gap-1.5 flex">
                                        <div class="w-[92px] justify-start items-center gap-2 inline-flex">
                                            <div class="text-gray-900 text-[14px] font-semibold leading-tight">Rian
                                                Arimawan</div>
                                            <div
                                                class="px-2.5 py-0.5 bg-rose-100 rounded-md justify-center items-center flex">
                                                <div class="text-center text-red-800 text-[12px] font-medium leading-none">
                                                    Author</div>
                                            </div>
                                        </div>
                                        <div class="text-neutral-400 text-[12px] font-normal leading-none">
                                            Illustrator •
                                            Character Designer</div>
                                    </div>
                                    <div class="text-gray-900 text-[16px] font-normal leading-normal">Hahaha terima
                                        kasih!</div>
                                    <div class="justify-start items-center gap-2.5 inline-flex">
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">2 Suka
                                        </div>
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">Balas</div>
                                        <div class="text-gray-500 text-[14px] font-normal leading-tight">1mg</div>
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
                    class="w-full p-4 bg-white rounded-lg shadow border border-gray-200 justify-center items-start gap-2 inline-flex">
                    <div class="px-2.5 py-0.5 bg-rose-100 rounded-md justify-center items-center flex">
                        <div class="text-center text-gray-900 text-[12px] font-medium leading-none">Produk Digital
                        </div>
                    </div>
                    <div class="px-2.5 py-0.5 bg-rose-100 rounded-md justify-center items-center flex">
                        <div class="text-center text-gray-900 text-[12px] font-medium leading-none">Seni Digital
                        </div>
                    </div>
                    <div class="px-2.5 py-0.5 bg-rose-100 rounded-md justify-center items-center flex">
                        <div class="text-center text-gray-900 text-[12px] font-medium leading-none">Tradisional
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import image from '../../../resources/throne room.png'
</script>