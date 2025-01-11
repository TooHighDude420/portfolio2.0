<section>
    <div class="relative flex-col justify-center items-center flex">
        <div class="titles ubuntu-regular">
            <h1> Mijn werk </h1>
        </div>

        <div class="modal" id="modalTot">
            <div class="modal-header">
                <p id="modalTitle"> Mastermind </p>
                <span id="modalClose"> X </span>
            </div>
            <div class="modal-img" id="modalImage">
                <img src="https://placehold.co/650x200" alt="placeholder">
            </div>
            <div class="modal-text" id="modalText">
                <p>
                    Hier komt tekst te staan over dit specefieke onderwerp
                </p>
            </div>
            <div class="modal-download" id="modalDownload">
                <a href="./img/home/left.svg" download="test_img_file">Download</a>
            </div>
        </div>

        <div class="flex justify-center items-center p-5 gap-10" id="cardContainer">
            <button onclick="nextCard()">
                < </button>

                    <div
                        class="block h-[40vh] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" id="leftCardEnt">
                        <img class="w-[30vw] h-[20Vh]" src="" alt="" id="leftImage">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" id="leftTitle">
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400" id="leftSubtext"></p>
                    </div>

                    <div
                        class="block h-[40vh] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" id="centerCardEnt">
                        <img class="w-[30vw] h-[20Vh]" src="" alt="" id="centerImage">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            id="centerTitle"></h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400" id="centerSubtext"></p>
                    </div>

                    <div
                        class="block h-[40vh] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" id="rightCardEnt">
                        <img class="w-[30vw] h-[20Vh]" src="" alt="" id="rightImage">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            id="rightTitle"></h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400" id="rightSubtext"></p>
                    </div>

                    <button onclick="prevCard()"> > </button>
        </div>
    </div>
</section>


<script src="js/mywork/Card.js"></script>
<script src="js/mywork/Carrousel.js"></script>
<script src="js/modal/modal.js"></script>
<script src="js/mywork/myWork.js"></script>
