function collaterals()
{
    var about = document.getElementById('about');
    var collaterals = document.getElementById('collaterals');
    var graphicdesigns = document.getElementById('graphic-designs');
    var photography = document.getElementById('photography');
    var videos = document.getElementById('videos');

    collaterals.style.display = 'grid';

    about.style.display = 'none';
    graphicdesigns.style.display = 'none';
    photography.style.display = 'none';
    videos.style.display = 'none';
}

function graphicdesigns()
{
    var about = document.getElementById('about');
    var collaterals = document.getElementById('collaterals');
    var graphicdesigns = document.getElementById('graphic-designs');
    var photography = document.getElementById('photography');
    var videos = document.getElementById('videos');

    graphicdesigns.style.display = 'block';

    about.style.display = 'none';
    collaterals.style.display = 'none';
    photography.style.display = 'none';
    videos.style.display = 'none';
}