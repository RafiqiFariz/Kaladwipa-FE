<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="m-0 h-full w-full p-8 md-8 space-y-4 md:m-auto md:px-48">
        <p class="text-center text-4xl font-medium text-black">Kompetisi Desain Interior</p>
        <p class="text-center text-lg font-normal text-black">Oleh Pandu - 30 Februari 2023</p>
        <div class="w-full">
          <div class="m-auto flex items-center justify-center gap-4 w-[80%]">
            <div
                class="inline-flex h-9 w-20 items-center justify-center gap-2 rounded-lg border border-gray-800 px-3 py-2">
              <div class="text-xs font-medium leading-none text-gray-800">Story</div>
              <div class="relative h-5 w-5">
              </div>
            </div>
            <div
                class="inline-flex h-9 w-20 items-center justify-center gap-2 rounded-lg bg-blue-800 px-3 py-2">
              <div class="text-xs font-medium leading-none text-white">Share</div>
              <div class="relative h-5 w-5"></div>
            </div>
            <div
                class="inline-flex h-9 w-20 items-center justify-center gap-2 rounded-lg border border-blue-700 px-3 py-2">
              <div class="text-xs font-medium leading-none text-blue-700">Tweet</div>
              <div class="relative h-5 w-5"></div>
            </div>
          </div>
        </div>
        <div class="h-5/6 w-full">
          <img class="h-full w-full rounded-lg object-cover" :src="image" alt="tes">
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
  </ion-page>
</template>

<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import image from '../../public/throne_room.png'
import DetailProduk from '@/components/commons/DetailProduct.vue';
</script>