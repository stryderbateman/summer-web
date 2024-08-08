let container = document.querySelector('.container');
for (var i=0; i<=80; i++){
    let blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function circle(){
    let circleBtn = document.querySelector('.circleBtn');
    container.classList.toggle('circle');
}

function generate(){
    anime({
        targets : '.block',
        translateX : function(){
            return anime.random(-700,700);
        },
        translateY : function(){
            return anime.random(-500,500);
        },
        scale : function(){
            return anime.random(1,5);
        }
    })
}

generate()

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            document.querySelector('.centered-box').classList.add('fade-in');
            document.querySelector('.bottom-right-image').classList.add('fade-in');
            document.querySelector('.top-left-image').classList.add('fade-in');
        }, 3000);
    });
