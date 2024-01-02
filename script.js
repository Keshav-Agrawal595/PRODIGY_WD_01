window.addEventListener('scroll', function() {
var navbar = document.getElementById('navbar');
if (window.scrollY > 50) {
    navbar.style.backgroundColor = "green";
} else {
    navbar.style.backgroundColor = '#f4f4f4';
}
});

var menuItems = document.querySelectorAll('#navbar a');
menuItems.forEach(function(item) {
item.addEventListener('mouseover', function() {
    this.style.color = '#FF5733';
});
item.addEventListener('mouseout', function() {
    this.style.color = '#333';
});
});
