function changeText() {
    $('p').text('Ipsum loren');
    $('#TASK1').addClass('highlight');
    $('li').addClass('list-item');
}
function changeStyles() {
    $('.highlight').css('color', 'blue');
    $('.list-item').css('background-color', 'lightgray');
    $('.highlight').fadeOut(2000);
}
function changeContent() {
    $('#TASK1 p:last-child').text('Ipsum loren');
}
function removeElements() {
    $('.list-item').remove();
}
$(document).ready(function () {
    $('#btnChangeText').click(changeText);
    $('#btnChangeStyles').click(changeStyles);
    $('#btnChangeContent').click(changeContent);
    $('#btnRemoveElements').click(removeElements);
});
