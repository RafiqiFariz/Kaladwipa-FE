<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <div class="w-full h-full p-8 px-48 space-y-4 m-auto">
                <p class="text-center text-black text-4xl font-medium">Kompetisi Desain Interior</p>
                <p class="text-center text-black text-lg font-normal">Oleh Pandu - 30 Februari 2023</p>
                <div class="w-full">
                    <div class="w-[80%] m-auto flex justify-center items-center gap-4">
                        <div
                            class="w-20 h-9 px-3 py-2 rounded-lg border border-gray-800 justify-center items-center gap-2 inline-flex">
                            <div class="text-gray-800 text-xs font-medium leading-none">Story</div>
                            <div class="w-5 h-5 relative">
                            </div>
                        </div>
                        <div
                            class="w-20 h-9 px-3 py-2 bg-blue-800 rounded-lg justify-center items-center gap-2 inline-flex">
                            <div class="text-white text-xs font-medium leading-none">Share</div>
                            <div class="w-5 h-5 relative"></div>
                        </div>
                        <div
                            class="w-20 h-9 px-3 py-2 rounded-lg border border-blue-700 justify-center items-center gap-2 inline-flex">
                            <div class="text-blue-700 text-xs font-medium leading-none">Tweet</div>
                            <div class="w-5 h-5 relative"></div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-5/6">
                    <img class="h-full object-cover w-full rounded-lg" :src="image" alt="tes">
                </div>
                <div class="w-full text-justify">
                    <span>
                        Lomba Desain Interior 3D merupakan kompetisi yang melibatkan para desainer interior dalam
                        menciptakan visualisasi yang menarik dan realistis menggunakan perangkat lunak seperti SketchUp dan
                        Blender. Lomba ini bertujuan untuk mendorong kreativitas, keahlian teknis, dan pemahaman konseptual
                        para peserta dalam merancang ruang interior secara visual.

                        SketchUp dan Blender adalah dua perangkat lunak yang sangat populer dalam industri desain. SketchUp
                        adalah perangkat lunak desain 3D yang intuitif dan mudah digunakan, sementara Blender adalah
                        perangkat lunak yang lebih canggih dan serbaguna dalam membuat animasi dan efek visual.

                        Peserta lomba akan diberikan tantangan untuk merancang interior ruangan dengan menggunakan perangkat
                        lunak ini. Mereka harus menciptakan konsep yang unik, menggambarkan tata letak ruangan, memilih
                        furnitur yang sesuai, memainkan pencahayaan, dan menambahkan detail lainnya seperti warna, tekstur,
                        dan material.

                        Pada tahap awal lomba, peserta diharapkan membuat sketsa konsep mereka menggunakan SketchUp. Dalam
                        tahap ini, mereka dapat membangun kerangka ruangan, menambahkan dinding, langit-langit, dan lantai,
                        serta menentukan posisi pintu dan jendela. SketchUp memungkinkan peserta untuk dengan cepat
                        memvisualisasikan ide-ide mereka dalam bentuk 3D yang sederhana namun mudah dipahami.
                        Setelah sketsa konsep selesai, peserta kemudian melanjutkan ke tahap selanjutnya dengan menggunakan
                        Blender. Dalam tahap ini, mereka dapat menyempurnakan desain ruang interior mereka dengan
                        menambahkan detail dan efek visual yang lebih kompleks. Peserta dapat memilih furnitur dan dekorasi
                        yang tepat, menyesuaikan tekstur dan material, serta menciptakan pencahayaan yang realistis. Blender
                        menawarkan berbagai alat dan fitur yang canggih untuk menghasilkan visualisasi interior yang
                        mendalam dan menarik.
                        
                        Penilaian dalam lomba ini dilakukan berdasarkan kriteria seperti kreativitas, estetika, penataan
                        ruang yang baik, penggunaan warna yang tepat, keakuratan proporsi, dan kemampuan teknis dalam
                        menggunakan perangkat lunak. Juri akan mengevaluasi visualisasi yang dihasilkan oleh peserta dan
                        memilih pemenang berdasarkan kualitas desain dan eksekusi yang terbaik.
                        Lomba Desain Interior 3D menggunakan SketchUp dan Blender untuk Visualisasi memberikan kesempatan
                        bagi para desainer interior untuk menunjukkan bakat mereka dalam menciptakan visualisasi ruang
                        interior yang menarik. Lomba ini tidak hanya memberikan pengalaman berharga bagi peserta, tetapi
                        juga mendorong inovasi dan perkembangan dalam industri desain interior secara keseluruhan.
                </span>
            </div>
        </div>
    </ion-content>
</ion-page></template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import image from '../../resources/throne_room.png'
import DetailProduk from '@/components/common/DetailProduk.vue';
</script>