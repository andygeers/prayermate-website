<!DOCTYPE html>
<html>
<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the wordpress construct of pages
 * and that other 'pages' on your wordpress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?>

<head>
    <title>PrayerMate Christian prayer app</title>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=yes width=device-width">
    <meta property="og:image" content="http://www.geero.net/wp-content/uploads/PrayerMateSplash.jpg"/>
    <link rel="stylesheet" href="/wp-content/themes/platform/prayermate_style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="/wp-content/themes/platform/assets/js/script.min.js"></script>
    <script type="text/javascript" src="//use.typekit.net/nal6tef.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <script type="text/javascript">
        $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "slide",
                directionNav: false
            });
            $(".flexslider2").flexslider({
                animation: "slide",
                itemWidth: 202,
                directionNav: false,
                controlNav: false
            });
        });
    </script>
    <!--[if lt IE 9]>
        <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>

<body>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

    <?php the_content(); ?>

<?php endwhile; ?>

    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3521617-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
</body>
</html>
