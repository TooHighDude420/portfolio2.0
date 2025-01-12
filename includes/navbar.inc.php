<?php
$pages = ['home', 'mywork', 'experiance', 'contact'];
?>

<nav class="bg-[#1F2A21] border-gray-200 dark:bg-[#1F2A21]-900 h-[100vh]">
    <div class="flex-col flex-wrap flex items-center p-2 h-[100vh] justify-between">
        <?php

        foreach ($pages as $page){
            print "<a href='#$page' class='text-sm text-gray-500 dark:text-blue-500 hover:underline'>";
            print "<button type='button' class='p-2 hover:bg-[#767676] rounded-lg border-4 border-[#1F2A21] hover:border-black hover:bg-[#767676] dark:border-[#1F2A21] dark:hover:bg-[#767676] dark:hover:border-black dark:hover:bg-[#767676]'>";
            print "<img src='img/navbar/$page.svg' class='size-15'>";
            print "</button>";
            print "</a>";
        }
    
        ?>
        <a href="https://github.com/TooHighDude420" class="text-sm text-gray-500 dark:text-blue-500 hover:underline">
            <button type="button" class="size-15">
                <img src="img/navbar/discord.svg">
            </button>
        </a>
    </div>
</nav>