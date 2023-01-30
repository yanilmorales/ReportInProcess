function openNav() {
    document.getElementById('mySidenav').style.width = "250px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}






var statusGroup = {
    passParent: 5,
    failParent: 0,
    fatalParent: 0,
    errorParent: 0,
    warningParent: 0,
    skipParent: 0,
    
    passChild: 28,
    failChild: 0,
    fatalChild: 0,
    errorChild: 0,
    warningChild: 0,
    skipChild: 0,
    infoChild: 0,
    
    passGrandChild: 73,
    failGrandChild: 0,
    fatalGrandChild: 0,
    errorGrandChild: 0,
    warningGrandChild: 0,
    skipGrandChild: 0,
    infoGrandChild: 0
};


/*!
* ExtentReports
* http://extentreports.relevantcodes.com/
* Version: 3.0.0
*
* Copyright 2016 Anshoo Arora
* Released under the BSD license 
*/

$(document).ready(function() {
$("span.suite-start-time").remove();
        $("#dashboard-view div.card-panel div.row div.s2").eq(3).find("div.panel-lead").text($("div.s4 div.card-panel table>tbody>tr").eq(7).find("td").eq(1).html());
$("#dashboard-view div.card-panel div.row div.s2").eq(4).find("div.panel-lead").text($("div.s4 div.card-panel table>tbody>tr").eq(8).find("td").eq(1).html());
        $("div.s4 div.card-panel table>tbody>tr").eq(8).hide();
        $("div.s4 div.card-panel table>tbody>tr").eq(7).hide();
        $("a.brand-logo").remove();
        $("#slide-out").before("<div class='brand-logo blue darken-3'><img src='data:image/jpg;base64,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'></div>");
        
});
    
$(document).ready(function() {
$('#category-collection > .category:first-child, #exception-collection > .exception:first-child, #test-collection > .test:first-child, #author-collection > .author:first-child').click();

$('#test-collection .test').dynamicTestSearch('#test-view #search-tests');
$('#category-collection .category').dynamicTestSearch('#category-view #search-tests');
$('#author-collection .author').dynamicTestSearch('#author-view #search-tests');
$('#exception-collection .exception').dynamicTestSearch('#exception-view #search-tests');  
});

/* -- [ sidenav - toggle views ] -- */
$('.side-nav a').click(function() {
$('.side-nav li').removeClass('active');

var t = $(this); 
$('.view').addClass('hide');
$('#' + t.attr('view')).removeClass('hide');
t.closest('li').addClass('active');
});

/* -- [ allow selecting item by pressing up & down keys ] -- */
$(window).keydown(function(e) {
var target = null, sibling = null;

if ($('input').is(':focus') || $('.featherlight').length > 0) {
} else {
(currentView === 0) && (target = $('li.test.displayed.active'), sibling = '.test.displayed');
(currentView === 1) && (target = $('li.category.displayed.active'), sibling = '.category.displayed');
(currentView === 3) && (target = $('li.author.displayed.active'), sibling = '.author.displayed');
(currentView === 2) && (target = $('li.exception.displayed.active'), sibling = '.exception.displayed');

function goToView(view) {
$('#slide-out a').filter(function() {
    return ($(this).attr('view') === view + '-view');
}).click();
}

if (!e.ctrlKey && !e.altKey && !e.shiftKey && e.which!==91 && e.which!==93 && e.which!==224) {
(e.which === 67) && goToView('category');
(e.which === 65) && goToView('author');
(e.which === 68) && goToView('dashboard');
(e.which === 88) && goToView('exception');
(e.which === 84) && goToView('test');

if (target !== null) {
    (e.which === 40) && target.nextAll(sibling).first().click();
    (e.which === 38) && target.prevAll(sibling).first().click();
}

function toggleByStatus(status) {
    $('#tests-toggle li').filter(function() {
        return ($(this).attr('status') == status)
    }).click();
}

if (currentView === 0) {
    (e.which === 27) && toggleByStatus('clear');
    (e.which === 69) && toggleByStatus('error');
    (e.which === 70) && toggleByStatus('fail');
    (e.which === 80) && toggleByStatus('pass');
    (e.which === 83) && toggleByStatus('skip');
    (e.which === 87) && toggleByStatus('warning');
}
}
}
});

/* -- [ theme-selector ] -- */
$('#theme-selector').click(function() {
var t = $(this),
body = $('body'); 

body.toggleClass('dark');

t.removeClass('white-text');
if (body.hasClass('dark')) t.addClass('white-text');
})

/* -- [ fixed-containers ] -- */
var currentView = 0,
ct = null,
chartHeight = 0;

var currentBrowserIE = detectIE();

$(function() {
ct = $('#test-view');

var timer = false;
timer = setInterval(function() {
_adjustSize();
}, 200);

$('.view').mousemove(function() {
_adjustSize();
});

if(currentBrowserIE != false) {
$('.subview-left').resizable({
    minWidth: 300,
    handles: "e"
});
} else {
$('.subview-left').css({'resize':'horizontal'})
}

_adjustSize();
});

/* -- Check if current page is test or category --*/
function configureView(n) {
currentView = n;

if (n === -1) {
$('body').removeClass('default');
return;
}

$('body').addClass('default');

window.scrollTo(0,0);

chartHeight = 0;

if (n == 0){
ct = $('#test-view');

setTimeout(function() {
    if ($('#test-view-charts').is(':visible'))
        chartHeight = 180;
}, 100);
}
else if (n == 1) ct = $('#category-view');
else if (n == 2) ct = $('#exception-view');
else if (n == 3) ct = $('#author-view');
else return;

var timer = setTimeout(function() {
_adjustSize();
clearTimeout(timer);
}, 50);
}

/* -- Check if current page is test or category --*/
function _adjustSize() {
var chartHeight = 0;
if (currentView === 0 && $('#test-view-charts').is(':visible')) chartHeight = 180;

ct.find('.view').css({'height':($(window).height() - 50 - chartHeight)+'px'});

ct.find('.subview-left, .subview-right').css({'height':($(window).height() - 92 - chartHeight)+'px'});
ct.find('.subview-left .view-summary, .subview-right .view-summary').css({'height':($(window).height() - 110 - chartHeight)+'px'});

if ($(window).width() < 992) {
ct.find('.subview-right').css({'width':Math.round($(window).width() - 115 - ct.find('.subview-left').width())+'px'});
}
else {
ct.find('.subview-right').css({'width':Math.round($(window).width() - 45 - 78 - ct.find('.subview-left').width())+'px'});
}

_restrictSize();
}

function _restrictSize(){
if(ct.find('.subview-left').width() > Math.round($(window).width() * 0.5)){
ct.find('.subview-left').css({'width': Math.round($(window).width() * 0.5) +'px'});
_adjustSize();
}
}

function detectIE() {
var ua = window.navigator.userAgent;

var msie = ua.indexOf('MSIE ');
if (msie > 0) {
// IE 10 or older => return version number
return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
}

var trident = ua.indexOf('Trident/');
if (trident > 0) {
// IE 11 => return version number
var rv = ua.indexOf('rv:');
return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
}

var edge = ua.indexOf('Edge/');
if (edge > 0) {
// Edge (IE 12+) => return version number
return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
}

// other browser
return false;
}
/* -- [ fixed-containers ] -- */

/* -- [ share charts between views ] -- */
function chartsView(view) {
if (view === 'dashboard') {
$('#dashboard-view h5').after($('#charts-row'));
} else {
$('#test-view-charts').append($('#charts-row'));
}
}

/* -- [ toggle test view charts ] -- */
$('#toggle-test-view-charts').click(function() {
$('#test-view-charts').toggleClass('hide');
$(this).children('a').toggleClass('pink-text');

setTimeout(function() {
configureView(0);
}, 50);
});

/* -- [ test ] -- */
$('.test').click(function() {
showCollectionElement('test', $(this));
$('.subview-right img').each(function() {
$(this).attr('src', $(this).attr('data-src'));
})
});

/* -- [ category ] -- */
$('.category').click(function() {
showCollectionElement('category', $(this));
});

/* -- [ author ] -- */
$('.author').click(function() {
showCollectionElement('author', $(this));
});

/* -- [ exception ] -- */
$('.exception').click(function() {
showCollectionElement('exception', $(this));
});

function showCollectionElement(viewName, t) {
$('.' + viewName).removeClass('active');

$('.view-summary > .test-name').removeClass('bdd');

var view = $('#' + viewName + '-view .subview-right .view-summary');

t.toggleClass('active');
view.children('.' + viewName + '-content').remove();
view.append(t.children('.' + viewName + '-content').clone().removeClass('hide'));
view.children('.' + viewName + '-name').html(t.children(':first').children('.' + viewName + '-name').html());

if (viewName === 'test' && t.hasClass('has-leaf')) {
$('.collapsible').collapsible();
}
};

/* -- [ link items to test-view ] -- */
$('.view-summary').click(function(evt) {
var t = $(evt.target);

function findTestById(id) {
var clicked = false;

function find(el) {
return $('.' + el).filter(function() {
    return ($(this).attr('test-id') == id)
});
}

function click(el) {
if (el.length === 0) return;

if (el.is('.node'))
    el = el.closest('.test');

$('.side-nav > li:first-child > a').click();
el.click();
clicked = true;
}

var t = find('test');
if (t.length === 0)
var t = find('node');

click(t);
}

if (t.is('.linked')) {
var id = t.attr('test-id');
findTestById(id);
}

if (t.is('span.category')) {
var name = t.text();

$('.test').removeClass('displayed').addClass('hide').filter(function() {
return ($(this).find('.category').text().indexOf(name) >= 0)
}).addClass('displayed').removeClass('hide');

$('.test.displayed').first().click();
}
});

/* -- [ tests-toggle ] -- */$('#tests-toggle li').click(function() {    var t = $(this),        status = t.attr('status'),        clear = t.attr('clear');        if (clear || status == 'clear')         $('.test').addClass('displayed').removeClass('hide');    else {        $('.test,.leaf').addClass('hide').removeClass('displayed');          $('.test:has(.leaf.' + status + '), .test.' + status).removeClass('hide').addClass('displayed');  $('.leaf.' + status).removeClass('hide').addClass('displayed');    }        $('.test.displayed').first().click();});

/* -- [ tests-toggle ] -- */
$('#tests-toggle li').click(function() {
var t = $(this),
status = t.attr('status'),
clear = t.attr('clear');

if (clear || status == 'clear') 
$('.test,.leaf').addClass('displayed').removeClass('hide');
else {
$('.test,.leaf').addClass('hide').removeClass('displayed');
$('.test:has(.leaf.' + status + '), .test.' + status).removeClass('hide').addClass('displayed');
$('.leaf.' + status).removeClass('hide').addClass('displayed');
}

$('.test.displayed').first().click();
});

/* -- [ category-toggle ] -- */
$('#category-toggle li a').click(function() { 
var t = $(this),
name = t.text(),
clear = t.attr('clear');

if (clear === 'true') 
$('.test').addClass('displayed').removeClass('hide');
else
$('.test').removeClass('displayed').addClass('hide').filter(function() {
return ($(this).find('.category').text().indexOf(name) >= 0)
}).addClass('displayed').removeClass('hide');

$('.test.displayed').first().click();
});

/* -- [ author-toggle ] -- */
$('#author-toggle li a').click(function() {
var t = $(this),
name = t.text(),
clear = t.attr('clear');

if (clear === 'true')
$('.test').addClass('displayed').removeClass('hide');
else
$('.test').removeClass('displayed').addClass('hide').filter(function() {
return ($(this).find('.author').text() === name)
}).addClass('displayed').removeClass('hide');

$('.test.displayed').first().click();
});

/* -- [ logs-toggle ] -- */
$('#step-filters span').click(function() {
var t = $(this),
status = t.attr('status');

if ($('#step-filters span').hasClass('border-bottom-highlight')) {
$('#test-view .subview-right tr.log').filter(function() {
return ($(this).attr('status') === status);
}).removeClass('hide');
} else {
$('#test-view .subview-right tr.log').addClass('hide').filter(function() {
return ($(this).attr('status') === status);
}).removeClass('hide');
}

t.addClass('border-bottom-highlight');

if (status === 'clear') {
$('#step-filters span').removeClass('border-bottom-highlight');
$('#test-view .subview-right tr.log').removeClass('hide');
}
});

/* -- [ toggle search-box ] -- */
$('.search-div').click(function() {
$(this).toggleClass('enabled').parent().find('.input-field').toggleClass('hide');
})

/* -- [ filter tests by text in test and categories view ] -- */
$.fn.dynamicTestSearch = function(id){ 
var target = $(this);
var searchBox = $(id);

searchBox.off('keyup').on('keyup', function() {
pattern = RegExp(searchBox.val(), 'gi');

if (searchBox.val() == '') {
target.removeClass('hide');
}
else {
target.addClass('hide').each(function() {
    var t = $(this);
    if (pattern.test(t.html())) {
        t.removeClass('hide');
    }
});
}
});

return target;
}

/* -- [ chart options ] -- */
var options = {
segmentShowStroke: false, 
percentageInnerCutout: 55, 
animationSteps: 1,
legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend right\'><% for (var i=0; i<segments.length; i++) {%><li><%if(segments[i].label && segments[i].value){%><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%=segments[i].label%><%}%></li><%}%></ul>'
};

/* -- [ draw legend for test and step charts ] -- */
function drawLegend(chart, id) {
var helpers = Chart.helpers,
legendHolder = document.getElementById(id);

legendHolder.innerHTML = chart.generateLegend();

helpers.each(legendHolder.firstChild.childNodes, function(legendNode, index) {
helpers.addEvent(legendNode, 'mouseover', function() {
var activeSegment = chart.segments[index];
activeSegment.save();
activeSegment.fillColor = activeSegment.highlightColor;
chart.showTooltip([activeSegment]);
activeSegment.restore();
});
});

Chart.helpers.addEvent(legendHolder.firstChild, 'mouseout', function() { chart.draw(); });
$('#' + id).after(legendHolder.firstChild);
}

/* -- [ parent chart ] -- */
function drawParentChart() {
var data = [
{ value: statusGroup.passParent, color: '#00af00', highlight: '#32bf32', label: 'Pass' },
{ value: statusGroup.failParent, color:'#F7464A', highlight: '#FF5A5E', label: 'Fail' },
{ value: statusGroup.fatalParent, color:'#8b0000', highlight: '#a23232', label: 'Fatal' },
{ value: statusGroup.errorParent, color:'#ff6347', highlight: '#ff826b', label: 'Error' },
{ value: statusGroup.warningParent, color: '#FDB45C', highlight: '#FFC870', label: 'Warning' },
{ value: statusGroup.skipParent, color: '#1e90ff', highlight: '#4aa6ff', label: 'Skip' }
];

var ctx = $('#parent-analysis').get(0).getContext('2d');
testChart = new Chart(ctx).Doughnut(data, options);
drawLegend(testChart, 'parent-analysis');
}; drawParentChart();

/* -- [ children chart ] -- */
(function drawChildChart() {
var data = [
{ value: statusGroup.passChild, color: '#00af00', highlight: '#32bf32', label: 'Pass' },
{ value: statusGroup.failChild, color:'#F7464A', highlight: '#FF5A5E', label: 'Fail' },
{ value: statusGroup.fatalChild, color:'#8b0000', highlight: '#a23232', label: 'Fatal' },
{ value: statusGroup.errorChild, color:'#ff6347', highlight: '#ff826b', label: 'Error' },
{ value: statusGroup.warningChild, color: '#FDB45C', highlight: '#FFC870', label: 'Warning' },
{ value: statusGroup.skipChild, color: '#1e90ff', highlight: '#4aa6ff', label: 'Skip' },
{ value: statusGroup.infoChild, color: '#46BFBD', highlight: '#5AD3D1', label: 'Info' }
];

if ($('#child-analysis').length > 0) {
var ctx = $('#child-analysis').get(0).getContext('2d');
stepChart = new Chart(ctx).Doughnut(data, options);
drawLegend(stepChart, 'child-analysis');
}
})();

/* -- [ grand-children chart ] -- */
(function drawChildChart() {
var data = [
{ value: statusGroup.passGrandChild, color: '#00af00', highlight: '#32bf32', label: 'Pass' },
{ value: statusGroup.failGrandChild, color:'#F7464A', highlight: '#FF5A5E', label: 'Fail' },
{ value: statusGroup.fatalGrandChild, color:'#8b0000', highlight: '#a23232', label: 'Fatal' },
{ value: statusGroup.errorGrandChild, color:'#ff6347', highlight: '#ff826b', label: 'Error' },
{ value: statusGroup.warningGrandChild, color: '#FDB45C', highlight: '#FFC870', label: 'Warning' },
{ value: statusGroup.skipGrandChild, color: '#1e90ff', highlight: '#4aa6ff', label: 'Skip' },
{ value: statusGroup.infoGrandChild, color: '#46BFBD', highlight: '#5AD3D1', label: 'Info' }
];

if ($('#grandchild-analysis').length > 0) {
var ctx = $('#grandchild-analysis').get(0).getContext('2d');
stepChart = new Chart(ctx).Doughnut(data, options);
drawLegend(stepChart, 'grandchild-analysis');
}
})();
