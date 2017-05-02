<?php 
//This meta info should change for each page
$title = 'Title' ; 
$description = 'Description' ; 
$keywords = 'keywords, divided, by, commas' ; 
   include 'lib/head.php'; include 'lib/nav.php'; ?>

<section>
    <article>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <p>Choose the number of cards:</p>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button class="chose" value="4">4</button>
                </div>

                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button class="chose" value="6">6</button>
                </div>
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button class="chose" value="8">8</button>
                </div>
            </div>
            <div class="row cards--container">

            </div>
        </div>

    </article>
</section>

<?php include 'lib/footer.php'; include 'lib/scripts.php'; ?>
