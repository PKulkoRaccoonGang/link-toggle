'use strict'
const $links = document.querySelectorAll('.link-item'),
    $prev = document.getElementById('prev'),
    $next = document.getElementById('next');
let linkIndex = 1;

showLinks(linkIndex);

function showLinks(n) {
    if (n > $links.length) {
        linkIndex = 1;
    } else if (n < 1) {
        linkIndex = $links.length;
    }

    $links.forEach(item => item.style.color = 'green');
    $links[linkIndex - 1].style.color = 'red';
}

function plusLinks(n) {
    showLinks(linkIndex += n);
}

$prev.addEventListener('click', () => {
    plusLinks(-1);
})

$next.addEventListener('click', () => {
    plusLinks(1);
})


// const $links = $('.scorm-structure-navigation-body-link'),
//   $prev = $('#prev'),
//   $next = $('#next');
// let linkIndex = 1;

// showLinks(linkIndex);

// function showLinks(n) {
//     if (n > $links.length) {
//     linkIndex = 1;
//     }

//     if (n < 1) {
//         linkIndex = $links.length;
//     }

//     // $links.each(item => item.removeClass('active'));
//     $links[linkIndex - 1].addClass('active');
// }


// function plusLinks(n) {
//     showLinks(linkIndex += n);
// }

// $prev.on('click', () => {
//     plusLinks(-1);
// })

// $next.on('click', () => {
//     plusLinks(1);
// })
