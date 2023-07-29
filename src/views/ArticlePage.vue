<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="m-0 h-full w-full p-8 md-8 space-y-4 md:m-auto md:px-48">
        <p class="text-center text-4xl font-medium text-black">Kompetisi Desain Interior</p>
        <p class="text-center text-lg font-normal text-black">Oleh Pandu - 30 Februari 2023</p>
        <div class="w-full">
          <div class="m-auto flex items-center justify-center gap-4 w-[80%]">
            <button type="button"
                    class="mr-2 mb-2 inline-flex items-center rounded-lg border border-solid border-red-700 px-4 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:ring-red-800">
              <span>Tweet</span>
              <svg class="ml-2 fill-current w-3.5 h-3.5" role="img" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path
                    d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/>
              </svg>
            </button>
            <button type="button"
                    class="mr-2 mb-2 inline-flex items-center rounded-lg bg-red-700 px-5 text-sm font-medium text-white py-2.5 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <span>Share</span>
              <svg class="ml-2 fill-current w-3.5 h-3.5" role="img" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title>
                <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button type="button"
                    class="mr-2 mb-2 inline-flex items-center rounded-lg border border-solid border-gray-800 px-5 text-center text-sm font-medium text-gray-900 py-2.5 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800">
              <span>Story</span>
              <svg class="ml-2 fill-current w-3.5 h-3.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="h-5/6 w-full">
          <img class="h-full w-full rounded-lg object-cover" :src="image" alt="tes">
        </div>
        <div class="w-full text-justify">
          <p>
            Lomba Desain Interior 3D merupakan kompetisi yang melibatkan para desainer interior dalam
            menciptakan visualisasi yang menarik dan realistis menggunakan perangkat lunak seperti SketchUp dan
            Blender. Lomba ini bertujuan untuk mendorong kreativitas, keahlian teknis, dan pemahaman konseptual
            para peserta dalam merancang ruang interior secara visual.
          </p>

          <p>
            SketchUp dan Blender adalah dua perangkat lunak yang sangat populer dalam industri desain. SketchUp
            adalah perangkat lunak desain 3D yang intuitif dan mudah digunakan, sementara Blender adalah
            perangkat lunak yang lebih canggih dan serbaguna dalam membuat animasi dan efek visual.
          </p>

          <p>
            Peserta lomba akan diberikan tantangan untuk merancang interior ruangan dengan menggunakan perangkat
            lunak ini. Mereka harus menciptakan konsep yang unik, menggambarkan tata letak ruangan, memilih
            furnitur yang sesuai, memainkan pencahayaan, dan menambahkan detail lainnya seperti warna, tekstur,
            dan material.
          </p>

          <p>
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
          </p>

          <p>
            Penilaian dalam lomba ini dilakukan berdasarkan kriteria seperti kreativitas, estetika, penataan
            ruang yang baik, penggunaan warna yang tepat, keakuratan proporsi, dan kemampuan teknis dalam
            menggunakan perangkat lunak. Juri akan mengevaluasi visualisasi yang dihasilkan oleh peserta dan
            memilih pemenang berdasarkan kualitas desain dan eksekusi yang terbaik.
            Lomba Desain Interior 3D menggunakan SketchUp dan Blender untuk Visualisasi memberikan kesempatan
            bagi para desainer interior untuk menunjukkan bakat mereka dalam menciptakan visualisasi ruang
            interior yang menarik. Lomba ini tidak hanya memberikan pengalaman berharga bagi peserta, tetapi
            juga mendorong inovasi dan perkembangan dalam industri desain interior secara keseluruhan.
          </p>
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