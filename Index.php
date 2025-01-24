<!DOCTYPE html>
<html lang="en">

<?php
isset($_SESSION) ?: session_start();
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "includes/index/links-index.inc.php" ?>
    <title>Nataro Ajaouin</title>
</head>

<body class="bg-[#314326]">
    <!-- navbar -->
    <header class="w-[6%] z-10 sticky top-0" id="header">
        <?php include "includes/navbar.inc.php" ?>
    </header>

    <main class="flex flex-col justify-around" id="main">

        <!-- home -->
        <section id="home">
            <div class="absolute top-0 parallax w-[94vw]"></div>
            <img src="img/home/avatar.svg" alt="avatar" class="absolute top-[5%] left-[43%]">
            <img src="img/home/right.svg" alt="right_background" class="absolute top-[16.7%] w-[94vw]">
            <img src="img/home/left.svg" alt="left_background" class="absolute top-[20.3%] w-[94vw]">
            <img src="img/home/arrow.svg" alt="arrow" class="absolute top-[56.3%] left-[52.5%]">
            <div class="flex flex-col justify-center items-center">
                <div class="text-cont flex flex-col justify-center items-center max-w-[80%]">
                    <h1 class="ubuntu-regular titles">Welkom op mijn portfolio!</h1>
                    <div class="flex lato-regular subtext ">
                        <div class="h-[75vh] align-middle items-center content-center text-white">
                            <p>
                                Ik ben Nataro Ajaouin, een hopelijk toekomstig software developer die sinds 2018 actief
                                werkt aan zijn skills in de
                                tech-industrie. Mijn interesse in programmeren begon op jonge leeftijd toen ik
                                gefascineerd
                                raakte door een simpel CMD-programma dat het Matrix-patroon nabootste. Sindsdien ben ik
                                blijven leren en groeien als developer.
                            </p>
                            <br>
                            <p>
                                Ik heb ervaring met het ontwikkelen van games in Unity en het bouwen van websites met
                                PHP,
                                JavaScript, SQL, CSS en HTML. Mijn projecten variëren van interactieve webapplicaties
                                tot
                                creatieve games.
                            </p>
                            <br>
                            <p>
                                Op deze pagina kun je enkele van mijn werk zien. Bedankt voor je bezoek!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- mywork -->
        <section id="mywork" class="h-[100vh]">
            <div class="relative flex-col justify-center items-center flex">
                <div class="titles ubuntu-regular">
                    <h1> Mijn werk </h1>
                </div>

                <div class="modal dark:bg-gray-800 dark:border-gray-700 dark:text-white" id="modalTot">
                    <div class="modal-header">
                        <b class="modal-title" id="modalTitle"></b>
                        <span class="modal-button" id="modalClose">
                            X
                        </span>
                    </div>
                    <div class="modal-img" id="modalImage">
                        <img class="max-h-[30vh] max-w-[100%]" src="" alt="">
                    </div>
                    <div class="modal-text" id="modalText">
                        <p></p>
                    </div>
                </div>

                <div class="flex justify-center items-center p-5 gap-10 h-[80vh]" id="cardContainer">
                    <button onclick="nextCard()" class="size-32"> <img src="img/mywork/left_arrow.svg" alt="left_arrow">
                    </button>

                    <div class="block h-[40vh] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        id="leftCardEnt">
                        <img class="w-[30vw] h-[20Vh] rounded-lg" src="" alt="" id="leftImage">
                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
                            id="leftTitle">
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400" id="leftSubtext"></p>
                    </div>

                    <div class="block h-[40vh] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        id="centerCardEnt">
                        <img class="w-[30vw] rounded-lg h-[20Vh]" src="" alt="" id="centerImage">
                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
                            id="centerTitle"></h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400" id="centerSubtext"></p>
                    </div>

                    <div class="block h-[40vh] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        id="rightCardEnt">
                        <img class="w-[30vw] rounded-lg h-[20Vh]" src="" alt="" id="rightImage">
                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
                            id="rightTitle"></h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400" id="rightSubtext"></p>
                    </div>

                    <button onclick="prevCard()" class="size-32"> <img src="img/mywork/right_arrow.svg"
                            alt="right_arrow"> </button>
                </div>
            </div>

            <script src="js/mywork/Card.js"></script>
            <script src="js/mywork/Carrousel.js"></script>
            <script src="js/modal/modal.js"></script>
            <script src="js/mywork/myWork.js"></script>
        </section>

        <!-- experiance -->
        <section id="experiance">
            <div class="relative flex-col justify-center items-center flex">
                <div class="titles ubuntu-regular">
                    <h1>Experiences</h1>
                </div>

                <div class="flex">
                    <div class="flex flex-col justify-center items-center p-5 gap-10">
                        <div
                            class="block flex flex-col items-center h-[40vh] max-w-sm p-6 size-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="size-24" src="img/experience/cs.png" alt="c#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                C#
                            </h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400 dark:text-white text-white">

                            <ul class="list dark:text-white text-white ">
                                <li>Themed-2048</li>
                            </ul>
                            </p>
                        </div>

                        <div
                            class="block flex flex-col items-center h-[40vh] max-w-sm p-6 size-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="size-24" src="img/experience/css.png" alt="css">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                CSS
                            </h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list dark:text-white text-white ">
                                <li>PinkGoose</li>
                                <li>portfolio</li>
                                <li>Cafetaria Kribbe</li>
                            </ul>
                            </p>
                        </div>

                        <div
                            class="block flex flex-col items-center h-[40vh] max-w-sm p-6 size-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="size-24" src="img/experience/html.png" alt="html">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                HTML
                            </h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list dark:text-white text-white ">
                                <li>PinkGoose</li>
                                <li>portfolio</li>
                                <li>Cafetaria Kribbe</li>
                            </ul>
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center p-5 gap-10">
                        <div
                            class="block flex flex-col items-center h-[40vh] max-w-sm p-6 size-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="size-24" src="img/experience/java.png" alt="java">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Java
                            </h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list dark:text-white text-white ">
                                <li>Mastermind</li>
                                <li>Mastermind2.0</li>
                            </ul>
                            </p>
                        </div>

                        <div
                            class="block flex flex-col items-center h-[40vh] max-w-sm p-6 size-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="size-24" src="img/experience/javascript.png" alt="javascript">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                JavaScript
                            </h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list dark:text-white text-white ">
                                <li>portfolio</li>
                                <li>Cafetaria Kribbe</li>
                            </ul>
                            </p>
                        </div>

                        <div
                            class="block flex flex-col items-center h-[40vh] max-w-sm p-6 size-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img class="size-24" src="img/experience/php.png" alt="php">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                PHP
                            </h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                            <ul class="list dark:text-white text-white ">
                                <li>portfolio</li>
                                <li>Cafetaria Kribbe</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact  -->
        <section id="contact" class="h-[100vh]">
            <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
                class="flex-col justify-center items-center flex">
                <div class="titles ubuntu-regular">
                    <h1> Contact </h1>
                </div>
                <div class="p-5 w-full max-w-2xl">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div
                            class="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h1 class="text-white">Laat een bricht achter</h1>
                        </div>
                        <div class="p-4 md:p-5 space-y-4">
                            <form class="max-w-md mx-auto" method="POST" action="php/add-to-cont.php">
                                <div class="relative z-0 w-full mb-5 group">
                                    <input type="email" name="e_mail" id="floating_email"
                                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" " required>
                                    <label for="floating_email"
                                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                        adres</label>
                                </div>
                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="text" name="f_name" id="floating_first_name"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required>
                                        <label for="floating_first_name"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Voor naam</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="text" name="l_name" id="floating_last_name"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" " required>
                                        <label for="floating_last_name"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Achter
                                            naam</label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="relative w-[80%] z-0 w-full mb-5 group">
                                        <label for="message"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jou bericht</label>
                                        <textarea name="message" id="message" rows="4"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder=""></textarea>
                                    </div>
                                </div>
                                <button type="submit"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verzend</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script src="js/scrolling/scroll.js"></script>
    </main>
</body>

</html>