var par = document.querySelectorAll(".tabs a");
for(var i = 0; i<par.length;i++){
    par[i].addEventListener('click',function (e) {
        var li = this.parentNode;
        var div = this.parentNode.parentNode.parentNode.parentNode;
        div.querySelector('.active.tab').classList.remove('active');
        li.classList.add('active');
        div.querySelector('.onglet.active').classList.remove('active');
        var active = this.getAttribute('href');
        div.querySelector(active).classList.add('active');

    })
}
